import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const BOOKINGS_FILE = path.join(process.cwd(), 'data', 'bookings.json')

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const record = {
      id: Date.now(),
      name: body.name || '',
      email: body.email || '',
      message: body.message || '',
      tourId: body.tourId || null,
      createdAt: new Date().toISOString(),
    }

    let data = []
    try {
      const existing = await fs.readFile(BOOKINGS_FILE, 'utf8')
      data = JSON.parse(existing)
      if (!Array.isArray(data)) data = []
    } catch (err) {
      // file might not exist yet
      data = []
    }

    data.push(record)
    await fs.mkdir(path.dirname(BOOKINGS_FILE), { recursive: true })
    await fs.writeFile(BOOKINGS_FILE, JSON.stringify(data, null, 2), 'utf8')

    return NextResponse.json({ ok: true, id: record.id })
  } catch (err) {
    console.error('booking API error', err)
    return new NextResponse(JSON.stringify({ ok: false }), { status: 500 })
  }
}
