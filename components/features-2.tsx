import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Settings2, Sparkles, Zap } from "lucide-react";
import { ReactNode } from "react";

export default function Features() {
  return (
    <section className="py-16  md:py-32 mt:30">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Built to match your creative flow
          </h2>
          <p className="mt-4">
            We combine storytelling, editing mastery, and cutting-edge AI tools
            to elevate your videos.
          </p>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-30 grid max-w-sm gap-6 [--color-background:var(--color-muted)] [--color-card:var(--color-muted)] *:text-center md:mt-16 dark:[--color-muted:var(--color-zinc-900)]">
          <Card className="group border-0 shadow-none hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Zap className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-bold text-2xl">🎨Customizable Edits</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">
                From cinematic storytelling to snappy short-form — tailor your
                videos to your style, audience, and goals.
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 shadow-none hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Settings2 className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-bold text-2xl">🎧 You’re in Control</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                Our collaborative editing process ensures you have the final say
                in every frame.
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 shadow-none hover:shadow-lg transition-shadow duration-300 border-amber-300">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Sparkles className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-bold text-2xl">🤖AI & Expertise
</h3>
            </CardHeader>

            <CardContent>
              <p className="mt-3 text-sm">
                We blend human creativity with smart AI tools to deliver faster,
                sharper, and smarter edits.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
    />

    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
