import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/blogData";

export default function Blog() {
  return (
    <main className="pt-24 pb-16">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-wavegray-900 mb-4">Our Blog</h1>
            <p className="text-wavegray-700 text-lg">
              Insights, industry news, and expert tips to help you stay ahead in telecom and marketing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <nav aria-label="Pagination" className="inline-flex">
              <a href="#" className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-wavegray-300 bg-white text-sm font-medium text-wavegray-700 hover:bg-wavegray-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Previous</span>
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-wavegray-300 bg-white text-sm font-medium text-wavegray-700 hover:bg-wavegray-50">
                1
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-wavegray-300 bg-wavered text-sm font-medium text-white">
                2
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-wavegray-300 bg-white text-sm font-medium text-wavegray-700 hover:bg-wavegray-50">
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 border border-wavegray-300 bg-white text-sm font-medium text-wavegray-700">
                ...
              </span>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-wavegray-300 bg-white text-sm font-medium text-wavegray-700 hover:bg-wavegray-50">
                8
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 rounded-r-md border border-wavegray-300 bg-white text-sm font-medium text-wavegray-700 hover:bg-wavegray-50">
                <span>Next</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-wavegray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-wavegray-900 mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-wavegray-700 mb-8">
              Stay updated with the latest insights and news in telecom and marketing delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 border border-wavegray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wavered focus:border-transparent"
                required
              />
              <button 
                type="submit" 
                className="bg-wavered text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-wavegray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
