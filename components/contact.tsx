// "use client"

// import { useState } from "react"
// import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"

// const contactInfo = [
//   {
//     icon: Phone,
//     label: "Telephone",
//     value: "+221 77 744 67 26",
//     secondary: "+221 77 140 07 93",
//   },
//   {
//     icon: Mail,
//     label: "E-mail",
//     value: "papearonasagna@gmail.com",
//     secondary: "sallgnagna71@gmail.com",
//   },
//   {
//     icon: MapPin,
//     label: "Localisation",
//     value: "Dakar, Senegal",
//   },
//   {
//     icon: Clock,
//     label: "Horaires",
//     value: "Lun - Sam: 8h - 18h",
//   },
// ]

// export function Contact() {
//   const [formData, setFormData] = useState({
//     nom: "",
//     email: "",
//     telephone: "",
//     sujet: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)
//     // Simulate form submission
//     await new Promise(resolve => setTimeout(resolve, 1000))
//     alert("Merci pour votre message. Nous vous répondrons sous 24h.")
//     setFormData({ nom: "", email: "", telephone: "", sujet: "", message: "" })
//     setIsSubmitting(false)
//   }

//   return (
//     <section id="contact" className="py-24 lg:py-32 bg-white">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
//           {/* Left - Info */}
//           <div>
//             <p className="text-sm uppercase tracking-[0.2em] text-gray-light mb-4">
//               Contact
//             </p>
//             <h2 className="font-serif text-4xl lg:text-5xl font-medium text-navy leading-tight mb-6 text-balance">
//               Parlons de votre projet
//             </h2>
//             <p className="text-lg text-gray leading-relaxed mb-8">
//               Vous avez une question juridique ou un besoin de conseil ? 
//               Contactez-nous pour une première consultation gratuite de 30 minutes.
//             </p>

//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 bg-stone border border-border px-4 py-2 mb-10">
//               <div className="w-2 h-2 bg-gold rounded-full" />
//               <span className="text-sm font-medium text-navy">
//                 Premiere consultation gratuite
//               </span>
//             </div>

//             {/* Contact Details */}
//             <div className="space-y-6">
//               {contactInfo.map((item, index) => (
//                 <div key={index} className="flex items-start gap-4">
//                   <div className="w-12 h-12 bg-stone border border-border flex items-center justify-center shrink-0">
//                     <item.icon className="w-5 h-5 text-navy" strokeWidth={1.5} />
//                   </div>
//                   <div>
//                     <p className="text-xs uppercase tracking-wider text-gray-light mb-1">
//                       {item.label}
//                     </p>
//                     {item.href ? (
//                       <a 
//                         href={item.href}
//                         className="text-navy font-medium hover:text-gold transition-colors"
//                       >
//                         {item.value}
//                       </a>
//                     ) : (
//                       <p className="text-navy font-medium">{item.value}</p>
//                     )}
//                     {item.secondary && (
//                       <p className="text-gray text-sm">{item.secondary}</p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right - Form */}
//           <div className="bg-stone border border-border p-8 lg:p-10">
//             <h3 className="font-serif text-2xl font-medium text-navy mb-6">
//               Envoyez-nous un message
//             </h3>
            
//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                 <div>
//                   <label className="block text-xs uppercase tracking-wider text-gray mb-2">
//                     Nom complet
//                   </label>
//                   <Input
//                     type="text"
//                     placeholder="Votre nom"
//                     value={formData.nom}
//                     onChange={(e: { target: { value: any } }) => setFormData({ ...formData, nom: e.target.value })}
//                     className="h-12 bg-white border-border"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-xs uppercase tracking-wider text-gray mb-2">
//                     Telephone
//                   </label>
//                   <Input
//                     type="tel"
//                     placeholder="+221 77 000 00 00"
//                     value={formData.telephone}
//                     onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
//                     className="h-12 bg-white border-border"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-xs uppercase tracking-wider text-gray mb-2">
//                   Email
//                 </label>
//                 <Input
//                   type="email"
//                   placeholder="votre@email.com"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   className="h-12 bg-white border-border"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs uppercase tracking-wider text-gray mb-2">
//                   Sujet
//                 </label>
//                 <Input
//                   type="text"
//                   placeholder="Ex: Création d'entreprise"
//                   value={formData.sujet}
//                   onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
//                   className="h-12 bg-white border-border"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs uppercase tracking-wider text-gray mb-2">
//                   Message
//                 </label>
//                 <Textarea
//                   placeholder="Décrivez brièvement votre situation..."
//                   value={formData.message}
//                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                   className="min-h-[140px] bg-white border-border resize-none"
//                   required
//                 />
//               </div>

//               <Button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full h-14 bg-navy text-white hover:bg-navy-soft text-base font-medium tracking-wide group"
//               >
//                 {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
//                 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useState } from "react"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "+221 77 744 67 26",
    secondary: "+221 77 140 07 93",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "papearonasagna@gmail.com",
    secondary: "sallgnagna71@gmail.com",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Dakar, Sénégal",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun - Sam : 8h - 18h",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    sujet: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=papearonasagna@gmail.com&su=${encodeURIComponent(
        formData.sujet
      )}&body=${encodeURIComponent(
        `Email : ${formData.email}

${formData.message}`
      )}`,
      "_blank"
    )
  }

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>

            <p className="text-sm uppercase tracking-[0.2em] text-gray-light mb-4">
              Contact
            </p>

            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-navy mb-6">
              Parlons de votre projet
            </h2>

            <p className="text-lg text-gray leading-relaxed mb-10">
              Vous avez une question juridique ou un besoin de conseil ?
              Contactez-nous directement via Gmail.
            </p>

            {/* Contact Infos */}
            <div className="space-y-6">

              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >

                  <div className="w-12 h-12 bg-stone border border-border flex items-center justify-center shrink-0">
                    <item.icon
                      className="w-5 h-5 text-navy"
                      strokeWidth={1.5}
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-light mb-1">
                      {item.label}
                    </p>

                    <p className="text-navy font-medium">
                      {item.value}
                    </p>

                    {item.secondary && (
                      <p className="text-gray text-sm">
                        {item.secondary}
                      </p>
                    )}
                  </div>

                </div>
              ))}

            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-stone border border-border p-8 lg:p-10">

            <h3 className="font-serif text-2xl font-medium text-navy mb-6">
              Envoyer un message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Email */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray mb-2">
                  Votre Email
                </label>

                <Input
                  type="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="h-12 bg-white border-border"
                  required
                />
              </div>

              {/* Sujet */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray mb-2">
                  Sujet
                </label>

                <Input
                  type="text"
                  placeholder="Sujet du message"
                  value={formData.sujet}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sujet: e.target.value,
                    })
                  }
                  className="h-12 bg-white border-border"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray mb-2">
                  Message
                </label>

                <Textarea
                  placeholder="Votre message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="min-h-[140px] bg-white border-border resize-none"
                  required
                />
              </div>

              {/* Button */}
              <Button
                type="submit"
                className="w-full h-14 bg-navy text-white hover:bg-navy-soft text-base font-medium tracking-wide group"
              >
                Envoyer le message

                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}