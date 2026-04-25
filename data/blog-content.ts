
export interface BlogPost {
  id: string
  slug: string
  title: {
    vi: string
    en: string
    zh: string
  }
  excerpt: {
    vi: string
    en: string
    zh: string
  }
  content: {
    vi: string
    en: string
    zh: string
  }
  image: string
  date: string
  readTime: {
    vi: string
    en: string
    zh: string
  }
  category: {
    vi: string
    en: string
    zh: string
  }
  author: {
    vi: string
    en: string
    zh: string
  }
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "tac-dung-tram-huong-phong-thuy",
    title: {
      vi: "Bất ngờ với tác dụng của trầm hương trong phong thủy",
      en: "Surprising effects of agarwood in feng shui",
      zh: "沉香在风水中的惊人作用"
    },
    excerpt: {
      vi: "Trầm hương từ lâu đã được coi là 'báu vật của trời đất', không chỉ mang giá trị kinh tế cao mà còn chứa đựng sức mạnh phong thủy vô cùng to lớn.",
      en: "Agarwood has long been considered a 'treasure of heaven and earth', not only carrying high economic value but also containing immense feng shui power.",
      zh: "沉香长期以来被视为“天地之宝”，不仅具有极高的经济价值，还蕴含着巨大的风水力量。"
    },
    content: {
      vi: `
Trong quan niệm phong thủy, trầm hương được coi là vật phẩm mang năng lượng dương cực mạnh, có khả năng xua đuổi tà khí, hóa giải vận xui và mang lại may mắn cho gia chủ. Dưới đây là những tác dụng bất ngờ của trầm hương mà bạn có thể chưa biết.

### 1. Xua đuổi tà khí, uế khí
Trầm hương được hình thành từ những tổn thương trên cây Dó Bầu, trải qua hàng chục, hàng trăm năm hấp thụ linh khí đất trời. Do đó, nó mang trong mình nguồn năng lượng tinh sạch nhất. Khi đốt trầm hoặc đặt trầm trong nhà, hương thơm và năng lượng của nó sẽ giúp thanh lọc không gian, xua tan những luồng khí xấu, mang lại sự thông thoáng và bình an.

### 2. Thu hút tài lộc và vận may
Nhiều doanh nhân và người kinh doanh thường đặt các khối trầm cảnh hoặc đốt trầm tại nơi làm việc. Họ tin rằng hương trầm giúp kích hoạt các cung tài lộc, giúp công việc hanh thông, thuận buồm xuôi gió. Mùi hương thanh khiết còn giúp tinh thần minh mẫn, từ đó đưa ra những quyết định kinh doanh đúng đắn.

### 3. Cân bằng năng lượng, tâm an
Sức mạnh của trầm hương không chỉ dừng lại ở việc tác động lên không gian mà còn tác động trực tiếp lên con người. Đeo vòng tay trầm hương giúp người sở hữu luôn cảm thấy bình an, giảm bớt căng thẳng và nóng nảy. Trong phong thủy, một tâm hồn an yên chính là **thỏi nam châm mạnh nhất** để thu hút những điều tốt đẹp.

### 4. Vật phẩm hộ mệnh
Vòng tay trầm hương hay các mặt dây chuyền trầm hương được xem là lá bùa hộ mệnh. Nó bảo vệ người đeo khỏi những tác động tiêu cực từ môi trường xung quanh, đặc biệt là khi đi đến những nơi có âm khí nặng.

> **Kết luận:** Trầm hương không chỉ là một món đồ trang sức xa xỉ mà còn là một người bạn đồng hành tâm linh, giúp bạn cân bằng cuộc sống và thu hút những năng lượng tích cực nhất.
      `,
      en: `
In feng shui, agarwood is considered an item carrying extremely strong Yang energy, capable of warding off evil spirits, neutralizing bad luck, and bringing fortune to the owner. Here are the surprising effects of agarwood that you may not know.

### 1. Warding off evil and impure air
Agarwood is formed from injuries on the Aquilaria tree, absorbing the spiritual essence of heaven and earth over decades or centuries. Therefore, it carries the purest source of energy. When burning agarwood or placing it in the house, its fragrance and energy help purify the space, dispel bad vibes, and bring openness and peace.

### 2. Attracting wealth and luck
Many entrepreneurs and business people often place agarwood ornaments or burn agarwood at their workplace. They believe the fragrance helps activate wealth sectors, making work smooth and successful. The pure scent also helps maintain a clear mind, leading to sound business decisions.

### 3. Balancing energy and mind
The power of agarwood doesn't stop at the space but directly affects people. Wearing an agarwood bracelet helps the owner always feel at peace, reducing stress and temper. In feng shui, a peaceful soul is the **strongest magnet** to attract good things.

### 4. Protective talisman
Agarwood bracelets or pendants are seen as protective talismans. It protects the wearer from negative environmental impacts, especially when going to places with heavy negative energy.

> **Conclusion:** Agarwood is not just a luxury jewelry piece but also a spiritual companion, helping you balance life and attract the most positive energies.
      `,
      zh: `
在风水观念中，沉香被认为具有极强的阳气，能够驱除邪气、化解厄运并为屋主带来好运。以下是您可能不知道的沉香惊人作用。

### 1. 驱除邪气与秽气
沉香形成于沉香树受损处，历经数十年甚至数百年吸收天地灵气。因此，它蕴含着最纯净的能量。当在室内焚香或摆放沉香时，其香气和能量有助于净化空间，驱散不良气息，带来通透与平安。

### 2. 吸引财运与好运
许多企业家和商界人士经常在办公场所摆放沉香景观或焚香。他们相信沉香的香气有助于激活财位，使工作顺风顺水。纯净的香气还能让人头脑清醒，从而做出正确的商业决策。

### 3. 平衡能量，安定心神
沉香的力量不仅止于空间，还直接作用于人。佩戴沉香手链能让主人感到内心平静，减轻压力与急躁。在风水中，安宁的灵魂是吸引美好事物的**最强磁铁**。

### 4. 护身符
沉香手链或吊坠被视为护身符。它保护佩戴者免受周围环境的负面影响，特别是在前往阴气较重的地方时。

> **结论：** 沉香不仅是一件奢侈的珠宝，更是一个心灵伴侣，帮助您平衡生活并吸引最积极的能量。
      `
    },
    image: "/images/blogs/1.webp",
    date: "25/04/2024",
    readTime: { vi: "8 phút đọc", en: "8 min read", zh: "8分钟阅读" },
    category: { vi: "Phong thủy", en: "Feng Shui", zh: "风水" },
    author: { vi: "Trầm Hương Chú Bộ Đội", en: "Chu Bo Doi Agarwood", zh: "朱伯队沉香" },
  },
  {
    id: "2",
    slug: "hit-tram-huong-co-tac-dung-gi",
    title: {
      vi: "Hít trầm hương có tác dụng gì? Có độc hay không?",
      en: "What are the effects of inhaling agarwood? Is it toxic?",
      zh: "吸入沉香有什么效果？有毒吗？"
    },
    excerpt: {
      vi: "Mùi hương của trầm hương được mệnh danh là 'vương giả của các loài hương'. Vậy việc hít thở hương trầm hàng ngày ảnh hưởng thế nào đến sức khỏe?",
      en: "The scent of agarwood is known as the 'king of all scents'. So how does inhaling agarwood daily affect health?",
      zh: "沉香的香味被称为“万香之王”。那么每天吸入沉香会对健康产生什么影响呢？"
    },
    content: {
      vi: `
Nhiều người lo ngại việc đốt trầm trong không gian kín hoặc hít hương trầm thường xuyên có thể gây hại. Tuy nhiên, sự thật lại hoàn toàn ngược lại nếu bạn sử dụng trầm hương sạch tự nhiên.

### 1. Giảm stress và an thần
Hợp chất benzyl axeton trong trầm hương có tác dụng làm dịu hệ thần kinh trung ương. Khi hít hương trầm, cơ thể sẽ tiết ra các hormone giúp thư giãn, giảm bớt lo âu và căng thẳng. Đây là lý do trầm hương thường được dùng trong thiền định và yoga.

### 2. Cải thiện chất lượng giấc ngủ
Nếu bạn thường xuyên bị mất ngủ, hãy thử đốt một nụ trầm nhỏ trước khi đi ngủ khoảng 30 phút. Hương trầm thoang thoảng sẽ giúp bạn dễ đi vào giấc ngủ và ngủ sâu hơn, không bị mộng mị.

### 3. Làm sạch đường hô hấp
Trầm hương tự nhiên có tính kháng khuẩn và chống viêm. Việc hít hương trầm sạch có thể giúp làm dịu cổ họng, giảm tình trạng nghẹt mũi và làm sạch không khí xung quanh, bảo vệ hệ hô hấp khỏi vi khuẩn.

### 4. Trầm hương có độc hay không?
Trầm hương tự nhiên hoàn toàn không độc. Ngược lại, nó là một vị thuốc quý trong y học cổ truyền. Tuy nhiên, bạn cần hết sức cảnh giác với các loại trầm hóa chất, trầm ép hương liệu nhân tạo. Khi đốt những loại này, khói của chúng chứa hóa chất độc hại có thể gây cay mắt, nhức đầu và hại phổi.

> **Lời khuyên:** Hãy luôn chọn mua trầm hương tại các cơ sở uy tín để đảm bảo sức khỏe cho bản thân và gia đình.
      `,
      en: `
Many people are concerned that burning agarwood in enclosed spaces or inhaling it frequently might be harmful. However, the truth is quite the opposite if you use clean, natural agarwood.

### 1. Stress reduction and sedation
The compound benzylacetone in agarwood has a calming effect on the central nervous system. When inhaling agarwood scent, the body releases hormones that help relax, reduce anxiety, and alleviate stress. This is why agarwood is often used in meditation and yoga.

### 2. Improving sleep quality
If you frequently suffer from insomnia, try burning a small agarwood cone about 30 minutes before bed. The lingering fragrance will help you fall asleep easier and sleep deeper without nightmares.

### 3. Cleaning the respiratory tract
Natural agarwood has antibacterial and anti-inflammatory properties. Inhaling clean agarwood scent can help soothe the throat, reduce nasal congestion, and purify the surrounding air, protecting the respiratory system from bacteria.

### 4. Is agarwood toxic?
Natural agarwood is completely non-toxic. On the contrary, it is a precious medicine in traditional medicine. However, you must be extremely vigilant with chemical agarwood or artificial scented ones. When burned, their smoke contains harmful chemicals that can cause eye irritation, headaches, and lung damage.

> **Advice:** Always choose to buy agarwood from reputable sources to ensure the health of yourself and your family.
      `,
      zh: `
许多人担心在封闭空间焚香或经常吸入沉香香气会有害。然而，如果您使用的是纯天然沉香，事实恰恰相反。

### 1. 减压安神
沉香中的苄基丙酮化合物对中枢神经系统有镇静作用。当吸入沉香香气时，身体会释放有助于放松、减少焦虑和压力的荷尔蒙。这就是为什么沉香常用于冥想和瑜伽的原因。

### 2. 改善睡眠质量
如果您经常失眠，请尝试在睡前约30分钟点燃一颗小沉香。淡淡的香气将帮助您更容易入睡，睡眠更深，减少梦魇。

### 3. 清洁呼吸道
天然沉香具有抗菌和抗炎特性。吸入干净的沉香香气可以帮助缓解喉咙不适，减轻鼻塞并净化周围空气，保护呼吸系统免受细菌侵害。

### 4. 沉香有毒吗？
天然沉香完全无毒。相反，它是传统医学中的一种名贵药材。然而，您需要对化学沉香或人造香精沉香保持高度警惕。焚烧这些产品时，烟雾中含有有害化学物质，可能导致眼睛刺痛、头痛和肺部受损。

> **建议：** 请务必选择信誉良好的机构购买沉香，以确保您和家人的健康。
      `
    },
    image: "/images/blogs/2.webp",
    date: "22/04/2024",
    readTime: { vi: "6 phút đọc", en: "6 min read", zh: "6分钟阅读" },
    category: { vi: "Sức khỏe", en: "Health", zh: "健康" },
    author: { vi: "Trầm Hương Chú Bộ Đội", en: "Chu Bo Doi Agarwood", zh: "朱伯队沉香" },
  },
  {
    id: "3",
    slug: "tram-huong-sanh-chim-la-gi",
    title: {
      vi: "Trầm hương sánh chìm là gì? Sự thật về trầm hương sánh chìm",
      en: "What is sinking agarwood? The truth about sinking agarwood",
      zh: "什么是沉水沉香？沉水沉香的真相"
    },
    excerpt: {
      vi: "Trầm hương sánh chìm luôn là cái tên gây sốt trong giới chơi trầm. Nhưng không phải ai cũng hiểu rõ về nguồn gốc và giá trị thật của nó.",
      en: "Sinking agarwood has always been a hot name in the agarwood community. But not everyone understands its origin and true value.",
      zh: "沉水沉香一直是沉香界的热门词。但并不是每个人都了解它的起源和真正价值。"
    },
    content: {
      vi: `
Trên thị trường hiện nay, cụm từ 'trầm hương sánh chìm' xuất hiện rất phổ biến. Để trở thành một người mua hàng thông thái, bạn cần phân biệt rõ các loại trầm sánh.

### 1. Định nghĩa trầm hương sánh chìm
Trầm sánh là loại trầm được hình thành từ lớp vỏ ngoài của cây Dó Bầu. Khi cây bị thương, nhựa cây tiết ra bao phủ lấy vết thương tạo thành những lớp mỏng (sánh). 'Chìm' ở đây có nghĩa là lượng tinh dầu trong miếng trầm rất cao, khiến khối lượng riêng của nó nặng hơn nước, dẫn đến việc miếng trầm bị chìm xuống khi thả vào nước.

### 2. Trầm sánh tự nhiên vs Trầm sánh ghép
Trong tự nhiên, những miếng trầm sánh chìm nguyên khối rất mỏng và hiếm. Do đó, để tạo ra các sản phẩm như vòng tay, người ta phải dùng phương pháp **ghép sánh**. Họ xếp các lớp trầm mỏng chồng lên nhau và dùng một loại keo chuyên dụng để kết dính chúng lại, sau đó tiện thành hạt vòng.

### 3. Sự thật về chất lượng
Vì có sử dụng keo nên trầm sánh ghép thường có độ bền không cao bằng trầm nguyên khối tự nhiên. Một số loại keo kém chất lượng có thể gây kích ứng da đối với những người nhạy cảm. Tuy nhiên, nếu được làm từ keo tốt và gỗ trầm chất lượng, vòng sánh ghép vẫn mang lại vẻ ngoài thẩm mỹ và hương thơm rất tốt với giá thành hợp lý.

### 4. Cách nhận biết trầm sánh ép keo kém chất lượng
Những loại vòng này thường có màu sắc đen sẫm nhân tạo, mùi hương hắc của hóa chất và các đường vân gỗ không tự nhiên. Khi đeo một thời gian, hạt vòng dễ bị nứt hoặc mất mùi nhanh chóng.

**Kết luận:** Trầm sánh chìm (ghép) là một sản phẩm phổ thông đẹp mắt, nhưng người mua cần biết rõ mình đang mua loại nào để có kỳ vọng đúng về giá trị và độ bền.
      `,
      en: `
In today's market, the term 'sinking agarwood' appears very commonly. To be a wise buyer, you need to clearly distinguish between different types of sinking agarwood.

### 1. Definition of sinking agarwood
Sinking agarwood (Tram Sanh Chim) is formed from the outer bark layer of the Aquilaria tree. When the tree is injured, resin is secreted to cover the wound, forming thin layers. 'Sinking' here means the essential oil content in the agarwood piece is so high that its density is heavier than water, causing it to sink when placed in water.

### 2. Natural vs. Laminated Sinking Agarwood
In nature, solid pieces of sinking agarwood are very thin and rare. Therefore, to create products like bracelets, people use the **lamination method**. They stack thin layers of agarwood and use a specialized glue to bind them together, then turn them into beads.

### 3. The truth about quality
Because glue is used, laminated agarwood usually doesn't have the same durability as natural solid agarwood. Some low-quality glues can cause skin irritation for sensitive people. However, if made with good glue and quality agarwood, laminated products still offer great aesthetics and fragrance at a reasonable price.

### 4. How to identify poor quality glue-pressed agarwood
These bracelets often have artificial dark black colors, a pungent chemical smell, and unnatural wood grain. After wearing for a while, the beads are prone to cracking or losing scent quickly.

**Conclusion:** Laminated sinking agarwood is a beautiful popular product, but buyers need to know exactly what they are buying to have the right expectations of value and durability.
      `,
      zh: `
在当今市场上，“沉水沉香”这个词非常普遍。要成为一个明智的买家，您需要清楚地辨别不同类型的沉香。

### 1. 什么是沉水沉香
沉水沉香是由沉香树的外皮层形成的。当树木受损时，树脂会分泌出来覆盖伤口，形成薄层。“沉水”在这里意味着沉香片中的精油含量非常高，使其密度比水重，导致放入水中时会下沉。

### 2. 天然 vs 压层沉水沉香
在自然界中，整块的沉水沉香非常薄且稀有。因此，为了制作手链等产品，人们使用**压层法**。他们将薄层的沉香堆叠在一起，并使用专用胶水将其粘合，然后加工成珠子。

### 3. 质量真相
由于使用了胶水，压层沉香的耐用性通常不如天然实心沉香。一些劣质胶水可能会引起敏感人群的皮肤过敏。然而，如果使用优质胶水和高质量沉香木制作，压层产品仍然能以合理的价格提供极佳的美学和香气。

### 4. 如何识别劣质胶压沉香
这些手链通常具有人造的深黑色，刺激性的化学气味，以及不自然的木纹。佩戴一段时间后，珠子容易开裂或迅速失去香味。

**结论：** 压层沉水沉香是一种美观的流行产品，但买家需要清楚了解自己购买的是哪种类型，以便对价值和耐用性有正确的预期。
      `
    },
    image: "/images/blogs/3.webp",
    date: "20/04/2024",
    readTime: { vi: "7 phút đọc", en: "7 min read", zh: "7分钟阅读" },
    category: { vi: "Kiến thức", en: "Knowledge", zh: "知识" },
    author: { vi: "Trầm Hương Chú Bộ Đội", en: "Chu Bo Doi Agarwood", zh: "朱伯队沉香" },
  },
  {
    id: "4",
    slug: "nguoi-menh-hoa-nen-deo-gi",
    title: {
      vi: "Người mệnh Hỏa nên đeo gì? Bí quyết chọn vòng phong thủy",
      en: "What should people of the Fire element wear?",
      zh: "火命人应该佩戴什么？"
    },
    excerpt: {
      vi: "Chọn vòng phong thủy đúng bản mệnh không chỉ giúp tăng thêm vẻ đẹp mà còn mang lại sự hanh thông trong cuộc sống và sự nghiệp.",
      en: "Choosing the right feng shui bracelet for your destiny not only enhances beauty but also brings success in life and career.",
      zh: "根据命理选择正确的风水手链，不仅能增加美感，还能带来生活和事业的顺利。"
    },
    content: {
      vi: `
Trong ngũ hành, mệnh Hỏa tượng trưng cho lửa, cho sự nhiệt huyết và sức mạnh. Việc chọn vật phẩm phong thủy phù hợp sẽ giúp người mệnh Hỏa kiềm chế được sự nóng nảy và phát huy tối đa năng lực của mình.

### 1. Màu sắc tương sinh, tương hợp
Theo quy luật ngũ hành, Mộc sinh Hỏa. Do đó, người mệnh Hỏa cực kỳ phù hợp với các màu sắc thuộc hành Mộc như **màu xanh lá cây**. Ngoài ra, họ cũng có thể chọn các màu sắc tương hợp của chính hành Hỏa như **đỏ, hồng, tím**.

### 2. Tại sao người mệnh Hỏa nên đeo Trầm Hương?
Trầm hương thuộc hành Mộc (gỗ). Theo mối quan hệ tương sinh, Mộc sinh Hỏa, nên trầm hương là vật phẩm lý tưởng nhất cho người mệnh Hỏa. Nó giúp nuôi dưỡng năng lượng bên trong, mang lại sự điềm tĩnh cần thiết cho những người có tính cách mạnh mẽ, đôi khi là nóng vội của mệnh Hỏa.

### 3. Sự kết hợp hoàn hảo
Người mệnh Hỏa nên chọn các mẫu vòng trầm hương mix thêm các loại đá quý có màu sắc phù hợp như:
- **Đá Ruby, Thạch Anh Hồng/Tím:** Tăng cường tình duyên và các mối quan hệ.
- **Đá Cẩm Thạch, Thạch Anh Tóc Xanh:** Mang lại sự tươi mới, sức khỏe và may mắn.

### 4. Những lưu ý cần tránh
Vì Thủy khắc Hỏa, người mệnh Hỏa nên hạn chế đeo các vật phẩm có màu sắc đen, xanh dương đậm để tránh bị kìm hãm năng lượng.

**Lời nhắn:** Một chiếc vòng trầm hương mix thạch anh tím không chỉ là món trang sức tinh tế mà còn là trợ thủ phong thủy đắc lực cho người mệnh Hỏa.
      `,
      en: `
In the five elements, Fire symbolizes fire, passion, and strength. Choosing the right feng shui item will help people of the Fire element restrain their temper and maximize their abilities.

### 1. Harmonious and supporting colors
According to the law of the five elements, Wood produces Fire. Therefore, Fire element people are extremely suitable for colors belonging to the Wood element, such as **green**. Additionally, they can choose harmonious colors of the Fire element itself, like **red, pink, and purple**.

### 2. Why should Fire element people wear Agarwood?
Agarwood belongs to the Wood element. According to the supporting relationship (Wood produces Fire), agarwood is the most ideal item for Fire element people. It helps nourish internal energy, bringing the necessary calmness to those with strong, sometimes hasty personalities.

### 3. The perfect combination
Fire element people should choose agarwood bracelets mixed with gemstones of suitable colors like:
- **Ruby, Rose/Amethyst Quartz:** Enhance love and relationships.
- **Jade, Green Rutilated Quartz:** Bring freshness, health, and luck.

### 4. Things to avoid
Since Water restrains Fire, Fire element people should limit wearing items with black or dark blue colors to avoid energy suppression.

**Message:** An agarwood bracelet mixed with amethyst is not only a sophisticated piece of jewelry but also a powerful feng shui assistant for Fire element people.
      `,
      zh: `
在五行中，火象征着火焰、激情和力量。选择正确的风水物品将帮助火命人克制脾气并最大限度地发挥自己的能力。

### 1. 相生相合的颜色
根据五行规律，木生火。因此，火命人非常适合属于木元素的颜色，如**绿色**。此外，他们也可以选择火元素自身的相合颜色，如**红色、粉红色和紫色**。

### 2. 为什么火命人应该佩戴沉香？
沉香属于木元素。根据相生关系（木生火），沉香是火命人最理想的物品。它有助于滋养内在能量，为性格强悍、有时急躁的火命人带来必要的冷静。

### 3. 完美结合
火命人应选择搭配合适颜色宝石的沉香手链，例如：
- **红宝石、粉晶/紫水晶：** 增强感情和人际关系。
- **翡翠、绿发晶：** 带来清新、健康和好运。

### 4. 需要避免的事项
由于水克火，火命人应限制佩戴黑色或深蓝色的物品，以避免能量受到抑制。

**提示：** 沉香手链搭配紫水晶不仅是一件精致的珠宝，更是火命人的得力风水助手。
      `
    },
    image: "/images/blogs/4.webp",
    date: "18/04/2024",
    readTime: { vi: "5 phút đọc", en: "5 min read", zh: "5分钟阅读" },
    category: { vi: "Phong thủy", en: "Feng Shui", zh: "风水" },
    author: { vi: "Trầm Hương Chú Bộ Đội", en: "Chu Bo Doi Agarwood", zh: "朱伯队沉香" },
  },
  {
    id: "5",
    slug: "7-dieu-cam-ky-khi-deo-vong-phong-thuy",
    title: {
      vi: "7 điều cấm kỵ khi đeo vòng phong thủy bạn cần biết",
      en: "7 taboos when wearing feng shui bracelets you need to know",
      zh: "佩戴风水手链你必须知道的7个禁忌"
    },
    excerpt: {
      vi: "Đeo vòng phong thủy không chỉ là sở thích mà còn là sự tôn trọng đối với các quy luật năng lượng. Đừng để những sai lầm nhỏ làm mất đi tác dụng của vòng.",
      en: "Wearing a feng shui bracelet is not just a hobby but a respect for energy laws. Don't let small mistakes lose the effect of the bracelet.",
      zh: "佩戴风水手链不仅是个人爱好，更是对能量规律的尊重。不要因为小错误而失去手链的效果。"
    },
    content: {
      vi: `
Vòng phong thủy, đặc biệt là vòng trầm hương, mang trong mình linh khí và năng lượng. Để vòng phát huy tối đa tác dụng hộ mệnh, bạn cần tránh 7 điều cấm kỵ sau đây.

### 1. Đeo vòng khi tắm hoặc tiếp xúc với hóa chất
Nước và hóa chất (như sữa tắm, nước hoa) có thể làm ảnh hưởng đến bề mặt gỗ và làm biến đổi mùi hương tự nhiên của trầm hương. Hãy tháo vòng ra trước khi tắm để bảo quản vòng tốt nhất.

### 2. Để vòng ở những nơi không sạch sẽ
Tránh đặt vòng phong thủy trong nhà vệ sinh, trên sàn nhà hoặc những nơi ẩm thấp, u tối. Khi không đeo, hãy đặt vòng trong hộp gấm hoặc nơi trang trọng.

### 3. Cho người khác mượn hoặc đeo thử
Vòng phong thủy sau một thời gian đeo sẽ nhận diện và kết nối với năng lượng của chủ nhân. Việc cho người khác mượn có thể làm xáo trộn nguồn năng lượng này.

### 4. Đeo vòng quá cũ hoặc đã bị nứt vỡ nặng
Trong phong thủy, vật phẩm bị nứt vỡ thường mang dấu hiệu của việc 'chắn họa'. Khi vòng đã quá cũ hoặc hư hại, bạn nên cân nhắc việc thay mới hoặc làm mới hạt vòng.

### 5. Đeo vòng trên cả hai tay cùng lúc
Nhiều người có thói quen đeo nhiều vòng trên cả hai cổ tay. Tuy nhiên, hình ảnh này trong phong thủy gợi liên tưởng đến 'còng số 8', có thể gây cản trở vận may và sự tự do.

### 6. Không vệ sinh vòng thường xuyên
Bụi bẩn và mồ hôi tích tụ lâu ngày làm vòng mất đi độ bóng và ảnh hưởng đến năng lượng. Hãy dùng vải khô mềm để lau vòng nhẹ nhàng định kỳ.

### 7. Có tâm niệm xấu khi đeo vòng
Vật phẩm phong thủy chỉ phát huy tác dụng khi đi kèm với một tâm hồn hướng thiện. Đeo vòng nhưng tâm không an, hành động không thiện thì vòng cũng khó lòng bảo hộ.

**Kết luận:** 'Có kiêng có lành', việc tuân thủ các quy tắc này sẽ giúp chiếc vòng của bạn luôn sáng bóng và tràn đầy năng lượng tích cực.
      `,
      en: `
Feng shui bracelets, especially agarwood ones, carry spiritual essence and energy. For the bracelet to maximize its protective effect, you need to avoid the following 7 taboos.

### 1. Wearing the bracelet while bathing or contacting chemicals
Water and chemicals (such as body wash, perfume) can affect the wood surface and change the natural fragrance of agarwood. Take off the bracelet before bathing for the best preservation.

### 2. Leaving the bracelet in unclean places
Avoid placing feng shui bracelets in toilets, on the floor, or in damp, dark places. When not wearing, place the bracelet in a brocade box or a solemn place.

### 3. Lending or letting others try it on
After a period of wearing, a feng shui bracelet recognizes and connects with the owner's energy. Lending it to others can disrupt this energy source.

### 4. Wearing a bracelet that is too old or severely cracked
In feng shui, cracked items often carry signs of 'blocking disaster'. When a bracelet is too old or damaged, you should consider replacing or renewing the beads.

### 5. Wearing bracelets on both hands at the same time
Many people have the habit of wearing multiple bracelets on both wrists. However, this image in feng shui resembles 'handcuffs', which can hinder luck and freedom.

### 6. Not cleaning the bracelet regularly
Dirt and sweat accumulated over time make the bracelet lose its shine and affect the energy. Periodically use a soft dry cloth to gently wipe the bracelet.

### 7. Having bad thoughts while wearing the bracelet
Feng shui items only work when accompanied by a kind soul. Wearing a bracelet but with a restless mind and unkind actions makes it hard for the bracelet to protect you.

**Conclusion:** 'Precaution is better than cure', following these rules will help your bracelet stay shiny and full of positive energy.
      `,
      zh: `
风水手链，特别是沉香手链，承载着灵气和能量。为了让手链最大限度地发挥护身作用，您需要避免以下7个禁忌。

### 1. 洗澡或接触化学品时佩戴
水和化学品（如沐浴露、香水）会影响木材表面并改变沉香的天然香味。洗澡前请取下手链，以获得最佳保养。

### 2. 将手链放在不干净的地方
避免将风水手链放在厕所、地板上或阴暗潮湿的地方。不佩戴时，请将手链放在锦盒或庄重的地方。

### 3. 借给他人或让其试戴
佩戴一段时间后，风水手链会识别并与主人的能量连接。借给他人可能会干扰这种能量源。

### 4. 佩戴过旧或严重开裂的手链
在风水中，开裂的物品通常带有“挡灾”的迹象。当手链过旧或受损时，您应考虑更换或翻新珠子。

### 5. 双手同时佩戴手链
许多人习惯在左右手腕都佩戴多条手链。然而，这种形象在风水中让人联想到“手铐”，可能会阻碍好运和自由。

### 6. 不定期清洁手链
长期积累的污垢和汗水会让手链失去光泽并影响能量。请定期使用柔软的干布轻轻擦拭手链。

### 7. 佩戴手链时存有恶念
风水物品只有在伴随着善良灵魂时才起作用。佩戴手链但心神不宁、行为不端，手链也难以保护您。

**结论：** “避邪求福”，遵守这些规则将帮助您的手链保持光亮并充满正能量。
      `
    },
    image: "/images/blogs/5.webp",
    date: "15/04/2024",
    readTime: { vi: "10 phút đọc", en: "10 min read", zh: "10分钟阅读" },
    category: { vi: "Hướng dẫn", en: "Guide", zh: "指南" },
    author: { vi: "Trầm Hương Chú Bộ Đội", en: "Chu Bo Doi Agarwood", zh: "朱伯队沉香" },
  },
  {
    id: "6",
    slug: "co-nen-dot-tram-huong-tren-ban-tho",
    title: {
      vi: "Có nên đốt trầm hương trên bàn thờ, khi nào nên đốt?",
      en: "Should agarwood be burned on the altar, when should it be burned?",
      zh: "应该在祭坛上烧沉香吗？什么时候烧？"
    },
    excerpt: {
      vi: "Đốt trầm trên bàn thờ là một nét đẹp tâm linh của người Việt. Nhưng thực hiện thế nào cho đúng và trang trọng nhất thì không phải ai cũng rõ.",
      en: "Burning agarwood on the altar is a spiritual beauty of Vietnamese people. But how to do it correctly and most solemnly is not clear to everyone.",
      zh: "在祭坛上烧沉香是越南人的一种精神美。但如何正确且庄重地操作，并不是每个人都清楚。"
    },
    content: {
      vi: `
Hương trầm từ lâu đã được xem là sợi dây kết nối giữa thế giới thực tại và thế giới tâm linh. Việc đốt trầm hương trên bàn thờ không chỉ mang lại hương thơm mà còn có ý nghĩa sâu sắc.

### 1. Ý nghĩa của việc đốt trầm trên bàn thờ
Khói trầm bay bổng, mang theo những lời nguyện cầu của con cháu gửi đến ông bà, tổ tiên. Mùi hương thanh khiết thể hiện lòng thành kính, sự hiếu thảo và mong cầu sự che chở, bình an cho gia đình.

### 2. Những thời điểm nên đốt trầm
Bạn không nhất thiết phải đốt trầm hàng ngày, nhưng có những thời điểm quan trọng không nên bỏ qua:
- **Dịp lễ Tết, giỗ chạp:** Tăng thêm sự trang nghiêm và ấm cúng cho không gian thờ tự.
- **Ngày rằm, mùng 1 hàng tháng:** Thanh tẩy không gian, cầu mong một tháng mới hanh thông.
- **Khi vừa dọn về nhà mới:** Đốt trầm giúp xua đuổi khí lạnh, mang lại hơi ấm và sinh khí cho ngôi nhà.
- **Khi cảm thấy gia đạo bất ổn:** Năng lượng từ trầm hương giúp cân bằng lại từ trường, mang lại sự bình an.

### 3. Nên sử dụng loại trầm nào?
Đối với bàn thờ, bạn nên chọn các loại trầm tăm (không tăm) hoặc trầm nụ. Trầm nụ khi đốt trong lư xông sẽ tạo ra làn khói đẹp mắt và hương thơm bền lâu. Lưu ý quan trọng nhất là phải dùng **trầm hương sạch**, tránh dùng các loại nhang trầm hóa chất rẻ tiền vì sẽ làm mất đi sự trang trọng và ảnh hưởng sức khỏe.

### 4. Vị trí đặt lư xông trầm
Lư xông trầm nên được đặt ở vị trí trang trọng trên bàn thờ, thường là phía trước hoặc bên cạnh bát hương. Đảm bảo lư xông luôn sạch sẽ và được lau chùi thường xuyên.

**Kết luận:** Đốt trầm hương trên bàn thờ là một hành động đẹp, giúp tâm hồn ta tĩnh lặng hơn và kết nối sâu sắc hơn với cội nguồn.
      `,
      en: `
Agarwood fragrance has long been seen as a thread connecting the real world and the spiritual world. Burning agarwood on the altar not only brings fragrance but also has deep meaning.

### 1. Meaning of burning agarwood on the altar
The drifting agarwood smoke carries the prayers of descendants to ancestors. The pure fragrance expresses sincerity, filial piety, and the desire for protection and peace for the family.

### 2. When to burn agarwood
You don't necessarily have to burn agarwood daily, but there are important times not to be missed:
- **Lunar New Year and death anniversaries:** Increase solemnity and coziness for the worship space.
- **Full moon and the 1st of every lunar month:** Purify the space, praying for a smooth new month.
- **When moving into a new house:** Burning agarwood helps dispel cold air, bringing warmth and vitality to the house.
- **When feeling family instability:** Energy from agarwood helps rebalance the magnetic field, bringing peace.

### 3. Which type of agarwood should be used?
For the altar, you should choose agarwood sticks (coreless) or agarwood cones. Agarwood cones when burned in an incense burner will create beautiful smoke and long-lasting fragrance. Most importantly, use **clean agarwood**, avoid cheap chemical ones as they will lose solemnity and affect health.

### 4. Placement of the incense burner
The incense burner should be placed in a solemn position on the altar, usually in front of or next to the incense bowl. Ensure the burner is always clean and wiped regularly.

**Conclusion:** Burning agarwood on the altar is a beautiful act, helping our souls stay more quiet and connect more deeply with our roots.
      `,
      zh: `
长期以来，沉香香气一直被视为连接现实世界与精神世界的纽带。在祭坛上焚烧沉香不仅带来香气，还具有深远的意义。

### 1. 祭坛焚香的意义
飘动的沉香烟雾承载着子孙对祖先的祈祷。纯净的香气表达了诚心、孝心以及对家庭庇佑和平安的渴望。

### 2. 什么时候焚香
您不一定要每天焚香，但有些重要时刻不容错过：
- **农历新年和忌日：** 增加祭祀空间的庄重感和温馨感。
- **每月农历十五和初一：** 净化空间，祈求新的一月顺遂。
- **搬入新家时：** 焚烧沉香有助于驱散寒气，为房屋带来温暖和活力。
- **感到家庭不稳时：** 沉香的能量有助于重新平衡磁场，带来平安。

### 3. 应该使用哪种沉香？
对于祭坛，您应选择沉香线香（无芯）或沉香线。沉香塔香在香炉中燃烧时会产生美丽的烟雾和持久的香气。最重要的一点是必须使用**纯净沉香**，避免使用廉价的化学沉香，因为那会失去庄重感并影响健康。

### 4. 香炉的摆放位置
香炉应摆放在祭坛上的庄重位置，通常在香炉碗的前面或旁边。确保香炉始终干净并定期擦拭。

**结论：** 在祭坛上焚烧沉香是一种美好的行为，有助于我们的灵魂保持宁静，并与根源建立更深层次的联系。
      `
    },
    image: "/images/blogs/6.webp",
    date: "12/04/2024",
    readTime: { vi: "8 phút đọc", en: "8 min read", zh: "8分钟阅读" },
    category: { vi: "Tâm linh", en: "Spirituality", zh: "心灵" },
    author: { vi: "Trầm Hương Chú Bộ Đội", en: "Chu Bo Doi Agarwood", zh: "朱伯队沉香" },
  }
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug)
}
