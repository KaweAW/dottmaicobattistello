import { Building, MapPin } from "lucide-react"

export default function LocationList() {
  const locations = [
    {
      city: "Padova (PD)",
      address: "Clinica Cittàgiardino - Via F. Piccolo 6",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Via+F+Piccolo+6+Padova",
    },
    {
      city: "Padova (PD)",
      address: "Clinica Medicina Amica - via Boccaccio 104/C",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=via+Boccaccio+104+C+Padova",
    },
    {
      city: "Marostica (VI)",
      address: "Via Ragazzoni 36",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Via+Ragazzoni+36+Marostica+VI",
    },
    {
      city: "Monte di Malo (VI)",
      address: "Centro Medico Medicalis - Via Sile 40",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Via+Sile+40+Monte+di+Malo+VI",
    },
    {
      city: "Schio (VI)",
      address: "Centro Medico Met - via L. Muratori 1/A",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=via+L+Muratori+1+A+Schio+VI",
    },
  ]

  return (
    <div className="py-8">
      <h3 className="text-xl font-semibold mb-4 text-left">Our Locations</h3>
      <ul className="space-y-4 mx-0">
        {locations.map((location, index) => (
          <li key={index} className="flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <Building className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="font-semibold text-primary">{location.city}</span>
            </div>
            <div className="flex items-center gap-2 ml-7">
              <MapPin className="h-4 w-4 text-gray-500 flex-shrink-0" />
              <a
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="location-link text-black hover:text-primary inline-block"
              >
                {location.address}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

