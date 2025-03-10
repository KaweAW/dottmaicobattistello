import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import WordCarousel from "@/components/word-carousel"

export default function AboutMePage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About Me", href: "/about-me" },
        ]}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Photo */}
          <div className="md:w-1/3">
            <div className="w-[250px] h-[350px] bg-gray-200 mx-auto">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dottpic.jpg-IqED4Rs8gjPOYNzg64Uo6fuYfWjvC7.jpeg"
                alt="Dr. Maico Battistello"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Biography */}
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-2">Dr. Maico Battistello</h1>
            <h2 className="text-xl mb-1 italic text-gray-600">Graduated in Medicine and Surgery</h2>
            <h3 className="text-lg mb-4 italic text-gray-600">
              Specialized in Osteopathy, Ozone Therapy, and Forensic Medicine
            </h3>

            <div className="space-y-4">
              <p>
                Graduated in Medicine and Surgery from the University of Padua in 1999. Specialized in Forensic Medicine
                at the University of Parma in 2004. Earned a diploma in Osteopathy from the European Institute for
                Osteopathic Medicine (EIOM) in Padua in 2005. Ozone therapist since 2017. In 2019, obtained
                certification in "Pet Therapy", qualifying as a Project Manager, Intervention Coordinator, and Dog
                Handler.
              </p>
              <p>
                Registered with scientific societies recognized by the Ministry of Health, in accordance with Law No. 24
                of March 8, 2017, such as Nuova FIO (New Italian Federation of Oxygen-Ozone) and SIOOT (Scientific
                Society of Oxygen-Ozone Therapy).
              </p>
            </div>
          </div>
        </div>

        {/* Word Carousel */}
        <div className="my-12">
          <WordCarousel words={["Professionalism", "Reliability", "Experience", "Passion"]} />
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  )
}

