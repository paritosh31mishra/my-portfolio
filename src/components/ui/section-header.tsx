export function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
      <div className="w-12 h-1.5 bg-cyan-400 rounded-full"></div>
    </div>
  )
}
