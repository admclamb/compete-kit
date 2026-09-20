import { WobbleCard } from "~/components/ui/wobble-card";

export default function FeaturesSection() {
  return (
    <section className="border-t py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-2 text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Built to compete</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need to compete and improve your coding skills.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <WobbleCard containerClassName="lg:col-span-2 bg-pink-600 dark:bg-pink-800 min-h-[16rem]">
            <div className="max-w-sm">
              <h3 className="text-left text-balance text-xl md:text-2xl font-semibold text-white">
                Leaderboards
              </h3>
              <p className="mt-3 text-left text-base text-neutral-300">
                Every match is ranked and judged instantly, so you always know
                where you stand against other developers.
              </p>
            </div>
          </WobbleCard>
          <WobbleCard containerClassName="bg-indigo-600 dark:bg-indigo-900 min-h-[16rem]">
            <h3 className="text-left text-balance text-xl md:text-2xl font-semibold text-white">
              Multiple languages
            </h3>
            <p className="mt-3 text-left text-base text-neutral-300">
              Solve problems in the programming language you already know, and
              rank your favorites in your profile.
            </p>
          </WobbleCard>
          <WobbleCard containerClassName="lg:col-span-3 bg-blue-600 dark:bg-blue-900 min-h-[16rem]">
            <div className="max-w-sm">
              <h3 className="text-left text-balance text-xl md:text-2xl font-semibold text-white">
                Competitive games
              </h3>
              <p className="mt-3 text-left text-base text-neutral-300">
                Battle head-to-head, join a free-for-all lobby, or race solo
                against the clock.
              </p>
            </div>
          </WobbleCard>
        </div>
      </div>
    </section>
  );
}
