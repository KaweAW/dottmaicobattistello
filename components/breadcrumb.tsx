import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbProps {
  items: {
    label: string
    href: string
  }[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const currentPage = items[items.length - 1]?.label || ""

  return (
    <div className="bg-secondary py-4 w-full">
      <div className="container mx-auto px-4 w-full">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">{currentPage}</h1>
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-sm text-primary hover:underline">
                Home
              </Link>
            </li>
            {items.slice(1).map((item, index) => (
              <li key={index}>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                  {index === items.length - 2 ? (
                    <span className="ml-1 text-sm text-gray-500 md:ml-2">{item.label}</span>
                  ) : (
                    <Link href={item.href} className="ml-1 text-sm text-primary hover:underline md:ml-2">
                      {item.label}
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  )
}

