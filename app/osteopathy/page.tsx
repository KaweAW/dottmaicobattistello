import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"

export default function OsteopathyPage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="w-full bg-secondary">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Osteopathy", href: "/osteopathy" },
          ]}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-6">What is Osteopathy?</h2>

          <p className="text-mobile mb-6">
            Osteopathy is a manual healthcare therapy that approaches the sick person as a whole, that is, in a holistic
            manner. The Osteopath examines the body structures (spine, joints, muscle fascia, visceral projections, and
            cranial bones), looking for the main areas of postural/articular imbalance, muscle-ligament/fascial tension,
            and with careful manipulative techniques, suitable for the specific needs of each individual, from the
            elderly person, to the child, to the pregnant woman, restores these areas, recovering proper postural
            balance, functional balance, and physical well-being.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full h-[40vh] bg-gray-200 my-12">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/osteopic.jpg-1DghIg2avBhDEuGOkg7IMcB61GdHay.jpeg"
          alt="Osteopathy Treatment"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contact Form */}
      <ContactForm />
    </div>
  )
}

