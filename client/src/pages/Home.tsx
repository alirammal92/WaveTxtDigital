import { Link } from "wouter";
import ServiceTabs from "@/components/ServiceTabs";

export default function Home() {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section id="home" className="relative bg-wavegray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-wavegray-900 leading-tight">
                Innovative <span className="text-wavered">Telecom & Marketing</span> Solutions
              </h1>
              <p className="mt-6 text-lg text-wavegray-700 leading-relaxed">
                WAVETXT LTD delivers comprehensive telecom and marketing solutions designed to help businesses in the MENA region connect with customers and grow their market presence.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/get-quote" className="bg-wavered text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
                  Get a Quote
                </Link>
                <Link href="/services" className="bg-white border border-wavegray-300 text-wavegray-700 px-6 py-3 rounded-md font-medium hover:bg-wavegray-100 transition-colors">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" 
                alt="Business professionals in a meeting" 
                className="rounded-lg shadow-xl object-cover h-[350px] md:h-[450px] w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="font-medium">Trusted by 100+ businesses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}></div>
      </section>



      {/* Services Section */}
      <section id="services" className="py-20 bg-wavegray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceTabs />
        </div>
      </section>

      {/* About Us Preview Section */}
      <section id="about-preview" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-wavegray-900 mb-6">About WAVETXT LTD</h2>
              <p className="text-wavegray-700 mb-4">
                Founded in Cyprus, WAVETXT LTD is a leading provider of telecom and marketing solutions, serving businesses across the MENA region. We combine industry expertise with innovative technology to deliver results-driven solutions.
              </p>
              <p className="text-wavegray-700 mb-6">
                Our mission is to help businesses connect with their customers more effectively through integrated communication channels and strategic marketing approaches. We pride ourselves on our customer-first approach and commitment to excellence.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-wavegray-100 p-4 rounded-lg">
                  <div className="text-wavered text-2xl font-bold mb-2">50+</div>
                  <div className="text-wavegray-700">Satisfied clients</div>
                </div>
                <div className="bg-wavegray-100 p-4 rounded-lg">
                  <div className="text-wavered text-2xl font-bold mb-2">10+</div>
                  <div className="text-wavegray-700">Countries served</div>
                </div>

                <div className="bg-wavegray-100 p-4 rounded-lg">
                  <div className="text-wavered text-2xl font-bold mb-2">99.9%</div>
                  <div className="text-wavegray-700">Message delivery</div>
                </div>
              </div>
              
              <Link href="/about" className="inline-block bg-wavered text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
                Learn More About Us
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="WAVETXT Team" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
