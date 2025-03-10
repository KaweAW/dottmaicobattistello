"use client"
import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function OzoneTherapyPage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Ozone Therapy", href: "/ozone-therapy" },
        ]}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-6">What is Ozone Therapy?</h2>

          <p className="text-mobile mb-6">
            Oxygen-ozone therapy uses a mixture of oxygen and ozone gas for the symptomatic and etiological treatment of
            human and animal diseases. These gases inside the body have anti-inflammatory, pain-relieving, and
            anti-edematous properties and are capable of generating well-being, healing inflammatory processes, and
            promoting tissue regeneration. Due to these characteristics, it has become a medical therapy with proven
            safety, effectiveness, and minimal invasiveness. According to the Ministry of Health, this type of therapy
            is particularly effective, not only in improving the symptoms of herniated discs but also in reducing their
            volume, exerting a real curative effect.
          </p>
        </div>
      </div>

      {/* Image Section - Adjusted margin top */}
      <div className="w-full h-[40vh] bg-gray-200 -mt-8 mb-12">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ozonopic.jpg-kP90wHktzarfiYalWqapRUrsv4Mo69.jpeg"
          alt="Ozone Therapy Treatment"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Collapsible Sections */}
      <section className="py-8 container mx-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="administration-methods">
            <AccordionTrigger className="text-xl font-semibold">Administration Methods</AccordionTrigger>
            <AccordionContent>
              <div className="prose max-w-none">
                <p>
                  Ozone therapy can be administered locally or systemically depending on the pathologies being treated.
                </p>
                <p>
                  The various administration routes can also be used alone or in combination, to exert a synergistic
                  effect.
                </p>
                <p>The main administration routes are:</p>

                <h4 className="font-semibold mt-4">Systemic:</h4>
                <p>
                  Applied in cases where the prognosis and progression of the disease can benefit from the modulation of
                  the inflammatory response or improved oxygen supply to the tissues. These include:
                </p>
                <ul className="list-disc pl-6">
                  <li>Great Auto-hemotherapy (GAET) – venous;</li>
                  <li>Small Auto-hemotherapy Infusion (PAEI) – deep muscle;</li>
                  <li>Rectal</li>
                </ul>

                <h4 className="font-semibold mt-4">Local:</h4>
                <p>
                  Applied when there is a need to exploit the analgesic, anti-inflammatory, and muscle-relaxing effects
                  for musculoskeletal, intestinal, and other pathologies. Administration occurs via:
                </p>
                <ul className="list-disc pl-6">
                  <li>Intramuscular, paravertebral</li>
                  <li>Subcutaneous</li>
                  <li>Peri-articular</li>
                  <li>Intra-articular</li>
                  <li>Insufflation (rectal and vaginal)</li>
                  <li>Topical with Ozone Bag</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="clinical-therapeutic-indications">
            <AccordionTrigger className="text-xl font-semibold">Clinical-Therapeutic Indications</AccordionTrigger>
            <AccordionContent>
              <div className="prose max-w-none">
                <p>
                  Thanks to Evidence-Based Medicine (EBM), the pathologies treated with Oxygen-Ozone therapy are divided
                  into three categories.
                </p>

                <h4 className="font-semibold mt-4">Type A Evidence:</h4>
                <p>
                  Based on systematic reviews with homogeneity of case-control studies. The main clinical applications
                  recognized by the Ministry of Health include:
                </p>
                <ul className="list-disc pl-6">
                  <li>Herniated Discs</li>
                  <li>Disc Protrusions</li>
                  <li>Discopathies</li>
                  <li>Facet Joint Syndrome</li>
                  <li>Osteoarthritis, Gonarthrosis, Chondromalacia patellae</li>
                </ul>

                <h4 className="font-semibold mt-4">Type B Evidence:</h4>
                <p>Based on individual randomized trials, cohort studies, or case-control studies.</p>
                <ul className="list-disc pl-6">
                  <li>Orthopedic Pathologies</li>
                  <li>Diabetic Foot</li>
                  <li>Skin Ulcers and Burns</li>
                  <li>Acute Skin Diseases caused by bacteria, fungi, or viruses</li>
                </ul>

                <h4 className="font-semibold mt-4">Type C Evidence:</h4>
                <p>Based on expert opinions without specific systematic or scientific research.</p>
                <ul className="list-disc pl-6">
                  <li>Long Covid</li>
                  <li>Fibromyalgia</li>
                  <li>Chronic Fatigue (CFS)</li>
                  <li>Seasonal or Work Fatigue</li>
                  <li>General Weakness or Lack of Energy in Parkinson's</li>
                  <li>Post-hospitalization/recovery well-being</li>
                  <li>Rheumatoid Arthritis, Psoriatic Arthritis</li>
                  <li>Erectile Dysfunction</li>
                  <li>Autoimmune Diseases (supporting conventional therapies)</li>
                  <li>Senile Dementia/Alzheimer's (complementary to conventional therapy)</li>
                  <li>Asthma</li>
                  <li>Migraines</li>
                  <li>Cluster or Tension Headaches</li>
                  <li>Infectious Problems</li>
                  <li>Circulatory Issues</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="contraindications">
            <AccordionTrigger className="text-xl font-semibold">Contraindications</AccordionTrigger>
            <AccordionContent>
              <div className="prose max-w-none">
                <p>
                  At therapeutic concentrations, Oxygen-Ozone therapy has no side effects. It is not a painful
                  treatment. It does not cause allergic reactions. It does not interfere with medications in use.
                </p>

                <p className="mt-4">The contraindications are limited to GAET for the following conditions:</p>
                <ul className="list-disc pl-6">
                  <li>Favism</li>
                  <li>Severe hyperthyroidism</li>
                  <li>Allergies to citrate and anticoagulants</li>
                  <li>Epilepsy</li>
                  <li>Pregnancy</li>
                  <li>Competitive sports</li>
                </ul>

                <p className="mt-4">
                  All ozone treatments are performed using certified equipment, adhering to the guidelines developed by
                  the main national and international scientific societies, such as:
                </p>
                <ul className="list-disc pl-6">
                  <li>SIOOT (International Scientific Society of Oxygen-Ozone Therapy)</li>
                  <li>Nuova FIO (Italian Federation of Oxygen-Ozone Therapy)</li>
                  <li>ISCO3 (International Scientific Committee of Ozonotherapy)</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  )
}

