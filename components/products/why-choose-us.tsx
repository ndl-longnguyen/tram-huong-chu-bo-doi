import { Truck, Shield, Award, HeartHandshake } from "lucide-react"

const reasons = [
  {
    icon: Truck,
    title: "Giao hàng tốc",
    description: "Nội thành HCM - HN trong 2h",
  },
  {
    icon: Shield,
    title: "Bảo hành hậu mãi",
    description: "1 đổi 1 trong 30 ngày",
  },
  {
    icon: Award,
    title: "100%",
    description: "Trầm hương tự nhiên",
  },
  {
    icon: HeartHandshake,
    title: "Bảo hành trọn đời",
    description: "Vòng đeo - Vòng trong đời",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 tracking-wider">
            TẠI SAO CHỌN CHÚNG TÔI
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Lý Do Nên Chọn Trầm Hương Chú Bộ Đội
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="group text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
