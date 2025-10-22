'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

interface EcoFlameLayoutProps {
  children: React.ReactNode
}

export default function EcoFlameLayout({ children }: EcoFlameLayoutProps) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/', current: pathname === '/' },
    { name: 'Services', href: '/services', current: pathname === '/services' },
    { name: 'Reviews', href: '/reviews', current: pathname === '/reviews' },
    { name: 'Book Now', href: '/#book-now', current: pathname === '/' },
    { name: 'Contact', href: '/contact', current: pathname === '/contact' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <header className="fixed top-0 w-full bg-[rgba(10,14,39,0.95)] backdrop-blur-[10px] z-[1000] px-8 py-4">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-white text-3xl font-bold hover:opacity-80 transition-opacity">
            <img
              src="/EcoFlameNew.png"
              alt="Eco Flame Logo"
              className="w-[60px] h-[60px] object-contain"
            />
            Eco Flame
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-white no-underline font-medium hover:opacity-80 transition-opacity relative ${
                  item.current ? 'text-[#FF6B35] font-semibold' : ''
                }`}
              >
                {item.name}
                {item.current && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FF6B35]"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Call Now Button */}
          <div className="flex items-center gap-4">
            <a
              href="tel:07921064352"
              className="bg-gradient-to-br from-[#FF6B35] to-[#E63946] text-white px-8 py-3 rounded-full font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Call Now
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[rgba(10,14,39,0.98)] backdrop-blur-[10px] border-t border-white/10">
            <div className="px-8 py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block text-white no-underline font-medium hover:text-[#FF6B35] transition-colors ${
                    item.current ? 'text-[#FF6B35] font-semibold' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0A0E27] text-white/80 py-12 px-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Eco Flame</h3>
            <p className="mb-4">Premium heating and plumbing services across London and Surrey. Gas Safe registered and fully insured.</p>
            <div className="flex items-center gap-2">
              <img
                src="/EcoFlameNew.png"
                alt="Eco Flame Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-sm text-white/60">EcoFlame Heating</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="block text-white/70 hover:text-[#FF6B35] transition-colors">Boiler Installation</Link></li>
              <li><Link href="/services" className="block text-white/70 hover:text-[#FF6B35] transition-colors">Boiler Repairs</Link></li>
              <li><Link href="/services" className="block text-white/70 hover:text-[#FF6B35] transition-colors">Servicing</Link></li>
              <li><Link href="/services" className="block text-white/70 hover:text-[#FF6B35] transition-colors">Plumbing</Link></li>
              <li><Link href="/services" className="block text-white/70 hover:text-[#FF6B35] transition-colors">Emergency Callouts</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/reviews" className="block text-white/70 hover:text-[#FF6B35] transition-colors">Reviews</Link></li>
              <li><Link href="/#book-now" className="block text-white/70 hover:text-[#FF6B35] transition-colors">Book Online</Link></li>
              <li><Link href="/contact" className="block text-white/70 hover:text-[#FF6B35] transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-white/70">Based in Sutton, Surrey</p>
              <p className="text-white/70">Mobile: <a href="tel:07921064352" className="text-[#FF6B35] hover:text-white transition-colors">07921 064 352</a></p>
              <p className="text-white/70">Phone: <a href="tel:02080884352" className="text-[#FF6B35] hover:text-white transition-colors">0208 088 4352</a></p>
              <p className="text-white/70">Email: <a href="mailto:adam@ecoflame.info" className="text-[#FF6B35] hover:text-white transition-colors">adam@ecoflame.info</a></p>
              <p className="text-white/70">Available 24/7</p>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-white/10">
          <p>&copy; 2025 Eco Flame. All rights reserved. | Gas Safe Registered</p>
        </div>
      </footer>
    </div>
  )
}



