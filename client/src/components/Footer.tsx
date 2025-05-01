import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-wavegray-900 text-wavegray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center h-10 mb-4">
              <img src="/assets/WAVETXT-logo.svg" alt="WAVETXT Logo" className="h-8 mr-2 filter brightness-100" />
              <span className="text-white font-medium">LTD</span>
            </Link>
            <p className="mb-4">
              Leading telecom and marketing solutions provider serving businesses across the MENA region.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61575525382575" target="_blank" rel="noopener noreferrer" className="text-wavegray-300 hover:text-wavered transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/wavetxt-ltd" target="_blank" rel="noopener noreferrer" className="text-wavegray-300 hover:text-wavered transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services?tab=telecom" className="font-semibold hover:text-wavered transition-colors">Telecommunications</Link></li>
              <li className="pl-4"><Link href="/services?tab=telecom&subtab=a2p-sms" className="hover:text-wavered transition-colors">A2P SMS</Link></li>
              
              <li><Link href="/services?tab=marketing" className="font-semibold hover:text-wavered transition-colors">Marketing Solutions</Link></li>
              <li className="pl-4"><Link href="/services?tab=marketing&subtab=whatsapp-business" className="hover:text-wavered transition-colors">WhatsApp Business</Link></li>
              <li className="pl-4"><Link href="/services?tab=marketing&subtab=social-media" className="hover:text-wavered transition-colors">Social Media Marketing</Link></li>
              <li className="pl-4"><Link href="/services?tab=marketing&subtab=lead-gen" className="hover:text-wavered transition-colors">Lead Generation</Link></li>
              
              <li><Link href="/services?tab=it" className="font-semibold hover:text-wavered transition-colors">Information Technology</Link></li>
              <li className="pl-4"><Link href="/services?tab=it&subtab=workflow" className="hover:text-wavered transition-colors">Workflow Automation</Link></li>
              <li className="pl-4"><Link href="/services?tab=it&subtab=website" className="hover:text-wavered transition-colors">Website Design</Link></li>
              
              <li><Link href="/services?tab=strategy" className="font-semibold hover:text-wavered transition-colors">Business Strategy Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-wavered transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-wavered transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-wavered transition-colors">Services</Link></li>
              <li><Link href="/get-quote" className="hover:text-wavered transition-colors">Get Quote</Link></li>
              <li><Link href="/contact" className="hover:text-wavered transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-wavered mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Kalimnou 1, "Q MERITO", 4th Floor<br/>Agios Nikolaos, Kamares<br/>6037 Larnaca, Cyprus</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-wavered mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@wavetxt.com</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-wavered mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+357 24 812050</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-wavegray-700 text-center md:flex md:justify-between md:text-left">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} WAVETXT LTD. All rights reserved.<br />
            <span className="text-sm">Registration Number: HE 474402 | Founded by Ali Rammal in 2025</span>
          </div>
          <div>
            <Link href="#" className="inline-block mx-2 hover:text-wavered transition-colors">Privacy Policy</Link>
            <Link href="#" className="inline-block mx-2 hover:text-wavered transition-colors">Terms of Service</Link>
            <Link href="#" className="inline-block mx-2 hover:text-wavered transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
