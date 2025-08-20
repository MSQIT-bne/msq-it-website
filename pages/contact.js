import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import ContentSection from '../components/ContentSection';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Map EmailJS field names to state field names
    const stateField = name.replace('user_', '');
    
    setFormData({
      ...formData,
      [stateField]: value,
    });
  };

  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Set loading state
    setFormStatus({
      submitted: false,
      error: false,
      message: 'Sending your message...',
    });
    
    try {
      // Initialize EmailJS with your public key
      // IMPORTANT: Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key from your EmailJS dashboard
      emailjs.init('6Z6SfrZqO_K36d858');
      
      // Send the email using EmailJS
      // IMPORTANT: Replace the following with your actual EmailJS service ID and template ID
      const result = await emailjs.sendForm(
        'service_ph8nuvr', // Replace with your EmailJS service ID (e.g., 'gmail')
        'template_479ql3w', // Replace with your EmailJS template ID (e.g., 'template_abc123')
        form.current
      );
      
      // Success
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for your message! We will get back to you soon.',
      });
      
      // Reset form data
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        submitted: false,
        error: true,
        message: error.message || 'Failed to send message. Please try again later.',
      });
    }
  };

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
              {formStatus.submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-md p-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-green-800">Message Sent!</h3>
                      <p className="mt-2 text-sm text-green-700">{formStatus.message}</p>
                    </div>
                  </div>
                </div>
              ) : formStatus.error ? (
                <div className="bg-red-50 border border-red-200 rounded-md p-6 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-red-800">Error</h3>
                      <p className="mt-2 text-sm text-red-700">{formStatus.message}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="user_name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="user_email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="user_phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="user_company" 
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message *</label>
                    <textarea
                      id="message"
                      name="message" 
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  
                  {/* Hidden field for recipient email */}
                  <input type="hidden" name="to_email" value="ahchew@msqit.com.au" />
                  
                  <div>
                    <button
                      type="submit"
                      className="relative w-full inline-flex group"
                      disabled={formStatus.message === 'Sending your message...'}
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
                      <span className="relative w-full flex justify-center py-3 px-4 rounded-md text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                        {formStatus.message === 'Sending your message...' ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : 'Send Message'}
                      </span>
                    </button>
                  </div>
                </form>
              )}
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
