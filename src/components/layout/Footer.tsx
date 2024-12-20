import Link from "next/link";

const footerLinks = {
  explore: [
    { label: "Latest News", href: "/" },
    { label: "Neighborhoods", href: "/" },
    { label: "Food + Drink", href: "/" },
    { label: "Events", href: "/" },
    { label: "Housing", href: "/" },
  ],
  connect: [
    { label: "About Us", href: "/" },
    { label: "Contact", href: "/" },
    { label: "Submit a Story", href: "/" },
    { label: "Advertise", href: "/" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/" },
    { label: "Terms of Use", href: "/" },
  ],
} as const;

export function Footer() {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold">Vibe Check YVR</h2>
            <p className="text-sm text-foreground/70">
              Your daily pulse check on Vancouver's culture and news, made for Gen Z.
            </p>
            <div className="flex space-x-4">
              <a href="/" className="text-foreground/70 hover:text-foreground">
                𝕏
              </a>
              <a href="/" className="text-foreground/70 hover:text-foreground">
                Instagram
              </a>
              <a href="/" className="text-foreground/70 hover:text-foreground">
                TikTok
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div className="space-y-4">
            <h3 className="font-medium">Explore</h3>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div className="space-y-4">
            <h3 className="font-medium">Connect</h3>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="font-medium">Stay in the Loop</h3>
            <p className="text-sm text-foreground/70">
              Get the weekly digest of Vancouver's most important stories.
            </p>
            {/* Add newsletter form component here */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/70">
              © {new Date().getFullYear()} Vibe Check Vancouver. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 