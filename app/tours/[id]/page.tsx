import Image from "next/image"
import Link from "next/link"
import { tours } from "@/lib/tours"
import { Button } from "@/components/ui/button"

export default function TourDetail({ params }: { params: { id: string } }) {
  const tour = tours.find((t) => t.id === params.id)
  if (!tour) {
    return (
      <div className="container py-12">
        <h2 className="text-xl font-semibold">Tour not found</h2>
        <p className="text-muted-foreground mt-2">Please return to the tours list.</p>
        <Link href="/tours">
          <Button variant="outline" className="mt-4">Back to Tours</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="overflow-hidden rounded-md">
          <Image src={tour.image || '/placeholder.svg?width=1200&height=600'} width={1200} height={600} alt={tour.title} className="w-full h-64 object-cover rounded-md" />
        </div>
        <h1 className="text-2xl font-bold mt-6">{tour.title}</h1>
        <p className="text-muted-foreground mt-2">{tour.short}</p>
        <div className="mt-4">
          <h3 className="font-semibold">Highlights</h3>
          <ul className="list-disc ml-5 mt-2 text-sm text-muted-foreground">
            {tour.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4 mt-6">
          <div className="text-lg font-semibold">{tour.price}</div>
          <Link href="/contact">
            <Button>Book This Tour</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
