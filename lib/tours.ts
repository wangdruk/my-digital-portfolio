export type Tour = {
  id: string
  title: string
  duration: string
  price: string
  short: string
  image?: string
  highlights: string[]
}

export const tours: Tour[] = [
  {
    id: "bhutan-classic-7d",
    title: "Bhutan Classic — 7 Days",
    duration: "7 days",
    price: "$1,600",
    short: "Cultural highlights, monasteries, and valley treks around Thimphu and Paro.",
    image: "/tours/bhutan-classic.jpg",
    highlights: ["Paro Taktsang (Tiger's Nest)", "Thimphu city and national memorial chorten", "Punakha Dzong"],
  },
  {
    id: "bhutan-adventure-10d",
    title: "Bhutan Adventure — 10 Days",
    duration: "10 days",
    price: "$2,800",
    short: "Highland passes, cultural homestays and guided hikes into remote valleys.",
    image: "/tours/bhutan-adventure.jpg",
    highlights: ["Bumthang valleys", "Phobjikha wetlands", "Local homestays"],
  },
  {
    id: "bhutan-wellness-5d",
    title: "Bhutan Wellness — 5 Days",
    duration: "5 days",
    price: "$1,200",
    short: "Retreat-style itinerary with hot stone baths, meditation and light hikes.",
    image: "/tours/bhutan-wellness.jpg",
    highlights: ["Traditional hot stone bath", "Guided meditation sessions", "Nature walks"],
  },
]
