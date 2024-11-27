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
    <motion.section 
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/90 to-primary-600/90 group"
    >
      <Link href={`/news/${featuredArticle.slug}`}>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 items-center">
          {/* Content Section */}
          <motion.div className="space-y-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {featuredArticle.tags.map(tag => (
                <Badge 
                  key={tag} 
                  variant="secondary" 
                  className="bg-white/10 text-white transition-colors duration-200 hover:bg-white/30"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Title and TLDR - Enhanced heading scale */}
            <div className="space-y-4 overflow-hidden">
              <h1 className="font-clash text-3xl md:text-4xl lg:text-5xl font-bold text-white 
                group-hover:text-white/90 transition-all duration-300 
                origin-left group-hover:scale-105"
              >
                {featuredArticle.title}
              </h1>
              <p className="font-satoshi text-lg text-white/80 group-hover:text-white/100 
                transition-colors duration-200"
              >
                {featuredArticle.tldr.summary}
              </p>
            </div>

            {/* Metrics - Add hover effect */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/70 group-hover:text-white/90 transition-colors duration-200">
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

            {/* Author section - Add hover effect */}
            <div className="flex items-center gap-4 group-hover:text-white/100 transition-colors duration-200">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white/20" />
              <div className="flex items-center gap-2 text-sm text-white/80">
                <span className="font-medium">{featuredArticle.author.name}</span>
                <span>•</span>
                <span>{formatDate(featuredArticle.publishedAt)}</span>
              </div>
            </div>
          </motion.div>

          {/* Image Section - Enhanced scale effect */}
          <motion.div
            className="relative aspect-[4/3] rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 
              transition-all duration-300" 
            />
            <div 
              className="absolute inset-0 bg-primary-600/50 transition-all duration-300 
                group-hover:scale-110 transform-gpu"
            />
          </motion.div>
        </div>
      </Link>
    </motion.section>
  );
} 