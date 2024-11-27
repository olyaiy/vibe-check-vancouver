import { mockArticles } from "@/lib/data/mock-articles";
import { StoryCard } from "./StoryCard";

export async function StoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {mockArticles.map((article) => (
        <StoryCard key={article.id} article={article} />
      ))}
    </div>
  );
} 