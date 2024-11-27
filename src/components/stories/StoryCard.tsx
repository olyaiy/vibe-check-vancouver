import Link from "next/link";
import { Article } from "@/lib/data/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MessageCircle, Share2, Bookmark, Eye } from "lucide-react";
import { cn, formatNumber } from "@/lib/utils";
import Image from "next/image";

interface StoryCardProps {
  article: Article;
  variant?: 'hero' | 'secondary' | 'compact';
  priority?: boolean;
  className?: string;
}

const categoryStyles: Record<string, { gradient: string; accent: string }> = {
  housing: {
    gradient: "from-orange-400/90 to-pink-500/90",
    accent: "bg-orange-500",
  },
  transit: {
    gradient: "from-blue-400/90 to-indigo-500/90",
    accent: "bg-blue-500",
  },
  food: {
    gradient: "from-green-400/90 to-emerald-500/90",
    accent: "bg-green-500",
  },
  // ... other categories
  default: {
    gradient: "from-gray-400/90 to-slate-500/90",
    accent: "bg-gray-500",
  },
};

export function StoryCard({ 
  article, 
  variant = 'compact',
  priority = false, 
  className 
}: StoryCardProps) {
  const styles = categoryStyles[article.category] || categoryStyles.default;

  return (
    <Link href={`/news/${article.slug}`} className="block">
      <Card className={cn(
        "group relative overflow-hidden bg-card hover:bg-accent/5 transition-all duration-300 border-0",
        className
      )}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            priority={priority}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className={cn(
            "absolute inset-0",
            variant === 'hero' 
              ? "bg-gradient-to-t from-black/90 via-black/50 to-transparent"
              : "bg-gradient-to-t from-black/80 to-transparent"
          )} />
        </div>

        {/* Content Layout based on variant */}
        <div className={cn(
          "relative h-full w-full",
          variant === 'hero' && "p-8",
          variant === 'secondary' && "p-6",
          variant === 'compact' && "p-4"
        )}>
          {/* Category & Impact Badge */}
          <div className="flex items-center justify-between mb-auto">
            <Badge className={cn(
              "bg-white/10 backdrop-blur-md text-white border-none",
              variant === 'hero' ? "px-4 py-2" : "px-3 py-1.5"
            )}>
              {article.category}
            </Badge>
            
            {variant !== 'compact' && (
              <Badge variant="secondary" className={getImpactStyles(article.impact)}>
                {`${article.impact.charAt(0).toUpperCase() + article.impact.slice(1)} Impact`}
              </Badge>
            )}
          </div>

          {/* Title & Content Area */}
          <div className={cn(
            "absolute bottom-0 left-0 right-0",
            variant === 'hero' && "p-8",
            variant === 'secondary' && "p-6",
            variant === 'compact' && "p-4"
          )}>
            <h2 className={cn(
              "font-bold leading-tight group-hover:text-primary/90 transition-colors",
              variant === 'hero' && "text-3xl md:text-4xl mb-4",
              variant === 'secondary' && "text-2xl mb-3",
              variant === 'compact' && "text-xl mb-2"
            )}>
              {article.title}
            </h2>

            {variant !== 'compact' && (
              <div className="space-y-2 mb-6">
                <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
                  {article.tldr.summary}
                </p>
                {variant === 'hero' && (
                  <ul className="text-white/70 text-xs space-y-1">
                    {article.tldr.points.slice(0, 2).map((point, index) => (
                      <li key={index} className="line-clamp-1">• {point}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Metadata Footer */}
            <div className="flex items-center justify-between text-sm text-white/80">
              <div className="flex items-center gap-4">
                {variant === 'hero' && (
                  <>
                    <span className="flex items-center gap-1.5">
                      <Eye className="h-4 w-4" />
                      {formatNumber(article.viewCount)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MessageCircle className="h-4 w-4" />
                      {article.commentCount}
                    </span>
                  </>
                )}
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" />
                  {new Date(article.publishedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}

function getImpactStyles(impact: string) {
  return cn(
    "backdrop-blur-md border-none px-3 py-1.5 rounded-full",
    impact === 'high' ? 'bg-red-500/20 text-red-100' :
    impact === 'medium' ? 'bg-yellow-500/20 text-yellow-100' :
    'bg-blue-500/20 text-blue-100'
  );
} 