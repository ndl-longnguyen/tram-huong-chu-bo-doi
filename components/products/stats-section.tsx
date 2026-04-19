const stats = [
  { value: "300,000", suffix: "+", label: "Khách hàng" },
  { value: "20", suffix: "+", label: "Quốc Gia" },
  { value: "50", suffix: "+", label: "Nhân sự" },
  { value: "45", suffix: "+", label: "Năm kinh nghiệm" },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
