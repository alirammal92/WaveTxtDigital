export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  readTime: number;
  imageUrl: string;
  category: string;
  author?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 SMS Marketing Trends to Watch in 2023",
    excerpt: "Discover the latest trends in SMS marketing and how they can help your business grow in an increasingly competitive landscape.",
    content: "SMS marketing continues to deliver impressive results for businesses across industries. With open rates of 98% and most messages read within minutes of receipt, SMS remains one of the most effective communication channels for businesses...",
    date: "2023-08-15",
    readTime: 5,
    imageUrl: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "SMS Marketing",
    author: "John Smith"
  },
  {
    id: "2",
    title: "Why WhatsApp Business is Essential for Customer Service",
    excerpt: "Learn how WhatsApp Business API can transform your customer service experience and improve satisfaction scores.",
    content: "With over 2 billion active users worldwide, WhatsApp has become the preferred messaging platform for many customers. Businesses that leverage WhatsApp Business API can meet customers where they already are, providing convenient, personalized support...",
    date: "2023-07-28",
    readTime: 4,
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Customer Service",
    author: "Sarah Johnson"
  },
  {
    id: "3",
    title: "Digital Transformation Success Stories in the EMEA Region",
    excerpt: "Explore how companies in Europe, the Middle East and Africa are successfully implementing digital transformation strategies.",
    content: "Digital transformation is no longer optional for businesses operating in the EMEA region. As markets evolve and customer expectations shift, companies that embrace digital technologies are positioning themselves for long-term success...",
    date: "2023-06-10",
    readTime: 6,
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Digital Transformation",
    author: "Ahmed Al-Farsi"
  },
  {
    id: "4",
    title: "Leveraging Social Media for B2B Lead Generation",
    excerpt: "Discover effective strategies to generate high-quality B2B leads through social media platforms.",
    content: "While many associate social media marketing primarily with B2C companies, B2B organizations can achieve remarkable lead generation results through strategic social media campaigns. LinkedIn, in particular, offers powerful targeting options...",
    date: "2023-05-22",
    readTime: 5,
    imageUrl: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Lead Generation",
    author: "Maria Rodriguez"
  },
  {
    id: "5",
    title: "How Workflow Automation Is Changing Business Operations",
    excerpt: "Explore the impact of workflow automation on business efficiency, employee satisfaction, and bottom-line results.",
    content: "Manual, repetitive tasks not only consume valuable employee time but also increase the risk of errors. By implementing workflow automation solutions, businesses can streamline operations, reduce costs, and allow employees to focus on higher-value activities...",
    date: "2023-04-15",
    readTime: 7,
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Workflow Automation",
    author: "David Chen"
  },
  {
    id: "6",
    title: "The Impact of 5G on Telecommunications and Marketing",
    excerpt: "Understand how 5G technology is revolutionizing telecom services and creating new marketing opportunities.",
    content: "The rollout of 5G networks across the globe is set to transform how businesses connect with customers. With dramatically increased speeds, lower latency, and greater capacity, 5G enables a range of new applications and services...",
    date: "2023-03-05",
    readTime: 6,
    imageUrl: "https://images.unsplash.com/photo-1546027031-7e5e2b5d8f1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Telecommunications",
    author: "Amir Hassan"
  }
];
