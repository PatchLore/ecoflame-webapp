'use client'

import Link from 'next/link'

export default function TermsOfService() {
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
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to FixBlox. By purchasing and using our white-label web application solutions (including QuoteFlow, JobTracker, TradeHub, and any other applications we may offer), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not purchase or use our services.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms constitute a legally binding agreement between you (whether personally or on behalf of an entity) and FixBlox concerning your purchase and use of our white-label application solutions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Important:</strong> FixBlox provides white-label solutions on a one-time payment basis, not subscription services. You purchase a customized, branded application for your business use. These Terms reflect that business model.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">2. Description of Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              FixBlox provides white-label web application solutions designed specifically for tradespeople and trade businesses. We develop, customize, and deploy professional web applications that you can brand and operate as your own. Our white-label solutions include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>QuoteFlow:</strong> An instant quote calculator for plumbers with lead capture, email notifications, and admin dashboard functionality</li>
              <li><strong>JobTracker:</strong> Job management and scheduling tools (coming soon)</li>
              <li><strong>TradeHub:</strong> All-in-one business management platform (coming soon)</li>
              <li><strong>Custom Branding:</strong> Your business name, logo, colors, and domain</li>
              <li><strong>Deployment:</strong> Hosting and setup of your customized application</li>
              <li><strong>Initial Support:</strong> Technical support and maintenance as outlined in your service agreement</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Each solution is purchased as a one-time white-label product that is customized to your specifications and deployed under your branding. You own the right to use and operate your customized application for your business.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">3. User Accounts and Registration</h2>
            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">3.1 Account Creation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              To access certain features of our services, you may be required to create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities that occur under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">3.2 Eligibility</h3>
            <p className="text-gray-700 leading-relaxed">
              You must be at least 18 years old and have the legal capacity to enter into contracts to use our services. By using our services, you represent and warrant that you meet these requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">4. Acceptable Use</h2>
            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">4.1 Permitted Use</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may use our services only for lawful purposes and in accordance with these Terms. Our services are intended for use by trade professionals and businesses to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Generate quotes and estimates for trade services</li>
              <li>Capture and manage customer leads</li>
              <li>Manage jobs and business operations</li>
              <li>Communicate with customers</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">4.2 Prohibited Activities</h3>
            <p className="text-gray-700 leading-relaxed mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Use the services for any illegal purpose or in violation of any laws</li>
              <li>Impersonate any person or entity or falsely state or misrepresent your affiliation</li>
              <li>Attempt to gain unauthorized access to any portion of the services or any other systems or networks</li>
              <li>Interfere with or disrupt the services or servers or networks connected to the services</li>
              <li>Use any automated means to access the services for any purpose without our express written permission</li>
              <li>Transmit any viruses, worms, defects, Trojan horses, or any items of a destructive nature</li>
              <li>Remove, circumvent, disable, damage or interfere with security-related features</li>
              <li>Use the services to send spam or unsolicited communications</li>
              <li>Collect or harvest any information from the services for unauthorized purposes</li>
              <li>Reverse engineer, decompile, or disassemble any aspect of the services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">5. Intellectual Property Rights</h2>
            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">5.1 FixBlox Platform and Code</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The underlying platform, source code, software architecture, and core functionality of our applications remain the intellectual property of FixBlox and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws. FixBlox retains all ownership rights to the base platform and code.
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">5.2 Your White-Label License</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Upon full payment and delivery of your white-label solution, FixBlox grants you a perpetual, non-exclusive, non-transferable license to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Use, operate, and publicly display your customized application</li>
              <li>Brand the application with your business name, logo, and identity</li>
              <li>Collect and process data from your customers through the application</li>
              <li>Modify configuration settings and content within the application&apos;s user interface</li>
              <li>Use the application for your business operations indefinitely</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Restrictions:</strong> You may not:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Resell, redistribute, or sublicense the application to third parties</li>
              <li>Access or modify the underlying source code</li>
              <li>Reverse engineer, decompile, or disassemble the application</li>
              <li>Remove or alter any proprietary notices in the code</li>
              <li>Use the application to create competing products or services</li>
              <li>Transfer your license to another party without written consent from FixBlox</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">5.3 Your Branding and Content</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You retain all rights to your business name, logo, branding materials, and any content you create or upload to your white-label application. By providing these materials to us for customization, you grant FixBlox a limited license to incorporate them into your white-label solution.
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">5.4 Your Customer Data</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You own all data collected through your white-label application, including customer information, leads, quotes, and business data. FixBlox does not claim ownership of your customer data.
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">5.5 Feedback and Improvements</h3>
            <p className="text-gray-700 leading-relaxed">
              If you provide us with feedback, suggestions, or ideas regarding the platform or services, you grant FixBlox the right to use, incorporate, and implement such feedback in our products without any obligation or compensation to you. Any improvements, updates, or enhancements made to the base platform remain the property of FixBlox.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">6. Pricing and Payment</h2>
            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">6.1 White-Label Pricing Model</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              FixBlox operates on a one-time payment model for white-label web application solutions. You pay once to receive a fully customized, branded application deployed for your business. Pricing varies depending on:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>The specific application selected (QuoteFlow, JobTracker, TradeHub, etc.)</li>
              <li>Customization and feature requirements</li>
              <li>Branding and design specifications</li>
              <li>Integration requirements</li>
              <li>Support and maintenance packages (optional)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              All fees will be clearly communicated in a written quote before purchase. There are no recurring subscription fees for the white-label solution itself.
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">6.2 Payment Terms</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Payment terms will be outlined in your service agreement and may include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Full payment upfront before development begins</li>
              <li>Deposit payment with balance due before deployment, or</li>
              <li>Milestone-based payments as specified in your agreement</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Payment methods accepted will be specified during the purchase process. All payments are processed securely.
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">6.3 Third-Party Costs</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              While you pay once for your white-label solution, you are responsible for ongoing third-party costs associated with operating your application, which may include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Domain registration and renewal fees</li>
              <li>Web hosting and server costs (if self-hosted)</li>
              <li>Email delivery service fees (e.g., for sending lead notifications)</li>
              <li>Database hosting fees (e.g., Supabase)</li>
              <li>SSL certificate costs (if applicable)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              These third-party costs are separate from your one-time payment to FixBlox and are paid directly to the respective service providers.
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">6.4 Refunds</h3>
            <p className="text-gray-700 leading-relaxed">
              Due to the customized nature of white-label solutions, refund policies will be specified in your individual service agreement. Generally:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Full refunds may be available if requested before customization work begins</li>
              <li>Partial refunds may be available based on work completed</li>
              <li>No refunds are available after your application has been deployed and delivered</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">7. White-Label Delivery and Support</h2>
            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">7.1 Customization and Deployment</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Once you purchase a white-label solution, we will:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Customize the application with your branding (business name, logo, colors)</li>
              <li>Configure the application according to your specifications</li>
              <li>Deploy the application to your chosen hosting environment or ours</li>
              <li>Connect your custom domain (if provided)</li>
              <li>Provide initial training and documentation</li>
              <li>Conduct testing and quality assurance</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Timelines for customization and deployment will be outlined in your service agreement.
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">7.2 Application Availability</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Once deployed, your white-label application operates independently under your control. If we host your application, we strive to maintain high availability. However, we do not guarantee 100% uptime and may experience occasional downtime for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Scheduled maintenance and updates</li>
              <li>Security patches and critical fixes</li>
              <li>Circumstances beyond our reasonable control</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              We will make reasonable efforts to notify you of scheduled maintenance in advance.
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">7.3 Support and Maintenance</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Support services will be provided as outlined in your individual service agreement, which may include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Initial Support Period:</strong> Typically 30-90 days of included support after deployment</li>
              <li><strong>Technical Assistance:</strong> Help with configuration, troubleshooting, and basic questions</li>
              <li><strong>Bug Fixes:</strong> Resolution of defects in the core functionality</li>
              <li><strong>Extended Support:</strong> Optional ongoing support packages available for purchase</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can contact us at adam@ecoflame.info or +44 7925 990923 for support during your support period.
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">7.4 Updates and Enhancements</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Critical security updates and bug fixes will be applied to your white-label application during your support period. Major feature updates, enhancements, or version upgrades may be available as optional paid upgrades.
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">7.5 Modifications to Your Application</h3>
            <p className="text-gray-700 leading-relaxed">
              Additional customization, feature additions, or design changes to your deployed white-label application may be available for an additional fee. Contact us to discuss custom development requests.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">8. Data and Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your use of our services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection, use, and disclosure of your information.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">9. Disclaimers and Limitations of Liability</h2>
            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">9.1 &quot;As Is&quot; Basis</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              THE SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE.
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">9.2 Limitation of Liability</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, FIXBLOX SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Your use or inability to use the services</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any interruption or cessation of transmission to or from the services</li>
              <li>Any bugs, viruses, or the like that may be transmitted through the services by any third party</li>
              <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the services</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">9.3 Limitation Amount</h3>
            <p className="text-gray-700 leading-relaxed">
              In no event shall our total liability to you for all damages, losses, and causes of action exceed the amount paid by you to FixBlox in the twelve (12) months prior to the claim, or £100, whichever is greater.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">10. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to defend, indemnify, and hold harmless FixBlox and its officers, directors, employees, contractors, agents, licensors, and suppliers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating to your violation of these Terms or your use of the services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">11. Third-Party Links and Services</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services may contain links to third-party websites or services that are not owned or controlled by FixBlox. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. We encourage you to review the terms and privacy policies of any third-party websites or services that you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">12. Termination and License Revocation</h2>
            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">12.1 Your White-Label License</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Once you have paid in full and received your white-label application, your perpetual license to use that application remains in effect indefinitely, subject to compliance with these Terms. You may stop using the application at any time.
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">12.2 License Revocation by FixBlox</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to revoke your license and access to your white-label application immediately, without prior notice or refund, if:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>You materially breach these Terms (e.g., attempting to resell, reverse engineer, or access the source code)</li>
              <li>You use the application for illegal purposes or in violation of applicable laws</li>
              <li>You engage in fraudulent activity or misrepresentation</li>
              <li>Required by law enforcement or other government agencies</li>
              <li>The application is being used in a manner that creates security risks or legal liability for FixBlox</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">12.3 Hosted Services Termination</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If FixBlox hosts your white-label application, we may terminate hosting services with 30 days&apos; written notice if:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>You fail to pay any ongoing hosting or support fees (if applicable)</li>
              <li>We discontinue hosting services generally</li>
              <li>Required for security, technical, or legal reasons</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              In such cases, we will provide you with your application data and reasonable assistance to migrate to your own hosting environment.
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">12.4 Data Export</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Upon termination or discontinuation, you have the right to export your customer data from the application. We will provide reasonable assistance with data export during your support period or for a reasonable fee thereafter.
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">12.5 Effect of Termination</h3>
            <p className="text-gray-700 leading-relaxed">
              Upon termination, all provisions of these Terms which by their nature should survive shall survive, including but not limited to intellectual property provisions, warranty disclaimers, indemnity obligations, and limitations of liability. Your license to use the white-label application will cease, and you must stop using the application immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">13. Governing Law and Dispute Resolution</h2>
            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">13.1 Governing Law</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">13.2 Dispute Resolution</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Any disputes arising out of or relating to these Terms or the services shall be resolved through good faith negotiations. If the parties cannot resolve the dispute through negotiation, the dispute shall be resolved by the courts of England and Wales.
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">13.3 Jurisdiction</h3>
            <p className="text-gray-700 leading-relaxed">
              You agree to submit to the personal jurisdiction of the courts located in England and Wales for the purpose of litigating all such claims or disputes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">14. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. If we make material changes to these Terms, we will notify you by email (if you have provided one) or by posting a notice on our website prior to the effective date of the changes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Your continued use of the services after the effective date of any changes constitutes your acceptance of the new Terms. If you do not agree to the modified Terms, you must stop using the services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">15. General Provisions</h2>
            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">15.1 Entire Agreement</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms, together with our Privacy Policy and any other agreements expressly incorporated by reference, constitute the entire agreement between you and FixBlox regarding the use of the services.
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">15.2 Severability</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If any provision of these Terms is found to be invalid or unenforceable, that provision shall be enforced to the maximum extent possible, and the other provisions of these Terms will remain in full force and effect.
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">15.3 Waiver</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or any other term, and FixBlox&apos;s failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision.
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">15.4 Assignment</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may not assign or transfer these Terms or your rights hereunder, in whole or in part, without our prior written consent. We may assign these Terms at any time without notice to you.
            </p>

            <h3 className="text-xl font-semibold text-[#0A0E27] mb-3">15.5 Force Majeure</h3>
            <p className="text-gray-700 leading-relaxed">
              We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, war, riot, embargoes, acts of civil or military authorities, fire, floods, accidents, strikes, or shortages of transportation facilities, fuel, energy, labor, or materials.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0E27] mb-4">16. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>FixBlox</strong></p>
              <p className="text-gray-700 mb-2">Email: <a href="mailto:adam@ecoflame.info" className="text-[#0066FF] hover:underline">adam@ecoflame.info</a></p>
              <p className="text-gray-700 mb-2">Phone: <a href="tel:+447925990923" className="text-[#0066FF] hover:underline">+44 7925 990923</a></p>
              <p className="text-gray-700">Website: <a href="https://fixblox.com" className="text-[#0066FF] hover:underline">https://fixblox.com</a></p>
            </div>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-gray-600 text-sm">
              By using FixBlox services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
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

