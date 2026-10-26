import { SectionHeader } from "../ui/section-header"
// import Image from "next/image"
import { ExternalLink } from "lucide-react"

export const PortfolioSection = () => {
  const projects = [
    {
      title: "Billing System",
      category: "Full Stack web Application",
      description:
        "BillingFlow helps admins to manage customers, products, and invoices in one place. It tracks product stock and updates or removes products as bills are generated.",
      image: "/Billing_Flow.png",
      tech: ["React.js", "Node.js", "Express JS", "JavaScript", "Html", "Css", "Apis", "MongoDB"],
      url: "https://billing-project-1.onrender.com/",
    },
    {
      title: "Morrow Marketplace",
      category: "Full Stack Application",
      description:
        "Morrow Market is a multi-seller marketplace. Buyers can browse products, keep a cart, and place orders. Sellers can list products, manage stock, restock products, and see the order lines for their own products.",
      image: "/morrow-marketplace.png",
      tech: ["React JS", "React hooks", "React Router", "JavaScript", "JWT", "Node JS", "Express JS", "Mongo DB Atlas", "Tailwind CSS", "Render"],
      url: "https://morrow-market-vb1m.onrender.com/",
    },
    {
      title: "Open Weather",
      category: "FullStack Web App",
      description: "Open Weather is a web application that provides real-time weather data. The application allows users to view weather information for various cities.",
      image: "/OpenWeather.png",
      tech: ["React.js", "Node.js", "Express JS", "JavaScript", "Html", "Css", "Apis", "MongoDB"],
      url: "https://weather-application-1-reactapp.onrender.com/",
    },
    {
      title: "Feedback Portal",
      category: "FullStack Web App",
      description:
        "Created a web application for collecting and managing product feedback. APIs integration of third-party application Frill.co for storing and retrieving feedback efficiently.",
      image: "/feedback.png",
      tech: ["React.js", "Node.js", "Express JS", "JavaScript", "Html", "Css", "Apis", "MongoDB"],
      url: "https://feedback-portal-gp5t.onrender.com",
    },
  ]

  return (
    <div className="space-y-8">
      <SectionHeader title="Creative Showcase" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  className="p-3 bg-zinc-900 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-black transition-colors"
                  rel="noreferrer"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <div className="p-6">
              <div className="text-xs text-cyan-400 font-medium mb-2 uppercase tracking-wider">{project.category}</div>
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-zinc-800 text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
