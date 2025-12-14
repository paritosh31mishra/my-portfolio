import { SectionHeader } from "../ui/section-header";
import { Code, Database, Layout, Terminal } from "lucide-react";

export const AboutSection = () => {
  return (
    <div className="space-y-8">
      <SectionHeader title="Digital Identity" />

      <div className="text-gray-300 leading-relaxed space-y-4">
        <p>
          I am <span className="text-white font-semibold">Paritosh Mishra</span>, a Software Developer based in
          Bangalore, Karnataka. I have a strong foundation in{" "}
          <span className="text-cyan-400">React JS, TypeScript, JavaScript, DataStructures, C++, Java, Node JS, Express JS, Git</span>.
        </p>
        <p>
          Passionate about building scalable solutions, I hold a Master of Computer Applications from the National
          Institute of Technology (NIT), Raipur. Currently working at <span className="text-white">Entries.AI</span>, I
          specialize in full-stack development, creating intuitive user interfaces and robust backend systems. My
          journey involves continuous learning and applying modern technologies like React.js, Node.js, and AI tools to
          solve real-world problems.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5 hover:border-cyan-400/30 transition-colors group">
          <div className="text-4xl font-bold text-cyan-400 mb-1 group-hover:scale-110 transition-transform origin-left">
            1+
          </div>
          <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">Years Experience</div>
        </div>
        <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5 hover:border-cyan-400/30 transition-colors group">
          <div className="text-4xl font-bold text-cyan-400 mb-1 group-hover:scale-110 transition-transform origin-left">
            600+
          </div>
          <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">DSA Problems Solved</div>
        </div>
        <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5 hover:border-cyan-400/30 transition-colors group">
          <div className="text-4xl font-bold text-cyan-400 mb-1 group-hover:scale-110 transition-transform origin-left">
            3+
          </div>
          <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">Major Projects</div>
        </div>
        <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5 hover:border-cyan-400/30 transition-colors group">
          <div className="text-4xl font-bold text-cyan-400 mb-1 group-hover:scale-110 transition-transform origin-left">
            200+
          </div>
          <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">Github Contributions</div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Terminal size={24} className="text-cyan-400" />
          <span>What I Do</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5 hover:-translate-y-1 transition-transform duration-300">
            <Layout className="text-cyan-400 mb-4" size={32} />
            <h4 className="text-lg font-bold text-white mb-2">Frontend Development</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building responsive and interactive UIs using React.js, TypeScript, and Tailwind CSS. Focused on
              performance, accessibility, and smooth user experiences.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5 hover:-translate-y-1 transition-transform duration-300">
            <Database className="text-cyan-400 mb-4" size={32} />
            <h4 className="text-lg font-bold text-white mb-2">Backend Development</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Developing robust APIs and server-side logic using Node.js and Java. Experience with Frappe Framework and
              database management.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5 hover:-translate-y-1 transition-transform duration-300">
            <Code className="text-cyan-400 mb-4" size={32} />
            <h4 className="text-lg font-bold text-white mb-2">Problem Solving</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Strong grasp of Data Structures and Algorithms with over 600 problems solved across LeetCode, GFG, and
              HackerRank.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
