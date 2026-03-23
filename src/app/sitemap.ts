import { MetadataRoute } from 'next';
import { siteMetadata } from '@/data/siteMetadata';
import { practiceAreas } from '@/data/practiceAreas';
import { getAllPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteMetadata.siteUrl;

  const staticPages = [
    { url: baseUrl, changeFrequency: 'weekly' as const, priority: 1.0 },
    {
      url: `${baseUrl}/practice-areas`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/lawyers`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/office`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/fees`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/results`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  const practiceAreaPages = practiceAreas.map((area) => ({
    url: `${baseUrl}/practice-areas/${area.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogPages = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
    lastModified: new Date(post.date),
  }));

  return [...staticPages, ...practiceAreaPages, ...blogPages];
}
