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
    category: 'housing',
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
    commentCount: 156,
    shareCount: 432,
    viewCount: 15678,
    isFeatured: true,
    neighborhoodImage: '/images/neighborhoods/gastown.webp',
    impact: 'high',
    size: 'large',
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
    category: 'transit',
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
    commentCount: 234,
    shareCount: 567,
    viewCount: 23456,
    isFeatured: true,
    neighborhoodImage: '/images/neighborhoods/kitsilano.webp',
    impact: 'medium',
    size: 'medium',
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
    category: 'food',
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
    commentCount: 345,
    shareCount: 789,
    viewCount: 34567,
    isFeatured: false,
    neighborhoodImage: '/images/neighborhoods/richmond.webp',
    impact: 'low',
    size: 'small',
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
    commentCount: 456,
    shareCount: 123,
    viewCount: 45678,
    isFeatured: false,
    neighborhoodImage: '/images/neighborhoods/downtown.webp',
    impact: 'high',
    size: 'large',
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
    commentCount: 213,
    shareCount: 567,
    viewCount: 23456,
    isFeatured: false,
    neighborhoodImage: '/images/neighborhoods/citywide.webp',
    impact: 'medium',
    size: 'medium',
  },
  {
    id: '6',
    slug: 'chinatown-food-revolution',
    title: "Chinatown's New Wave of Pop-Ups 🥢",
    tldr: "Young chefs are breathing new life into historic Chinatown with weekend pop-ups and fusion concepts.",
    content: {
      summary: "Traditional meets trendy as next-gen restaurateurs transform Chinatown's food scene.",
      impact: "Historic businesses collaborate with young chefs to create unique dining experiences.",
      whyCare: "Finally, somewhere cool to take your foodie friends visiting from out of town.",
    },
    category: 'food',
    neighborhood: 'gastown',
    publishedAt: '2024-03-10T11:00:00Z',
    updatedAt: '2024-03-10T11:00:00Z',
    imageUrl: '/images/chinatown-popups.webp',
    author: {
      name: 'Lucy Wong',
      avatar: '/images/authors/lucy-wong.webp',
    },
    tags: ['food 🍜', 'chinatown', 'pop-ups', 'fusion', 'young-entrepreneurs'],
    readTime: '3 min',
    reactions: {
      fire: 445,
      mindBlown: 234,
      sad: 12,
    },
    commentCount: 167,
    shareCount: 389,
    viewCount: 19876,
    isFeatured: false,
    neighborhoodImage: '/images/neighborhoods/chinatown.webp',
    impact: 'medium',
    size: 'medium',
  },
  {
    id: '7',
    slug: 'vancouver-esports-arena',
    title: "Massive Esports Arena Coming to Surrey 🎮",
    tldr: "New 30,000 sq ft gaming venue announces plans. Local gaming scene about to level up.",
    content: {
      summary: "Surrey's getting Western Canada's largest esports facility by 2025.",
      impact: "Will host major tournaments and create 200+ jobs in tech and events.",
      whyCare: "Finally, a legit venue for competitive gaming and tech events in Metro Van.",
    },
    category: 'tech-and-innovation',
    neighborhood: 'citywide',
    publishedAt: '2024-03-09T16:30:00Z',
    updatedAt: '2024-03-09T16:30:00Z',
    imageUrl: '/images/esports-arena.webp',
    author: {
      name: 'Kevin Patel',
      avatar: '/images/authors/kevin-patel.webp',
    },
    tags: ['gaming 🎮', 'esports', 'surrey', 'tech', 'entertainment'],
    readTime: '4 min',
    reactions: {
      fire: 678,
      mindBlown: 445,
      sad: 23,
    },
    commentCount: 289,
    shareCount: 567,
    viewCount: 28945,
    isFeatured: false,
    neighborhoodImage: '/images/neighborhoods/surrey.webp',
    impact: 'high',
    size: 'large',
  },
  {
    id: '8',
    slug: 'vancouver-micro-apartments',
    title: "Micro Apartments: Would You Live in 250 sq ft? 🏢",
    tldr: "New development offering ultra-compact living spaces at $1,400/month. Waitlist already hitting thousands.",
    content: {
      summary: "Mount Pleasant's new micro-apartment complex is challenging traditional living spaces.",
      impact: "Could set precedent for affordable housing solutions in Vancouver.",
      whyCare: "Finally, solo living might be affordable (if you can handle the squeeze).",
    },
    category: 'housing',
    neighborhood: 'mount-pleasant',
    publishedAt: '2024-03-08T09:45:00Z',
    updatedAt: '2024-03-08T09:45:00Z',
    imageUrl: '/images/micro-apartments.webp',
    author: {
      name: 'Emma Rodriguez',
      avatar: '/images/authors/emma-rodriguez.webp',
    },
    tags: ['housing 🏠', 'micro-living', 'affordability', 'mount-pleasant', 'real-estate'],
    readTime: '5 min',
    reactions: {
      fire: 890,
      mindBlown: 567,
      sad: 234,
    },
    commentCount: 445,
    shareCount: 678,
    viewCount: 34567,
    isFeatured: true,
    neighborhoodImage: '/images/neighborhoods/mount-pleasant.webp',
    impact: 'high',
    size: 'large',
  },
  {
    id: '9',
    slug: 'vancouver-beach-cleanup-app',
    title: "This New App Makes Beach Cleanups Actually Fun? 🏖️",
    tldr: "Local startup gamifies beach cleanups with rewards, leaderboards, and real-time impact tracking.",
    content: {
      summary: "Vancouver-made app turns environmental action into a social experience.",
      impact: "Already removed 5 tons of waste from local beaches in beta testing.",
      whyCare: "Earn rewards while helping the environment - plus, great for meeting people!",
    },
    category: 'sustainability',
    neighborhood: 'kitsilano',
    publishedAt: '2024-03-07T13:15:00Z',
    updatedAt: '2024-03-07T13:15:00Z',
    imageUrl: '/images/beach-cleanup.webp',
    author: {
      name: 'Tom Wilson',
      avatar: '/images/authors/tom-wilson.webp',
    },
    tags: ['tech 💻', 'environment 🌱', 'community', 'beaches', 'startup'],
    readTime: '3 min',
    reactions: {
      fire: 345,
      mindBlown: 234,
      sad: 12,
    },
    commentCount: 167,
    shareCount: 445,
    viewCount: 15678,
    isFeatured: false,
    neighborhoodImage: '/images/neighborhoods/kitsilano.webp',
    impact: 'medium',
    size: 'small',
  }
]; 

export function getNeighborhoodStats() {
  const stats = mockArticles.reduce((acc, article) => {
    if (!acc[article.neighborhood]) {
      acc[article.neighborhood] = {
        count: 0,
        image: article.neighborhoodImage,
        recentArticles: [],
        totalViews: 0,
        totalEngagement: 0,
      };
    }
    acc[article.neighborhood].count++;
    acc[article.neighborhood].recentArticles.push(article);
    acc[article.neighborhood].totalViews += article.viewCount;
    acc[article.neighborhood].totalEngagement += 
      article.commentCount + 
      article.shareCount + 
      Object.values(article.reactions).reduce((sum, count) => sum + count, 0);
    return acc;
  }, {} as Record<string, {
    count: number;
    image: string;
    recentArticles: typeof mockArticles;
    totalViews: number;
    totalEngagement: number;
  }>);

  return Object.entries(stats)
    .map(([name, data]) => ({
      name,
      ...data,
      recentArticles: data.recentArticles.slice(0, 2),
      engagementRate: (data.totalEngagement / data.totalViews * 100).toFixed(1) + '%'
    }))
    .sort((a, b) => b.totalEngagement - a.totalEngagement)
    .slice(0, 4);
} 