'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function JobTrackerPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // TODO: Add to waitlist in database
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md px-[5%] py-6 flex justify-between items-center z-[1000] shadow-[0_2px_20px_rgba(0,0,0,0.05)]">
        <Link href="/" className="text-[1.8rem] font-extrabold bg-gradient-to-r from-[#0066FF] to-[#00D9FF] bg-clip-text text-transparent">
          FixBlox
        </Link>
        <ul className="hidden md:flex gap-10 list-none">
          <li><Link href="/" className="text-[#0A0E27] no-underline font-medium hover:after:w-full relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#0066FF] after:to-[#00D9FF] after:transition-all">Home</Link></li>
          <li><Link href="/quoteflow" className="text-[#0A0E27] no-underline font-medium hover:after:w-full relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#0066FF] after:to-[#00D9FF] after:transition-all">QuoteFlow</Link></li>
          <li><Link href="/contact" className="text-[#0A0E27] no-underline font-medium hover:after:w-full relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#0066FF] after:to-[#00D9FF] after:transition-all">Contact</Link></li>
        </ul>
        <Link href="/" className="bg-gradient-to-r from-[#0066FF] to-[#00D9FF] text-white px-8 py-3 rounded-full font-semibold transition-all hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(0,102,255,0.3)]">
          Back to Home
        </Link>
      </nav>

      {/* Coming Soon Content */}
      <section className="mt-20 min-h-[90vh] flex items-center px-[5%] py-16 bg-gradient-to-br from-[#0A0E27] to-[#1a1f3a] relative overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,102,255,0.3)_0%,transparent_70%)] top-[-300px] right-[-300px] animate-[pulse_4s_ease-in-out_infinite]"></div>
        
        <div className="max-w-[800px] mx-auto text-center relative z-10 w-full">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#0066FF] to-[#00D9FF] text-white rounded-full text-sm font-bold mb-6">
            COMING SOON
          </div>
          
          <div className="w-[120px] h-[120px] bg-gradient-to-r from-[#0066FF] to-[#00D9FF] rounded-3xl flex items-center justify-center text-[4rem] mx-auto mb-8 shadow-[0_20px_50px_rgba(0,102,255,0.4)]">
            🔧
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white mb-6">
            JobTracker
          </h1>
          <p className="text-xl md:text-2xl text-white/85 mb-8">
            Job management and scheduling for electricians and builders. Track jobs, manage teams, and keep customers updated in real-time.
          </p>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">What to Expect:</h3>
            <ul className="space-y-3 text-left max-w-md mx-auto">
              {[
                '📅 Smart scheduling calendar',
                '👥 Team management tools',
                '📧 Automated customer notifications',
                '📊 Real-time job status tracking',
                '💼 Invoice & payment integration',
                '📱 Mobile app for on-the-go updates'
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-white/90">
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {!submitted ? (
            <form onSubmit={handleNotify} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md text-white placeholder-white/60 focus:outline-none focus:border-white"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#0066FF] to-[#00D9FF] text-white px-8 py-4 rounded-full font-semibold hover:-translate-y-0.5 transition-all shadow-lg whitespace-nowrap"
                >
                  Notify Me
                </button>
              </div>
              <p className="text-sm text-white/70 mt-4">Be the first to know when JobTracker launches</p>
            </form>
          ) : (
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 max-w-md mx-auto">
              <div className="text-4xl mb-3">✓</div>
              <p className="text-white font-semibold">Thanks! We&apos;ll notify you when JobTracker is ready.</p>
            </div>
          )}

          <div className="mt-12">
            <Link href="/" className="text-white/80 hover:text-white underline">
              ← Back to all FixBlox apps
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
      `}</style>
    </div>
  )
}



