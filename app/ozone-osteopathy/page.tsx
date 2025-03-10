import Link from "next/link"
import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedScrollElement from "@/components/animated-scroll-element"
import AnimatedLink from "@/components/animated-link"

export default function OzoneOsteopathyPage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="w-full">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Ozone Therapy + Osteopathy", href: "/ozone-osteopathy" },
          ]}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose max-w-none">
          <AnimatedScrollElement direction="up" delay={0.1}>
            <p className="text-lg mb-6">
              Through years of experience in{" "}
              <AnimatedLink href="/osteopathy" className="text-primary">
                Osteopathic Therapy
              </AnimatedLink>{" "}
              and{" "}
              <AnimatedLink href="/ozone-therapy" className="text-primary">
                Ozonotherapy
              </AnimatedLink>
              , Dr. Maico Battistello has developed a unique combined treatment, achieving clinical results that neither
              discipline alone can provide.
            </p>
          </AnimatedScrollElement>

          <AnimatedScrollElement direction="up" delay={0.2}>
            <h3 className="text-xl font-semibold mb-4">Conditions that benefit the most include:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Spinal disorders (cervical/lumbar) from herniated discs, arthritis, trauma</li>
              <li>Radicular pain due to herniated discs (radiating to arms or legs)</li>
              <li>Hip and knee osteoarthritis (coxarthrosis and gonarthrosis)</li>
            </ul>
          </AnimatedScrollElement>

          <AnimatedScrollElement direction="up" delay={0.3}>
            <p className="mb-4">
              The natural anti-inflammatory and muscle-relaxing properties of{" "}
              <AnimatedLink href="/ozone-therapy" className="text-primary">
                Ozonotherapy
              </AnimatedLink>
              , combined with postural realignment from{" "}
              <AnimatedLink href="/osteopathy" className="text-primary">
                Osteopathic Manipulation
              </AnimatedLink>
              , yield outstanding results, especially for chronic conditions impacting daily life.
            </p>
          </AnimatedScrollElement>

          <AnimatedScrollElement direction="up" delay={0.4}>
            <div className="mt-8 text-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white font-medium hover-lift">
                <Link href="/contacts" className="flex items-center gap-2 no-underline">
                  <Calendar className="h-5 w-5" />
                  <span>Book an Appointment</span>
                </Link>
              </Button>
            </div>
          </AnimatedScrollElement>
        </div>
      </div>

      {/* Image Section */}
      <AnimatedScrollElement direction="up" delay={0.5}>
        <div className="w-full h-[40vh] bg-gray-200 my-12">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ozonosteopic.jpg-8YPM2ER5BSHlgZEDoA1kWc8izXQr9f.jpeg"
            alt="Ozone Therapy and Osteopathy Combined Treatment"
            className="w-full h-full object-cover"
          />
        </div>
      </AnimatedScrollElement>

      {/* Contact Form */}
      <ContactForm />
    </div>
  )
}

