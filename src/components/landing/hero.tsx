import Link from "next/link";
import { Button } from "~/components/ui/button";
import { BackgroundRippleEffect } from "~/components/ui/background-ripple-effect";

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden">
      <BackgroundRippleEffect />
      <article className="relative z-10 flex flex-col gap-5 items-center text-center px-4 py-34">
        <span className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-4 py-1.5 text-sm shadow-lg backdrop-blur-md">
          <span
            className="size-1.5 rounded-full bg-primary"
            aria-hidden="true"
          />{" "}
          Alpha Release
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold max-w-[25ch]">
          Know Why They&apos;re Winning Online
        </h1>
        <p className="text-muted-foreground max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
          CompeteKit compares your SEO, backlinks, and social presence
          against your competitors, so you can see exactly what they&apos;re
          doing better and fix it before they pull further ahead.
        </p>
        <ul className="flex items-center gap-3">
          <li>
            <Button asChild size="lg" className="w-40">
              <Link href="/sign-up">Get Started</Link>
            </Button>
          </li>
        </ul>
      </article>
    </div>
  );
}
