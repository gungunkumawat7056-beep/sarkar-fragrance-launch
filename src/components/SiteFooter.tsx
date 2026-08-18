export function SiteFooter() {
  return (
    <footer className="bg-ink px-6 py-16 text-background md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <p className="wordmark text-2xl">Sarkar</p>
        <p className="eyebrow text-background/50">Extrait de parfum · Made in India</p>
        <p className="mt-6 text-xs text-background/40">
          © {new Date().getFullYear()} Sarkar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
