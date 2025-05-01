import { Link } from "wouter";

export default function About() {
  return (
    <main className="pt-24 pb-16">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-wavegray-900 mb-6">About WAVETXT LTD</h1>
            <p className="text-lg text-wavegray-700">
              Leading provider of telecom and marketing solutions serving businesses across the MENA region.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-heading font-bold text-wavegray-900 mb-6">Our Story</h2>
              <p className="text-wavegray-700 mb-4">
                Founded in 2025 by Ali Rammal in Cyprus, WAVETXT LTD began with a vision to bridge the gap between businesses and their customers through effective communication solutions. What started as a telecom service provider has evolved into a comprehensive marketing and technology solutions company (Registration Number: HE 474402).
              </p>
              <p className="text-wavegray-700 mb-4">
                Our journey has been marked by consistent innovation and an unwavering commitment to helping our clients succeed in an increasingly digital world. We've expanded our services to meet the evolving needs of businesses in the MENA region, combining local market knowledge with global best practices.
              </p>
              <p className="text-wavegray-700">
                Today, we're proud to serve over 50 businesses across 10+ countries, providing them with the tools and strategies they need to connect with their customers and grow their market presence.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="WAVETXT Team Meeting" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Our Mission and Vision" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-heading font-bold text-wavegray-900 mb-6">Our Mission and Vision</h2>
              <div className="mb-6">
                <h3 className="text-xl font-heading font-semibold text-wavegray-900 mb-2">Mission</h3>
                <p className="text-wavegray-700">
                  To empower businesses with innovative telecom and marketing solutions that enhance customer engagement, streamline operations, and drive sustainable growth.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-heading font-semibold text-wavegray-900 mb-2">Vision</h3>
                <p className="text-wavegray-700">
                  To be the leading provider of integrated communication and marketing solutions in the MENA region, recognized for our innovation, reliability, and customer-centric approach.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-wavegray-900 mb-2">Values</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-wavered mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Innovation:</strong> Constantly evolving to stay ahead of industry trends and customer needs</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-wavered mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Excellence:</strong> Delivering the highest quality in everything we do</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-wavered mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Integrity:</strong> Acting with honesty, transparency, and ethical business practices</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-wavered mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Customer Focus:</strong> Putting clients at the center of everything we do</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold text-wavegray-900 text-center mb-12">Why Choose WAVETXT LTD</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-wavegray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-wavered" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-wavegray-900 mb-2">Industry Expertise</h3>
                <p className="text-wavegray-700">
                  Over 10 years of experience in telecom and marketing solutions, with deep understanding of the MENA market.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-wavegray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-wavered" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-wavegray-900 mb-2">Customer Support</h3>
                <p className="text-wavegray-700">
                  Dedicated account managers and 24/7 technical support to ensure seamless implementation and operation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-wavegray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-wavered" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-wavegray-900 mb-2">Innovative Solutions</h3>
                <p className="text-wavegray-700">
                  Constantly evolving our service offerings to incorporate the latest technologies and industry best practices.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-wavegray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-wavered" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold text-wavegray-900 mb-2">Customized Approach</h3>
                <p className="text-wavegray-700">
                  Tailored solutions designed to meet your specific business needs and objectives, not one-size-fits-all packages.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold text-wavegray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-wavegray-700 max-w-2xl mx-auto mb-8">
              Contact our team today to learn more about how WAVETXT LTD can help your business grow with our comprehensive telecom and marketing solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-quote" className="bg-wavered text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
                Get a Quote
              </Link>
              <Link href="/contact" className="bg-white border border-wavegray-300 text-wavegray-700 px-6 py-3 rounded-md font-medium hover:bg-wavegray-100 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
