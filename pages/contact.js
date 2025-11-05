import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import ContentSection from '../components/ContentSection';

export default function Contact() {

  return (
    <Layout title="Contact Us - MSQ IT">
      {/* Hero Section */}
      <PageHeader 
        title="Contact Us" 
        subtitle="We're here to help with your IT needs. Reach out to us for support, consultations, or to learn more about our services."
        accentText="Get In Touch"
      />

      {/* Contact Information */}
      <ContentSection 
        title="Get in Touch" 
        titleGradient={true}
        accentText="Contact Details"
        bgClass="bg-gradient-to-br from-blue-50 to-indigo-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl blur opacity-10"></div>
            <div className="relative bg-white p-8 rounded-xl border border-gray-200/50 shadow-lg backdrop-blur-sm">
              <div className="space-y-8">
                {[
                  {
                    icon: "email",
                    title: "Email",
                    content: "info@msqit.com.au",
                    gradient: "from-blue-500 to-indigo-500"
                  },
                 /* {
                    icon: "phone",
                    title: "Mobile",
                    content: "+61450 013 064",
                    gradient: "from-indigo-500 to-purple-500"
                  },*/
                  {
                    icon: "phone",
                    title: "Phone",
                    content: "(07)2142 6872",
                    gradient: "from-indigo-500 to-purple-500"
                  },
                  {
                    icon: "location",
                    title: "Location",
                    content: "Brisbane, Queensland",
                    gradient: "from-purple-500 to-indigo-500"
                  },
                  {
                    icon: "time",
                    title: "Business Hours",
                    content: "Monday–Friday, 8AM–5PM",
                    gradient: "from-indigo-500 to-blue-500"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start transition-all duration-300 hover:translate-x-1">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-glow flex-shrink-0`}>
                      {item.icon === "email" && (
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                      {item.icon === "phone" && (
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      )}
                      {item.icon === "location" && (
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                      {item.icon === "time" && (
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-medium">{item.title}</h3>
                      <p className="mt-1 text-gray-600">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form Column */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-xl blur opacity-20"></div>
            <div className="relative bg-white p-8 rounded-xl border border-gray-200/50 shadow-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Send Us a Message</h2>
              <div className="flex justify-center">
                <iframe 
                  src="https://msqit.desk365.io/wf/createTicket" 
                  title="Desk365 Web Form" 
                  style={{width: '350px', height: '550px', borderRadius: '4px', border: '1px solid #3F51B5'}}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Map Section */}
      {/* <ContentSection     
        title="Visit Us" 
        titleGradient={true}
        accentText="Our Location"
        bgClass="bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl blur opacity-20"></div>
          <div className="relative bg-white p-2 rounded-xl border border-gray-200/50 shadow-lg backdrop-blur-sm overflow-hidden">
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-glow text-white">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">Map placeholder - Brisbane location</p>
                <p className="text-gray-500 mt-2">In a real implementation, this would be an interactive map</p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection> */}
    </Layout>
  );
}
