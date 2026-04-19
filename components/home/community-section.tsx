const celebrities = [
  {
    name: "Siêu mẫu Hoàng Thùy",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80",
  },
  {
    name: "Diễn viên Quốc Trường",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  },
  {
    name: "Diễn viên Bình Minh",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
  },
  {
    name: "Diễn viên Thảo Ngọc",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
  },
]

export function CommunitySection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-primary" />
            <h2 className="font-serif text-2xl md:text-3xl text-foreground">
              CỘNG ĐỒNG TINH HOA THIÊN MỘC HƯƠNG
            </h2>
            <div className="h-px w-16 bg-primary" />
          </div>
        </div>

        {/* Celebrities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {celebrities.map((celebrity, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img
                src={celebrity.image}
                alt={celebrity.name}
                className="w-full aspect-[3/4] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-medium text-center">
                  {celebrity.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
