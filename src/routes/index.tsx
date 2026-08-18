import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { reverie } from "@/lib/reverie";
import hero from "@/assets/reverie-hero.jpg";
import bottle from "@/assets/reverie-bottle.jpg";
import notesImg from "@/assets/reverie-notes.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sarkar Reverie — New Fruity Chocolate Marshmallow Parfum" },
      {
        name: "description",
        content:
          "Introducing Reverie, the newest Sarkar extrait de parfum. Raspberry and black cherry over dark chocolate and marshmallow. 100ml, ₹2,499.",
      },
      { property: "og:title", content: "Sarkar Reverie — The New Parfum" },
      {
        property: "og:description",
        content: "Sweet. Reckless. Unforgettable. The newest addition to the Sarkar collection.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const collection = [
  { name: "Noble", notes: "Fresh · Woody · Aromatic" },
  { name: "Throne", notes: "Warm · Leather · Amber" },
  { name: "Orion", notes: "Fresh · Citrus · Aromatic" },
  { name: "Regal", notes: "Oud · Smoky · Musk" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="relative">
          <img
            src={hero}
            alt="Sarkar Reverie perfume bottle lit in darkness on dark stone"
            width={1920}
            height={1200}
            className="h-[78vh] w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/85 via-black/25 to-transparent pb-16 text-center">
            <p className="eyebrow text-white/60">New Release</p>
            <h1 className="display-xl mt-4 text-5xl text-white md:text-7xl">{reverie.name}</h1>
            <p className="eyebrow mt-4 text-white/80">{reverie.tagline}</p>
            <Link
              to="/reverie"
              className="mt-8 bg-white px-9 py-3 text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-black transition-opacity hover:opacity-85"
            >
              Explore Parfum
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center bg-card p-10 lg:p-20">
            <img
              src={bottle}
              alt="Sarkar Reverie bishop-shaped bottle in cocoa-rose glass"
              loading="lazy"
              width={1408}
              height={1600}
              className="max-h-[60vh] w-auto object-contain"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:px-14">
            <p className="eyebrow text-muted-foreground">{reverie.family}</p>
            <h2 className="display-xl mt-4 text-4xl">
              {reverie.name} <span className="text-lg tracking-[0.1em]">({reverie.size})</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              {reverie.description}
            </p>
            <p className="mt-8 font-display text-3xl tracking-wide">{reverie.price}</p>
            <p className="mt-1 text-xs text-muted-foreground">Incl. of all taxes · 100ml</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/reverie"
                className="bg-ink px-9 py-3 text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-background transition-opacity hover:opacity-85"
              >
                Shop Now
              </Link>
              <Link
                to="/reverie"
                hash="pyramid"
                className="border border-ink px-9 py-3 text-[0.6875rem] font-medium uppercase tracking-[0.24em] transition-colors hover:bg-secondary"
              >
                Fragrance Notes
              </Link>
            </div>
          </div>
        </section>

        <section className="relative border-y border-border">
          <img
            src={notesImg}
            alt="Chocolate, marshmallow, raspberry and fig on dark stone"
            loading="lazy"
            width={1408}
            height={912}
            className="h-[60vh] w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center gap-8 bg-black/55 px-6 md:px-16">
            <p className="eyebrow text-white/60">The Pyramid</p>
            <div className="grid gap-8 md:grid-cols-3">
              {(
                [
                  ["Top", reverie.notes.top],
                  ["Heart", reverie.notes.heart],
                  ["Base", reverie.notes.base],
                ] as const
              ).map(([label, list]) => (
                <div key={label} className="border-t border-white/25 pt-4">
                  <p className="eyebrow text-white/60">{label}</p>
                  <p className="mt-2 font-display text-xl tracking-[0.06em] text-white">
                    {list.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="collection" className="px-6 py-20 md:px-14">
          <p className="eyebrow text-muted-foreground">The Collection</p>
          <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            <Link
              to="/reverie"
              className="flex flex-col justify-between bg-ink p-8 text-background transition-opacity hover:opacity-90"
            >
              <p className="eyebrow text-background/50">New</p>
              <div className="mt-16">
                <p className="font-display text-2xl uppercase tracking-[0.16em]">Reverie</p>
                <p className="eyebrow mt-2 text-background/60">{reverie.family}</p>
              </div>
            </Link>
            {collection.map((p) => (
              <div key={p.name} className="flex flex-col justify-end bg-background p-8">
                <p className="font-display text-2xl uppercase tracking-[0.16em]">{p.name}</p>
                <p className="eyebrow mt-2 text-muted-foreground">{p.notes}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
