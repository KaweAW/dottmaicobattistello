import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import QuadrantCarousel from "@/components/quadrant-carousel";
import { Calendar } from "lucide-react";
import AnimatedScrollElement from "@/components/animated-scroll-element";
import dynamic from "next/dynamic";

// Import the client-side components with dynamic to avoid hydration errors
const DynamicTypewriter = dynamic(
  () => import("@/components/typewriter-animation"),
  { ssr: true }
);

export default function Home() {
  return (
    <>
      {/* Hero Section - background image is set via CSS class */}
      <section className="hero-section flex items-center pt-20">
        <div className="container">
          <div className="max-w-xl md:max-w-2xl mx-auto md:mx-0 md:ml-[10%] lg:ml-[5%] text-left">
            <AnimatedScrollElement
              className="mb-3"
              direction="left"
              delay={0.1}
            >
              <p className="text-xl text-white font-medium">
                New therapeutic innovation:
              </p>
            </AnimatedScrollElement>

            <AnimatedScrollElement
              className="mb-5"
              direction="left"
              delay={0.3}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                <DynamicTypewriter
                  text="Ozone Therapy & Osteopathy"
                  delay={100}
                />
              </h1>
            </AnimatedScrollElement>

            <AnimatedScrollElement
              className="mb-7"
              direction="left"
              delay={0.5}
            >
              <p className="text-xl md:text-2xl text-white">
                <DynamicTypewriter
                  text="United for an innovative treatment"
                  delay={80}
                />
              </p>
            </AnimatedScrollElement>

            <AnimatedScrollElement direction="up" delay={0.7}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary-dark w-full sm:w-auto text-white font-medium text-lg py-6 hover-lift"
                >
                  <Link href="/ozone-osteopathy">Learn More</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary-dark w-full sm:w-auto text-white font-medium text-lg py-6 hover-lift"
                >
                  <Link href="/contacts" className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>Book an Appointment</span>
                  </Link>
                </Button>
              </div>
            </AnimatedScrollElement>
          </div>
        </div>
      </section>

      {/* Quadrant Carousel Section */}
      <section className="py-16">
        <div className="container">
          <AnimatedScrollElement
            className="mb-8 text-center"
            direction="up"
            delay={0.1}
          >
            <h2 className="text-3xl font-bold mb-4">Our Treatments</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our innovative approach to healthcare through the
              combination of Ozone Therapy and Osteopathy
            </p>
          </AnimatedScrollElement>
          <AnimatedScrollElement direction="up" delay={0.3}>
            <QuadrantCarousel />
          </AnimatedScrollElement>
        </div>
      </section>

      {/* Subtitle Section */}
      <section className="py-8 bg-gray-100">
        <div className="container">
          <AnimatedScrollElement direction="up" delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-primary">
              Choose Experience and Professionality for your cures
            </h2>
          </AnimatedScrollElement>
        </div>
      </section>

      {/* Brief Description */}
      <section className="py-12">
        <div className="container">
          <AnimatedScrollElement className="mb-8" direction="up" delay={0.1}>
            <p className="text-center text-base md:text-lg max-w-3xl mx-auto">
              Graduated in medicine and surgery, specialized in legal medicine.
              Osteopath and Ozone Therapist, for years he has promoted the
              combined use of these disciplines to achieve better and
              longer-lasting results.
            </p>
          </AnimatedScrollElement>
          <AnimatedScrollElement
            className="text-center"
            direction="up"
            delay={0.3}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white font-medium hover-lift"
            >
              <Link href="/about-me">More About Me</Link>
            </Button>
          </AnimatedScrollElement>
        </div>
      </section>

      {/* Blue Background Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <AnimatedScrollElement
              className="md:col-span-1"
              direction="left"
              delay={0.1}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avantgardepic.jpg-mfJIjkIXbkIrXI8d56YJslAgsYbgQ7.jpeg"
                alt="Ozone therapy equipment"
                width={400}
                height={400}
                className="w-full max-w-md mx-auto rounded-lg"
              />
            </AnimatedScrollElement>
            <div className="md:col-span-2 flex flex-col items-center text-center">
              <AnimatedScrollElement
                className="space-y-4 mb-8"
                direction="right"
                delay={0.3}
              >
                <h3 className="text-xl font-semibold text-blue-200">
                  Avantgarde Therapy
                </h3>
                <p className="text-base md:text-lg">
                  Ozone therapy harnesses the biochemical properties of ozone,
                  which provides beneficial effects for your body. Oxygen ozone
                  therapy has anti-inflammatory, analgesic, muscle-relaxing,
                  immune-modulating, antibacterial, fungicidal, and antiviral
                  properties.
                </p>
              </AnimatedScrollElement>
              <AnimatedScrollElement direction="up" delay={0.5}>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 hover-lift"
                >
                  <Link href="/contacts" className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>Book Now an Appointment</span>
                  </Link>
                </Button>
              </AnimatedScrollElement>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
