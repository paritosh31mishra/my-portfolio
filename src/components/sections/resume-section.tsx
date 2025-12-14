import { JSX } from 'react';
import { SectionHeader } from '../ui/section-header';
import { Briefcase, GraduationCap, Code2, ExternalLink } from 'lucide-react';

export function ResumeSection() {
  // EXPERIENCE DATA
  const experiences = [
    {
      role: 'Software Developer',
      company: 'Entries.AI',
      duration: 'March 2025 — Present',
      description:
        'A product-based company that provides AI-powered cloud business solutions.',
      points: [
        'Tech Stack: TypeScript, JavaScript, React.js, Frappe Framework, APIs, Git, Jira.',
        'Owned and delivered the entire Project Tracking module UI and API integrations.',
        'Contributed to Stanch App HRM & Payroll product with UI + feature development.',
        'Used advanced React Hooks & performance optimizations improving frontend by 30%.',
        'Built reusable components and client scripts, reducing UI bugs by 25%.',
        'Used AI dev tools (V0, Bolt) to reduce dev time by 25%.',
        'Resolved highest number of critical frontend bugs pre-release (40% reduction).',
      ],
      highlightDot: true,
    },
    {
      role: 'Java Developer Intern',
      company: 'Ainglobe Technologies Pvt Ltd',
      duration: 'Jan 2024 — July 2024',
      description: 'A startup focused on ecommerce solutions.',
      points: [
        'Worked on order management UI + API integrations.',
        'Built dynamic product listing pages with quantity control.',
        'Used Git for source control and Postman for testing.',
      ],
    },
    {
      role: 'MernStack Developer Intern',
      company: 'Infocampus Pvt Ltd',
      duration: 'May 2023 — Oct 2023',
      description: 'A project-based full-stack training company.',
      points: [
        'Built full-stack apps using React, Node.js, MongoDB.',
        'Implemented responsive UI and efficient data handling.',
      ],
    },
  ];

  // EDUCATION DATA
  const education = [
    {
      degree: 'Master of Computer Application (MCA)',
      school: 'NIT Raipur',
      duration: '2021 — 2024',
      score: 'CPI: 8.08/10',
    },
  ];

  // SKILLS CATEGORIES
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        'React.js',
        'TypeScript',
        'JavaScript',
        'Tailwind CSS',
        'HTML/CSS',
      ],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Java', 'C', 'Express.js', 'Frappe Framework'],
    },
    {
      title: 'Tools & AI',
      skills: ['Git & GitHub', 'VS Code', 'Postman', 'Jira', 'V0', 'Bolt'],
    },
  ];

  return (
    <div className='space-y-10'>
      <SectionHeader title='Career Snapshot' />

      {/* EXPERIENCE SECTION */}
      <div>
        <Header icon={<Briefcase />} title='Experience' />

        <div className='space-y-8 pl-6 h-[500px] overflow-hidden hover:overflow-auto focus:overflow-auto'>
          {experiences.map((exp, idx) => (
            <TimelineItem key={idx} {...exp} />
          ))}
        </div>
      </div>

      {/* EDUCATION */}
      <div className='mt-10'>
        <Header icon={<GraduationCap />} title='Education' />

        <div className='space-y-8 pl-4 md:pl-0'>
          {education.map((edu, idx) => (
            <EducationItem key={idx} {...edu} />
          ))}
        </div>
      </div>

      {/* SKILLS */}
      <div className='mt-12'>
        <Header icon={<Code2 />} title='My Skills' />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {skillCategories.map((cat, idx) => (
            <SkillCard key={idx} title={cat.title} skills={cat.skills} />
          ))}

          {/* PROBLEM SOLVING */}
          <ProblemSolvingCard />
        </div>
      </div>
    </div>
  );
}

/* -------- Components -------- */

function Header({ icon, title }: { icon: JSX.Element; title: string }) {
  return (
    <div className='flex items-center gap-3 mb-6'>
      <div className='p-2 bg-[#1a1a1a] rounded-lg border border-white/10 text-cyan-400'>
        {icon}
      </div>
      <h3 className='text-xl font-bold text-white'>{title}</h3>
    </div>
  );
}

function TimelineItem({
  role,
  company,
  duration,
  description,
  points,
  highlightDot,
}: any) {
  return (
    <div className='relative pl-8 border-l border-white/10 pb-2 group'>
      <div
        className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full transition-transform ${
          highlightDot
            ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)] group-hover:scale-125'
            : 'bg-[#2a2a2a] border border-cyan-500/50 group-hover:bg-cyan-400'
        }`}
      ></div>

      <h4 className='text-lg font-bold text-white'>{role}</h4>
      <p className='text-cyan-400 text-sm mb-2'>
        {company} • {duration}
      </p>
      <p className='text-gray-400 text-sm leading-relaxed mb-3'>
        {description}
      </p>

      <ul className='list-disc list-inside text-gray-400 text-sm space-y-1 marker:text-cyan-500/50'>
        {points.map((p: string, idx: number) => (
          <li key={idx} className='pl-1'>
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

function EducationItem({ degree, school, duration, score }: any) {
  return (
    <div className='relative pl-8 border-l border-white/10 group'>
      <div className='absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]'></div>

      <h4 className='text-lg font-bold text-white'>{degree}</h4>
      <p className='text-cyan-400 text-sm mb-2'>
        {school} • {duration}
      </p>
      <p className='text-gray-400 text-sm'>{score}</p>
    </div>
  );
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className='bg-[#1a1a1a] rounded-xl p-6 border border-white/5'>
      <h4 className='text-lg font-semibold text-white mb-4'>{title}</h4>

      <div className='flex flex-wrap gap-2'>
        {skills.map((skill) => (
          <span
            key={skill}
            className='px-3 py-1 rounded-md bg-zinc-800 text-sm text-gray-300 border border-white/5 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors'
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProblemSolvingCard() {
  const links = [
    {
      title: 'LeetCode Profile',
      url: 'https://leetcode.com/u/Paritosh_mishra/',
    },
    {
      title: 'GeeksForGeeks Profile',
      url: 'https://www.geeksforgeeks.org/profile/paritoshmishra1?tab=activity',
    },
    {
      title: 'HackerRank Profile',
      url: 'https://www.hackerrank.com/profile/mishraparitosh81',
    },
  ];

  return (
    <div className='bg-[#1a1a1a] rounded-xl p-6 border border-white/5'>
      <h4 className='text-lg font-semibold text-white mb-4'>Problem Solving</h4>

      <div className='space-y-3'>
        {links.map((l, idx) => (
          <a
            key={idx}
            href={l.url}
            className='flex items-center justify-between p-3 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors group'
          >
            <span className='text-gray-300 group-hover:text-cyan-400 transition-colors'>
              {l.title}
            </span>
            <ExternalLink
              size={16}
              className='text-gray-500 group-hover:text-cyan-400'
            />
          </a>
        ))}
      </div>
    </div>
  );
}
