import { useState, useEffect } from "react";
import { Link } from "wouter";
import { serviceData } from "@/lib/servicesData";

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState("telecom");
  const [activeSubTab, setActiveSubTab] = useState<string | null>(null);
  
  // Set initial active sub-tab when component mounts or active tab changes
  useEffect(() => {
    const currentTab = serviceData.find(tab => tab.id === activeTab);
    if (currentTab && currentTab.subTabs.length > 0) {
      setActiveSubTab(currentTab.subTabs[0].id);
    } else {
      setActiveSubTab(null);
    }
  }, [activeTab]);
  
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };
  
  const handleSubTabClick = (subTabId: string) => {
    setActiveSubTab(subTabId);
  };
  
  // Get current tab and sub-tab data
  const currentTab = serviceData.find(tab => tab.id === activeTab);
  const currentSubTab = currentTab?.subTabs.find(subTab => subTab.id === activeSubTab);
  
  return (
    <div>
      {/* Service Tabs */}
      <div className="service-tabs mb-8">
        <div className="flex flex-wrap border-b border-wavegray-300">
          {serviceData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`service-tab-button ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {currentTab && (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            {/* Sub-tabs */}
            {currentTab.subTabs.length > 0 && (
              <div className="service-subtabs mb-6">
                <div className="flex flex-wrap gap-2">
                  {currentTab.subTabs.map((subTab) => (
                    <button
                      key={subTab.id}
                      onClick={() => handleSubTabClick(subTab.id)}
                      className={`service-subtab-button ${activeSubTab === subTab.id ? 'active' : ''}`}
                    >
                      {subTab.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sub-tab Content */}
            {currentSubTab && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-heading font-semibold text-wavegray-900 mb-4">{currentSubTab.title}</h3>
                  <p className="text-wavegray-700 mb-4">
                    {currentSubTab.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {currentSubTab.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-wavered mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/get-quote">
                    <a className="inline-block bg-wavered text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
                      {currentSubTab.ctaText}
                    </a>
                  </Link>
                </div>
                <div>
                  <img 
                    src={currentSubTab.imageUrl} 
                    alt={currentSubTab.title} 
                    className="rounded-lg shadow-md w-full"
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
