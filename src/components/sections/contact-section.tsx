import { SectionHeader } from "../ui/section-header";
import { Smartphone, Mail, Send, Map } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export const ContactSection = () => {
  return (
    <div className="space-y-8">
      <SectionHeader title="Let's Connect" />

      {/* Map Container */}
      <div className="w-full h-64 rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 bg-zinc-800 relative">
        {/* Using a static image or iframe placeholder for the map */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a]">
          <div className="text-center">
            <Map className="w-12 h-12 text-cyan-400 mx-auto mb-2 opacity-50" />
            <p className="text-gray-500 text-sm">Bangalore, Karnataka, India</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5">
            <h3 className="text-lg font-bold text-white mb-6">Contact Details</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-zinc-900 text-cyan-400 border border-white/5">
                  <Smartphone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">Phone</p>
                  <p className="text-sm text-gray-300 font-medium">+91 97090 83123</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-zinc-900 text-cyan-400 border border-white/5">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">Email</p>
                  <p className="text-sm text-gray-300 font-medium break-all">paritosh1999mishra@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2 bg-[#1a1a1a] p-6 md:p-8 rounded-2xl border border-white/5">
          <h3 className="text-xl font-bold text-white mb-6">Contact Form</h3>
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input
                placeholder="Full Name"
                className="bg-zinc-900 border-white/5 text-white placeholder:text-gray-600 h-12 focus-visible:ring-cyan-400/50 focus-visible:border-cyan-400"
              />
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-zinc-900 border-white/5 text-white placeholder:text-gray-600 h-12 focus-visible:ring-cyan-400/50 focus-visible:border-cyan-400"
              />
            </div>
            <Textarea
              placeholder="Your Message"
              className="bg-zinc-900 border-white/5 text-white placeholder:text-gray-600 min-h-[150px] focus-visible:ring-cyan-400/50 focus-visible:border-cyan-400 resize-none"
            />

            <div className="flex justify-end pt-2">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-6 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
