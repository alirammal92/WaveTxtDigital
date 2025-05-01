import ServiceTabs from "@/components/ServiceTabs";
import { Link } from "wouter";

export default function Services() {
  return (
    <main className="pt-24 pb-16">
      <section id="services-section" className="py-16 bg-wavegray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-wavegray-900 mb-4">Our Services</h1>
          </div>
          <ServiceTabs />
          
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-heading font-bold text-wavegray-900 mb-6">Need a Custom Solution?</h2>
            <p className="text-lg text-wavegray-700 max-w-2xl mx-auto mb-8">
              Our team can create tailored packages designed specifically for your business requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-quote" className="bg-wavered text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
                Request a Custom Quote
              </Link>
              <Link href="/contact" className="bg-white border border-wavegray-300 text-wavegray-700 px-6 py-3 rounded-md font-medium hover:bg-wavegray-100 transition-colors">
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-wavegray-900 text-center mb-10">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-wavegray-100 rounded-lg p-6">
                <h3 className="text-xl font-heading font-semibold text-wavegray-900 mb-2">How quickly can you implement an SMS solution?</h3>
                <p className="text-wavegray-700">
                  Most of our SMS solutions can be implemented within 48-72 hours, depending on the complexity of integration with your existing systems. Our team works efficiently to ensure minimal downtime and a smooth transition.
                </p>
              </div>
              
              <div className="bg-wavegray-100 rounded-lg p-6">
                <h3 className="text-xl font-heading font-semibold text-wavegray-900 mb-2">Do you offer services outside the MENA region?</h3>
                <p className="text-wavegray-700">
                  While our primary focus is on the MENA region, we do serve clients globally. Our solutions are scalable and adaptable to various markets and regulatory environments.
                </p>
              </div>
              
              <div className="bg-wavegray-100 rounded-lg p-6">
                <h3 className="text-xl font-heading font-semibold text-wavegray-900 mb-2">What makes your WhatsApp Business integration different?</h3>
                <p className="text-wavegray-700">
                  Our WhatsApp Business integration stands out due to our official API partnership, comprehensive automation capabilities, and seamless CRM integration. We provide a full-service solution from setup to ongoing management and analytics.
                </p>
              </div>
              
              <div className="bg-wavegray-100 rounded-lg p-6">
                <h3 className="text-xl font-heading font-semibold text-wavegray-900 mb-2">Can you customize services for small businesses?</h3>
                <p className="text-wavegray-700">
                  Absolutely! We understand that small businesses have unique needs and budget considerations. We offer scalable solutions that can grow with your business, starting with essential features and expanding as needed.
                </p>
              </div>
              
              <div className="bg-wavegray-100 rounded-lg p-6">
                <h3 className="text-xl font-heading font-semibold text-wavegray-900 mb-2">How do you ensure data security and compliance?</h3>
                <p className="text-wavegray-700">
                  We implement industry-leading security measures and adhere to international data protection standards. All our solutions are compliant with regional regulations, and we regularly update our systems to maintain the highest level of security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
