import { mockArticles } from "@/lib/data/mock-articles";
import { StoryCard } from "./StoryCard";
import { cn } from "@/lib/utils";

export function StoryGrid() {
  // Separate featured and regular stories
  const featuredStory = mockArticles.find(a => a.isFeatured);
  const regularStories = mockArticles.filter(a => !a.isFeatured);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 p-4 max-w-8xl mx-auto">
      {/* Hero Section */}
      {featuredStory && (
        <div className="col-span-full md:col-span-8 lg:col-span-8 md:row-span-2">
          <StoryCard 
            article={featuredStory}
            variant="hero"
            priority
            className="aspect-[16/9] md:aspect-[16/13]"
          />
        </div>
      )}

      {/* Secondary Stories */}
      <div className="col-span-full md:col-span-4 lg:col-span-4 grid grid-cols-1 gap-6">
        {regularStories.slice(0, 2).map((article) => (
          <StoryCard
            key={article.id}
            article={article}
            variant="secondary"
            className="aspect-[16/9] md:aspect-[4/3]"
          />
        ))}
      </div>

      {/* Regular Grid Stories */}
      <div className="col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {regularStories.slice(2).map((article) => (
          <StoryCard
            key={article.id}
            article={article}
            variant="compact"
            className="aspect-[16/9]"
          />
        ))}
      </div>
    </div>
  );
} 