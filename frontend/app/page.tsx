import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Expertises } from "@/components/expertises"
import { About } from "@/components/about"
import { Team } from "@/components/team"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Expertises />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
