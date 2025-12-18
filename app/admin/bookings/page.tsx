import { db, bookings, users } from '@/lib/db'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { eq } from 'drizzle-orm'

type BookingRow = typeof bookings.$inferSelect

export default async function BookingsAdmin() {
  const { userId } = auth()
  if (!userId) {
    return redirect('/sign-in')
  }

  // Check DB for user's role
  let isAdmin = false
  try {
    const rows = await db.select().from(users).where(eq(users.clerkId, userId))
    if (rows && rows.length > 0) {
      const u = rows[0]
      isAdmin = u.role === 'admin'
    }
  } catch (err) {
    console.error('Failed to lookup user role', err)
  }

  if (!isAdmin) {
    return (
      <div className="container py-12">
        <h1 className="text-2xl font-bold">Access denied</h1>
        <p className="text-muted-foreground mt-4">You do not have permission to view this page.</p>
      </div>
    )
  }

  let rows: BookingRow[] = []
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
          {rows.map((b) => (
            <div key={b.id} className="rounded-md border p-4">
              <div className="flex justify-between">
                <div>
                  <div className="font-semibold">{b.name}</div>
                  <div className="text-sm text-muted-foreground">{b.email}</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {b.createdAt ? new Date(b.createdAt).toLocaleString() : '—'}
                </div>
              </div>
              <div className="mt-2 text-sm">{b.message}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
