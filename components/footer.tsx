export default function Footer() {
  return (
    <footer className="bg-white py-6 border-t">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-sm text-gray-600">© 2025 All rights reserved.</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">
            <a href="/ozone-therapy" className="footer-link hover:text-blue-500 transition-colors">
              Ozone Therapy
            </a>{" "}
            {" | "}
            <a href="/osteopathy" className="footer-link hover:text-blue-500 transition-colors">
              Osteopathy
            </a>{" "}
            {" | "}
            <a href="/legal-medicine" className="footer-link hover:text-blue-500 transition-colors">
              Legal Medicine
            </a>
          </p>
        </div>
        <div className="text-sm text-gray-600">
          <a href="/privacy-policy" className="footer-link hover:text-blue-500 transition-colors">
            Privacy Policy
          </a>
          {" | "}
          <a href="/cookie-policy" className="footer-link hover:text-blue-500 transition-colors">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  )
}

