import { NextResponse } from 'next/server'
import { db, bookings } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Server-side validation
    const name = typeof body.name === 'string' ? body.name.trim() : ''
    const email = typeof body.email === 'string' ? body.email.trim() : ''
    const message = typeof body.message === 'string' ? body.message.trim() : ''
    const tourId = body.tourId ? String(body.tourId) : null

    if (!name || !email) {
      return new NextResponse(JSON.stringify({ ok: false, error: 'Name and email are required' }), { status: 400 })
    }

    // basic email format check
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return new NextResponse(JSON.stringify({ ok: false, error: 'Invalid email address' }), { status: 400 })
    }

    const insert = await db
      .insert(bookings)
      .values({
        name,
        email,
        message,
        tourId,
      })
      .returning()

    const inserted = Array.isArray(insert) && insert.length > 0 ? insert[0] : null

    return NextResponse.json({ ok: true, id: inserted ? inserted.id : null })
  } catch (err) {
    console.error('booking API error', err)
    return new NextResponse(JSON.stringify({ ok: false }), { status: 500 })
  }
}
