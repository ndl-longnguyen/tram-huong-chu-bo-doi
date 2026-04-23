export interface Product {
  id: string
  name: {
    vi: string
    en: string
    zh: string
  }
  slug: string
  image: string
  images: string[]
  originalPrice: number
  salePrice?: number
  rating: number
  reviewCount: number
  badgeType?: "new" | "best" | "hot" | "sale"
  category: {
    vi: string
    en: string
    zh: string
  }
  categorySlug: string
  description: {
    vi: string
    en: string
    zh: string
  }
  features: {
    vi: string[]
    en: string[]
    zh: string[]
  }
  specs: {
    material: { vi: string; en: string; zh: string }
    origin: { vi: string; en: string; zh: string }
    size: string
    weight: string
    age: { vi: string; en: string; zh: string }
  }
  inStock: boolean
  sku: string
}

export const products: Product[] = [
  {
    id: "1",
    name: {
      vi: "Vòng Tay Bảo Linh Trầm Tốc - Việt Nam VIP",
      en: "Bao Linh Premium Agarwood Bracelet - Vietnam VIP",
      zh: "宝灵沉香手链 - 越南VIP"
    },
    slug: "vong-tay-bao-linh-tram-toc-vip",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80"
    ],
    originalPrice: 21500000,
    salePrice: 18500000,
    rating: 5,
    reviewCount: 128,
    badgeType: "best",
    category: { vi: "Vòng Tay", en: "Bracelets", zh: "手链" },
    categorySlug: "vong-tay",
    description: {
      vi: "Vòng tay trầm hương cao cấp Bảo Linh được chế tác từ 100% trầm tốc tự nhiên Việt Nam, mang đến năng lượng tích cực và bình an cho người đeo. Sản phẩm được tuyển chọn kỹ lưỡng từ những vùng trầm nổi tiếng nhất Việt Nam như Tiên Phước, Quảng Nam.",
      en: "The premium Bao Linh agarwood bracelet is crafted from 100% natural Vietnamese agarwood, bringing positive energy and peace to the wearer. The product is carefully selected from the most famous agarwood regions in Vietnam such as Tien Phuoc, Quang Nam.",
      zh: "宝灵高级沉香手链采用100%越南天然沉香制作，为佩戴者带来正能量和平安。产品精选自越南最著名的沉香产区，如先福、广南。"
    },
    features: {
      vi: [
        "100% Trầm hương tự nhiên Việt Nam",
        "Chế tác thủ công bởi nghệ nhân lành nghề",
        "Hương thơm dịu nhẹ, thanh tao",
        "Bảo hành mùi hương trọn đời",
        "Tặng kèm hộp đựng cao cấp và giấy chứng nhận"
      ],
      en: [
        "100% Natural Vietnamese agarwood",
        "Handcrafted by skilled artisans",
        "Gentle, elegant fragrance",
        "Lifetime fragrance warranty",
        "Includes premium box and certificate"
      ],
      zh: [
        "100%越南天然沉香",
        "由熟练工匠手工制作",
        "香味柔和优雅",
        "终身香味保修",
        "附赠高级礼盒和证书"
      ]
    },
    specs: {
      material: { vi: "Trầm Tốc Việt Nam", en: "Vietnamese Agarwood", zh: "越南沉香" },
      origin: { vi: "Tiên Phước, Quảng Nam", en: "Tien Phuoc, Quang Nam", zh: "先福，广南" },
      size: "8mm - 10mm",
      weight: "15g - 20g",
      age: { vi: "20 năm tuổi trầm", en: "20 years aged", zh: "20年陈香" }
    },
    inStock: true,
    sku: "THCBD-BL-001"
  },
  {
    id: "2",
    name: {
      vi: "Vòng Tay Bảo Hương - Trầm Tốc Cao Cấp",
      en: "Bao Huong Bracelet - Premium Agarwood",
      zh: "宝香手链 - 高级沉香"
    },
    slug: "vong-tay-bao-huong-tram-toc-cao-cap",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80"
    ],
    originalPrice: 15900000,
    rating: 5,
    reviewCount: 89,
    category: { vi: "Vòng Tay", en: "Bracelets", zh: "手链" },
    categorySlug: "vong-tay",
    description: {
      vi: "Vòng tay Bảo Hương với thiết kế thanh lịch, được làm từ trầm tốc cao cấp, phù hợp cho cả nam và nữ. Sản phẩm mang lại cảm giác thanh tịnh, giúp tâm an, trí sáng.",
      en: "The Bao Huong bracelet with elegant design, made from premium agarwood, suitable for both men and women. The product brings a sense of purity, helping to calm the mind.",
      zh: "宝香手链设计优雅，采用高级沉香制作，适合男女佩戴。产品带来纯净感，有助于平静心灵。"
    },
    features: {
      vi: [
        "Trầm tốc cao cấp nguyên chất",
        "Thiết kế unisex thanh lịch",
        "Hương thơm tự nhiên lâu phai",
        "Hỗ trợ đổi size miễn phí",
        "Bảo hành trọn đời"
      ],
      en: [
        "Pure premium agarwood",
        "Elegant unisex design",
        "Long-lasting natural fragrance",
        "Free size exchange",
        "Lifetime warranty"
      ],
      zh: [
        "纯正高级沉香",
        "优雅中性设计",
        "持久天然香味",
        "免费更换尺寸",
        "终身保修"
      ]
    },
    specs: {
      material: { vi: "Trầm Tốc Cao Cấp", en: "Premium Agarwood", zh: "高级沉香" },
      origin: { vi: "Khánh Hòa, Việt Nam", en: "Khanh Hoa, Vietnam", zh: "庆和，越南" },
      size: "8mm",
      weight: "12g",
      age: { vi: "15 năm tuổi trầm", en: "15 years aged", zh: "15年陈香" }
    },
    inStock: true,
    sku: "THCBD-BH-002"
  },
  {
    id: "3",
    name: {
      vi: "Vòng Tay Lưu Quang - Trầm Sống VIP",
      en: "Luu Quang Bracelet - Live Agarwood VIP",
      zh: "流光手链 - 活沉香VIP"
    },
    slug: "vong-tay-luu-quang-tram-song-vip",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80"
    ],
    originalPrice: 18500000,
    salePrice: 16500000,
    rating: 5,
    reviewCount: 156,
    badgeType: "sale",
    category: { vi: "Vòng Tay", en: "Bracelets", zh: "手链" },
    categorySlug: "vong-tay",
    description: {
      vi: "Vòng tay Lưu Quang được chế tác từ trầm sống VIP, loại trầm quý hiếm được hình thành tự nhiên trong thân cây dó bầu còn sống. Sản phẩm mang năng lượng mạnh mẽ, hương thơm đặc biệt.",
      en: "The Luu Quang bracelet is crafted from VIP live agarwood, a rare type of agarwood formed naturally in living Aquilaria trees. The product carries powerful energy with a special fragrance.",
      zh: "流光手链采用VIP活沉香制作，这是一种在活沉香树中自然形成的稀有沉香。产品具有强大的能量和特殊的香味。"
    },
    features: {
      vi: [
        "Trầm sống VIP - loại trầm quý hiếm",
        "Năng lượng mạnh mẽ, hương thơm đặc biệt",
        "Chế tác tinh xảo, độc đáo",
        "Kèm giấy kiểm định chất lượng",
        "Giao hàng nhanh toàn quốc"
      ],
      en: [
        "VIP live agarwood - rare type",
        "Powerful energy, special fragrance",
        "Exquisite, unique craftsmanship",
        "Quality certification included",
        "Fast nationwide delivery"
      ],
      zh: [
        "VIP活沉香 - 稀有类型",
        "强大能量，特殊香味",
        "精致独特的工艺",
        "附质量检测证书",
        "全国快速配送"
      ]
    },
    specs: {
      material: { vi: "Trầm Sống VIP", en: "VIP Live Agarwood", zh: "VIP活沉香" },
      origin: { vi: "Hà Tĩnh, Việt Nam", en: "Ha Tinh, Vietnam", zh: "河静，越南" },
      size: "10mm",
      weight: "18g",
      age: { vi: "25 năm tuổi trầm", en: "25 years aged", zh: "25年陈香" }
    },
    inStock: true,
    sku: "THCBD-LQ-003"
  },
  {
    id: "4",
    name: {
      vi: "Vòng Tay Trầm Hương Việt Nam Mộc Thật",
      en: "Authentic Vietnamese Natural Agarwood Bracelet",
      zh: "正宗越南天然沉香手链"
    },
    slug: "vong-tay-tram-huong-viet-nam-moc-that",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80"
    ],
    originalPrice: 12900000,
    rating: 4,
    reviewCount: 67,
    category: { vi: "Vòng Tay", en: "Bracelets", zh: "手链" },
    categorySlug: "vong-tay",
    description: {
      vi: "Vòng tay trầm hương mộc thật với vẻ đẹp tự nhiên, không qua xử lý hóa chất. Sản phẩm giữ nguyên vân gỗ tự nhiên và hương thơm nguyên bản của trầm hương Việt Nam.",
      en: "Natural agarwood bracelet with natural beauty, without chemical treatment. The product retains the natural wood grain and original fragrance of Vietnamese agarwood.",
      zh: "天然沉香手链，自然美观，未经化学处理。产品保留了越南沉香的天然木纹和原始香味。"
    },
    features: {
      vi: [
        "100% mộc thật, không xử lý hóa chất",
        "Vân gỗ tự nhiên đẹp mắt",
        "Giá cả phải chăng",
        "Phù hợp người mới bắt đầu",
        "Hỗ trợ tư vấn 24/7"
      ],
      en: [
        "100% authentic, no chemical treatment",
        "Beautiful natural wood grain",
        "Affordable price",
        "Suitable for beginners",
        "24/7 consultation support"
      ],
      zh: [
        "100%正品，无化学处理",
        "美丽的天然木纹",
        "价格实惠",
        "适合初学者",
        "24/7咨询支持"
      ]
    },
    specs: {
      material: { vi: "Trầm Hương Mộc Thật", en: "Natural Agarwood", zh: "天然沉香" },
      origin: { vi: "Bình Phước, Việt Nam", en: "Binh Phuoc, Vietnam", zh: "平福，越南" },
      size: "8mm",
      weight: "10g",
      age: { vi: "10 năm tuổi trầm", en: "10 years aged", zh: "10年陈香" }
    },
    inStock: true,
    sku: "THCBD-MT-004"
  },
  {
    id: "5",
    name: {
      vi: "Nhẫn Trầm Hương Việt Nam Ngọc Thật",
      en: "Vietnamese Jade Agarwood Ring",
      zh: "越南玉石沉香戒指"
    },
    slug: "nhan-tram-huong-viet-nam-ngoc-that",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80"
    ],
    originalPrice: 8500000,
    salePrice: 7200000,
    rating: 5,
    reviewCount: 45,
    badgeType: "new",
    category: { vi: "Trang Sức", en: "Jewelry", zh: "首饰" },
    categorySlug: "trang-suc",
    description: {
      vi: "Nhẫn trầm hương kết hợp ngọc thật, thiết kế sang trọng và độc đáo. Sản phẩm phù hợp làm quà tặng cao cấp cho người thân yêu.",
      en: "Agarwood ring combined with real jade, luxurious and unique design. The product is suitable as a premium gift for loved ones.",
      zh: "沉香戒指搭配真玉，设计奢华独特。产品适合作为高级礼品送给亲人。"
    },
    features: {
      vi: [
        "Kết hợp trầm hương và ngọc thật",
        "Thiết kế sang trọng, đẳng cấp",
        "Phù hợp làm quà tặng",
        "Có thể đặt size theo yêu cầu",
        "Bảo hành chất lượng 12 tháng"
      ],
      en: [
        "Combination of agarwood and real jade",
        "Luxurious, classy design",
        "Suitable as a gift",
        "Custom size available",
        "12-month quality warranty"
      ],
      zh: [
        "沉香与真玉结合",
        "奢华高档设计",
        "适合作为礼物",
        "可定制尺寸",
        "12个月质量保修"
      ]
    },
    specs: {
      material: { vi: "Trầm Hương + Ngọc Thật", en: "Agarwood + Real Jade", zh: "沉香 + 真玉" },
      origin: { vi: "Việt Nam", en: "Vietnam", zh: "越南" },
      size: "16mm - 22mm",
      weight: "8g",
      age: { vi: "15 năm tuổi trầm", en: "15 years aged", zh: "15年陈香" }
    },
    inStock: true,
    sku: "THCBD-NH-005"
  },
  {
    id: "6",
    name: {
      vi: "Nhang Trầm Hương Cao Cấp - Hộp 50 Cây",
      en: "Premium Agarwood Incense - Box of 50",
      zh: "高级沉香香 - 50支装"
    },
    slug: "nhang-tram-huong-cao-cap-hop-50-cay",
    image: "https://images.unsplash.com/photo-1600459056749-7f8e37d1e1e5?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1600459056749-7f8e37d1e1e5?w=600&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80"
    ],
    originalPrice: 450000,
    rating: 5,
    reviewCount: 234,
    badgeType: "hot",
    category: { vi: "Nhang Trầm", en: "Incense", zh: "香" },
    categorySlug: "nhang-tram",
    description: {
      vi: "Nhang trầm hương cao cấp được làm từ bột trầm nguyên chất, không hóa chất độc hại. Hương thơm thanh tao, giúp không gian sống thêm thanh tịnh và thư giãn.",
      en: "Premium agarwood incense made from pure agarwood powder, no harmful chemicals. Elegant fragrance helps living space become more peaceful and relaxing.",
      zh: "高级沉香香采用纯沉香粉制作，无有害化学物质。优雅的香味使生活空间更加平静和放松。"
    },
    features: {
      vi: [
        "100% bột trầm nguyên chất",
        "Không hóa chất độc hại",
        "Thời gian cháy 45-60 phút/cây",
        "Hương thơm thanh tao, dịu nhẹ",
        "Đóng gói đẹp mắt"
      ],
      en: [
        "100% pure agarwood powder",
        "No harmful chemicals",
        "Burn time 45-60 minutes per stick",
        "Elegant, gentle fragrance",
        "Beautiful packaging"
      ],
      zh: [
        "100%纯沉香粉",
        "无有害化学物质",
        "每支燃烧时间45-60分钟",
        "优雅柔和的香味",
        "精美包装"
      ]
    },
    specs: {
      material: { vi: "Bột Trầm Nguyên Chất", en: "Pure Agarwood Powder", zh: "纯沉香粉" },
      origin: { vi: "Việt Nam", en: "Vietnam", zh: "越南" },
      size: "21cm",
      weight: "100g",
      age: { vi: "N/A", en: "N/A", zh: "N/A" }
    },
    inStock: true,
    sku: "THCBD-NT-006"
  }
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(productId: string, limit = 4): Product[] {
  const product = getProductById(productId)
  if (!product) return products.slice(0, limit)
  
  return products
    .filter((p) => p.id !== productId && p.categorySlug === product.categorySlug)
    .slice(0, limit)
}
