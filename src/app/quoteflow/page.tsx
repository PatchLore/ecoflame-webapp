'use client'

import Link from 'next/link'

export default function QuoteFlowLandingPage() {
  return (
    <div className="overflow-x-hidden bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md px-[5%] py-6 flex justify-between items-center z-[1000] shadow-[0_2px_20px_rgba(0,0,0,0.05)]">
        <Link href="/" className="text-[1.8rem] font-extrabold bg-gradient-to-r from-[#0066FF] to-[#00D9FF] bg-clip-text text-transparent">
          FixBlox
        </Link>
        <ul className="hidden md:flex gap-10 list-none">
          <li><Link href="/" className="text-[#0A0E27] no-underline font-medium hover:after:w-full relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#0066FF] after:to-[#00D9FF] after:transition-all">Home</Link></li>
          <li><Link href="/quoteflow" className="text-[#0066FF] no-underline font-semibold">QuoteFlow</Link></li>
          <li><Link href="/contact" className="text-[#0A0E27] no-underline font-medium hover:after:w-full relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#0066FF] after:to-[#00D9FF] after:transition-all">Contact</Link></li>
        </ul>
        <Link href="/quoteflow/calculator" className="bg-gradient-to-r from-[#0066FF] to-[#00D9FF] text-white px-8 py-3 rounded-full font-semibold transition-all hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(0,102,255,0.3)] hover:shadow-[0_6px_25px_rgba(0,102,255,0.4)]">
          Try Calculator
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="mt-20 min-h-[90vh] flex items-center px-[5%] py-16 bg-gradient-to-br from-[#0A0E27] to-[#1a1f3a] relative overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,102,255,0.3)_0%,transparent_70%)] top-[-300px] right-[-300px] animate-[pulse_4s_ease-in-out_infinite]"></div>
        
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
          <div>
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-medium mb-6 border border-white/20">
              QuoteFlow by FixBlox
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight text-white mb-6">
              The Plumber&apos;s Lead <span className="bg-gradient-to-r from-[#0066FF] to-[#00D9FF] bg-clip-text text-transparent">Generation System</span>
            </h1>
            <p className="text-xl text-white/85 mb-8">
              Turn website visitors into paying customers with instant, transparent quotes. Capture qualified leads automatically and manage everything from your dashboard.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/quoteflow/calculator" className="bg-gradient-to-r from-[#0066FF] to-[#00D9FF] text-white px-10 py-4 rounded-full font-semibold text-lg transition-all hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,102,255,0.4)] hover:shadow-[0_15px_40px_rgba(0,102,255,0.5)] text-center">
                Try the Calculator
            </Link>
              <Link href="/contact" className="bg-transparent text-white px-10 py-4 rounded-full border-2 border-white font-semibold text-lg transition-all hover:bg-white hover:text-[#0A0E27] text-center">
                Get in Touch
            </Link>
          </div>

              </div>

          {/* Demo Preview */}
          <div className="bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <div className="text-sm text-[#8B92A7] mb-4 font-medium">Live Demo Preview</div>
            <div className="bg-gradient-to-b from-slate-50 to-white rounded-2xl p-6 border border-gray-100">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-xs text-[#8B92A7] mb-1">Service Selected</div>
                  <div className="text-lg font-bold text-[#0A0E27]">Emergency Leak Repair</div>
                  <div className="text-xs text-[#8B92A7]">SW1A 1AA • Same Day</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#8B92A7] mb-1">Estimated Total</div>
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-[#0066FF] to-[#00D9FF] bg-clip-text text-transparent">£194</div>
                </div>
              </div>

              <div className="space-y-2 text-sm mb-6">
                <div className="flex justify-between"><span className="text-[#8B92A7]">Base price</span><span className="font-medium">£120</span></div>
                <div className="flex justify-between"><span className="text-[#8B92A7]">Same day (+20%)</span><span className="font-medium">£24</span></div>
                <div className="flex justify-between"><span className="text-[#8B92A7]">Travel fee</span><span className="font-medium">£50</span></div>
              </div>

              <div className="bg-gradient-to-r from-[#0066FF] to-[#00D9FF] text-white py-3 px-4 rounded-xl text-center font-semibold">
                Send My Details →
              </div>
            </div>
            <p className="text-xs text-[#8B92A7] mt-4 text-center">This lead is sent to your admin dashboard</p>
          </div>
        </div>
      </section>

      {/* How It Works for Plumbers */}
      <section className="py-24 px-[5%] bg-[#F5F7FA]">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0A0E27]">How QuoteFlow Works for You</h2>
          <p className="text-xl text-[#8B92A7]">Simple lead generation system that works while you sleep</p>
                </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1400px] mx-auto">
          {[
            { num: '1', title: 'Customer Gets Quote', desc: 'Your potential customer visits your website (or our hosted page), fills out the calculator, and sees an instant transparent quote for their plumbing job.' },
            { num: '2', title: 'You Get the Lead', desc: 'When they submit their details, you receive an instant notification with all job details, their contact info, and the quote amount. Everything you need to close the deal.' },
            { num: '3', title: 'Manage from Dashboard', desc: 'Track all your leads in the admin dashboard. Update job status, export to CSV, and keep everything organized. No more spreadsheets or missed opportunities.' }
          ].map((step, index) => (
            <div key={index} className="text-center bg-white p-8 rounded-2xl">
              <div className="w-[90px] h-[90px] bg-gradient-to-r from-[#0066FF] to-[#00D9FF] rounded-full flex items-center justify-center text-[2.5rem] font-extrabold text-white mx-auto mb-6 shadow-[0_10px_30px_rgba(0,102,255,0.3)]">
                {step.num}
              </div>
              <h3 className="text-2xl mb-4 text-[#0A0E27] font-bold">{step.title}</h3>
              <p className="text-[#8B92A7] leading-[1.7]">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-[5%] bg-white">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0A0E27]">Everything You Need to Close More Jobs</h2>
          <p className="text-xl text-[#8B92A7]">QuoteFlow handles the hard work so you can focus on plumbing</p>
              </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          {[
            { icon: '⚡', title: 'Instant Calculations', desc: 'Base prices, urgency multipliers, and travel fees calculated in real-time. Your customers see transparent pricing immediately.' },
            { icon: '📧', title: 'Auto Lead Notifications', desc: 'Get email alerts the moment a customer submits their details. Never miss a hot lead again.' },
            { icon: '📊', title: 'Built-in Dashboard', desc: 'Manage all your leads from one central dashboard. Filter, search, update status, and export to CSV.' },
            { icon: '🎨', title: 'Customizable Pricing', desc: 'Set your own base prices, urgency rates, and service areas. QuoteFlow adapts to your business model.' },
            { icon: '📱', title: 'Mobile Optimized', desc: '70% of quotes happen on mobile. QuoteFlow looks perfect on every device and screen size.' },
            { icon: '🔒', title: 'Secure & Reliable', desc: 'Built on enterprise-grade infrastructure. Your data is secure, and the platform is always available 24/7.' }
          ].map((feature, index) => (
            <div key={index} className="flex gap-4 p-6 bg-[#F5F7FA] rounded-2xl hover:-translate-y-1 transition-all">
              <div className="text-4xl">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-[#0A0E27] mb-2">{feature.title}</h3>
                <p className="text-[#8B92A7] leading-[1.6]">{feature.desc}</p>
              </div>
            </div>
          ))}
          </div>
      </section>

      {/* Plumber Testimonials */}
      <section className="py-24 px-[5%] bg-[#F5F7FA]">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0A0E27]">Trusted by Professional Plumbers</h2>
          <p className="text-xl text-[#8B92A7]">See what tradespeople are saying about QuoteFlow</p>
                  </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          {[
            { name: 'James Mitchell', role: 'Licensed Plumber', location: 'Birmingham', initial: 'J', quote: 'QuoteFlow has transformed my business. I get quality leads instantly and customers love the transparent pricing. Booking rate has doubled since I started using it.' },
            { name: 'Sarah Thompson', role: 'Master Plumber', location: 'Manchester', initial: 'S', quote: 'The platform handles all the admin work - instant quotes, booking confirmations, everything. I can focus on what I do best: plumbing. Highly recommend to fellow tradespeople.' },
            { name: 'David Patel', role: 'Heating Engineer', location: 'London', initial: 'D', quote: 'No more back-and-forth emails or missed calls. QuoteFlow brings me customers who are ready to book. The quote calculator is spot-on and saves me hours every week.' }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-10 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <div className="text-[#FFD700] mb-4 text-xl">★★★★★</div>
              <p className="text-lg leading-[1.8] text-[#0A0E27] mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-[55px] h-[55px] bg-gradient-to-r from-[#0066FF] to-[#00D9FF] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="text-[#0A0E27] font-semibold">{testimonial.name}</h4>
                  <p className="text-[#8B92A7] text-sm">{testimonial.role} • {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-[5%] bg-white">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0A0E27]">Simple, Transparent Pricing</h2>
          <p className="text-xl text-[#8B92A7]">Professional pricing for professional solutions.</p>
        </div>

        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Starter Plan */}
          <div className="bg-[#F5F7FA] p-10 rounded-3xl border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-[#0A0E27] mb-2">Starter</h3>
            <div className="mb-6">
              <span className="text-5xl font-extrabold bg-gradient-to-r from-[#0066FF] to-[#00D9FF] bg-clip-text text-transparent">£29</span>
              <span className="text-[#8B92A7]">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-[#0A0E27]"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> Unlimited quotes</li>
              <li className="flex items-center gap-2 text-[#0A0E27]"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> Email notifications</li>
              <li className="flex items-center gap-2 text-[#0A0E27]"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> Admin dashboard</li>
              <li className="flex items-center gap-2 text-[#0A0E27]"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> Basic support</li>
            </ul>
            <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#0066FF] to-[#00D9FF] text-white px-6 py-4 rounded-full font-semibold transition-all hover:-translate-y-0.5 shadow-lg">
              Get Started
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="bg-white p-10 rounded-3xl border-2 border-[#0066FF] relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0066FF] to-[#00D9FF] text-white px-4 py-1 rounded-full text-sm font-bold">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold text-[#0A0E27] mb-2">Pro</h3>
            <div className="mb-6">
              <span className="text-5xl font-extrabold bg-gradient-to-r from-[#0066FF] to-[#00D9FF] bg-clip-text text-transparent">£79</span>
              <span className="text-[#8B92A7]">/month</span>
              </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-[#0A0E27]"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> Everything in Starter</li>
              <li className="flex items-center gap-2 text-[#0A0E27]"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> Custom domain</li>
              <li className="flex items-center gap-2 text-[#0A0E27]"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> Custom branding</li>
              <li className="flex items-center gap-2 text-[#0A0E27]"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> Priority support</li>
              <li className="flex items-center gap-2 text-[#0A0E27]"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> Advanced analytics</li>
            </ul>
            <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#0066FF] to-[#00D9FF] text-white px-6 py-4 rounded-full font-semibold transition-all hover:-translate-y-0.5 shadow-lg">
              Get Started
            </Link>
        </div>
      </div>

        <p className="text-center text-[#8B92A7] mt-12">
          Custom solutions tailored to your business needs
        </p>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-[5%] bg-gradient-to-br from-[#0A0E27] to-[#1a1f3a] text-center text-white relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,217,255,0.2)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[pulse_3s_ease-in-out_infinite]"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Ready to Start Generating Leads?</h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-[700px] mx-auto">
            Join hundreds of plumbers already using QuoteFlow to win more jobs and grow their business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quoteflow/calculator" className="inline-block bg-gradient-to-r from-[#0066FF] to-[#00D9FF] text-white px-12 py-5 rounded-full font-semibold text-lg transition-all hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,102,255,0.4)]">
              Try the Calculator
            </Link>
            <Link href="/contact" className="inline-block bg-transparent text-white px-12 py-5 rounded-full border-2 border-white font-semibold text-lg transition-all hover:bg-white hover:text-[#0A0E27]">
              Contact Us
            </Link>
          </div>
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
              <li><a href="tel:+447925990923" className="text-white/70 no-underline block transition-all hover:text-white hover:pl-1">07925990923</a></li>
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