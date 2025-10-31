'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface EcoFlameLayoutProps {
  children: ReactNode
}

export default function EcoFlameLayout({ children }: EcoFlameLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/EcoFlameNew.png" 
                alt="EcoFlame Logo" 
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-2xl font-bold text-[#1D3557]">EcoFlame</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-[#1D3557] hover:text-[#FF6B35] transition-colors">Home</Link>
              <Link href="#services" className="text-[#1D3557] hover:text-[#FF6B35] transition-colors">Services</Link>
              <Link href="#reviews" className="text-[#1D3557] hover:text-[#FF6B35] transition-colors">Reviews</Link>
              <Link href="#contact" className="text-[#1D3557] hover:text-[#FF6B35] transition-colors">Contact</Link>
              <div className="flex items-center gap-3">
                <a href="tel:07921064352" className="bg-gradient-to-br from-[#FF6B35] to-[#E63946] text-white px-6 py-2 rounded-full font-semibold transition-all hover:-translate-y-1">
                  Call Mobile
                </a>
                <a href="tel:02080884352" className="bg-gradient-to-br from-[#FF6B35] to-[#E63946] text-white px-6 py-2 rounded-full font-semibold transition-all hover:-translate-y-1">
                  Call 0208 088 4352
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0A0E27] text-white py-16">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image 
                  src="/EcoFlameNew.png" 
                  alt="EcoFlame Logo" 
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="text-2xl font-bold">EcoFlame</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional heating and plumbing services across London and Surrey. 
                Gas Safe registered, fully insured, and available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                <a href="tel:07921064352" className="text-[#FF6B35] hover:text-[#E63946] transition-colors">
                  📞 07921 064 352
                </a>
                <a href="tel:02080884352" className="text-[#FF6B35] hover:text-[#E63946] transition-colors">
                  ☎️ 0208 088 4352
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#services" className="hover:text-white transition-colors">Boiler Installation</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Boiler Repairs</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Boiler Servicing</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Plumbing Services</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Emergency Callouts</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>📞 07921 064 352</p>
                <p>☎️ 0208 088 4352</p>
                <p>📧 info@ecoflame.co.uk</p>
                <p>📍 Serving London & Surrey</p>
                <p>🛡️ Gas Safe Registered</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EcoFlame Heating Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
