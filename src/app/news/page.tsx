import { mockArticles } from "@/lib/data/mock-articles";
import Link from "next/link";

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockArticles.map((article) => (
          <Link 
            key={article.id} 
            href={`/news/${article.slug}`}
            className="group block"
          >
            <article className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h2 className="font-bold text-xl group-hover:text-primary">
                  {article.title}
                </h2>
                <p className="text-muted-foreground line-clamp-2">
                  {article.tldr.summary}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{article.readTime}</span>
                  <span>•</span>
                  <span>{article.category}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
} 