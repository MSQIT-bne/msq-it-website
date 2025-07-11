import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import ContentSection from '../components/ContentSection';
import Link from 'next/link';

export default function ERPConsulting() {
  return (
    <Layout title="ERP & Systems Consulting - MSQ IT">
      {/* Hero Section */}
      <PageHeader 
        title="ERP & Systems Consulting" 
        subtitle="Streamline your business operations with tailored ERP solutions"
        accentText="Business Systems"
      />

      {/* Overview */}
      <ContentSection 
        id="overview"
        title="How We Help Your Business" 
        titleGradient={true}
        accentText="Our Approach"
      >
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="lead text-xl mb-6">
            At MSQ IT, we help small to medium-sized businesses streamline operations through tailored ERP solutions, with a focus on Microsoft Dynamics 365 Business Central and Wiise.
          </p>
          
          <p className="mb-6">
            Working together, we discover how your business currently performs its processes, identify opportunities for improvement, and determine how the right technology can drive efficiency and growth. Our approach ensures the technology fits your business — not the other way around.
          </p>
          
          <p className="mb-10">
            As partners with leading software providers including Microsoft, Xero, and MYOB, we provide objective, expert guidance to help you select and implement the accounting or ERP system that best meets your unique business needs.
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Our ERP Consulting Process</h3>
            <ol className="space-y-4 list-decimal list-inside">
              <li className="flex items-start">
                <span className="font-medium text-blue-700 mr-2">Business Analysis:</span> 
                <span>We start by understanding your business processes, pain points, and objectives</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-blue-700 mr-2">Solution Design:</span> 
                <span>We design an ERP solution that addresses your specific needs and growth plans</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-blue-700 mr-2">Implementation:</span> 
                <span>Our team handles the technical setup, data migration, and system configuration</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-blue-700 mr-2">Training:</span> 
                <span>We ensure your team is comfortable and proficient with the new system</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-blue-700 mr-2">Ongoing Support:</span> 
                <span>We provide continued assistance to help you maximize your ERP investment</span>
              </li>
            </ol>
          </div>
        </div>
      </ContentSection>

      {/* ERP Solutions */}
      <ContentSection 
        id="solutions"
        title="ERP Solutions We Offer" 
        titleGradient={true}
        accentText="Technology Partners"
        bgClass="bg-gradient-to-br from-blue-50 to-indigo-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {[
            {
              title: "Microsoft Dynamics 365 Business Central",
              description: "A comprehensive business management solution for small and medium-sized businesses that automates and streamlines business processes.",
              features: ["Financial Management", "Supply Chain", "Sales & Service", "Project Management", "Operations"]
            },
            {
              title: "Wiise",
              description: "Built on Microsoft Dynamics 365 Business Central, Wiise is designed specifically for Australian businesses with local tax compliance and reporting.",
              features: ["Australian Localization", "Cloud-Based", "Scalable", "Integrated Banking", "Industry-Specific Solutions"]
            },
            {
              title: "Xero & MYOB Integration",
              description: "We help businesses leverage their existing accounting systems by integrating with other business applications for enhanced functionality.",
              features: ["API Integration", "Data Synchronization", "Custom Reporting", "Workflow Automation", "Third-Party Add-ons"]
            }
          ].map((solution, index) => (
            <div key={index} className="relative group transition-all duration-300 hover:-translate-y-2">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white p-6 rounded-lg border border-gray-200/50 shadow-xl h-full">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">{solution.title}</h3>
                <p className="text-gray-600 mb-4">
                  {solution.description}
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Services */}
      <ContentSection 
        id="services"
        title="Our ERP Services" 
        titleGradient={true}
        accentText="How We Help"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {[
            {
              title: "Operational Analysis",
              description: "We analyze your current business processes to identify inefficiencies and opportunities for improvement through ERP implementation.",
              icon: "chart-bar"
            },
            {
              title: "System Configuration",
              description: "We configure your ERP system to match your business processes, including modules, workflows, and permissions for optimal performance.",
              icon: "cog"
            },
            {
              title: "Reporting & Analytics",
              description: "We build custom reports and dashboards that provide actionable business insights to help you make data-driven decisions.",
              icon: "chart-pie"
            },
            {
              title: "Vendor Liaison",
              description: "We act as your advocate with ERP vendors, ensuring you get the support and specialized solutions your business needs.",
              icon: "users"
            }
          ].map((service, index) => (
            <div key={index} className="relative group transition-all duration-300 hover:-translate-y-2">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white p-6 rounded-lg border border-gray-200/50 shadow-lg backdrop-blur-sm bg-white/80 h-full">
                {service.icon === "chart-bar" && (
                  <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-glow text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                )}
                {service.icon === "cog" && (
                  <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-glow text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                )}
                {service.icon === "chart-pie" && (
                  <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-glow text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  </div>
                )}
                {service.icon === "users" && (
                  <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-glow text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* CTA */}
      <ContentSection 
        id="cta"
        bgClass="bg-gradient-to-br from-blue-50 to-indigo-50"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Ready to transform your business operations?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact us today for a free consultation to discuss how our ERP solutions can help streamline your business processes and drive growth.
          </p>
          <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300">
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
