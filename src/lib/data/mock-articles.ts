import { Article } from '@/lib/data/types';

export const mockArticles: Article[] = [
  {
    id: '1',
    slug: 'vancouver-housing-crisis-explained',
    title: "Vancouver's Housing Crisis: The Real Tea ☕",
    tldr: "Rent's wild, buying's impossible, and young Vancouverites are getting creative with solutions.",
    content: {
      summary: "Vancouver's housing market is hitting different in 2024, with average rent for a 1-bedroom hitting $2,800.",
      impact: "Young professionals are being pushed to consider co-living, tiny homes, and even van life.",
      whyCare: "If you're planning to move out or stay in Vancouver post-graduation, this directly affects your future living situation.",
    },
    category: 'housing-market',
    neighborhood: 'citywide',
    publishedAt: '2024-03-15T08:00:00Z',
    updatedAt: '2024-03-15T08:00:00Z',
    imageUrl: '/images/housing-crisis.webp',
    author: {
      name: 'Alex Chen',
      avatar: '/images/authors/alex-chen.webp',
    },
    tags: ['housing 🏠', 'crisis', 'youth', 'vancouver', 'rental-market'],
    readTime: '4 min',
    reactions: {
      fire: 234,
      mindBlown: 156,
      sad: 89,
    },
    isFeatured: true,
    neighborhoodImage: '/images/neighborhoods/gastown.webp',
    impact: 'high',
  },
  {
    id: '2',
    slug: 'new-skytrain-line-announcement',
    title: "UBC SkyTrain Finally Happening? 🚇",
    tldr: "New SkyTrain to UBC approved. Construction starts 2025. Students' commute about to get way better.",
    content: {
      summary: "TransLink just dropped major news about the UBC SkyTrain extension.",
      impact: "Commute times could be cut in half for students and Broadway corridor workers.",
      whyCare: "This could change where you choose to live and study, plus property values along the route are expected to rise.",
    },
    category: 'transportation',
    neighborhood: 'kitsilano',
    publishedAt: '2024-03-14T10:30:00Z',
    updatedAt: '2024-03-14T10:30:00Z',
    imageUrl: '/images/skytrain-ubc.webp',
    author: {
      name: 'Sarah Kim',
      avatar: '/images/authors/sarah-kim.webp',
    },
    tags: ['transit 🚇', 'ubc', 'development', 'infrastructure', 'student-life 📚'],
    readTime: '3 min',
    reactions: {
      fire: 345,
      mindBlown: 220,
      sad: 12,
    },
    isFeatured: false,
    neighborhoodImage: '/images/neighborhoods/kitsilano.webp',
    impact: 'medium',
  },
  {
    id: '3',
    slug: 'vancouver-food-festival-2024',
    title: "Richmond Night Market Goes Hard 🍜",
    tldr: "Night market season is back with 100+ new food vendors. Your TikTok feed is about to be lit.",
    content: {
      summary: "Richmond Night Market returns with its biggest season yet.",
      impact: "New vendors, extended hours, and better transit access make this year's market a must-visit.",
      whyCare: "Epic food content for your socials, plus actually affordable eats.",
    },
    category: 'food-and-culture',
    neighborhood: 'richmond',
    publishedAt: '2024-03-13T15:45:00Z',
    updatedAt: '2024-03-13T15:45:00Z',
    imageUrl: '/images/night-market.webp',
    author: {
      name: 'Jordan Lee',
      avatar: '/images/authors/jordan-lee.webp',
    },
    tags: ['food 🍜', 'events 🎉', 'nightlife 🌙', 'richmond', 'asian-cuisine'],
    readTime: '2 min',
    reactions: {
      fire: 567,
      mindBlown: 123,
      sad: 5,
    },
    isFeatured: false,
    neighborhoodImage: '/images/neighborhoods/richmond.webp',
    impact: 'low',
  },
  {
    id: '4',
    slug: 'vancouver-tech-jobs-2024',
    title: "Tech Jobs Still Popping Off in Van 💻",
    tldr: "Local tech companies are hiring again. Remote work options and competitive salaries are back.",
    content: {
      summary: "Vancouver's tech scene is bouncing back after the 2023 slowdown.",
      impact: "Entry-level positions and internships are opening up across the city.",
      whyCare: "Perfect timing for new grads and career switchers looking to break into tech.",
    },
    category: 'tech-and-innovation',
    neighborhood: 'downtown',
    publishedAt: '2024-03-12T09:15:00Z',
    updatedAt: '2024-03-12T09:15:00Z',
    imageUrl: '/images/tech-jobs.webp',
    author: {
      name: 'Priya Sharma',
      avatar: '/images/authors/priya-sharma.webp',
    },
    tags: ['tech 💻', 'jobs 💼', 'career', 'startup-life', 'remote-work 🏠'],
    readTime: '5 min',
    reactions: {
      fire: 789,
      mindBlown: 234,
      sad: 45,
    },
    isFeatured: false,
    neighborhoodImage: '/images/neighborhoods/downtown.webp',
    impact: 'high',
  },
  {
    id: '5',
    slug: 'vancouver-climate-action',
    title: "Van's Climate Game Just Leveled Up ♻️",
    tldr: "City launches new climate initiatives with actual benefits for residents who participate.",
    content: {
      summary: "Vancouver introduces rewards program for sustainable living choices.",
      impact: "Get paid to make eco-friendly choices and reduce your carbon footprint.",
      whyCare: "Free transit passes, bike-share memberships, and other perks up for grabs.",
    },
    category: 'sustainability',
    neighborhood: 'citywide',
    publishedAt: '2024-03-11T14:20:00Z',
    updatedAt: '2024-03-11T14:20:00Z',
    imageUrl: '/images/climate-action.webp',
    author: {
      name: 'Mike Green',
      avatar: '/images/authors/mike-green.webp',
    },
    tags: ['environment 🌱', 'sustainability ♻️', 'rewards', 'climate-action', 'green-living'],
    readTime: '3 min',
    reactions: {
      fire: 432,
      mindBlown: 321,
      sad: 21,
    },
    isFeatured: false,
    neighborhoodImage: '/images/neighborhoods/citywide.webp',
    impact: 'medium',
  }
]; 

export function getNeighborhoodStats() {
  const stats = mockArticles.reduce((acc, article) => {
    if (!acc[article.neighborhood]) {
      acc[article.neighborhood] = {
        count: 0,
        image: article.neighborhoodImage,
        recentArticles: [],
      };
    }
    acc[article.neighborhood].count++;
    acc[article.neighborhood].recentArticles.push(article);
    return acc;
  }, {} as Record<string, { count: number; image: string; recentArticles: typeof mockArticles }>);

  return Object.entries(stats)
    .map(([name, data]) => ({
      name,
      ...data,
      recentArticles: data.recentArticles.slice(0, 2), // Get latest 2 articles
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 4); // Show top 4 neighborhoods
} 