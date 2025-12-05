import fs from 'fs'
import path from 'path'

export default function BookingsAdmin() {
  const file = path.join(process.cwd(), 'data', 'bookings.json')
  let bookings = []
  try {
    const raw = fs.readFileSync(file, 'utf8')
    bookings = JSON.parse(raw)
  } catch (err) {
    bookings = []
  }

  return (
    <div className="container py-12">
      <h1 className="text-2xl font-bold">Bookings</h1>
      {bookings.length === 0 ? (
        <p className="text-muted-foreground mt-4">No bookings yet.</p>
      ) : (
        <div className="mt-6 grid gap-4">
          {bookings.map((b: any) => (
            <div key={b.id} className="rounded-md border p-4">
              <div className="flex justify-between">
                <div>
                  <div className="font-semibold">{b.name}</div>
                  <div className="text-sm text-muted-foreground">{b.email}</div>
                </div>
                <div className="text-sm text-muted-foreground">{new Date(b.createdAt).toLocaleString()}</div>
              </div>
              <div className="mt-2 text-sm">{b.message}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
