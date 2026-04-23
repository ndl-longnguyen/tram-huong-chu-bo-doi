# Huong Dan Quan Ly Anh / Image Management Guide

## Cau Truc Thu Muc / Folder Structure

```
public/images/
├── products/           # Anh san pham
│   ├── vong-tay/       # Vong tay tram huong
│   │   ├── vt-001.jpg
│   │   ├── vt-001-2.jpg
│   │   └── ...
│   ├── trang-suc/      # Trang suc (nhan, day chuyen...)
│   │   ├── ts-001.jpg
│   │   └── ...
│   ├── nhang-tram/     # Nhang tram huong
│   │   ├── nt-001.jpg
│   │   └── ...
│   ├── tinh-dau/       # Tinh dau tram huong
│   │   ├── td-001.jpg
│   │   └── ...
│   ├── my-nghe/        # My nghe tram huong
│   │   ├── mn-001.jpg
│   │   └── ...
│   └── qua-tang/       # Qua tang
│       ├── qt-001.jpg
│       └── ...
├── categories/         # Anh dai dien danh muc
│   ├── vong-tay.jpg
│   ├── trang-suc.jpg
│   ├── nhang-tram.jpg
│   └── ...
├── banners/            # Anh banner
│   ├── hero-1.jpg
│   ├── hero-2.jpg
│   └── ...
├── blog/               # Anh bai viet
│   ├── post-1.jpg
│   └── ...
├── about/              # Anh trang gioi thieu
│   ├── founder.jpg
│   ├── workshop.jpg
│   └── ...
└── testimonials/       # Anh khach hang
    ├── customer-1.jpg
    └── ...
```

## Quy Tac Dat Ten / Naming Convention

### San pham / Products:
- `{ma-danh-muc}-{so-thu-tu}.jpg` (anh chinh)
- `{ma-danh-muc}-{so-thu-tu}-{so-phu}.jpg` (anh phu)

Vi du:
- `vt-001.jpg` - Anh chinh vong tay 001
- `vt-001-2.jpg` - Anh phu thu 2
- `ts-001.jpg` - Anh chinh trang suc 001
- `nt-001.jpg` - Anh chinh nhang tram 001

### Ma danh muc / Category codes:
- `vt` = Vong Tay
- `ts` = Trang Suc  
- `nt` = Nhang Tram
- `td` = Tinh Dau
- `mn` = My Nghe
- `qt` = Qua Tang

## Cach Them San Pham Moi / How to Add New Product

1. Them anh vao thu muc tuong ung:
   `/public/images/products/{danh-muc}/{ma-san-pham}.jpg`

2. Cap nhat file `/data/products.json`:
   ```json
   {
     "id": "9",
     "sku": "VT-NEW-009",
     "slug": "vong-tay-moi",
     "image": "/images/products/vong-tay/vt-009.jpg",
     "images": [
       "/images/products/vong-tay/vt-009.jpg",
       "/images/products/vong-tay/vt-009-2.jpg"
     ],
     ...
   }
   ```

## Kich Thuoc Khuyen Nghi / Recommended Sizes

- **San pham chinh**: 800x800px (1:1)
- **Banner hero**: 1920x800px
- **Danh muc**: 600x600px (1:1)
- **Blog**: 1200x630px
- **Logo**: PNG trong suot, chieu cao 80-200px

## Dinh Dang / Formats
- **JPG**: Anh san pham, banner, blog
- **PNG**: Logo, icon (can trong suot)
- **WebP**: Tuy chon de toi uu hoa (Next.js tu dong convert)
