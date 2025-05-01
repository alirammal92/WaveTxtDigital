import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main className="pt-24 pb-16">
      <section className="py-20 bg-wavegray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-wavegray-900 mb-4">Contact Us</h1>
            <p className="text-wavegray-700 text-lg">
              Have questions or ready to get started? Reach out to our team through any of the channels below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-wavegray-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-wavered" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold text-wavegray-900 mb-2">Our Location</h3>
              <p className="text-wavegray-700">
                Kalimnou 1, "Q MERITO", 4th Floor<br/>
                Agios Nikolaos, Kamares<br/>
                6037 Larnaca, Cyprus
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-wavegray-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-wavered" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold text-wavegray-900 mb-2">Email Us</h3>
              <p className="text-wavegray-700">
                info@wavetxt.com<br/>
                support@wavetxt.com
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-wavegray-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-wavered" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold text-wavegray-900 mb-2">Call Us</h3>
              <p className="text-wavegray-700">
                +961 70093352<br/>
                info@wavetxt.com
              </p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <ContactForm />
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-wavegray-900 text-center mb-10">Office Hours</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-wavegray-100 rounded-lg p-6">
                <h3 className="text-xl font-heading font-semibold text-wavegray-900 mb-4">Cyprus Office</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="font-medium">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM EET</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span>Closed</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-wavegray-100 rounded-lg p-6">
                <h3 className="text-xl font-heading font-semibold text-wavegray-900 mb-4">Support Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="font-medium">Technical Support:</span>
                    <span>24/7</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Customer Service:</span>
                    <span>8:00 AM - 8:00 PM EET (Mon-Sat)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Emergency Contact:</span>
                    <span>Available 24/7</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
