import Link from "next/link"
import Image from "next/image"
import { tours } from "@/lib/tours"
import { TourCard } from "@/components/tour-card"

export default function Home() {
  const featured = tours.slice(0, 3)

  return (
    <div className="flex flex-col">
      <section className="w-full py-20 bg-[url('/hero-bhutan.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Bhutan Mebar</h1>
          <p className="mt-4 max-w-2xl mx-auto">Authentic Bhutan travel — curated tours, local guides, and sustainable experiences.</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Link href="/tours">
              <button className="rounded-md bg-primary px-4 py-2 text-white">Explore Tours</button>
            </Link>
            <Link href="/contact">
              <button className="rounded-md border px-4 py-2">Contact Us</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold">Featured Tours</h2>
          <p className="text-muted-foreground mt-2">Hand-picked itineraries that showcase Bhutan's culture and nature.</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {featured.map((t) => (
            <TourCard key={t.id} tour={t} />
          ))}
        </div>
      </section>

      <section className="w-full py-12 bg-muted/10">
        <div className="container max-w-4xl">
          <h3 className="text-2xl font-semibold">Why travel with Bhutan Mebar?</h3>
          <ul className="mt-4 grid gap-2">
            <li className="text-muted-foreground">Local-guided tours crafted for cultural depth and comfort.</li>
            <li className="text-muted-foreground">Sustainable travel practices that support local communities.</li>
            <li className="text-muted-foreground">Transparent pricing and flexible booking policies.</li>
          </ul>
          <div className="mt-6">
            <Link href="/about">
              <button className="rounded-md border px-4 py-2">Learn more about us</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
