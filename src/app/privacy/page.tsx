'use client'

import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md px-[5%] py-6 flex justify-between items-center z-[1000] shadow-[0_2px_20px_rgba(0,0,0,0.05)]">
        <Link href="/" className="text-[1.8rem] font-extrabold bg-gradient-to-r from-[#0066FF] to-[#00D9FF] bg-clip-text text-transparent">
          FixBlox
        </Link>
        <Link href="/" className="bg-gradient-to-r from-[#0066FF] to-[#00D9FF] text-white px-8 py-3 rounded-full font-semibold transition-all hover:-translate-y-0.5">
          Back to Home
        </Link>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-[5%] py-32">
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#0066FF] to-[#00D9FF] bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to FixBlox. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you purchase and use our white-label web application solutions, including QuoteFlow, JobTracker, TradeHub, and when you visit our website.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Important Note on White-Label Services:</strong> FixBlox provides white-label application solutions on a one-time purchase basis. When you purchase a white-label solution, you become the data controller for any customer data collected through your branded application. FixBlox processes your business information and may act as a data processor for your customer data during the provision of hosting and support services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Please read this Privacy Policy carefully. By purchasing or using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect several types of information from and about users of our services:
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">2.1 Information You Provide Directly</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information that you provide directly when you:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Create an account:</strong> Name, email address, phone number, business name, trade type, password</li>
              <li><strong>Use QuoteFlow or other services:</strong> Customer information (names, addresses, contact details), service details, pricing configurations, job descriptions</li>
              <li><strong>Submit inquiries:</strong> Contact form submissions, support requests, feedback</li>
              <li><strong>Subscribe to communications:</strong> Email address for newsletters or updates</li>
              <li><strong>Make payments:</strong> Billing information (processed through secure third-party payment processors)</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">2.2 Lead and Customer Data</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When your customers use QuoteFlow or other services to request quotes, we collect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Customer name and contact information</li>
              <li>Service address and property details</li>
              <li>Service requirements and specifications</li>
              <li>Quote details and pricing information</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">2.3 Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you access our services, we automatically collect certain information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Usage Data:</strong> Pages visited, features used, time spent, navigation paths</li>
              <li><strong>Device Information:</strong> IP address, browser type and version, device type, operating system</li>
              <li><strong>Location Data:</strong> General location based on IP address</li>
              <li><strong>Log Data:</strong> Access times, error logs, performance data</li>
              <li><strong>Cookies and Similar Technologies:</strong> See Section 6 for details</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">2.4 Information from Third Parties</h3>
            <p className="text-gray-700 leading-relaxed">
              We may receive information about you from third-party services we use to provide our services, such as:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Payment processors (transaction information)</li>
              <li>Authentication services</li>
              <li>Email delivery services</li>
              <li>Analytics providers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">3.1 Service Delivery</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Provide, operate, and maintain our services</li>
              <li>Process quotes and manage customer leads</li>
              <li>Send email notifications for new leads and updates</li>
              <li>Enable communication between you and your customers</li>
              <li>Process payments and manage billing</li>
              <li>Provide customer support and respond to inquiries</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">3.2 Service Improvement</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Understand and analyze how you use our services</li>
              <li>Develop new products, services, and features</li>
              <li>Improve and optimize our services and user experience</li>
              <li>Conduct research and analytics</li>
              <li>Debug and fix technical issues</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">3.3 Communication</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Send you service-related communications and updates</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Notify you about changes to our services or policies</li>
              <li>Provide training and educational materials</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">3.4 Security and Legal Compliance</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Detect, prevent, and address fraud and security issues</li>
              <li>Protect against malicious, deceptive, or illegal activity</li>
              <li>Enforce our Terms of Service and other policies</li>
              <li>Comply with legal obligations and respond to legal requests</li>
              <li>Resolve disputes and protect our legal rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">4. How We Share Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, rent, or trade your personal information. We may share your information in the following circumstances:
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">4.1 Service Providers</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We share information with third-party service providers who perform services on our behalf:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Supabase:</strong> Database and authentication services</li>
              <li><strong>Email Service Providers:</strong> To send notifications and communications</li>
              <li><strong>Payment Processors:</strong> To process payments securely</li>
              <li><strong>Cloud Hosting Providers:</strong> To host our applications and data</li>
              <li><strong>Analytics Providers:</strong> To analyze usage and improve our services</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              These service providers are contractually bound to protect your information and may only use it for the purposes we specify.
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">4.2 Business Transfers</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If we are involved in a merger, acquisition, sale of assets, or bankruptcy, your information may be transferred as part of that transaction. We will notify you of any such change and any choices you may have.
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">4.3 Legal Requirements</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may disclose your information if required to do so by law or in response to valid requests by public authorities, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>To comply with legal obligations, court orders, or legal processes</li>
              <li>To protect and defend our rights or property</li>
              <li>To prevent or investigate possible wrongdoing</li>
              <li>To protect the personal safety of users or the public</li>
              <li>To protect against legal liability</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">4.4 With Your Consent</h3>
            <p className="text-gray-700 leading-relaxed">
              We may share your information with third parties when we have your explicit consent to do so.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">5. Data Storage and Security</h2>
            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">5.1 Data Storage</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your information is stored on secure servers provided by our cloud hosting partners. We use Supabase for database services, which stores data in secure, professionally managed data centers.
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">5.2 Security Measures</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Encryption of data in transit (HTTPS/TLS)</li>
              <li>Encryption of sensitive data at rest</li>
              <li>Secure authentication and access controls</li>
              <li>Regular security assessments and updates</li>
              <li>Employee training on data protection</li>
              <li>Restricted access to personal information</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">5.3 Data Retention</h3>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">6. Cookies and Tracking Technologies</h2>
            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">6.1 What Are Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies are small text files stored on your device when you visit our website. We use cookies and similar tracking technologies to track activity on our services and store certain information.
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">6.2 Types of Cookies We Use</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Essential Cookies:</strong> Required for the operation of our services (authentication, security)</li>
              <li><strong>Functional Cookies:</strong> Enable enhanced functionality and personalization (preferences, settings)</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our services (usage patterns, popular features)</li>
              <li><strong>Performance Cookies:</strong> Monitor performance and identify technical issues</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">6.3 Managing Cookies</h3>
            <p className="text-gray-700 leading-relaxed">
              Most web browsers allow you to control cookies through their settings. However, if you disable cookies, some features of our services may not function properly. You can usually find cookie controls in your browser&apos;s privacy or security settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">7. Your Data Protection Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">7.1 Access and Portability</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to request access to the personal information we hold about you and to receive a copy of that information in a portable format.
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">7.2 Correction</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to request that we correct any inaccurate or incomplete personal information about you.
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">7.3 Deletion</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to request that we delete your personal information, subject to certain exceptions (e.g., legal obligations, legitimate business purposes).
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">7.4 Restriction and Objection</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Restrict the processing of your personal information in certain circumstances</li>
              <li>Object to the processing of your personal information for direct marketing purposes</li>
              <li>Withdraw consent where we rely on consent to process your information</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">7.5 Exercising Your Rights</h3>
            <p className="text-gray-700 leading-relaxed">
              To exercise any of these rights, please contact us at adam@ecoflame.info. We will respond to your request within a reasonable timeframe and in accordance with applicable law. You may also have the right to lodge a complaint with a data protection authority.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">8. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from the laws in your country.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When we transfer your information internationally, we take appropriate safeguards to ensure your information is protected in accordance with this Privacy Policy and applicable data protection laws. This may include using standard contractual clauses approved by relevant authorities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">9. Children&apos;s Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If we become aware that we have collected personal information from a child under 18 without verification of parental consent, we will take steps to delete that information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">10. Marketing Communications</h2>
            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">10.1 Opt-In</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may send you marketing communications about our services, new features, and special offers if you have opted in to receive such communications or where we have a legitimate interest and you have not opted out.
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">10.2 Opt-Out</h3>
            <p className="text-gray-700 leading-relaxed">
              You can opt out of receiving marketing communications at any time by:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Clicking the &quot;unsubscribe&quot; link in any marketing email</li>
              <li>Adjusting your account communication preferences</li>
              <li>Contacting us at adam@ecoflame.info</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Please note that even if you opt out of marketing communications, we will still send you service-related communications that are necessary for the operation of your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">11. Third-Party Websites and Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our services may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these third parties. We encourage you to read the privacy policies of any third-party websites or services you visit or use.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When you use third-party services through our platform (such as payment processors), those services may collect information about you in accordance with their own privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">12. Data Controller and Processor Relationships</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The data controller/processor relationship varies depending on the type of data and context:
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">12.1 Your Business Information (FixBlox as Controller)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              For data you provide about yourself and your business during the purchase process and account setup, FixBlox is the data controller responsible for processing:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Your contact information (name, email, phone number)</li>
              <li>Business details (business name, trade type)</li>
              <li>Payment information (billing details)</li>
              <li>Communications with FixBlox</li>
              <li>Support tickets and inquiries</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">12.2 Customer Lead Data (You as Controller, FixBlox as Processor)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              For customer lead data collected through your white-label application (such as QuoteFlow):
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>You are the data controller:</strong> You determine what data is collected, how it&apos;s used, and how long it&apos;s retained</li>
              <li><strong>FixBlox acts as a data processor:</strong> We provide the technical infrastructure and may process this data on your behalf when hosting or supporting your application</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Your Responsibilities as Data Controller:</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Ensure you have a lawful basis to collect and process customer data</li>
              <li>Provide appropriate privacy notices to your customers</li>
              <li>Respond to data subject access requests from your customers</li>
              <li>Comply with UK GDPR, Data Protection Act 2018, and other applicable privacy laws</li>
              <li>Implement appropriate security measures for customer data</li>
              <li>Notify affected individuals and authorities of any data breaches</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">12.3 Data Processing Agreement</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When FixBlox hosts your white-label application and processes customer data on your behalf, we act as your data processor. A Data Processing Agreement (DPA) may be included in your service agreement or available upon request, which outlines:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>The nature and purpose of data processing</li>
              <li>Types of personal data processed</li>
              <li>Security measures implemented</li>
              <li>Our obligations as a data processor</li>
              <li>Your rights as a data controller</li>
              <li>Sub-processor arrangements (e.g., Supabase, hosting providers)</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">12.4 Data Independence</h3>
            <p className="text-gray-700 leading-relaxed">
              Once your white-label application is deployed, you have independent control over your customer data. You can export, delete, or transfer data at any time. FixBlox does not use, share, or analyze your customer data for any purpose other than providing the agreed services to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">13. California Privacy Rights (CCPA)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are a California resident, you have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Right to Know:</strong> You have the right to know what personal information we collect, use, disclose, and sell</li>
              <li><strong>Right to Delete:</strong> You have the right to request deletion of your personal information</li>
              <li><strong>Right to Opt-Out:</strong> You have the right to opt out of the sale of your personal information (we do not sell personal information)</li>
              <li><strong>Right to Non-Discrimination:</strong> You have the right not to receive discriminatory treatment for exercising your privacy rights</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To exercise these rights, contact us at adam@ecoflame.info. We will verify your identity before processing your request.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">14. UK GDPR and Data Protection</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are in the United Kingdom, the processing of your personal information is subject to the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018.
            </p>
            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">14.1 Legal Basis for Processing</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We process your personal information on the following legal bases:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Contract Performance:</strong> Processing necessary to provide our services</li>
              <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate business interests</li>
              <li><strong>Consent:</strong> Where you have given consent for specific processing activities</li>
              <li><strong>Legal Obligation:</strong> Processing necessary to comply with legal requirements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">15. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Posting the updated Privacy Policy on our website</li>
              <li>Updating the &quot;Last Updated&quot; date at the top of this policy</li>
              <li>Sending you an email notification (for significant changes)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">16. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>FixBlox</strong></p>
              <p className="text-gray-700 mb-2"><strong>Data Protection Contact</strong></p>
              <p className="text-gray-700 mb-2">Email: <a href="mailto:adam@ecoflame.info" className="text-[#0066FF] hover:underline">adam@ecoflame.info</a></p>
              <p className="text-gray-700 mb-2">Phone: <a href="tel:+447925990923" className="text-[#0066FF] hover:underline">+44 7925 990923</a></p>
              <p className="text-gray-700">Website: <a href="https://fixblox.com" className="text-[#0066FF] hover:underline">https://fixblox.com</a></p>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              We will respond to your inquiry as soon as possible, and in any case within the timeframes required by applicable law.
            </p>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-gray-600 text-sm mb-4">
              By using FixBlox services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Thank you for trusting FixBlox with your information.</strong> We are committed to protecting your privacy and handling your data responsibly.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0A0E27] text-white py-8 px-[5%]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="opacity-70">&copy; 2025 FixBlox. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <Link href="/terms" className="text-white/70 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

