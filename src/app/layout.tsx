import type { Metadata } from "next"
import { Fraunces, Manrope } from "next/font/google"
import "./globals.css"
const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" })
const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" })

export const metadata: Metadata = {
  title: "Happy Hounds Dog Grooming | Ballivor, Co. Meath",
  description: "Dog grooming in Ballivor, Co. Meath. Gentle, professional grooming for all breeds. Open Mon–Sat. Book on 085 837 3432.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: { title: "Happy Hounds dog grooming", description: "Dog grooming in Ballivor, Co. Meath. Gentle, professional grooming for all breeds. Open Mon–Sat. Book on 085 837 3432.", type: "website", images: [{ url: "https://demo-happy-hounds-dog-grooming.vercel.app/images/supplied_4.webp", width: 1200, height: 630 }] },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <header style={{ background: "#FFFFFF" }} className="text-gray-900 sticky top-0 z-50 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
            <a href="/" className="flex items-center gap-3 min-w-0 flex-1"><img src="/images/logo.jpg" alt="Happy Hounds dog grooming logo" className="h-10 w-10 md:h-11 md:w-11 shrink-0 rounded-full object-cover ring-2 ring-white/40" /><span className="text-base md:text-xl font-bold tracking-tight truncate md:whitespace-normal md:overflow-visible">Happy Hounds dog grooming</span></a>
            <nav className="hidden md:flex gap-6 items-center">
              <a href="/" className="font-medium text-sm" style={{ color: "#D9789C" }}>Home</a>
          <a href="#about" className="opacity-80 hover:opacity-100 font-medium text-sm transition">About</a>
          <a href="#services" className="opacity-80 hover:opacity-100 font-medium text-sm transition">Services</a>
          <a href="#gallery" className="opacity-80 hover:opacity-100 font-medium text-sm transition">Gallery</a>
            </nav>
            <a href="https://wa.me/353858373432?text=Hi%2C%20I%27d%20like%20to%20book%20a%20grooming%20appointment%20for%20my%20dog" target="_blank" rel="noopener noreferrer" style={{ background: "#D9789C" }} className="md:hidden text-white px-4 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition whitespace-nowrap">
              💬 WhatsApp
            </a>
            <a href="#contact" style={{ background: "#D9789C" }} className="hidden md:inline-block text-white px-4 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition whitespace-nowrap">
              Contact us
            </a>
          </div>
        <div className="md:hidden overflow-x-auto no-scrollbar border-t border-white/10">
          <div className="flex gap-2 px-4 py-2.5 min-w-max">
            <a href="#about" className="shrink-0 px-3.5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap bg-white/15 hover:bg-white/25 transition">About</a>
            <a href="#services" className="shrink-0 px-3.5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap bg-white/15 hover:bg-white/25 transition">Services</a>
            <a href="#gallery" className="shrink-0 px-3.5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap bg-white/15 hover:bg-white/25 transition">Gallery</a>
            <a href="#contact" className="shrink-0 px-3.5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap bg-white/15 hover:bg-white/25 transition">Contact</a>
          </div>
        </div>
        </header>
        <main>{children}</main>
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-white/95 backdrop-blur border-t border-gray-200">
          <div className="flex gap-3">
            <a href="https://wa.me/353858373432?text=Hi%2C%20I%27d%20like%20to%20book%20a%20grooming%20appointment%20for%20my%20dog" target="_blank" rel="noopener noreferrer" className="flex-1 py-3.5 rounded-xl font-bold text-white text-center shadow-lg" style={{ background: "#25D366" }}>💬 WhatsApp</a>
            <a href="tel:0858373432" className="flex-1 py-3.5 rounded-xl font-bold text-white text-center shadow-lg" style={{ background: "#D9789C" }}>📞 Call</a>
          </div>
        </div>
        <footer style={{ background: "#35707F" }} className="text-white pt-14 pb-8 mt-16">
          <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-3">
            <div>
              <p className="font-bold text-lg mb-2">Happy Hounds dog grooming</p>
              <p className="opacity-70 text-sm leading-relaxed"><a href="https://www.google.com/maps/search/?api=1&query=Happy%20Hounds%20dog%20grooming%20Main%20St%2C%20Kilballivor%2C%20Ballivor%2C%20Co.%20Meath%2C%20Ireland&query_place_id=ChIJoaRATACLXUgRmPiQHG8Qt_M" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 hover:underline">Ballivor, Co. Meath</a></p>
              <p className="opacity-70 text-sm mt-1"><a href="tel:0858373432" className="md:hidden hover:opacity-100 hover:underline">085 837 3432</a><span className="hidden md:inline">085 837 3432</span></p>
              <div className="flex gap-4 mt-4 text-sm"><a href="https://www.facebook.com/61582327680786" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition">Facebook →</a></div>
            </div>
            <div>
              <p className="font-semibold mb-3 text-sm uppercase tracking-wide opacity-90">Opening hours</p>
              <div className="space-y-1 text-sm max-w-xs"><div className="flex justify-between gap-8"><span className="opacity-60">Monday</span><span>12:30 – 5:30 PM</span></div><div className="flex justify-between gap-8"><span className="opacity-60">Tuesday</span><span>12:30 – 5:30 PM</span></div><div className="flex justify-between gap-8"><span className="opacity-60">Wednesday</span><span>12:30 – 5:30 PM</span></div><div className="flex justify-between gap-8"><span className="opacity-60">Thursday</span><span>12:30 – 5:30 PM</span></div><div className="flex justify-between gap-8"><span className="opacity-60">Friday</span><span>12:30 – 5:30 PM</span></div><div className="flex justify-between gap-8"><span className="opacity-60">Saturday</span><span>12:30 – 5:30 PM</span></div><div className="flex justify-between gap-8"><span className="opacity-60">Sunday</span><span>Closed</span></div></div>
            </div>
            <div>
              <p className="font-semibold mb-3 text-sm uppercase tracking-wide opacity-90">Explore</p>
              <div className="flex flex-col gap-2 text-sm">
                <a href="#about" className="opacity-80 hover:opacity-100">About</a>
                <a href="#services" className="opacity-80 hover:opacity-100">Services</a>
                <a href="#gallery" className="opacity-80 hover:opacity-100">Gallery</a>
                <a href="#contact" className="opacity-80 hover:opacity-100">Contact</a>
                <a href="/privacy" className="opacity-80 hover:opacity-100">Privacy</a>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs opacity-60" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
            <span>&copy; {new Date().getFullYear()} Happy Hounds dog grooming. All rights reserved.</span>
            <a href="https://builtbywinters.ie" target="_blank" rel="noopener noreferrer" className="hover:opacity-100">Website by Built by Winters →</a>
          </div>
        </footer>
      </body>
    </html>
  )
}
