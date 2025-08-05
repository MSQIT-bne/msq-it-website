import Layout from '../components/Layout';
import Link from 'next/link';
import PageHeader from '../components/PageHeader';
import ContentSection from '../components/ContentSection';

export default function HowWeWork() {
  return (
    <Layout title="How We Work - MSQ IT">
      {/* Hero Section */}
      <PageHeader
        title="How We Work"
        subtitle="At MSQ IT, we collaborate closely with clients to deliver tailored, value-driven technology outcomes. Whether as an independent advisor or a seamless extension of your team, we bring clarity and structure to IT decision-making."
        accentText="Our Approach"
        backgroundImage="/images/professionals/Studio-Project (1).png"
      />
      
      {/* Introduction */}
      <ContentSection
        bgClass="bg-white"
      >
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="lead text-xl mb-6">
            At MSQ IT, we collaborate closely with clients to deliver tailored, value-driven technology outcomes. Whether as an independent advisor or a seamless extension of your team, we bring clarity and structure to IT decision-making through our proven approach.
          </p>
          
          <p className="mb-6">
            Our methodology ensures IT initiatives are tightly aligned to your business strategy, supported by stakeholder engagement, and backed by rigorous evaluation and planning.
          </p>
          
          <p className="mb-6">
            From IT health checks and strategic planning to implementation and support, our team works to simplify complexity, optimise performance, and deliver practical solutions that enhance service delivery. Our commitment to independence, transparency, and results means we focus on what matters most—helping your organisation succeed with technology that enables, not complicates.
          </p>
        </div>
      </ContentSection>

      {/* Our Process */}
      <ContentSection
        title="Our Process"
        titleGradient={true}
        accentText="How We Deliver"
        bgClass="bg-gradient-to-br from-white to-blue-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: 1,
              title: "Discovery",
              description: "We start by understanding your business goals, challenges, and current technology landscape.",
              detailedDescription: "We start by understanding your business goals, challenges, and current technology landscape to ensure our solutions address your specific needs.",
              gradient: "from-blue-500 to-indigo-500"
            },
            {
              step: 2,
              title: "Planning",
              description: "We develop a strategic plan that aligns technology solutions with your business objectives.",
              detailedDescription: "We develop a strategic plan that aligns technology solutions with your business objectives, ensuring maximum value from your IT investments.",
              gradient: "from-indigo-500 to-purple-500"
            },
            {
              step: 3,
              title: "Implementation",
              description: "We execute the plan with precision, minimizing disruption to your business operations.",
              detailedDescription: "We execute the plan with precision, minimizing disruption to your business operations while ensuring a smooth transition to new solutions.",
              gradient: "from-purple-500 to-indigo-500"
            },
            {
              step: 4,
              title: "Ongoing Support",
              description: "We provide continuous support and optimization to ensure long-term success.",
              detailedDescription: "We provide continuous support and optimization to ensure long-term success, helping you adapt to changing business needs and technology landscapes.",
              gradient: "from-indigo-500 to-blue-500"
            }
          ].map((process, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl blur opacity-10 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white p-6 rounded-xl border border-gray-200/50 shadow-lg backdrop-blur-sm text-center transition-all duration-300 hover:translate-y-[-5px]">
                <div className={`w-16 h-16 bg-gradient-to-br ${process.gradient} rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-glow`}>
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {process.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {process.description}
                </p>
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <p className="text-sm text-gray-500 italic">
                    {process.detailedDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Our Principles */}
      <ContentSection
        title="Our Guiding Principles"
        titleGradient={true}
        accentText="What Drives Us"
        bgClass="bg-gradient-to-br from-gray-50 to-indigo-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: "Independent and Objective",
              description: [
                "We provide vendor-neutral advice focused solely on your business needs, not on selling specific products. Our recommendations are based on what will work best for your business.",
                "This independence allows us to objectively evaluate options and select the most appropriate technology for each unique situation, ensuring you receive unbiased guidance."
              ],
              icon: (
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              ),
              gradient: "from-blue-500 to-indigo-500"
            },
            {
              title: "Strategy-Aligned",
              description: [
                "We ensure that every IT decision and implementation aligns with your broader business strategy and goals. Our methodology tightly integrates technology initiatives with your strategic objectives.",
                "This strategic alignment ensures that your IT investments deliver measurable business value and support your growth objectives, rather than becoming isolated technical projects."
              ],
              icon: (
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
              gradient: "from-indigo-500 to-purple-500"
            },
            {
              title: "Simplifying Complexity",
              description: [
                "We work to simplify complexity, optimize performance, and deliver practical solutions that enhance service delivery. Technology should enable your business, not complicate it.",
                "Our approach focuses on streamlined solutions that are easier to manage, more reliable, and deliver better performance for your business while reducing unnecessary complexity."
              ],
              icon: (
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              gradient: "from-purple-500 to-indigo-500"
            },
            {
              title: "Stakeholder Engagement",
              description: [
                "We believe successful IT initiatives require strong stakeholder engagement and clear communication throughout the process. We ensure all key stakeholders are involved from the beginning.",
                "By fostering collaboration and transparency, we build consensus and ensure that technology solutions meet the needs of everyone in your organization who will use or be affected by them."
              ],
              icon: (
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              gradient: "from-indigo-500 to-blue-500"
            }
          ].map((principle, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl blur opacity-10 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white p-6 rounded-xl border border-gray-200/50 shadow-lg backdrop-blur-sm transition-all duration-300 hover:translate-y-[-5px]">
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${principle.gradient} flex items-center justify-center shadow-glow flex-shrink-0 mr-4`}>
                    {principle.icon}
                  </div>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {principle.title}
                  </h3>
                </div>
                {principle.description.map((paragraph, pIndex) => (
                  <p key={pIndex} className={`text-lg ${pIndex < principle.description.length - 1 ? 'mb-4' : ''} text-gray-600`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Client Engagement Model */}
      <ContentSection
        title="Our Client Engagement Model"
        titleGradient={true}
        accentText="Working Together"
        bgClass="bg-gradient-to-br from-white to-blue-50"
      >
        <div className="prose prose-lg max-w-none text-gray-700 mb-10">
          <p>
            At MSQ IT, we offer flexible engagement models to meet your specific needs. Whether you need independent advice or a seamless extension of your team, we adapt our approach to deliver the right level of support for your organization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Independent Advisor",
              description: "We provide objective, vendor-neutral advice on technology strategy, selection, and implementation. Our recommendations are based solely on what will work best for your business.",
              items: ["Unbiased technology evaluation", "Vendor selection support", "Strategic IT planning"],
              gradient: "from-blue-500 to-indigo-500",
              delay: "delay-0"
            },
            {
              title: "Project-Based Support",
              description: "For specific initiatives or challenges, we provide focused project support from planning through implementation. We work alongside your team to ensure successful delivery.",
              items: ["Defined scope and outcomes", "Specialized expertise", "Knowledge transfer"],
              gradient: "from-indigo-500 to-purple-500",
              delay: "delay-100"
            },
            {
              title: "Ongoing Partnership",
              description: "We function as an extension of your team, providing continuous strategic guidance, implementation support, and optimization services as your business evolves.",
              items: ["Regular strategic reviews", "Proactive optimization", "Continuous improvement"],
              gradient: "from-purple-500 to-indigo-500",
              delay: "delay-200"
            }
          ].map((phase, index) => (
            <div key={index} className={`group relative transform transition-all duration-300 hover:translate-y-[-5px] ${phase.delay} animate-fade-in-up`}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white p-6 rounded-lg border border-gray-200/50 shadow-md h-full">
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${phase.gradient} text-white shadow-sm`}>
                    Engagement Model
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {phase.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {phase.description}
                </p>
                <ul className="space-y-2 text-gray-600">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start group-hover:translate-x-1 transition-transform duration-300">
                      <div className={`h-5 w-5 mr-2 rounded-full bg-gradient-to-br ${phase.gradient} flex-shrink-0 flex items-center justify-center`}>
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Call to Action */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-indigo-900 z-0"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-24 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/4 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px] z-0"></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-white">
              <span className="inline-block">
                <span className="relative">
                  <span className="absolute -inset-1 w-full h-full bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg blur opacity-30"></span>
                  <span className="relative">Ready for Technology</span>
                </span>
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-200 to-indigo-100 bg-clip-text text-transparent">That Enables, Not Complicates?</span>
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto text-blue-50">
              Contact us today to discuss how our independent, strategic approach can help your business achieve its technology goals and drive real business value.
            </p>
            <Link href="/contact" className="relative inline-flex group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-md blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
              <span className="relative inline-flex items-center justify-center px-8 py-4 rounded-md text-base font-medium text-primary bg-white hover:bg-gray-50 transition duration-200">
                Get in Touch
                <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
