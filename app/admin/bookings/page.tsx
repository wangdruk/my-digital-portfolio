import { db, bookings } from '@/lib/db'

export default async function BookingsAdmin() {
  let rows: any[] = []
  try {
    rows = await db.select().from(bookings).orderBy(bookings.createdAt, 'desc')
  } catch (err) {
    console.error('Failed to load bookings', err)
    rows = []
  }

  return (
    <div className="container py-12">
      <h1 className="text-2xl font-bold">Bookings</h1>
      {rows.length === 0 ? (
        <p className="text-muted-foreground mt-4">No bookings yet.</p>
      ) : (
        <div className="mt-6 grid gap-4">
          {rows.map((b: any) => (
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
