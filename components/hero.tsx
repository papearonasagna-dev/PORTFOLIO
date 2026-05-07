"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex flex-col bg-stone">
      {/* Hero Content */}
      <div className="flex-1 flex items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full pt-32 pb-16 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div>
              {/* Overline */}
              <div className="inline-flex items-center gap-2 bg-white border border-border px-4 py-2 mb-8">
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                <span className="text-sm font-medium text-navy">
                  Cabinet Juridique & Commercial — Dakar
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.08] tracking-tight text-navy mb-6 text-balance">
                Excellence juridique au service de vos{" "}
                <span className="text-gold">ambitions</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg text-gray max-w-lg leading-relaxed mb-10">
                Nous accompagnons entreprises et particuliers dans leurs enjeux 
                juridiques avec expertise, proximite et engagement.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gold text-white hover:bg-gold-muted h-14 px-8 text-base font-medium tracking-wide group shadow-lg shadow-gold/20"
                >
                  <Link href="#contact">
                    Consultation gratuite
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-navy text-navy hover:bg-navy hover:text-white h-14 px-8 text-base font-medium tracking-wide"
                >
                  <Link href="#expertises">Nos expertises</Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 flex items-center gap-8">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-navy border-2 border-white flex items-center justify-center"
                    >
                      <span className="text-xs font-medium text-white">{i}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-navy">50+ clients satisfaits</p>
                  <p className="text-xs text-gray">Entreprises & Particuliers</p>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/hero-consultation.jpg"
                  alt="Consultation juridique professionnelle"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                
                {/* Floating card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-5 border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold flex items-center justify-center shrink-0">
                      <Play className="w-5 h-5 text-white fill-white" />
                    </div>
                    <div>
                      <p className="font-medium text-navy text-sm">Premiere consultation</p>
                      <p className="text-gold font-serif text-lg">Gratuite & sans engagement</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-gold/30 -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-navy/5 -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-t border-border bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {[
              { value: "2", label: "Annees d'experience" },
              { value: "50+", label: "Dossiers traites" },
              { value: "98%", label: "Clients satisfaits" },
              { value: "24h", label: "Reponse garantie" },
            ].map((stat, index) => (
              <div key={index} className="py-6 lg:py-8 px-4 lg:px-8 text-center lg:text-left group cursor-default">
                <p className="font-serif text-2xl lg:text-3xl font-semibold text-navy mb-1 group-hover:text-gold transition-colors">
                  {stat.value}
                </p>
                <p className="text-sm text-gray">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
