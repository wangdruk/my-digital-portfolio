import Link from "next/link"
import Image from "next/image"
import { Tour } from "@/lib/tours"
import { Button } from "@/components/ui/button"

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <div className="rounded-lg border bg-background p-4 shadow-sm">
      <div className="overflow-hidden rounded-md">
        <Image
          src={tour.image || "/placeholder.svg?width=800&height=500&query=mountain"}
          width={800}
          height={500}
          alt={tour.title}
          className="w-full h-44 object-cover"
        />
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold">{tour.title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{tour.short}</p>
        <div className="flex items-center justify-between mt-3">
          <div className="text-sm text-muted-foreground">{tour.duration} • {tour.price}</div>
          <Link href={`/tours/${tour.id}`} className="ml-3">
            <Button size="sm">View</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
