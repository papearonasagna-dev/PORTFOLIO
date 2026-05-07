import { Briefcase, Monitor, Heart, Shield, ArrowUpRight } from "lucide-react"

const expertises = [
  {
    number: "01",
    icon: Briefcase,
    title: "Droit des affaires",
    description: "Création de sociétés, rédaction de statuts, baux commerciaux, accompagnement à la conformité OHADA et conseil stratégique aux entreprises.",
  },
  {
    number: "02",
    icon: Monitor,
    title: "Droit numérique",
    description: "Protection des données personnelles, contrats informatiques, e-commerce, propriété intellectuelle numérique et conformité RGPD.",
  },
  {
    number: "03",
    icon: Heart,
    title: "Divorce",
    description: "Accompagnement dans les procédures de divorce, garde des enfants, pension alimentaire et partage des biens en toute confidentialité.",
  },
  {
    number: "04",
    icon: Shield,
    title: "Affaires pénales",
    description: "Défense pénale, abus de biens sociaux, escroquerie, fraudes financières et représentation devant les juridictions pénales.",
  },
]

export function Expertises() {
  return (
    <section id="expertises" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-light mb-4">
            Nos expertises
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-navy leading-tight mb-6 text-balance">
            Une approche globale pour un accompagnement complet
          </h2>
          <p className="text-lg text-gray leading-relaxed">
            Un accompagnement juridique adapté à la réalité des entreprises 
            sénégalaises et au cadre OHADA.
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {expertises.map((expertise) => (
            <div
              key={expertise.number}
              className="bg-white p-8 lg:p-12 group cursor-pointer transition-colors hover:bg-stone"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-serif text-5xl lg:text-6xl font-light text-stone-dark group-hover:text-gold transition-colors">
                  {expertise.number}
                </span>
                <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-gold group-hover:bg-gold transition-all">
                  <expertise.icon className="w-5 h-5 text-gray group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
              </div>
              
              <h3 className="font-serif text-2xl lg:text-3xl font-medium text-navy mb-4 group-hover:text-gold transition-colors">
                {expertise.title}
              </h3>
              
              <p className="text-gray leading-relaxed mb-6">
                {expertise.description}
              </p>
              
              <div className="flex items-center gap-2 text-sm font-medium text-navy group-hover:text-gold transition-colors">
                <span>En savoir plus</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
