import Link from "next/link"
import Breadcrumb from "@/components/breadcrumb"

export default function LegalMedicinePage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Forensic Medicine in Padua", href: "/legal-medicine" },
        ]}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-6">What does forensic medical consultation involve?</h2>

          <p className="text-mobile mb-6">
            The specialist consultation and the medico-legal report are provided after a direct medical examination of
            the injured party and a thorough review of the entire clinical, diagnostic, and therapeutic process
            undertaken by the individual.
          </p>

          <p className="text-mobile mb-6">
            The purpose of both the consultation and the report is to provide an accurate assessment of the impairments
            resulting from accidents, injuries, or illness.
          </p>

          <p className="text-mobile mb-6">
            For the pricing details, contact me now by clicking{" "}
            <Link href="/contacts" className="text-primary hover:text-primary-dark underline">
              here
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full h-[40vh] bg-gray-200 my-12">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/forensicpic.jpg-K9rVH6Jj3JOoUQVx2kz1fBpgdQb8C1.jpeg"
          alt="Forensic Medicine Equipment"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

