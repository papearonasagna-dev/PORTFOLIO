import { MapPin, Users, Globe, Wallet } from "lucide-react"

const values = [
  {
    icon: MapPin,
    title: "Proximité",
    description: "Cabinet basé en banlieue dakaroise, proche de nos clients.",
  },
  {
    icon: Users,
    title: "Complémentarité",
    description: "Expertise juridique et expérience commerciale réunies.",
  },
  {
    icon: Globe,
    title: "Accessibilité",
    description: "Communication en français et en wolof.",
  },
  {
    icon: Wallet,
    title: "Transparence",
    description: "Forfaits adaptés aux capacités des PME locales.",
  },
]

export function About() {
  return (
    <section id="cabinet" className="py-24 lg:py-32 bg-navy">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gold mb-4">
              Notre cabinet
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-white leading-tight mb-6 text-balance">
              Allier expertise, proximité et accessibilité
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              Sagna & Sall Legal Partners se distingue par une approche humaine 
              et pragmatique du droit. Nous croyons que l&apos;excellence juridique 
              doit être accessible à tous, des startups aux grandes entreprises.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-px h-12 bg-gold" />
                <p className="text-white/80 italic font-serif text-lg">
                  &ldquo;Votre sécurité juridique, notre priorité.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right - Values Grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 p-6 lg:p-8 transition-colors hover:bg-white/10"
              >
                <value.icon className="w-6 h-6 text-gold mb-4" strokeWidth={1.5} />
                <h4 className="font-medium text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-white/50 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
