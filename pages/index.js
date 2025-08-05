import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-primary to-primary-dark opacity-90"></div>
        
        {/* Network Background Image */}
        <div className="absolute inset-0 opacity-20">
          <img src="/images/professionals/Studio-Project.png" alt="Network Background" className="w-full h-full object-cover" />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Abstract shapes */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-1/4 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl hero-shape-1"></div>
            <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-300 opacity-10 rounded-full blur-3xl hero-shape-2"></div>
            <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-indigo-200 opacity-10 rounded-full blur-3xl hero-shape-3"></div>
            
            {/* Grid pattern overlay - using CSS background instead of image */}
            <div className="absolute inset-0 opacity-10" style={{ 
              backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                               linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white hero-content">
              <div className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-4 hero-content-delay-1">
                <p className="text-sm font-medium text-white">Brisbane's Trusted IT Partner</p>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight hero-content-delay-1">
                Simplifying Technology for Brisbane Businesses
              </h1>
              <p className="text-xl mb-8 text-blue-50 hero-content-delay-2">
                At MSQ IT, we specialise in supporting small to medium-sized businesses across Brisbane, helping them simplify technology and remove the complexity from IT. Our mission is to make IT work as a true business enabler, not a barrier, by delivering customer-focused support, practical solutions, and proactive service. Backed by industry certifications, real-world experience, and good practice frameworks like PMI, ITIL, SMB1001 we bring clarity, consistency, and care to every client engagement. For us, great customer service isn't just a goal, it's the standard.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 hero-content-delay-3">
                {/* <Link href="/contact" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  Get Started
                </Link> */}
                <Link href="/services" className="inline-flex justify-center items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              {/* IT Professional Image */}
              <div className="relative hero-content-delay-2">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg blur opacity-30"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-1 rounded-lg shadow-2xl border border-white/20 overflow-hidden hero-card">
                  {/* Professional IT image with overlay */}
                  <div className="relative h-96 w-full overflow-hidden rounded-lg">
                    {/* Placeholder for IT professional image - replace with actual image path when available */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-800/40 to-indigo-900/40 mix-blend-multiply z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent z-10"></div>
                    
                    {/* Professional IT image */}
                    <img 
                      src="/images/professionals/cloud-computing.jpg" 
                      alt="IT professional with digital interface" 
                      className="h-full w-full object-cover"
                    />
                    
                    {/* Caption overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <h3 className="text-white text-xl font-bold mb-2">IT Experts at Your Service</h3>
                      <p className="text-blue-100 text-sm">Professional support for your business technology needs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile version of the card - only shown on small screens */}
            <div className="block md:hidden mt-8">
              <div className="relative hero-content-delay-2">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg blur opacity-30"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-1 rounded-lg shadow-2xl border border-white/20 overflow-hidden hero-card">
                  {/* Mobile IT Professional image placeholder */}
                  <div className="relative h-48 w-full overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-800/40 to-indigo-900/40 mix-blend-multiply z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent z-10"></div>
                    
                    {/* Professional IT image - mobile version */}
                    <img 
                      src="/images/professionals/Studio-Project (1).png" 
                      alt="IT professional with digital interface - mobile" 
                      className="h-full w-full object-cover"
                    />
                    
                    {/* Caption overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                      <h3 className="text-white text-lg font-bold mb-1">IT Experts at Your Service</h3>
                      <p className="text-blue-100 text-xs">Professional support for your business</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Enablement Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gray-50"></div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary-light/5 to-transparent"></div>
        <div className="absolute left-0 bottom-0 h-1/3 w-full bg-gradient-to-t from-primary-light/5 to-transparent"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-2xl hero-shape-3"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-200 rounded-full opacity-10 blur-3xl hero-shape-1"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: `linear-gradient(to right, rgba(0, 86, 179, 0.15) 1px, transparent 1px), 
                           linear-gradient(to bottom, rgba(0, 86, 179, 0.15) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-primary mb-4 hero-content-delay-1">
              <p className="text-sm font-medium">Modern IT Solutions</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 hero-content-delay-1">Enabling Business Through Technology</h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg hero-content-delay-2">
              We help businesses leverage technology to drive growth, improve efficiency, and stay competitive in today's digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 hero-content-delay-3">
            {/* Secure Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hero-card overflow-hidden">
                {/* Background image */}
                {/* <div className="absolute inset-0 z-0 opacity-20">
                  <img 
                    src="/images/professionals/Studio-Project (1).png" 
                    alt="IT Security Background" 
                    className="w-full h-full object-cover"
                  />
                </div> */}
                <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg transition-all duration-300">
                  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-primary transition-colors duration-300">Secure</h3>
                <p className="text-gray-600">
                  Enterprise-grade security solutions designed specifically for small to medium businesses, protecting your data and systems.
                </p>
                </div>
              </div>
            </div>
            
            {/* Scalable Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hero-card overflow-hidden">
                {/* Background image */}
                {/* <div className="absolute inset-0 z-0 opacity-20">
                  <img 
                    src="/images/professionals/Studio-Project (2).png" 
                    alt="IT Scalability Background" 
                    className="w-full h-full object-cover"
                  />
                </div> */}      
                <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg transition-all duration-300">
                  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-500 transition-colors duration-300">Scalable</h3>
                <p className="text-gray-600">
                  Modern workplace enablement that grows with your business needs, ensuring you're always ready for the next step.
                </p>
                </div>
              </div>
            </div>
            
            {/* Tailored Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hero-card overflow-hidden">
                {/* Background image */}
                {/* <div className="absolute inset-0 z-0 opacity-10">
                  <img 
                    src="/images/professionals/saas-concept-collage.jpg" 
                    alt="IT Tailored Solutions Background" 
                    className="w-full h-full object-cover"
                  />
                </div> */}
                <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg transition-all duration-300">
                  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-indigo-500 transition-colors duration-300">Tailored</h3>
                <p className="text-gray-600">
                  No one-size-fits-all templates. Solutions designed for your specific business requirements and unique challenges.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 opacity-80"></div>
        
        {/* Decorative Elements */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-light opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"></div>
        
        {/* Network Background Image - Subtle */}
        <div className="absolute inset-0 opacity-5">
          <img src="/network-4636686_1280.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-indigo-700 mb-4 hero-content-delay-1">
              <p className="text-sm font-medium">Tailored for Your Business</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary-dark hero-content-delay-1">
              Solutions for Your Requirements
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto hero-content-delay-2">
              MSQ IT provides enterprise services built upon objective guidance to match the technology environment to specific customer requirements. Technology solutions are selected to best serve our clients requirements and not a specific vendor.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 hero-content-delay-3">
            {/* IT Solutions & Consulting Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white p-8 sm:p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-500 rounded-lg flex items-center justify-center mr-4 shadow-md">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">IT Solutions & Consulting</h3>
                </div>
                
                <ul className="space-y-4">
                  {[
                    'IT Strategy and Planning',
                    'Cybersecurity for SMBs',
                    'Cloud Migration and Management',
                    'Business Continuity Planning'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start transition-all duration-300 hover:translate-x-1">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Managed IT Services Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary-dark rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white p-8 sm:p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center mr-4 shadow-md">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">Managed IT Services</h3>
                </div>
                
                <ul className="space-y-4">
                  {[
                    '24/7 Monitoring and Support',
                    'Network Administration',
                    'Data Backup and Recovery',
                    'Help Desk and User Support'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start transition-all duration-300 hover:translate-x-1">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-light/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        </div>
      </section>

      {/* AI Chatbot Section - Temporarily commented out as requested */}


      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Simplify Your IT?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how we can help your business leverage technology as a true enabler, not a barrier.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark">
            Get in Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
}
