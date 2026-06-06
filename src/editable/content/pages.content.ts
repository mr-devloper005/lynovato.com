import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Find trusted local businesses nearby',
      description: 'Search local business listings, compare services, view contact details, and discover nearby companies faster.',
      openGraphTitle: 'Find trusted local businesses nearby',
      openGraphDescription: 'Discover nearby businesses, compare listings, and connect with local service providers.',
      keywords: ['business directory', 'local listings', 'nearby businesses', 'business search'],
    },
    hero: {
      badge: 'Local business directory',
      title: ['Find businesses nearby,', 'compare details, and connect faster.'],
      description: 'Search by service, city, category, or business name. Browse clean profiles with contact details, review prompts, maps, and owner-friendly listing tools.',
      primaryCta: { label: 'Browse listings', href: '/listing' },
      secondaryCta: { label: 'Add your business', href: '/create' },
      searchPlaceholder: 'Restaurants, salons, plumbers, real estate...',
      focusLabel: 'Category',
      featureCardBadge: 'directory-ready profiles',
      featureCardTitle: 'Business listings with the details customers actually need.',
      featureCardDescription: 'Contact info, location cues, category context, trust signals, and clear calls to action stay front and center.',
    },
    intro: {
      badge: 'Why it works',
      title: 'Built for local discovery and practical business comparison.',
      paragraphs: [
        'Visitors can move from a broad search to a useful business profile without fighting stretched layouts, thin cards, or buried contact details.',
        'Businesses get a clearer path to present hours, addresses, phone numbers, websites, service categories, and review prompts.',
        'The directory is shaped around action: search, compare, call, visit, claim, improve, and discover related local options.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Fast category search for customers looking nearby.',
        'Business cards designed for scanning and comparison.',
        'Profile detail pages with maps, contact panels, and review prompts.',
        'Owner paths for adding, claiming, and improving listings.',
      ],
      primaryLink: { label: 'Browse listings', href: '/listing' },
      secondaryLink: { label: 'Add a business', href: '/create' },
    },
    cta: {
      badge: 'For business owners',
      title: 'Start promoting your business with a clearer local profile.',
      description: 'Add the details customers check first: service category, location, contact information, summary, website, and supporting media.',
      primaryCta: { label: 'Add your business', href: '/create' },
      secondaryCta: { label: 'Contact support', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'Helping customers discover businesses with confidence.',
    description: `${slot4BrandConfig.siteName} is a local business listing experience for people who need quick answers and owners who need a cleaner public profile.`,
    paragraphs: [
      'We organize business information around the questions customers ask first: what the business does, where it is, how to contact it, and whether it looks trustworthy.',
      'For owners, the experience is built around simple listing creation, profile improvement, and a practical path from discovery to customer action.',
      'For visitors, the directory keeps layouts readable, cards compact, and detail pages focused on useful information instead of visual clutter.',
    ],
    values: [
      {
        title: 'Search that feels local',
        description: 'Category, city, and keyword paths help visitors narrow the directory without losing context.',
      },
      {
        title: 'Profiles built for action',
        description: 'Phone, address, website, map, review prompts, and related businesses stay easy to find.',
      },
      {
        title: 'Owner-friendly growth',
        description: 'Businesses can add or improve listing content so customers see accurate, useful details.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Need help with a business listing?',
    description: 'Send listing corrections, category requests, ownership questions, partnership notes, or support details. We will route your message to the right directory lane.',
    formTitle: 'Contact the directory team',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search business listings, services, categories, and locations across the directory.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Search businesses by name, service, or place.',
      description: 'Look up local listings, categories, contact details, and business summaries from one focused search surface.',
      placeholder: 'Search restaurants, dentists, salons, contractors...',
    },
    resultsTitle: 'Latest business listings',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to add or manage business listings.',
      description: 'Use your account to create a listing, save business details, and prepare a stronger local profile.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create a business listing customers can act on.',
      description: 'Add the business name, category, location, website, images, and description customers need before they call or visit.',
    },
    formTitle: 'Business listing details',
    submitLabel: 'Submit listing',
    successTitle: 'Business listing saved successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to your business dashboard.',
      description: 'Login to add listings, update local business details, and keep your directory presence ready for customers.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and list your business.',
      description: 'Create an account to add business details, prepare your profile, and make it easier for local customers to find you.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
