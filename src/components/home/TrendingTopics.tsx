'use client'

import { useState, useMemo } from 'react'
import { mockArticles } from '@/lib/data/mock-articles'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

interface TopicCount {
  tag: string
  count: number
}

function getTopics(): TopicCount[] {
  const tagCounts = mockArticles.reduce((acc, article) => {
    article.tags.forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1
    })
    return acc
  }, {} as Record<string, number>)

  return Object.entries(tagCounts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
}

export function TrendingTopics() {
  const router = useRouter()
  const topics = useMemo(() => getTopics(), [])
  const [isExpanded, setIsExpanded] = useState(false)

  const topicElements = useMemo(() => (
    topics.map(({ tag, count }) => (
      <Badge
        key={tag}
        variant="secondary"
        className={cn(
          "cursor-pointer whitespace-nowrap px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors",
          "flex items-center gap-2"
        )}
        onClick={() => router.push(`/tags/${tag}`)}
      >
        <span className="capitalize">{tag}</span>
        <span className="text-xs opacity-70">{count}</span>
      </Badge>
    ))
  ), [topics, router])

  return (
    <div className="relative">
      
      <motion.div
        className="flex flex-wrap gap-2 justify-center relative"
        initial={{ maxHeight: 40 }}
        animate={{ maxHeight: isExpanded ? 200 : 50 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        {topicElements}
        
        {!isExpanded && (
        <div 
          className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent pointer-events-none" 
          style={{ zIndex: 10 }}
        />
        )}
      </motion.div>
      
      

      <Button
        variant="ghost"
        size="sm"
        className="mx-auto mt-2 flex items-center gap-2 relative z-10"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <ChevronDown className={cn(
          "h-4 w-4 transition-transform",
          isExpanded && "rotate-180"
        )} />
        <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
      </Button>
    </div>
  )
} 