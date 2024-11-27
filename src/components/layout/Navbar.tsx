import Link from "next/link";
import { MobileNav } from "@/components/layout/MobileNav";

const navItems = [
  { label: "Latest", href: "/news" },
  { label: "Neighborhoods", href: "/neighborhoods" },
  { label: "Food + Drink", href: "/food-drink" },
  { label: "Events", href: "/events" },
  { label: "Housing", href: "/housing" },
] as const;


// Desktop Navbar, mobile nav is in MobileNav.tsx
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center max-w-7xl mx-auto px-4">
        {/* Logo - Moved to left */}
        <Link 
          href="/" 
          className="flex items-center space-x-3 text-foreground mr-8"
        >
          <span className="font-display text-xl font-bold">Vibe Check YVR</span>
        </Link>

        {/* Spacer to push nav to right */}
        <div className="flex-1" />

        {/* Desktop Nav - Moved to right */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground hover:opacity-100 text-foreground/70"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden ml-4">
          <MobileNav items={navItems} />
        </div>
      </div>
    </header>
  );
} 