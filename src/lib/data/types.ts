// Constants for type safety
export const ARTICLE_CATEGORIES = {
  HOUSING: 'housing',
  TRANSIT: 'transit',
  FOOD: 'food',
  TECH: 'tech-and-innovation',
  SUSTAINABILITY: 'sustainability',
  CULTURE: 'culture',
  EVENTS: 'events',
} as const;

export const NEIGHBORHOODS = {
  DOWNTOWN: 'downtown',
  KITSILANO: 'kitsilano',
  RICHMOND: 'richmond',
  GASTOWN: 'gastown',
  MOUNT_PLEASANT: 'mount-pleasant',
  CITYWIDE: 'citywide',
} as const;

export const IMPACT_LEVELS = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
} as const;

// Type definitions
export interface Author {
  name: string;
  avatar: string;
  bio?: string;
  social?: {
    twitter?: string;
    instagram?: string;
    tiktok?: string;
  };
}

export interface ArticleContent {
  summary: string;
  impact: string;
  whyCare: string;
  highlights?: string[];
  sources?: {
    name: string;
    url: string;
  }[];
}

export interface Reactions {
  fire: number;
  mindBlown: number;
  sad: number;
}

export interface EngagementMetrics {
  commentCount: number;
  shareCount: number;
  viewCount: number;
  saveCount?: number;
  clickThroughRate?: number;
}

export type ArticleCategory = 
  | 'housing'
  | 'transit'
  | 'food'
  | 'tech-and-innovation'
  | 'sustainability';

export type Neighborhood = typeof NEIGHBORHOODS[keyof typeof NEIGHBORHOODS];
export type ImpactLevel = typeof IMPACT_LEVELS[keyof typeof IMPACT_LEVELS];

type StorySize = 'small' | 'medium' | 'large';

export interface TLDR {
  summary: string;
  points: string[];
}

export interface Article extends EngagementMetrics {
  id: string;
  slug: string;
  title: string;
  tldr: TLDR;
  content: ArticleContent;
  category: ArticleCategory;
  neighborhood: Neighborhood;
  publishedAt: string;
  updatedAt: string;
  imageUrl: string;
  author: Author;
  tags: string[];
  readTime: string;
  reactions: Reactions;
  isFeatured: boolean;
  neighborhoodImage: string;
  impact: ImpactLevel;
  // New fields for enhanced functionality
  relatedArticles?: string[]; // Array of related article IDs
  seoMetadata?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogImage?: string;
  };
  contentWarnings?: string[];
  isPremium?: boolean;
  lastReadPosition?: number; // For "continue reading" feature
  size?: StorySize;
  richContent: RichContent;
}

// Analytics types
export interface ArticleAnalytics {
  articleId: string;
  totalViews: number;
  uniqueViews: number;
  averageReadTime: number;
  completionRate: number;
  engagement: EngagementMetrics;
  deviceBreakdown: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

// Neighborhood statistics
export interface NeighborhoodStats {
  name: Neighborhood;
  count: number;
  image: string;
  recentArticles: Article[];
  totalViews: number;
  totalEngagement: number;
  engagementRate: string;
}

// User interaction types
export interface UserInteraction {
  articleId: string;
  userId: string;
  type: 'view' | 'comment' | 'share' | 'save' | 'reaction';
  timestamp: string;
  metadata?: Record<string, unknown>;
}

// Content moderation
export interface ContentModeration {
  articleId: string;
  status: 'pending' | 'approved' | 'rejected';
  moderatorId?: string;
  moderationDate?: string;
  flags?: string[];
  notes?: string;
}

export interface RichContentSection {
  type: 'header' | 'paragraph' | 'quote' | 'bulletPoints' | 'steps' | 'callout';
  content: string;
  level?: number;
  attribution?: string;
  items?: string[];
  style?: 'info' | 'warning' | 'success' | 'error';
}

export interface RichContent {
  sections: RichContentSection[];
  relatedArticles: {
    title: string;
    slug: string;
  }[];
}
