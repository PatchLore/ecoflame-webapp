import Link from "next/link";

const services = [
  {
    icon: "🔥",
    title: "Boiler Installation",
    description:
      "Professional installation and full system upgrades with leading boiler brands and manufacturer warranties for complete peace of mind.",
    features: [
      "New and replacement boiler installs",
      "Full heating system upgrades",
      "Smart thermostat setup",
      "Extended manufacturer warranties",
    ],
    ctaLabel: "Get an Installation Quote",
  },
  {
    icon: "🔧",
    title: "Boiler Repairs",
    description:
      "Rapid diagnostics and repairs to restore heating and hot water, with 24/7 emergency callouts available across London and Surrey.",
    features: [
      "Emergency breakdown response",
      "Certified Gas Safe engineers",
      "Genuine manufacturer parts",
      "Transparent pricing with no hidden fees",
    ],
    ctaLabel: "Book a Repair Visit",
  },
  {
    icon: "📋",
    title: "Boiler Servicing",
    description:
      "Annual servicing to maximise efficiency, extend lifespan, and maintain Gas Safe compliance for homeowners and landlords.",
    features: [
      "Full safety inspection",
      "Performance optimisation",
      "Energy efficiency reporting",
      "Landlord certificates available",
    ],
    ctaLabel: "Schedule Your Service",
  },
  {
    icon: "🚰",
    title: "Plumbing Services",
    description:
      "From leaks and burst pipes to full bathroom installations, our plumbers deliver tidy, reliable work on every job.",
    features: [
      "Leak diagnostics and repairs",
      "Bathroom & kitchen installations",
      "Pipework replacements",
      "Drainage and waste solutions",
    ],
    ctaLabel: "Request Plumbing Help",
  },
  {
    icon: "⚡",
    title: "Emergency Callouts 24/7",
    description:
      "Round-the-clock support for urgent heating and plumbing issues with target response times under 90 minutes.",
    features: [
      "No call-out fees",
      "24/7 availability",
      "Fully stocked vans",
      "Temporary heater provision",
    ],
    ctaLabel: "Call the Emergency Team",
  },
  {
    icon: "📄",
    title: "Landlord Gas Safety Certificates",
    description:
      "Fast EICR and Gas Safe certificates with digital paperwork sent directly to landlords and property managers.",
    features: [
      "CP12 certificates issued same-day",
      "Multi-property discounts",
      "Tenant-friendly appointment slots",
      "Reminder service for renewals",
    ],
    ctaLabel: "Book a Compliance Check",
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-28 md:pt-32 pb-24">
      <div className="max-w-3xl mb-12">
        <p className="text-sm uppercase tracking-[0.2em] text-[#FF6B35] mb-3">
          Our Services
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          Our Heating & Plumbing Services
        </h1>
        <p className="text-gray-600 leading-relaxed">
          EcoFlame delivers Gas Safe registered heating and plumbing across
          London and Surrey. From complex boiler installations to emergency
          repairs, our engineers arrive on time, respect your home, and leave
          everything tidy.
        </p>
      </div>

      <div className="grid gap-8 md:gap-10">
        {services.map((service) => (
          <section
            key={service.title}
            className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl md:text-4xl">{service.icon}</span>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-gray-600 mb-6 max-w-2xl leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="grid gap-2 text-gray-600 list-disc list-inside">
                    {service.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="md:min-w-[220px] flex md:flex-col gap-3">
                  <Link
                    href="/get-quote"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#FF6B35] text-white font-semibold shadow-lg shadow-orange-200 transition hover:bg-[#E15D2F]"
                  >
                    {service.ctaLabel}
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-200 text-[#1D3557] font-semibold transition hover:bg-gray-50"
                  >
                    Talk to the Team
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        <div className="bg-[#1D3557] text-white rounded-3xl p-8 shadow-xl">
          <h3 className="text-xl font-semibold mb-3">Why homeowners choose us</h3>
          <p className="text-white/80 leading-relaxed">
            Trusted by households across South London for reliable workmanship,
            honest pricing, and clear communication from booking to completion.
          </p>
        </div>
        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Serving London & Surrey</h3>
          <p className="text-gray-600 leading-relaxed">
            Croydon • Bromley • Sutton • Kingston • Epsom • Reigate • Dorking •
            Wimbledon • Richmond and surrounding areas.
          </p>
        </div>
        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Need urgent help?</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our engineers are on-call around the clock. Call now and we’ll aim to
            be with you in under 90 minutes.
          </p>
          <div className="flex flex-col gap-2">
            <a
              href="tel:07921064352"
              className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#FF6B35] text-white font-semibold shadow hover:bg-[#E15D2F]"
            >
              📞 07921 064 352
            </a>
            <a
              href="tel:02080884352"
              className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-gray-200 text-[#1D3557] font-semibold hover:bg-gray-50"
            >
              ☎️ 0208 088 4352
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
