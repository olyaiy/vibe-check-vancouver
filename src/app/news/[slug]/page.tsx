import { notFound } from "next/navigation";
import { mockArticles } from "@/lib/data/mock-articles";

interface NewsArticlePageProps {
  params: {
    slug: string;
  };
}

export default function NewsArticlePage({ params }: NewsArticlePageProps) {
  const article = mockArticles.find((article) => article.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{article.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <img 
                src={article.author.avatar} 
                alt={article.author.name}
                className="w-8 h-8 rounded-full"
              />
              <span>{article.author.name}</span>
            </div>
            <span>•</span>
            <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* TLDR Section */}
        <div className="bg-muted p-4 rounded-lg">
          <h2 className="font-semibold mb-2">TL;DR</h2>
          <p>{article.tldr}</p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <h2>Summary</h2>
          <p>{article.content.summary}</p>
          
          <h2>Impact</h2>
          <p>{article.content.impact}</p>
          
          <h2>Why Should You Care?</h2>
          <p>{article.content.whyCare}</p>
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