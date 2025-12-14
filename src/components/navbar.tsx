"use client";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import type { Tab } from "./portfolio-layout";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const tabs: { id: Tab; label: string }[] = [
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "portfolio", label: "Portfolio" },
    // { id: "gallery", label: "Gallery" },
    // { id: "contact", label: "Contact" },
  ];

  const [activeTab, setActiveTab] = useState<Tab>("about");
  const navigate = useNavigate();
  const location = useLocation();

  /** Sync URL → activeTab */
  useEffect(() => {
    const current = location.pathname.replace("/", "") as Tab;
    if (tabs.some(t => t.id === current)) {
      setActiveTab(current);
    }
  }, [location.pathname]);

  return (
    <div className="ml-auto">
      <div className="bg-[#151515]/80 backdrop-blur-md p-1.5 rounded-t-2xl md:rounded-bl-2xl md:rounded-tr-3xl border border-white/5 flex flex-row gap-2 md:gap-0 shadow-lg">
        {tabs.map((tab) => 
        // ( 
        {
          console.log(`/${tab.id}`);
          return (
            <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              navigate(`/${tab.id}`);
            }}
            className={cn(
              "px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300",
              activeTab === tab.id
                ? "text-cyan-400 bg-[#1f1f1f]"
                : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
            )}
          >
            {tab.label}
          </button>
          )
        
        }
        // )
        )}
      </div>
    </div>
  );
};

export default Navbar;
