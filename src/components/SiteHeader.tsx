import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-ink py-2 text-center">
        <p className="eyebrow text-background">Claim two 7ml freebies with every order</p>
      </div>
      <div className="flex items-center justify-between border-b border-border bg-background px-5 py-4 md:px-10">
        <nav className="hidden items-center gap-7 md:flex">
          <Link to="/reverie" className="eyebrow text-muted-foreground hover:text-foreground">
            Reverie
          </Link>
          <a href="/#collection" className="eyebrow text-muted-foreground hover:text-foreground">
            Collection
          </a>
        </nav>
        <Link to="/" className="wordmark text-xl md:absolute md:left-1/2 md:-translate-x-1/2">
          Sarkar
        </Link>
        <div className="flex items-center gap-4">
          <Link
            to="/reverie"
            className="hidden bg-ink px-5 py-2 text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-80 sm:inline-block"
          >
            Buy Now
          </Link>
          <ShoppingBag className="h-5 w-5" aria-hidden />
        </div>
      </div>
    </header>
  );
}
