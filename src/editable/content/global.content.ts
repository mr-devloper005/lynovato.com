import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Find and grow trusted local businesses',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: '',
    primaryLinks: [
      { label: 'Find Businesses', href: '/listing' },
     
      
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Find businesses', href: '/listing' },
      secondary: { label: 'Add listing', href: '/create' },
    },
  },
  footer: {
    tagline: 'Local discovery, cleaner business profiles, and easier customer action.',
    description: `${slot4BrandConfig.siteName} helps people compare nearby businesses and helps owners present accurate listing details, contact paths, reviews, and service information in one tidy place.`,
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Business Listings', href: '/listing' },
          { label: 'Search Directory', href: '/search' },
          { label: 'Add a Business', href: '/create' },
          { label: 'Contact Support', href: '/contact' },
        ],
      },
      {
        title: 'Site',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Built for local discovery, verified details, and practical business browsing.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
