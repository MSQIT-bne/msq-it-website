import React from 'react';

export default function ContentSection({ 
  title, 
  subtitle, 
  accentText, 
  children, 
  bgClass = "bg-white", 
  titleGradient = false 
}) {
  return (
    <section className={`py-24 relative overflow-hidden ${bgClass}`}>
      {/* Decorative Elements */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-light opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"></div>
      
      {/* Network Background Image - Subtle */}
      <div className="absolute inset-0 opacity-5">
        <img src="/network-4636686_1280.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {accentText && (
              <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-primary mb-4 hero-content-delay-1">
                <p className="text-sm font-medium">{accentText}</p>
              </div>
            )}
            {title && titleGradient ? (
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary-dark hero-content-delay-1">
                {title}
              </h2>
            ) : title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-6 hero-content-delay-1">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto hero-content-delay-2">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="hero-content-delay-2">
          {children}
        </div>
      </div>
    </section>
  );
}
