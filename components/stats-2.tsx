export default function StatsSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Reevio in Numbers
          </h2>
          <p>
            We’ve helped creators, startups, and brands grow through powerful
            visual storytelling.
          </p>
        </div>

        <div className="grid gap-0.5 *:text-center md:grid-cols-3 dark:[--color-muted:var(--color-zinc-900)] hover:shadow-md hover:shadow-zinc-950/5 dark:hover:shadow-zinc-950/20 duration-150 cursor-pointer">
          <div className="bg-muted rounded-(--radius) space-y-4 py-12">
            <div className="text-5xl font-bold">30+</div>
            <p>Videos Delivered</p>
          </div>
          <div className="bg-muted rounded-(--radius) space-y-4 py-12">
            <div className="text-5xl font-bold">60%</div>
            <p>Client Retention</p>
          </div>
          <div className="bg-muted rounded-(--radius) space-y-4 py-12">
            <div className="text-5xl font-bold">10+</div>
            <p>Brands & Creators Served</p>
          </div>
        </div>
      </div>
    </section>
  );
}
