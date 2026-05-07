import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  expertises: [
    { label: "Droit des affaires", href: "#expertises" },
    { label: "Droit numerique", href: "#expertises" },
    { label: "Divorce", href: "#expertises" },
    { label: "Affaires penales", href: "#expertises" },
  ],
  cabinet: [
    { label: "A propos", href: "#cabinet" },
    { label: "Notre equipe", href: "#equipe" },
    { label: "Contact", href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-navy py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
                <span className="font-serif text-lg font-semibold text-white">S</span>
              </div>
              <div>
                <span className="text-white font-medium tracking-wide block">
                  Sagna & Sall
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Legal Partners
                </span>
              </div>
            </div>
            <p className="text-white/50 leading-relaxed max-w-sm">
              Cabinet juridique et commercial de reference a Dakar. 
              Excellence, proximite et accessibilite au service de vos ambitions.
            </p>
          </div>

          {/* Expertises */}
          <div>
            <h4 className="text-white font-medium mb-4">Expertises</h4>
            <ul className="space-y-3">
              {footerLinks.expertises.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cabinet */}
          <div>
            <h4 className="text-white font-medium mb-4">Cabinet</h4>
            <ul className="space-y-3">
              {footerLinks.cabinet.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Sagna & Sall Legal Partners. Tous droits reserves.
          </p>
          <p className="text-xs text-white/30 uppercase tracking-wider">
            Dakar, Senegal
          </p>
        </div>
      </div>
    </footer>
  )
}
