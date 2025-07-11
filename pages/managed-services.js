import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import ContentSection from '../components/ContentSection';
import Link from 'next/link';

export default function ManagedServices() {
  return (
    <Layout title="Managed IT Services - MSQ IT">
      {/* Hero Section */}
      <PageHeader 
        title="Managed IT Services" 
        subtitle="Trusted, secure, and customer-focused IT support for your business"
        accentText="Proactive Support"
      />

      {/* Overview */}
      <ContentSection 
        id="overview"
        title="How We Support Your Business" 
        titleGradient={true}
        accentText="Our Approach"
      >
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="lead text-xl mb-6">
            At MSQ IT, we deliver trusted, secure, and customer-focused managed IT services with a strong emphasis on Microsoft technologies and cybersecurity.
          </p>
          
          <p className="mb-6">
            Our services are underpinned by ITIL good practice standards, ensuring reliable, consistent, and high-quality outcomes across every engagement. We proudly partner with industry experts and maintain our own certifications to provide clients with confidence in our capability, integrity, and commitment to excellence. Trust, security, and customer delight are at the core of everything we do.
          </p>
          
          <p className="mb-10">
            Our approach is built on objective, independent guidance tailored to match technology solutions with your specific business requirements. We don't offer one-size-fits-all answers — we carefully assess, advise, and implement solutions that truly serve your organisation's goals. From secure cloud adoption to modern workplace enablement, MSQ IT applies proven methodologies to deliver scalable, resilient, and efficient IT environments that grow with your business.
          </p>
          
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100 mb-10">
            <h3 className="text-xl font-semibold text-indigo-800 mb-3">The MSQ IT Difference</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span><strong className="text-indigo-700">Security-First Approach:</strong> We implement enterprise-grade security measures tailored for SMBs, protecting your business from evolving threats.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span><strong className="text-indigo-700">Proactive Management:</strong> We identify and resolve issues before they impact your business, minimizing downtime and disruption.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span><strong className="text-indigo-700">Dedicated Support Team:</strong> Our certified IT professionals provide personalized service with a deep understanding of your business.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span><strong className="text-indigo-700">Transparent Reporting:</strong> Regular performance reports and reviews keep you informed about your IT environment's health and security.</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* Services */}
      <ContentSection 
        id="services"
        title="Our Managed Services" 
        titleGradient={true}
        accentText="What We Offer"
        bgClass="bg-gradient-to-br from-indigo-50 to-purple-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {[
            {
              title: "Endpoint Management",
              description: "Comprehensive management of all your devices including Windows, macOS, and mobile devices with security, updates, and monitoring.",
              icon: "device"
            },
            {
              title: "Network Infrastructure",
              description: "Proactive monitoring and management of your network infrastructure to ensure optimal performance, security, and reliability.",
              icon: "network"
            },
            {
              title: "Cybersecurity",
              description: "Multi-layered security approach including threat detection, prevention, email security, and endpoint protection.",
              icon: "shield"
            },
            {
              title: "Cloud Services",
              description: "Expert management of your cloud environment including Microsoft 365, Azure, and other cloud platforms.",
              icon: "cloud"
            },
            {
              title: "24/7 IT Support",
              description: "Around-the-clock technical support for your team with multiple contact options and guaranteed response times.",
              icon: "support"
            },
            {
              title: "Strategic IT Planning",
              description: "Regular technology reviews and roadmapping to align your IT investments with business objectives and future growth.",
              icon: "strategy"
            }
          ].map((service, index) => (
            <div key={index} className="relative group transition-all duration-300 hover:-translate-y-2">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white p-6 rounded-lg border border-gray-200/50 shadow-xl h-full">
                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-glow text-white">
                  {service.icon === "device" && (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  {service.icon === "network" && (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  )}
                  {service.icon === "shield" && (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {service.icon === "cloud" && (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  )}
                  {service.icon === "support" && (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                  {service.icon === "strategy" && (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Service Levels section removed as requested */}

      {/* CTA */}
      <ContentSection 
        id="cta"
        bgClass="bg-gradient-to-br from-indigo-50 to-purple-50"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Ready for reliable IT support?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact us today for a free consultation to discuss how our managed IT services can help your business thrive with secure, reliable technology.
          </p>
          <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300">
            Get in Touch
            <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </ContentSection>
    </Layout>
  );
}
