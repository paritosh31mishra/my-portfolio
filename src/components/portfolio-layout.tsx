"use client";

import { Sidebar } from "./sidebar";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

const PortfolioLayout = () => {
  console.log("run");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-cyan-500/30 py-6 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
      
      <div className="w-full flex flex-col gap-6">

        {/* Navbar */}
        <Navbar />

        {/* Main Layout */}
        <div
          className="
            grid gap-5 
            grid-cols-1 
            md:grid-cols-4 
            h-full
            min-h-[600px]
          "
        >

          {/* Sidebar */}
          <div className="md:col-span-1 h-full order-2 md:order-1">
            <Sidebar />
          </div>

          {/* Main Content Area */}
          <div className="
            md:col-span-3 
            bg-[#151515] 
            rounded-3xl 
            p-5 sm:p-6 md:p-8 lg:p-10 
            border border-white/5 
            shadow-2xl shadow-black/50
            order-1 md:order-2
            overflow-hidden
            min-h-[500px]
          ">
            <Outlet />
          </div>

        </div>
      </div>
    </div>
  );
};

export default PortfolioLayout;

