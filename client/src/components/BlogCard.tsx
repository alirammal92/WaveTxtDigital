import { Link } from "wouter";
import { BlogPost } from "@/lib/blogData";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { id, title, excerpt, date, readTime, imageUrl, category } = post;
  
  // Format date
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-wavegray-200 transition-all hover:shadow-lg h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="text-sm text-wavegray-500 mb-2">{formattedDate} • {readTime} min read</div>
        <h3 className="text-xl font-heading font-semibold text-wavegray-900 mb-3">{title}</h3>
        <p className="text-wavegray-700 mb-4 flex-grow">
          {excerpt}
        </p>
        <Link href={`/blog/${id}`}>
          <a className="text-wavered font-medium hover:underline mt-auto">Read more →</a>
        </Link>
      </div>
    </div>
  );
}
