interface Stat {
  value: string
  label: string
}

interface StatsStripProps {
  stats: Stat[]
  dark?: boolean
}

export default function StatsStrip({ stats, dark = false }: StatsStripProps) {
  return (
    <div className={dark ? 'bg-navy-900' : 'bg-steel-50 border-y border-steel-200'}>
      <div className="container-xl py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-steel-200">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center px-6 py-6 ${dark ? 'bg-navy-900' : 'bg-steel-50'}`}
            >
              <div
                className={`text-2xl lg:text-3xl font-bold mb-1 ${
                  dark ? 'text-white' : 'text-navy-900'
                }`}
              >
                {stat.value}
              </div>
              <div className={`text-xs leading-snug ${dark ? 'text-steel-400' : 'text-steel-500'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
