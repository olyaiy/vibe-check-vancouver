import { Metadata } from "next";
import { notFound } from "next/navigation";
import { mockArticles } from "@/lib/data/mock-articles";
import { Badge } from "@/components/ui/badge";
import { Eye, MessageCircle, Share2, Bookmark } from "lucide-react";
import { formatNumber } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface NewsArticlePageProps {
  params: {
    slug: string;
  };
}

function getImpactStyles(impact: string) {
  return cn(
    "backdrop-blur-md border-none px-3 py-1.5 rounded-full",
    impact === "high" ? "bg-red-500/20 text-red-100" :
    impact === "medium" ? "bg-yellow-500/20 text-yellow-100" :
    "bg-blue-500/20 text-blue-100"
  );
}

export async function generateMetadata({ params }: NewsArticlePageProps): Promise<Metadata> {
  const slug = params.slug;
  const article = mockArticles.find((article) => article.slug === slug);
  
  if (!article) {
    return {
      title: 'Article Not Found | Vibe Check Vancouver',
      description: 'The requested article could not be found.',
    };
  }

  // Format publish date for structured data
  const publishDate = new Date(article.publishedAt).toISOString();
  const updateDate = new Date(article.updatedAt).toISOString();

  return {
    title: article.title,
    description: article.tldr.summary,
    keywords: [
      ...article.tags,
      article.category,
      article.neighborhood,
      'Vancouver news',
      'local news',
      'Gen Z news'
    ].join(', '),
    authors: [{ name: article.author.name }],
    openGraph: {
      title: article.title,
      description: article.tldr.summary,
      type: 'article',
      publishedTime: publishDate,
      modifiedTime: updateDate,
      authors: [article.author.name],
      images: [{
        url: article.imageUrl,
        width: 1200,
        height: 630,
        alt: article.title,
      }],
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.tldr.summary,
      images: [article.imageUrl],
    },
    alternates: {
      canonical: `https://vibecheckvancouver.ca/news/${article.slug}`,
    },
    // Schema.org structured data for news articles
    other: {
      'schema:NewsArticle': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: article.title,
        description: article.tldr.summary,
        image: article.imageUrl,
        datePublished: publishDate,
        dateModified: updateDate,
        author: [{
          '@type': 'Person',
          name: article.author.name,
        }],
        publisher: {
          '@type': 'Organization',
          name: 'Vibe Check Vancouver',
          logo: {
            '@type': 'ImageObject',
            url: 'https://vibecheckvancouver.ca/logo.png'
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://vibecheckvancouver.ca/news/${article.slug}`,
        },
        articleSection: article.category,
        keywords: article.tags.join(', '),
      })
    }
  };
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const slug = params.slug;
  const article = mockArticles.find((article) => article.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-6">
        {/* Article Hero Section with Overlay */}
        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          {/* Gradient Background */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30"
            aria-hidden="true"
          />
          {/* Gradient Overlay for Text Readability */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
            aria-hidden="true"
          />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 p-8 flex flex-col justify-between">
            {/* Top row with Category & Impact Badge */}
            <div className="flex items-center justify-between">
              <Badge className="bg-white/10 backdrop-blur-md text-white border-none px-4 py-2">
                {article.category}
              </Badge>
              <Badge 
                variant="secondary" 
                className={getImpactStyles(article.impact)}
              >
                {`${article.impact.charAt(0).toUpperCase() + article.impact.slice(1)} Impact`}
              </Badge>
            </div>

            {/* Bottom content */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-white">{article.title}</h1>
              
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                {/* Author info */}
                <div className="flex items-center gap-4 text-white/90">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/60 to-accent/60"
                      aria-hidden="true"
                    />
                    <span>{article.author.name}</span>
                  </div>
                  <span>•</span>
                  <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                {/* Metrics */}
                <div className="flex items-center gap-4 text-white/80 text-sm">
                  <span className="flex items-center gap-1.5">
                    <Eye className="h-4 w-4" />
                    {formatNumber(article.viewCount)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="h-4 w-4" />
                    {article.commentCount}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Share2 className="h-4 w-4" />
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Bookmark className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TLDR Section */}
        <div className="bg-muted p-6 rounded-lg space-y-4">
          <h2 className="font-semibold text-lg">TL;DR</h2>
          
          {/* Summary */}
          <p className="font-medium text-foreground/90">
            {article.tldr.summary}
          </p>
          
          {/* Bullet Points */}
          <ul className="space-y-2">
            {article.tldr.points.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground/80">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Rich Content */}
        <div className="prose prose-lg max-w-none">
          {article.richContent.sections.map((section, index) => {
            switch (section.type) {
              case "header":
                const HeaderTag = `h${section.level}` as keyof JSX.IntrinsicElements;
                return <HeaderTag key={index} className="font-bold mt-8 mb-4">{section.content}</HeaderTag>;
              
              case "paragraph":
                return <p key={index} className="mb-4">{section.content}</p>;
              
              case "quote":
                return (
                  <blockquote key={index} className="border-l-4 border-primary pl-4 italic my-4">
                    <p>{section.content}</p>
                    {section.attribution && (
                      <footer className="text-sm text-muted-foreground">— {section.attribution}</footer>
                    )}
                  </blockquote>
                );
              
              case "bulletPoints":
                return (
                  <ul key={index} className="list-disc pl-6 my-4">
                    {section.items?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              
              case "steps":
                return (
                  <ol key={index} className="list-decimal pl-6 my-4">
                    {section.items?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ol>
                );
              
              case "callout":
                return (
                  <div key={index} className={`p-4 rounded-lg my-4 ${
                    section.style === "warning" ? "bg-yellow-50 text-yellow-800" : "bg-blue-50 text-blue-800"
                  }`}>
                    {section.content}
                  </div>
                );
              
              default:
                return null;
            }
          })}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}