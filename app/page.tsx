export default function Home() {
  return (
    <main className="px-container py-container">
      {/* Home Section */}
      <section className="w-full pt-20">
        <div className="relative z-10 flex w-full flex-col items-center justify-between gap-20 lg:flex-row lg:items-start">
          <div className="">
            <h1 className="text-[55px] font-bold leading-none text-white md:text-[64px]">
              Hello,
              <br />
              I’m Asrul{" "}
              <span className="wave inline-block text-[50px] md:text-[60px]">
                👋
              </span>
            </h1>
            <p className="mt-2 text-slate-300">
              Transforming Pixels into Poetry, Conjuring Captivating Web
              Journeys as a Front-End Wizard
            </p>
          </div>
          <div className="relative h-96 w-full rounded-xl border-2 bg-primary/40 backdrop-blur-lg">
            <div className="absolute left-2 top-2 flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>
        {/* Background Cover & Overlay */}
        <div className="z-0">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[url('/grid.svg')] opacity-[15%]" />
          <div className="absolute -left-10 top-0 h-52 w-52 animate-scale rounded-full bg-secondary blur-[90px]" />
        </div>
      </section>
    </main>
  );
}
