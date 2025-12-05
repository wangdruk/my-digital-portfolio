import { NextResponse } from 'next/server'
import { db, bookings } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const insert = await db
      .insert(bookings)
      .values({
        name: body.name || '',
        email: body.email || '',
        message: body.message || '',
        tourId: body.tourId || null,
      })
      .returning();

    const inserted = Array.isArray(insert) && insert.length > 0 ? insert[0] : null

    return NextResponse.json({ ok: true, id: inserted ? inserted.id : null })
  } catch (err) {
    console.error('booking API error', err)
    return new NextResponse(JSON.stringify({ ok: false }), { status: 500 })
  }
}
