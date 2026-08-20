import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus, Check } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { reverie } from "@/lib/reverie";
import bottle640 from "@/assets/reverie-bottle-640.webp";
import bottle1024 from "@/assets/reverie-bottle-1024.webp";
import packaging640 from "@/assets/reverie-packaging-640.webp";
import packaging1024 from "@/assets/reverie-packaging-1024.webp";
import notes640 from "@/assets/reverie-notes-640.webp";
import notes1024 from "@/assets/reverie-notes-1024.webp";

const bottleSrcSet = `${bottle640} 640w, ${bottle1024} 1024w`;
const packagingSrcSet = `${packaging640} 640w, ${packaging1024} 1024w`;
const notesSrcSet = `${notes640} 640w, ${notes1024} 1024w`;

export const Route = createFileRoute("/reverie")({
  head: () => ({
    meta: [
      { title: "Reverie (100ml) — Sarkar Extrait de Parfum" },
      {
        name: "description",
        content:
          "Reverie by Sarkar: raspberry and black cherry over dark chocolate and marshmallow. 100ml extrait de parfum, ₹2,499.",
      },
      { property: "og:title", content: "Reverie (100ml) — Sarkar Extrait de Parfum" },
      {
        property: "og:description",
        content: "Fruity, chocolate and marshmallow. The newest Sarkar parfum.",
      },
      { property: "og:type", content: "product" },
    ],
  }),
  component: ReveriePage,
});

function ReveriePage() {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center bg-card p-8 lg:p-16">
            <img
              src={bottle1024}
              srcSet={bottleSrcSet}
              sizes="(min-width: 1024px) 50vw, 100vw"
              fetchPriority="high"
              decoding="async"
              alt="Sarkar Reverie bishop-shaped perfume bottle in cocoa-rose glass"
              width={1408}
              height={1600}
              className="max-h-[70vh] w-auto object-contain"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-14 md:px-14">
            <div className="flex items-baseline gap-3">
              <h1 className="display-xl text-4xl md:text-5xl">{reverie.name}</h1>
              <span className="font-display text-lg tracking-[0.1em]">({reverie.size})</span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Unisex", "Gourmand", "Parfum"].map((t) => (
                <span key={t} className="eyebrow bg-secondary px-3 py-1.5">
                  {t}
                </span>
              ))}
            </div>

            <p className="eyebrow mt-6 text-muted-foreground">{reverie.occasions}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              {reverie.description}
            </p>

            <p className="mt-8 font-display text-3xl tracking-wide">{reverie.price}</p>
            <p className="mt-1 text-xs text-muted-foreground">Incl. of all taxes</p>

            <div className="mt-8 flex flex-wrap items-stretch gap-3">
              <div className="flex items-center border border-border">
                <button
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-muted-foreground hover:text-foreground"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center text-sm">{qty}</span>
                <button
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => q + 1)}
                  className="px-4 py-3 text-muted-foreground hover:text-foreground"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                onClick={() => setAdded(true)}
                className="flex flex-1 items-center justify-center gap-2 bg-ink px-10 py-3 text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-background transition-opacity hover:opacity-85"
              >
                {added ? (
                  <>
                    <Check className="h-4 w-4" /> Added to cart
                  </>
                ) : (
                  "Add to Cart"
                )}
              </button>
            </div>

            <p className="mt-5 text-xs text-muted-foreground">
              * Ships within 24–36 hours of ordering. Two 7ml freebies with every order.
            </p>
          </div>
        </section>

        <section id="pyramid" className="scroll-mt-24 border-t border-border px-6 py-20 md:px-14">
          <p className="eyebrow text-muted-foreground">The Pyramid</p>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-10">
              {(
                [
                  ["Top", reverie.notes.top],
                  ["Heart", reverie.notes.heart],
                  ["Base", reverie.notes.base],
                ] as const
              ).map(([label, list]) => (
                <div key={label} className="border-t border-border pt-5">
                  <p className="eyebrow text-muted-foreground">{label} Notes</p>
                  <p className="mt-3 font-display text-2xl tracking-[0.06em]">{list.join(" · ")}</p>
                </div>
              ))}
            </div>
            <img
              src={notes1024}
              srcSet={notesSrcSet}
              sizes="(min-width: 1024px) 50vw, 100vw"
              decoding="async"
              alt="Dark chocolate, marshmallows, raspberries and fig on black stone"
              loading="lazy"
              width={1408}
              height={912}
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section className="grid grid-cols-1 border-t border-border lg:grid-cols-2">
          <img
            src={packaging1024}
            srcSet={packagingSrcSet}
            sizes="(min-width: 1024px) 50vw, 100vw"
            decoding="async"
            alt="Sarkar Reverie matte black packaging beside the bottle"
            loading="lazy"
            width={1408}
            height={1408}
            className="h-full w-full object-cover"
          />
          <div className="flex flex-col justify-center bg-ink px-8 py-16 text-background md:px-14">
            <p className="eyebrow text-background/50">The Object</p>
            <h2 className="mt-4 font-display text-3xl uppercase tracking-[0.12em]">
              The Bishop, in cocoa glass
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-background/70">
              Reverie takes the bishop — the piece that moves in silence and never straight ahead.
              Heavy sculpted glass, cocoa-rose gradient, matte black mitre cap and the SARKAR
              engraving on the base, boxed in the same matte black case as the rest of the
              collection.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-background/20 pt-6 text-sm">
              <div>
                <dt className="eyebrow text-background/50">Size</dt>
                <dd className="mt-1">{reverie.size}</dd>
              </div>
              <div>
                <dt className="eyebrow text-background/50">Concentration</dt>
                <dd className="mt-1">{reverie.concentration}</dd>
              </div>
              <div>
                <dt className="eyebrow text-background/50">Longevity</dt>
                <dd className="mt-1">8–10 hours</dd>
              </div>
              <div>
                <dt className="eyebrow text-background/50">Sillage</dt>
                <dd className="mt-1">Moderate to heavy</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
