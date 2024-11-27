import Image from "next/image";
import Link from "next/link";
import { getNeighborhoodStats } from "@/lib/data/mock-articles";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export async function NeighborhoodSpotlight() {
  const neighborhoods = getNeighborhoodStats();

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Neighborhood Pulse</h2>
        <Link 
          href="/neighborhoods"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          View all
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {neighborhoods.map((hood) => (
          <Link 
            key={hood.name} 
            href={`/neighborhoods/${hood.name.toLowerCase()}`}
            className="group"
          >
            <Card className="overflow-hidden hover:shadow-lg transition-all">
              <div className="relative h-48 w-full">
                <Image
                  src={hood.image || "/images/neighborhoods/placeholder.webp"}
                  alt={hood.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {hood.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm">
                      {hood.count} stories
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="p-4 space-y-2">
                {hood.recentArticles.map((article) => (
                  <p 
                    key={article.title}
                    className="text-sm text-muted-foreground line-clamp-1"
                  >
                    • {article.title}
                  </p>
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
} 