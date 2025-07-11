import React from 'react';

export default function PageHeader({ title, subtitle, accentText }) {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-primary to-primary-dark opacity-90"></div>
      
      {/* Network Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img src="/network-4636686_1280.jpg" alt="Network Background" className="w-full h-full object-cover" />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl hero-shape-1"></div>
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-300 opacity-10 rounded-full blur-3xl hero-shape-2"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{ 
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                             linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {accentText && (
          <div className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-4 hero-content-delay-1">
            <p className="text-sm font-medium text-white">{accentText}</p>
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white hero-content-delay-1">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl max-w-3xl mx-auto text-blue-50 hero-content-delay-2">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
