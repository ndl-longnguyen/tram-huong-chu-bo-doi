import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Trầm Hương Chú Bộ Đội',
    short_name: 'Trầm Hương CBD',
    description: 'Thương hiệu trang sức trầm hương uy tín hàng đầu Việt Nam. Vòng tay trầm hương, nhang trầm, mỹ nghệ trầm hương 100% tự nhiên.',
    start_url: '/vi',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#b8860b',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
