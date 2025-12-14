import type React from "react";
import { Mail, MapPin, Linkedin, Github, Smartphone } from "lucide-react";

export function Sidebar() {
  return (
    <div className="bg-[#151515] rounded-3xl p-6 border border-white/5 h-full sticky top-8 flex flex-col shadow-2xl shadow-black/50">
      <div className="flex flex-col items-center gap-4 pb-10">
        <div className=" w-40 h-40 rounded-3xl overflow-hidden border-2 border-white/10 shadow-lg bg-zinc-800">
          {/* Switching to standard img tag for pure React */}
          <img
            src="mypic.png"
            alt="Paritosh Mishra"
            width={160}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>
        <div className=" grid gap-4 text-center mb-2">
          <h1 className="text-2xl font-bold tracking-wide">Paritosh Mishra</h1>
          <div className="mt-4 bg-white/5 px-4 py-1.5 rounded-full text-sm font-medium text-white/80 border border-white/5">
            Full Stack Developer
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-8 flex flex-col gap-6">
        <div className="flex items-start gap-4 group">
          <div className="p-3 rounded-xl bg-[#1a1a1a] border border-white/5 text-cyan-400 group-hover:bg-cyan-400/10 transition-colors">
            <Mail size={20} />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">Email</p>
            <p className="text-sm text-gray-300 break-all">paritosh1999mishra@gmail.com</p>
          </div>
        </div>

        <div className="flex items-start gap-4 group">
          <div className="p-3 rounded-xl bg-[#1a1a1a] border border-white/5 text-cyan-400 group-hover:bg-cyan-400/10 transition-colors">
            <MapPin size={20} />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">Location</p>
            <p className="text-sm text-gray-300">Bangalore, Karnataka</p>
          </div>
        </div>

        <div className="flex items-start gap-4 group">
          <div className="p-3 rounded-xl bg-[#1a1a1a] border border-white/5 text-cyan-400 group-hover:bg-cyan-400/10 transition-colors">
            <Smartphone size={20} />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">Phone</p>
            <p className="text-sm text-gray-300">+91 6375995783</p>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-8 flex justify-center gap-3">
        <SocialLink icon={<Linkedin size={18} />} href="https://www.linkedin.com/in/paritosh-mishra-091323222/" />
        <SocialLink icon={<Github size={18} />} href="https://github.com/paritosh31mishra" />
        {/* <SocialLink icon={<Instagram size={18} />} href="#" />
        <SocialLink icon={<Twitter size={18} />} href="#" /> */}
      </div>
    </div>
  )
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="p-3 rounded-xl bg-[#1a1a1a] border border-white/5 text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
    >
      {icon}
    </a>
  )
}
