import { Linkedin, Mail } from "lucide-react"
import Image from "next/image"

const founders = [
  {
    name: "Pape Arona Sagna",
    role: "Co-fondateur, Juriste",
    email: "papearonasagna@gmail.com",
    image: "/images/pape-arona-sagna.jpg",
    imagePosition: "object-[center_20%]",
    bio: "Juriste en Droit economique et des Affaires, specialiste de la conformite et expert en droit numerique et intelligence artificielle. Fort d'une experience significative dans le domaine judiciaire.",
    specialties: ["Droit des Affaires", "Conformite", "Droit numerique", "Affaires civiles et penales"],
  },
  {
    name: "Gnagna Ba Sall",
    role: "Co-fondatrice, Commerciale Senior",
    email: "sallgnagna71@gmail.com",
    image: "/images/gnagna-ba-sall.jpg?v=2",
    imagePosition: "object-center",
    bio: "Commerciale Senior aguerrie dans les multinationales. Elle maitrise les dynamiques de marche, la negociation a haut niveau et le developpement commercial strategique.",
    specialties: ["Developpement commercial", "Negociation", "Reseau PME"],
  },
]

export function Team() {
  return (
    <section id="equipe" className="py-24 lg:py-32 bg-stone">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-gold mb-4">
            Notre equipe
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-navy leading-tight mb-6">
            Les fondateurs
          </h2>
          <p className="text-lg text-gray leading-relaxed">
            Deux expertises complementaires au service de votre entreprise.
          </p>
        </div>

        {/* Team Grid - Large Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-white shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Photo */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src={founder.image}
                  alt={`Photo de ${founder.name}`}
                  fill
                  className={`object-cover ${founder.imagePosition} group-hover:scale-105 transition-transform duration-700`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-80" />
                
                {/* Name Badge - Positioned at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="font-serif text-3xl lg:text-4xl font-medium text-white mb-2 drop-shadow-lg">
                        {founder.name}
                      </h3>
                      <p className="text-sm uppercase tracking-[0.15em] text-gold font-medium">
                        {founder.role}
                      </p>
                    </div>
                    {/* Quick Contact */}
                    <div className="flex gap-2">
                      <a
                        href="#"
                        className="w-11 h-11 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-all duration-300"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={`mailto:${founder.email}`}
                        className="w-11 h-11 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-all duration-300"
                        aria-label="Email"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 lg:p-10">
                <p className="text-gray leading-relaxed text-base mb-6">
                  {founder.bio}
                </p>
                
                {/* Specialties */}
                <div className="flex flex-wrap gap-2">
                  {founder.specialties.map((specialty, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold text-navy bg-stone-dark px-4 py-2 border border-border/50"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray mb-6">
            Vous souhaitez echanger avec notre equipe ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 font-medium hover:bg-gold hover:text-navy transition-colors duration-300"
          >
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </section>
  )
}
