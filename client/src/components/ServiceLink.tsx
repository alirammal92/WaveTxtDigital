import { useLocation } from "wouter";

interface ServiceLinkProps {
  serviceId: string;
  children: React.ReactNode;
  className?: string;
}

export default function ServiceLink({ serviceId, children, className = "" }: ServiceLinkProps) {
  const [location, setLocation] = useLocation();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Navigate to the services page with the correct tab parameter
    setLocation(`/services?tab=${serviceId}`);
  };
  
  return (
    <a 
      href={`/services?tab=${serviceId}`}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}