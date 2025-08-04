import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NOIR Gaming Community',
    short_name: 'NOIR',
    description: 'For Gamers, By Gamers - Join the NOIR Gaming Community',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#a855f7',
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}