import { tours } from "@/lib/tours"
import { TourCard } from "@/components/tour-card"

export default function ToursPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl font-bold">Discover Bhutan</h1>
        <p className="text-muted-foreground mt-2">Curated tours and experiences tailored to your interests.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {tours.map((t) => (
          <TourCard key={t.id} tour={t} />
        ))}
      </div>
    </div>
  )
}
