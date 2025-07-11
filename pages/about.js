import Layout from '../components/Layout';
import Link from 'next/link';
import PageHeader from '../components/PageHeader';
import ContentSection from '../components/ContentSection';

export default function About() {
  return (
    <Layout title="About Us - MSQ IT">
      {/* Hero Section */}
      <PageHeader 
        title="About Us" 
        subtitle="MSQ IT is a Brisbane-based IT consulting and managed services firm with strong expertise in Microsoft technologies and cybersecurity."
        accentText="Our Story"
      />

      {/* About Us Content */}
      <ContentSection title="Who We Are" titleGradient={true}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-4">
              MSQ IT is a Brisbane-based IT consulting and managed services firm with strong expertise in Microsoft technologies and cybersecurity. We deliver high-impact, customer-focused IT services to small and medium businesses.
            </p>
            <p className="text-lg mb-4">
              Our team brings together industry certifications, real-world experience, and best practice frameworks like PMI, ITIL, and SMB1001 to every client engagement.
            </p>
            <p className="text-lg">
              We don't just deliver technology—we deliver outcomes that help your business grow and succeed.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-indigo-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
            <div className="relative bg-white p-8 rounded-lg border border-gray-200/50 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-primary">We are known for:</h3>
              <ul className="space-y-4">
                {[
                  'High-impact, customer-focused IT services',
                  'Best-practice frameworks (ITIL, PMI)',
                  'A personalised, boutique service experience',
                  'Strategic alignment of IT to business goals'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-indigo-600 flex items-center justify-center mr-4 shadow-glow text-white">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* How We Work */}
      <ContentSection 
        title="How We Work" 
        titleGradient={true}
        accentText="Our Process"
      >
        <div className="space-y-12">
          {[
            {
              step: "01",
              title: "Discover",
              heading: "Understanding Your Business",
              description: "We start by deeply understanding your business goals, challenges, and existing IT landscape. This discovery phase helps us identify opportunities where technology can drive meaningful business outcomes.",
              items: [
                "Business goals assessment",
                "Current IT environment review",
                "Stakeholder interviews"
              ],
              color: "from-blue-600 to-indigo-600"
            },
            {
              step: "02",
              title: "Design",
              heading: "Creating Your IT Strategy",
              description: "Based on our discovery findings, we develop a tailored IT strategy and roadmap that aligns technology investments with your business objectives. This includes prioritizing initiatives for maximum impact.",
              items: [
                "Technology roadmap development",
                "Solution architecture design",
                "Budget and resource planning"
              ],
              color: "from-indigo-600 to-purple-600"
            },
            {
              step: "03",
              title: "Deliver",
              heading: "Implementing with Excellence",
              description: "Our experienced team executes the strategy with precision, whether it's implementing new systems, optimizing existing infrastructure, or managing complex IT projects. We focus on minimizing disruption while maximizing value.",
              items: [
                "Project management and execution",
                "System implementation and integration",
                "Change management and training"
              ],
              color: "from-purple-600 to-primary"
            },
            {
              step: "04",
              title: "Support",
              heading: "Ongoing Excellence",
              description: "We provide ongoing support and optimization to ensure your technology continues to deliver value. Our managed services approach focuses on proactive maintenance, security, and continuous improvement.",
              items: [
                "Proactive monitoring and maintenance",
                "Security and compliance management",
                "Continuous improvement and optimization"
              ],
              color: "from-primary to-blue-600"
            }
          ].map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0 w-full md:w-64 relative group">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${step.color} rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-500`}></div>
                <div className={`relative bg-gradient-to-br ${step.color} text-white p-8 rounded-lg text-center shadow-glow`}>
                  <div className="text-4xl font-bold mb-2">{step.step}</div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">{step.heading}</h4>
                <p className="text-lg mb-6 text-gray-600">
                  {step.description}
                </p>
                <ul className="space-y-3">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-md bg-gradient-to-br from-primary to-indigo-600 flex items-center justify-center mr-3 shadow-glow text-white">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Our Approach */}
      <ContentSection 
        title="Our Approach" 
        titleGradient={true}
        bgClass="bg-gray-50"
        accentText="How We Work"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Independent and Objective",
              description: "We provide vendor-neutral advice focused solely on your business needs, not on selling specific products.",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              ),
              color: "from-blue-500 to-blue-700"
            },
            {
              title: "Strategy-Aligned",
              description: "We ensure that every IT decision and implementation aligns with your broader business strategy and goals.",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
              ),
              color: "from-indigo-500 to-indigo-700"
            },
            {
              title: "Performance-Focused",
              description: "We measure success by the tangible business improvements our IT solutions deliver, not by technical metrics alone.",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              ),
              color: "from-primary to-blue-700"
            }
          ].map((item, index) => (
            <div key={index} className="relative group transition-all duration-300 hover:-translate-y-2">
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500`}></div>
              <div className="relative bg-white p-8 rounded-lg border border-gray-200/50 shadow-xl">
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-6 text-white shadow-glow`}>
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Team section removed */}

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
            Ready to transform your IT?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-blue-100 hero-content-delay-2">
            Contact us today to discuss how MSQ IT can help your business leverage technology for growth and competitive advantage.
          </p>
          <div className="hero-content-delay-3">
            <Link href="/contact" className="relative inline-flex group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
              <span className="relative inline-block bg-white text-primary font-medium px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-xl">
                Get in Touch
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
