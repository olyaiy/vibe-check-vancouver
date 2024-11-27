import Link from "next/link";
import { Article } from "@/lib/data/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";

interface StoryCardProps {
  article: Article;
}

// Category-based gradient mapping
const categoryGradients: Record<string, string> = {
  housing: "bg-gradient-to-r from-orange-400 to-pink-500",
  transit: "bg-gradient-to-r from-blue-400 to-indigo-500",
  food: "bg-gradient-to-r from-green-400 to-emerald-500",
  career: "bg-gradient-to-r from-purple-400 to-fuchsia-500",
  environment: "bg-gradient-to-r from-emerald-400 to-teal-500",
  // Add more categories as needed
  default: "bg-gradient-to-r from-gray-400 to-slate-500",
};

export function StoryCard({ article }: StoryCardProps) {
  const gradientClass = categoryGradients[article.category] || categoryGradients.default;

  return (
    <Link href={`/news/${article.slug}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48 w-full">
          <div className={`w-full h-full ${gradientClass} flex items-center justify-center`}>
            <span className="text-2xl font-bold text-white px-4 text-center">
              {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
            </span>
          </div>
          <Badge className="absolute top-2 left-2 bg-primary/90">
            {article.category}
          </Badge>
        </div>
        <CardContent className="p-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <CalendarDays className="h-4 w-4" />
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString()}
            </time>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <h2 className="text-xl font-bold mb-2 line-clamp-2">{article.title}</h2>
          <p className="text-muted-foreground line-clamp-2">{article.tldr}</p>
        </CardContent>
      </Card>
    </Link>
  );
} 