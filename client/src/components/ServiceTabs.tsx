import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { serviceData } from "@/lib/servicesData";
import * as Lucide from "lucide-react";

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState("telecom");
  const [activeSubTab, setActiveSubTab] = useState<string | null>(null);
  
  // Function to update tabs based on URL
  const updateTabsFromUrl = useCallback(() => {
    // Parse URL parameters
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get('tab');
    const subTabParam = params.get('subtab');
    
    // Check for hash in URL (backward compatibility)
    const hash = window.location.hash.replace('#', '');
    
    // If we have tab parameter, use it
    if (tabParam) {
      const tabExists = serviceData.find(tab => tab.id === tabParam);
      if (tabExists) {
        setActiveTab(tabParam);
        
        // If we also have a subtab parameter, use it
        if (subTabParam) {
          const subTabExists = tabExists.subTabs.find(subTab => subTab.id === subTabParam);
          if (subTabExists) {
            setActiveSubTab(subTabParam);
          } else {
            // If subtab doesn't exist, set to first subtab
            setActiveSubTab(tabExists.subTabs[0]?.id || null);
          }
        } else {
          // No subtab specified, set to first subtab
          setActiveSubTab(tabExists.subTabs[0]?.id || null);
        }
        return true;
      }
    }
    
    // If no tab parameter but we have a hash, use it
    if (hash) {
      const tabExists = serviceData.find(tab => tab.id === hash);
      if (tabExists) {
        setActiveTab(hash);
        setActiveSubTab(tabExists.subTabs[0]?.id || null);
        return true;
      }
    }
    
    return false;
  }, []);
  
  // Check URL parameters whenever the page loads or URL changes
  useEffect(() => {
    updateTabsFromUrl();
    
    // Also listen for popstate events (browser back/forward buttons)
    const handlePopState = () => {
      updateTabsFromUrl();
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [updateTabsFromUrl]);
  
  // Scroll to the services section when tab/subtab changes
  useEffect(() => {
    if (activeTab) {
      // Use setTimeout to ensure DOM has updated
      setTimeout(() => {
        const servicesSection = document.getElementById('services-section');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [activeTab, activeSubTab]);
  
  // Set initial active sub-tab when component mounts or active tab changes
  useEffect(() => {
    // Only set the default subtab if no subtab is already set
    // This prevents overriding a subtab that was set from sessionStorage
    if (!activeSubTab) {
      const currentTab = serviceData.find(tab => tab.id === activeTab);
      if (currentTab && currentTab.subTabs.length > 0) {
        setActiveSubTab(currentTab.subTabs[0].id);
      } else {
        setActiveSubTab(null);
      }
    }
  }, [activeTab, activeSubTab]);
  
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setActiveSubTab(null); // Reset subtab when changing main tab
  };
  
  const handleSubTabClick = (subTabId: string) => {
    setActiveSubTab(subTabId);
  };
  
  // Get current tab and sub-tab data
  const currentTab = serviceData.find(tab => tab.id === activeTab);
  const currentSubTab = currentTab?.subTabs.find(subTab => subTab.id === activeSubTab);

  // Function to render icon dynamically
  const renderIcon = (iconName: string) => {
    const IconComponent = (Lucide as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1)];
    return IconComponent ? <IconComponent className="w-5 h-5 mb-1" /> : null;
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-heading font-bold text-center mb-12">Our Services</h2>
      
      {/* Main Service Tabs */}
      <div className="flex flex-wrap justify-center mb-10">
        {serviceData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`flex flex-col items-center px-6 py-4 mx-2 mb-4 rounded-lg transition-all ${
              activeTab === tab.id 
                ? 'bg-wavered text-white shadow-lg transform -translate-y-1' 
                : 'bg-white text-wavegray-700 hover:bg-wavegray-100 shadow'
            }`}
          >
            {tab.icon && renderIcon(tab.icon)}
            <span className="font-medium mt-1">{tab.title}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {currentTab && (
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-heading font-bold text-wavegray-900 mb-3">{currentTab.title}</h3>
              <p className="text-wavegray-600">{currentTab.description}</p>
            </div>
            
            {/* Sub-tabs Navigation */}
            {currentTab.subTabs.length > 0 && (
              <div className="border-b border-wavegray-200 mb-8">
                <div className="flex flex-wrap">
                  {currentTab.subTabs.map((subTab) => (
                    <button
                      key={subTab.id}
                      onClick={() => handleSubTabClick(subTab.id)}
                      className={`px-6 py-3 font-medium transition-colors ${
                        activeSubTab === subTab.id 
                          ? 'text-wavered border-b-2 border-wavered' 
                          : 'text-wavegray-600 hover:text-wavegray-900'
                      }`}
                    >
                      {subTab.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sub-tab Content */}
            {currentSubTab && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h4 className="text-2xl font-heading font-semibold text-wavegray-900 mb-4">{currentSubTab.title}</h4>
                  <p className="text-wavegray-700 mb-6">
                    {currentSubTab.description}
                  </p>
                  <div className="bg-wavegray-50 p-6 rounded-lg mb-6">
                    <h5 className="font-medium mb-4 text-wavegray-800">Key Features:</h5>
                    <ul className="space-y-3">
                      {currentSubTab.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-wavered mt-1 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-wavegray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex space-x-4">
                    <Link href="/get-quote" className="inline-block bg-wavered text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
                      {currentSubTab.ctaText}
                    </Link>
                    <Link href="/contact" className="inline-block border border-wavered text-wavered px-6 py-3 rounded-md font-medium hover:bg-wavered hover:text-white transition-colors">
                      Contact Us
                    </Link>
                  </div>
                </div>
                <div className="relative h-full">
                  <div className="absolute -top-3 -right-3 w-20 h-20 bg-wavered/10 rounded-full"></div>
                  <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-wavered/10 rounded-full"></div>
                  <img 
                    src={currentSubTab.imageUrl} 
                    alt={currentSubTab.title} 
                    className="rounded-lg shadow-lg w-full h-auto relative z-10"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
