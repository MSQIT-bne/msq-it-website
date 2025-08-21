import Layout from '../components/Layout';
import Link from 'next/link';
import PageHeader from '../components/PageHeader';
import ContentSection from '../components/ContentSection';

export default function Services() {
  return (
    <Layout title="Services - MSQ IT">
      {/* Hero Section */}
      <PageHeader 
        title="Our Services" 
        subtitle="We deliver customer-focused support, practical solutions, and proactive service to help small and medium businesses simplify their IT."
        accentText="How We Help"
        backgroundImage="/images/professionals/saas-concept-collage.jpg"
      />

      {/* IT Solutions & Consulting */}
      <ContentSection 
        id="it-solutions"
        title="IT Solutions & Consulting" 
        titleGradient={true}
        accentText="Strategic Technology"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "IT Strategy and Planning",
              description: "We work closely with you to create an IT plan that fits your budget and goals. Our advice is simple, focused, and helps you make confident technology decisions",
              color: "from-blue-500 to-indigo-600"
            },
            {
              title: "Cybersecurity for SMBs",
              description: "We protect your business with easy-to-manage, enterprise-grade security tailored for SMBs. From email protection to endpoint security, we've got your back.",
              color: "from-indigo-500 to-purple-600"
            },
            {
              title: "Disaster Recovery and BCP",
              description: "Ensure your business stays up and running during unexpected events. We provide practical recovery and continuity plans that are right-sized for your operations.",
              color: "from-purple-500 to-indigo-600"
            },
            {
              title: "IT Assessment",
              description: "Get a clear picture of your current IT setup. Our assessments highlight what's working, what's not, and where to improve — with simple, actionable steps.",
              color: "from-primary to-blue-600"
            },
            {
              title: "System Review",
              description: "We review your systems to make sure they're secure, up to date, and fit for purpose. No jargon, just helpful insights to keep your business moving.",
              color: "from-blue-600 to-indigo-500"
            },
            {
              title: "IT Risk and Advisory",
              description: "We help SMBs understand and manage technology risks without overcomplicating things. Our advice is objective, relevant, and always aligned to your business needs.",
              color: "from-indigo-600 to-purple-500"
            }
          ].map((service, index) => (
            <div key={index} className="relative group transition-all duration-300 hover:-translate-y-2">
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500`}></div>
              <div className="relative bg-white p-6 rounded-lg border border-gray-200/50 shadow-xl h-full">
                <div className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center shadow-glow text-white`}>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
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

      {/* ERP & Systems Consulting */}
      <ContentSection 
        id="erp-consulting"
        title="ERP & Systems Consulting" 
        titleGradient={true}
        accentText="Business Operations"
        bgClass="bg-gradient-to-br from-blue-50 to-indigo-50"
      >
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-lg mb-6 text-gray-700">
            At MSQ IT, we help small to medium-sized businesses streamline operations through tailored ERP solutions, with a focus on Microsoft Dynamics 365 Business Central and Wiise.
          </p>
          <p className="text-lg mb-8 text-gray-700">
            Our approach ensures the technology fits your business — not the other way around. As partners with leading software providers including Microsoft, Xero, and MYOB, we provide objective, expert guidance for your unique business needs.
          </p>
          <div className="mt-6">
            <Link href="/erp-consulting" className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300">
              Learn More
              <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Operational Analysis",
              description: "Identify operational bottlenecks and opportunities for improvement.",
              icon: "chart-bar"
            },
            {
              title: "System Configuration",
              description: "Configure modules, workflows, and permissions for optimal performance.",
              icon: "cog"
            },
            {
              title: "Reporting & Analytics",
              description: "Build reports and dashboards for actionable business insights.",
              icon: "chart-pie"
            },
            {
              title: "Vendor Liaison",
              description: "Liaise with vendors for advanced support and specialized solutions.",
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

      {/* Managed Services */}
      <ContentSection 
        id="managed-services"
        title="Managed Services" 
        titleGradient={true}
        accentText="Proactive Support"
        bgClass="bg-gradient-to-br from-indigo-50 to-purple-50"
      >
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-lg mb-6 text-gray-700">
            At MSQ IT, we deliver trusted, secure, and customer-focused managed IT services with a strong emphasis on Microsoft technologies and cybersecurity. Our services are underpinned by ITIL good practice standards, ensuring reliable, consistent, and high-quality outcomes across every engagement.
          </p>
          <p className="text-lg mb-8 text-gray-700">
            We don't offer one-size-fits-all answers — we carefully assess, advise, and implement solutions that truly serve your organisation's goals. From secure cloud adoption to modern workplace enablement, MSQ IT delivers scalable, resilient IT environments that grow with your business.
          </p>
          <div className="mt-6">
            <Link href="/managed-services" className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300">
              Learn More
              <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-xl blur opacity-20"></div>
            <div className="relative bg-white p-6 rounded-xl border border-gray-200/50 shadow-lg backdrop-blur-sm h-full">
              <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">Our managed services are:</h3>
              <ul className="space-y-5">
                {[
                  { title: "Secure", description: "Cybersecurity-first approach" },
                  { title: "Scalable", description: "Modern workplace enablement" },
                  { title: "Certified", description: "Partnered with leading vendors" },
                  { title: "Tailored", description: "No one-size-fits-all templates" }
                ].map((item, index) => (
                  <li key={index} className="flex items-start transition-all duration-300 hover:translate-x-1">
                    <div className="h-6 w-6 mr-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center flex-shrink-0 shadow-glow">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">{item.title}</span>
                      <span className="text-gray-600"> – {item.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-xl blur opacity-20"></div>
            <div className="relative bg-white p-6 rounded-xl border border-gray-200/50 shadow-lg backdrop-blur-sm h-full">
              <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Services include:</h3>
              <ul className="space-y-5">
                <li className="flex items-start transition-all duration-300 hover:translate-x-1">
                  <div className="h-6 w-6 mr-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-glow">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-gray-700">Endpoint management (Windows, macOS, mobile)</div>
                </li>
                <li className="flex items-start transition-all duration-300 hover:translate-x-1">
                  <div className="h-6 w-6 mr-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-glow">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-gray-700">Network infrastructure management</div>
                </li>
                <li className="flex items-start transition-all duration-300 hover:translate-x-1">
                  <div className="h-6 w-6 mr-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-glow">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-gray-700">Cybersecurity monitoring and management</div>
                </li>
                <li className="flex items-start transition-all duration-300 hover:translate-x-1">
                  <div className="h-6 w-6 mr-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-glow">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-gray-700">24/7 IT support and helpdesk</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* IT Projects */}
      <ContentSection 
        id="it-projects"
        title="IT Projects" 
        titleGradient={true}
        accentText="Reliable Delivery"
        bgClass="bg-gradient-to-br from-blue-50 to-cyan-50"
      >
        <p className="text-lg mb-10 text-gray-700 max-w-3xl">
          We deliver practical IT infrastructure solutions from initial setup to post-deployment support.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              number: "1",
              title: "PMI-aligned practices",
              description: "Projects governed by industry-standard project management methodologies.",
              gradient: "from-blue-500 to-cyan-500"
            },
            {
              number: "2",
              title: "On time, on budget",
              description: "Reliable delivery with transparent communication throughout the project.",
              gradient: "from-cyan-500 to-teal-500"
            },
            {
              number: "3",
              title: "Business outcomes",
              description: "Focus on delivering tangible business value, not just technology.",
              gradient: "from-teal-500 to-blue-500"
            },
            {
              number: "4",
              title: "End-to-end support",
              description: "Comprehensive support from planning through implementation and beyond.",
              gradient: "from-blue-500 to-cyan-500"
            }
          ].map((item, index) => (
            <div key={index} className="relative group transition-all duration-300 hover:-translate-y-2">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-white p-6 rounded-lg border border-gray-200/50 shadow-lg backdrop-blur-sm h-full">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl shadow-glow`}>
                  {item.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Support and Service Levels */}
      <ContentSection 
        id="support"
        title="Support and Service Levels" 
        titleGradient={true}
        accentText="Responsive Care"
        bgClass="bg-gradient-to-br from-indigo-50 to-violet-50"
      >
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-violet-500 rounded-xl blur opacity-20"></div>
          <div className="relative bg-white p-8 rounded-xl border border-gray-200/50 shadow-xl backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative group transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 mb-4 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-glow text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Service Desk</h3>
                <p className="text-gray-600">
                  Available via portal, phone, and email for all your support needs.
                </p>
              </div>
              <div className="relative group transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 mb-4 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center shadow-glow text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Hours</h3>
                <p className="text-gray-600">
                  Monday–Friday, 8AM–5PM<br />
                  (after-hours by approval)
                </p>
              </div>
              <div className="relative group transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 mb-4 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-glow text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Response Times</h3>
                <p className="text-gray-600">
                  P1 within 15 minutes<br />
                  P2 within 1 hour
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-indigo-700"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400 opacity-10 rounded-full blur-3xl hero-shape-2"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-300 opacity-10 rounded-full blur-3xl hero-shape-1"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{ 
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                             linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 hero-content-delay-1">
            Ready to Get Started?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-blue-100 hero-content-delay-2">
            Contact us today to discuss how our services can help your business thrive.
          </p>
          <div className="hero-content-delay-3">
            <Link href="/contact" className="relative inline-flex group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
              <span className="relative inline-block bg-white text-primary font-medium px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-xl">
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
