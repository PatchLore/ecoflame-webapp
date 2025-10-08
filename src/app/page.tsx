'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="overflow-x-hidden bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md px-[5%] py-6 flex justify-between items-center z-[1000] shadow-[0_2px_20px_rgba(0,0,0,0.05)]">
        <Link href="/" className="text-[1.8rem] font-extrabold bg-gradient-to-r from-[#0066FF] to-[#00D9FF] bg-clip-text text-transparent">
          FixBlox
        </Link>
        <ul className="hidden md:flex gap-10 list-none">
          <li><a href="#apps" className="text-[#0A0E27] no-underline font-medium hover:after:w-full relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#0066FF] after:to-[#00D9FF] after:transition-all">Apps</a></li>
          <li><a href="#how-it-works" className="text-[#0A0E27] no-underline font-medium hover:after:w-full relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#0066FF] after:to-[#00D9FF] after:transition-all">How It Works</a></li>
          <li><Link href="/contact" className="text-[#0A0E27] no-underline font-medium hover:after:w-full relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#0066FF] after:to-[#00D9FF] after:transition-all">Contact</Link></li>
        </ul>
        <Link href="/quoteflow" className="bg-gradient-to-r from-[#0066FF] to-[#00D9FF] text-white px-8 py-3 rounded-full font-semibold transition-all hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(0,102,255,0.3)] hover:shadow-[0_6px_25px_rgba(0,102,255,0.4)]">
          Explore Apps
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="mt-20 min-h-[95vh] flex items-center px-[5%] py-16 bg-gradient-to-br from-[#0A0E27] to-[#1a1f3a] relative overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,102,255,0.3)_0%,transparent_70%)] top-[-300px] right-[-300px] animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,217,255,0.2)_0%,transparent_70%)] bottom-[-200px] left-[-200px] animate-[pulse_5s_ease-in-out_infinite]"></div>
        
        <div className="max-w-[1400px] mx-auto text-center relative z-10 w-full">
          <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-extrabold leading-tight text-white mb-6">
            Web App Solutions for <span className="bg-gradient-to-r from-[#0066FF] to-[#00D9FF] bg-clip-text text-transparent">Tradespeople</span>
            </h1>
          <p className="text-xl md:text-2xl text-white/85 mb-10 max-w-[800px] mx-auto">
            Professional web applications designed to streamline trade businesses. From instant quotes to job management — built specifically for the trades industry.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-full text-white font-semibold border border-white/20">
              💻 Modern Tech Stack
            </div>
            <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-full text-white font-semibold border border-white/20">
              📱 Mobile-First Design
            </div>
            <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-full text-white font-semibold border border-white/20">
              🚀 Quick Setup
            </div>
            <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-full text-white font-semibold border border-white/20">
              💼 Trade-Specific
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#apps" className="bg-gradient-to-r from-[#0066FF] to-[#00D9FF] text-white px-14 py-5 rounded-full font-semibold text-lg transition-all hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,102,255,0.4)] hover:shadow-[0_15px_40px_rgba(0,102,255,0.5)] inline-block">
              Explore Our Apps
            </a>
            <Link href="/contact" className="bg-transparent text-white px-14 py-5 rounded-full border-2 border-white font-semibold text-lg transition-all hover:bg-white hover:text-[#0A0E27] inline-block text-center">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-12 px-[5%] shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { number: '1000+', label: 'Active Tradespeople' },
            { number: '24/7', label: 'Platform Uptime' },
            { number: '100%', label: 'Cloud-Based' },
            { number: '4.9★', label: 'User Rating' }
          ].map((item, index) => (
            <div key={index}>
              <h3 className="text-[2.5rem] font-extrabold bg-gradient-to-r from-[#0066FF] to-[#00D9FF] bg-clip-text text-transparent mb-2">
                {item.number}
                </h3>
              <p className="text-[#8B92A7] font-medium">{item.label}</p>
              </div>
            ))}
        </div>
      </section>

      {/* Our Apps Section */}
      <section id="apps" className="py-24 px-[5%] bg-[#F5F7FA]">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0A0E27]">Our Web Applications</h2>
          <p className="text-xl text-[#8B92A7]">Industry-specific solutions designed to help your trade business grow</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          {/* QuoteFlow - Live */}
          <div className="bg-white p-10 rounded-[20px] border-2 border-[#0066FF] relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-gradient-to-r from-[#0066FF] to-[#00D9FF] text-white px-3 py-1 rounded-full text-xs font-bold">
              LIVE NOW
            </div>
            <div className="w-[70px] h-[70px] bg-gradient-to-r from-[#0066FF] to-[#00D9FF] rounded-[18px] flex items-center justify-center text-[2.2rem] mb-6">
              📊
            </div>
            <h3 className="text-2xl mb-4 text-[#0A0E27] font-bold">QuoteFlow</h3>
            <p className="text-[#8B92A7] leading-[1.7] mb-4">
              Instant quote calculator for plumbers. Give customers transparent pricing in 30 seconds, capture qualified leads, and manage jobs from your admin dashboard.
            </p>
            <ul className="space-y-2 text-sm text-[#8B92A7] mb-6">
              <li className="flex items-center gap-2">✓ Instant quote calculator</li>
              <li className="flex items-center gap-2">✓ Lead capture & notifications</li>
              <li className="flex items-center gap-2">✓ Admin dashboard included</li>
              <li className="flex items-center gap-2">✓ Mobile responsive</li>
            </ul>
            <Link href="/quoteflow" className="block w-full text-center bg-gradient-to-r from-[#0066FF] to-[#00D9FF] text-white px-6 py-3 rounded-full font-semibold transition-all hover:-translate-y-0.5 shadow-lg">
              Learn More →
            </Link>
          </div>
          
          {/* JobTracker - Coming Soon */}
          <div className="bg-white p-10 rounded-[20px] border-2 border-gray-200 relative opacity-75">
            <div className="absolute top-4 right-4 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">
              COMING SOON
              </div>
            <div className="w-[70px] h-[70px] bg-gradient-to-r from-[#0066FF] to-[#00D9FF] rounded-[18px] flex items-center justify-center text-[2.2rem] mb-6">
              🔧
            </div>
            <h3 className="text-2xl mb-4 text-[#0A0E27] font-bold">JobTracker</h3>
            <p className="text-[#8B92A7] leading-[1.7] mb-4">
              Job management and scheduling for electricians and builders. Track jobs, manage teams, and keep customers updated in real-time.
            </p>
            <ul className="space-y-2 text-sm text-[#8B92A7] mb-6">
              <li className="flex items-center gap-2">✓ Job scheduling calendar</li>
              <li className="flex items-center gap-2">✓ Team management</li>
              <li className="flex items-center gap-2">✓ Customer notifications</li>
              <li className="flex items-center gap-2">✓ Real-time updates</li>
            </ul>
            <Link href="/contact" className="block w-full text-center bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-semibold transition-all hover:bg-gray-200">
              Get Notified
            </Link>
            </div>
            
          {/* TradeHub - Coming Soon */}
          <div className="bg-white p-10 rounded-[20px] border-2 border-gray-200 relative opacity-75">
            <div className="absolute top-4 right-4 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">
              COMING SOON
            </div>
            <div className="w-[70px] h-[70px] bg-gradient-to-r from-[#0066FF] to-[#00D9FF] rounded-[18px] flex items-center justify-center text-[2.2rem] mb-6">
              💼
            </div>
            <h3 className="text-2xl mb-4 text-[#0A0E27] font-bold">TradeHub</h3>
            <p className="text-[#8B92A7] leading-[1.7] mb-4">
              All-in-one business management for trade contractors. Quotes, jobs, invoicing, payments, and customer management in one platform.
            </p>
            <ul className="space-y-2 text-sm text-[#8B92A7] mb-6">
              <li className="flex items-center gap-2">✓ Complete business suite</li>
              <li className="flex items-center gap-2">✓ Invoicing & payments</li>
              <li className="flex items-center gap-2">✓ Customer CRM</li>
              <li className="flex items-center gap-2">✓ Financial reporting</li>
            </ul>
            <Link href="/contact" className="block w-full text-center bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-semibold transition-all hover:bg-gray-200">
              Get Notified
            </Link>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 px-[5%] bg-white">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0A0E27]">Why Tradespeople Choose FixBlox</h2>
          <p className="text-xl text-[#8B92A7]">We build powerful tools that help you win more jobs and run your business efficiently</p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1400px] mx-auto">
          {[
            { icon: '🎯', title: 'Built for Traders', desc: 'Industry-specific solutions designed by people who understand your business. Each app is tailored to the unique needs of your trade.' },
            { icon: '⚡', title: 'Complete Solutions', desc: 'From lead generation to job completion and invoicing. Everything you need to run a modern trade business in one place.' },
            { icon: '💰', title: 'Simple One-Time Pricing', desc: 'Pay once, own it forever. No subscriptions, no hidden fees, and full access to your customised web app solution.' }
          ].map((prop, index) => (
            <div key={index} className="text-center p-8">
              <div className="w-[90px] h-[90px] bg-gradient-to-r from-[#0066FF] to-[#00D9FF] rounded-full flex items-center justify-center text-[2.5rem] mx-auto mb-6 shadow-[0_10px_30px_rgba(0,102,255,0.3)]">
                {prop.icon}
            </div>
              <h3 className="text-2xl mb-4 text-[#0A0E27] font-bold">{prop.title}</h3>
              <p className="text-[#8B92A7] leading-[1.7]">{prop.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-[5%] bg-[#F5F7FA]">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0A0E27]">How FixBlox Works</h2>
          <p className="text-xl text-[#8B92A7]">Get started with our platform in three simple steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1400px] mx-auto">
          {[
            { num: '1', title: 'Choose Your App', desc: 'Select the solution that fits your trade. QuoteFlow for plumbers, JobTracker for electricians, or TradeHub for complete business management.' },
            { num: '2', title: 'Quick Setup', desc: 'Create your account, customize your settings, and connect your business. Get up and running in minutes with our guided onboarding.' },
            { num: '3', title: 'Grow Your Business', desc: 'Start generating leads, managing jobs, and scaling your operations. All your tools in one powerful platform.' }
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-[90px] h-[90px] bg-gradient-to-r from-[#0066FF] to-[#00D9FF] rounded-full flex items-center justify-center text-[2.5rem] font-extrabold text-white mx-auto mb-6 shadow-[0_10px_30px_rgba(0,102,255,0.3)]">
                {step.num}
          </div>
              <h3 className="text-2xl mb-4 text-[#0A0E27] font-bold">{step.title}</h3>
              <p className="text-[#8B92A7] leading-[1.7]">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 px-[5%] bg-white">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0A0E27]">Built for Every Trade</h2>
          <p className="text-xl text-[#8B92A7]">Whether you&apos;re a plumber, electrician, builder, or contractor — we have solutions for you</p>
            </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1000px] mx-auto">
          {[
            { icon: '🔧', name: 'Plumbers' },
            { icon: '⚡', name: 'Electricians' },
            { icon: '🏗️', name: 'Builders' },
            { icon: '🛠️', name: 'Contractors' },
            { icon: '🏠', name: 'Renovators' },
            { icon: '🌡️', name: 'HVAC' },
            { icon: '🪟', name: 'Glaziers' },
            { icon: '🎨', name: 'Decorators' }
          ].map((trade, index) => (
            <div key={index} className="bg-[#F5F7FA] p-6 rounded-2xl text-center hover:bg-gradient-to-r hover:from-[#0066FF] hover:to-[#00D9FF] hover:text-white transition-all cursor-pointer group">
              <div className="text-4xl mb-2">{trade.icon}</div>
              <p className="font-semibold text-[#0A0E27] group-hover:text-white">{trade.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-[5%] bg-gradient-to-br from-[#0A0E27] to-[#1a1f3a] text-center text-white relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,217,255,0.2)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[pulse_3s_ease-in-out_infinite]"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold mb-4">Ready to Modernize Your Trade Business?</h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-[700px] mx-auto">
            Join hundreds of tradespeople already using FixBlox to generate more leads and streamline their operations
          </p>
          <Link href="/quoteflow" className="inline-block bg-gradient-to-r from-[#0066FF] to-[#00D9FF] text-white px-14 py-5 rounded-full font-semibold text-lg transition-all hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,102,255,0.4)] hover:shadow-[0_15px_40px_rgba(0,102,255,0.5)]">
            Start with QuoteFlow
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0E27] text-white py-16 px-[5%]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          <div>
            <h3 className="text-[1.8rem] font-extrabold bg-gradient-to-r from-[#0066FF] to-[#00D9FF] bg-clip-text text-transparent mb-4">
              FixBlox
            </h3>
            <p className="opacity-70 leading-[1.7]">
              Building powerful web applications for tradespeople. Modern solutions that help you win more jobs and grow your business.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Our Apps</h4>
            <ul className="space-y-2 list-none">
              <li><Link href="/quoteflow" className="text-white/70 no-underline block transition-all hover:text-white hover:pl-1">QuoteFlow (Plumbers)</Link></li>
              <li><Link href="/contact" className="text-white/70 no-underline block transition-all hover:text-white hover:pl-1">JobTracker (Soon)</Link></li>
              <li><Link href="/contact" className="text-white/70 no-underline block transition-all hover:text-white hover:pl-1">TradeHub (Soon)</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Company</h4>
            <ul className="space-y-2 list-none">
              <li><a href="#how-it-works" className="text-white/70 no-underline block transition-all hover:text-white hover:pl-1">How It Works</a></li>
              <li><a href="#apps" className="text-white/70 no-underline block transition-all hover:text-white hover:pl-1">Our Apps</a></li>
              <li><Link href="/contact" className="text-white/70 no-underline block transition-all hover:text-white hover:pl-1">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Support</h4>
            <ul className="space-y-2 list-none">
              <li><Link href="/contact" className="text-white/70 no-underline block transition-all hover:text-white hover:pl-1">Get in Touch</Link></li>
              <li><a href="mailto:info@fixblox.com" className="text-white/70 no-underline block transition-all hover:text-white hover:pl-1">info@fixblox.com</a></li>
              <li><a href="tel:+448001234567" className="text-white/70 no-underline block transition-all hover:text-white hover:pl-1">0800 123 4567</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center opacity-70">
          <p>&copy; 2025 FixBlox. Web app solutions for tradespeople. Built on Next.js, Supabase, and Vercel.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
      `}</style>
    </div>
  )
}