import Link from "next/link";
import { Article } from "@/lib/data/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MessageCircle, Share2, Bookmark, Eye } from "lucide-react";
import { cn, formatNumber } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

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
        "group relative overflow-hidden bg-card transition-all duration-300 border-0",
        "hover:ring-2 hover:ring-primary/50 hover:-translate-y-1",
        "active:translate-y-0 active:ring-primary/70",
        "cursor-pointer",
        className
      )}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            priority={priority}
            className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
          />
          <div className={cn(
            "absolute inset-0 transition-opacity duration-300",
            variant === 'hero' 
              ? "bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:via-black/40"
              : "bg-gradient-to-t from-black/80 to-transparent group-hover:from-black/90",
          )} />
        </div>

        {/* Content Layout */}
        <div className={cn(
          "relative h-full w-full flex flex-col justify-between",
          variant === 'hero' && "p-8",
          variant === 'secondary' && "p-6",
          variant === 'compact' && "p-4"
        )}>
          {/* Top Section */}
          <div className="flex items-center justify-between">
            <Badge className={cn(
              "bg-white/10 backdrop-blur-md text-white border-none transition-all",
              "group-hover:bg-white/20",
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

          {/* Bottom Section */}
          <div className={cn(
            "space-y-4",
            variant === 'hero' && "mt-auto",
            variant === 'secondary' && "mt-auto",
            variant === 'compact' && "mt-auto"
          )}>
            <h2 className={cn(
              "font-bold leading-tight text-white transition-colors duration-300",
              "group-hover:text-primary-foreground group-hover:drop-shadow-lg",
              variant === 'hero' && "text-3xl md:text-4xl",
              variant === 'secondary' && "text-2xl",
              variant === 'compact' && "text-xl"
            )}>
              {article.title}
            </h2>

            {variant !== 'compact' && (
              <p className="text-white/80 text-sm leading-relaxed line-clamp-2 group-hover:text-white/90">
                {article.tldr}
              </p>
            )}

            {/* Metadata Footer */}
            <div className="flex items-center justify-between text-sm text-white/80">
              <div className="flex items-center gap-4">
                {variant === 'hero' && (
                  <>
                    <span className="flex items-center gap-1.5 group-hover:text-white/90">
                      <Eye className="h-4 w-4" />
                      {formatNumber(article.viewCount)}
                    </span>
                    <span className="flex items-center gap-1.5 group-hover:text-white/90">
                      <MessageCircle className="h-4 w-4" />
                      {article.commentCount}
                    </span>
                  </>
                )}
                <span className="flex items-center gap-1.5 group-hover:text-white/90">
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