import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import GetQuote from "@/pages/GetQuote";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import Partners from "@/pages/Partners";
import { useEffect } from "react";
import { initGA, trackPageView } from "@/lib/ga";

function Router() {
  useEffect(() => {
    initGA();
    trackPageView();
  }, []);
  
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/get-quote" component={GetQuote} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
        <Route path="/partners" component={Partners} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
