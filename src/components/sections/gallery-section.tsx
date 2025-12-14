import { SectionHeader } from "../ui/section-header"
// import Image from "next/image"

export function GallerySection() {
  const photos = [
    {
      title: "Tech Setup",
      caption: "My development workstation",
      url: "/coding-setup-dark-aesthetic.jpg",
    },
    {
      title: "Team Collaboration",
      caption: "Brainstorming session at Entries.AI",
      url: "/office-team-meeting.png",
    },
    {
      title: "Conference",
      caption: "Learning new tech trends",
      url: "/tech-conference-hall.png",
    },
    {
      title: "Travel",
      caption: "Exploring Bangalore",
      url: "/bangalore-city-street.jpg",
    },
    {
      title: "Nature",
      caption: "Weekend getaway",
      url: "/nature-landscape-forest.jpg",
    },
  ]

  return (
    <div className="space-y-8">
      <SectionHeader title="Pixels & Passion" />

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {photos.map((photo, idx) => (
          <div key={idx} className="relative group overflow-hidden rounded-xl break-inside-avoid">
            <img
              src={photo.url || "/placeholder.svg"}
              alt={photo.title}
              width={400}
              height={400}
              className="w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h4 className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {photo.title}
              </h4>
              <p className="text-gray-300 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
