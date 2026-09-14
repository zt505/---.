import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bin-mzhr-websit.vercel.app/',
      lastModified: new Date(),
    },
  ]
}
