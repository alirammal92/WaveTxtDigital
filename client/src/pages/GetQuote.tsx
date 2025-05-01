import QuoteForm from "@/components/QuoteForm";
import { Link } from "wouter";

export default function GetQuote() {
  return (
    <main className="pt-24 pb-16">
      <section className="py-20 bg-wavegray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Request a Personalized Quote</h1>
            <p className="text-wavegray-300 text-lg">
              Fill out the form below and our team will get back to you with a customized proposal that meets your specific needs.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white text-wavegray-700 rounded-lg shadow-lg overflow-hidden">
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-wavegray-900 text-center mb-12">How Our Quote Process Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-wavegray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-wavered text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-wavegray-900 mb-2">Submit Request</h3>
                <p className="text-wavegray-700">
                  Fill out our detailed quote request form with information about your business needs and requirements.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-wavegray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-wavered text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-wavegray-900 mb-2">Consultation Call</h3>
                <p className="text-wavegray-700">
                  Our experts will schedule a call to discuss your requirements in detail and answer any questions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-wavegray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-wavered text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-wavegray-900 mb-2">Custom Proposal</h3>
                <p className="text-wavegray-700">
                  Receive a detailed, personalized quote with pricing, timelines, and implementation details.
                </p>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-heading font-semibold text-wavegray-900 mb-4">Need Immediate Assistance?</h3>
              <p className="text-wavegray-700 mb-6">
                If you have urgent requirements or prefer to speak directly with our team, contact us now.
              </p>
              <Link href="/contact" className="inline-block bg-wavered text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
