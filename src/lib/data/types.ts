export interface Author {
    name: string;
    avatar: string;
  }
  
  export interface ArticleContent {
    summary: string;
    impact: string;
    whyCare: string;
  }
  
  export interface Reactions {
    fire: number;
    mindBlown: number;
    sad: number;
  }
  
  export interface Article {
    id: string;
    slug: string;
    title: string;
    tldr: string;
    content: ArticleContent;
    category: string;
    neighborhood: string;
    publishedAt: string;
    updatedAt: string;
    imageUrl: string;
    author: Author;
    tags: string[];
    readTime: string;
    reactions: Reactions;
  isFeatured: boolean;
  neighborhoodImage: string;
  impact: 'low' | 'medium' | 'high';
}
