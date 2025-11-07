'use client'

import React from "react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-28 md:pt-32 pb-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        Our Heating & Plumbing Services
      </h1>
      <p className="text-gray-600 mb-12 max-w-3xl">
        EcoFlame provides professional, Gas Safe registered heating and plumbing
        solutions across London & Surrey. From boiler installation to emergency
        repairs, our engineers deliver high-quality service with quick response
        times and competitive pricing.
      </p>

      <div className="space-y-16">

        {/* Boiler Installation */}
        <section>
          <div className="flex items-start gap-4 mb-4">
            <span className="text-3xl">🔥</span>
            <h2 className="text-2xl font-semibold text-gray-800">
              Boiler Installation
            </h2>
          </div>
          <p className="text-gray-600 mb-4">
            Professional boiler installation and full system upgrades. We supply
            and install all leading boiler brands with warranty coverage.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
            <li>New boiler installation</li>
            <li>Replacement of existing systems</li>
            <li>Full heating upgrades</li>
            <li>Manufacturer warranties included</li>
          </ul>
          <Link href="/get-quote" className="inline-block mt-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Get a Quote
          </Link>
        </section>

        {/* Boiler Repairs */}
        <section>
          <div className="flex items-start gap-4 mb-4">
            <span className="text-3xl">🔧</span>
            <h2 className="text-2xl font-semibold text-gray-800">Boiler Repairs</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Fast, reliable boiler repair services to restore heating and hot
            water in your home. Same-day emergency repairs available.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
            <li>Emergency boiler breakdown repairs</li>
            <li>Fault diagnostics</li>
            <li>Component replacements</li>
            <li>Same-day response available</li>
          </ul>
          <Link href="/get-quote" className="inline-block mt-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Book a Repair
          </Link>
        </section>

        {/* Boiler Servicing */}
        <section>
          <div className="flex items-start gap-4 mb-4">
            <span className="text-3xl">📋</span>
            <h2 className="text-2xl font-semibold text-gray-800">Boiler Servicing</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Annual servicing ensures your boiler runs safely and efficiently.
            Prevent breakdowns and prolong the lifespan of your system.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
            <li>Full annual boiler service</li>
            <li>Safety & performance checks</li>
            <li>Efficiency optimisation</li>
            <li>Preventive maintenance</li>
          </ul>
          <Link href="/get-quote" className="inline-block mt-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Schedule a Service
          </Link>
        </section>

        {/* Plumbing Services */}
        <section>
          <div className="flex items-start gap-4 mb-4">
            <span className="text-3xl">🚰</span>
            <h2 className="text-2xl font-semibold text-gray-800">Plumbing Services</h2>
          </div>
          <p className="text-gray-600 mb-4">
            From leaking pipes to bathroom installations, our plumbing engineers
            handle all domestic water and drainage issues with precision.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
            <li>Leak repairs</li>
            <li>Pipe installations</li>
            <li>Bathroom plumbing</li>
            <li>Drainage solutions</li>
          </ul>
          <Link href="/get-quote" className="inline-block mt-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Enquire Now
          </Link>
        </section>

        {/* Emergency Callouts */}
        <section>
          <div className="flex items-start gap-4 mb-4">
            <span className="text-3xl">⚡</span>
            <h2 className="text-2xl font-semibold text-gray-800">Emergency Callouts</h2>
          </div>
          <p className="text-gray-600 mb-4">
            24/7 emergency response for boiler breakdowns, leaks, burst pipes,
            and urgent heating issues. No call-out fee.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
            <li>24/7 availability</li>
            <li>Rapid response</li>
            <li>Emergency repairs</li>
            <li>No call-out charges</li>
          </ul>
          <Link href="/get-quote" className="inline-block mt-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Request Emergency Help
          </Link>
        </section>

        {/* Landlord Certificates */}
        <section>
          <div className="flex items-start gap-4 mb-4">
            <span className="text-3xl">📄</span>
            <h2 className="text-2xl font-semibold text-gray-800">
              Landlord Gas Safety Certificates
            </h2>
          </div>
          <p className="text-gray-600 mb-4">
            Certified Gas Safe inspections and documentation for rental
            properties. Fast, compliant, and reliable.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
            <li>Gas safety inspections</li>
            <li>Landlord compliance checks</li>
            <li>Property system assessments</li>
            <li>Official certification provided</li>
          </ul>
          <Link href="/get-quote" className="inline-block mt-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Book Inspection
          </Link>
        </section>

      </div>
    </div>
  );
}
