'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { mockArticles } from "@/lib/data/mock-articles";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils/format";
import { Eye, Clock, Star } from "lucide-react";

export function FeaturedStory() {
  const featuredArticle = mockArticles.find(article => article.isFeatured);
  
  if (!featuredArticle) return null;

  return (
    <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/90 to-primary-600/90">
      <Link href={`/news/${featuredArticle.slug}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 items-center">
          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {featuredArticle.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Title and TLDR */}
            <div className="space-y-4">
              <h1 className="font-clash text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {featuredArticle.title}
              </h1>
              <p className="font-satoshi text-lg text-white/80">
                {featuredArticle.tldr}
              </p>
            </div>

            {/* Metrics */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                2.5k views
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {featuredArticle.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4" />
                High Impact
              </span>
            </div>

            {/* Author section */}
            <div className="flex items-center gap-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white/20" />
              <div className="flex items-center gap-2 text-sm text-white/80">
                <span className="font-medium">{featuredArticle.author.name}</span>
                <span>•</span>
                <span>{formatDate(featuredArticle.publishedAt)}</span>
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10" />
            {/* Uncomment when images are available
            <Image
              src={featuredArticle.imageUrl}
              alt={featuredArticle.title}
              fill
              priority
              className="object-cover"
            />
            */}
          </motion.div>
        </div>
      </Link>
    </section>
  );
} 