import Image from "next/image"

type CardProp = { image: string, problem: string, solveHeading: string, solvePara: string, solveList: string[], isLeft?: boolean }

const cards: CardProp[] = [
  {
    image: "/pain-team-vfuyvjQB.jpg",
    problem: "“Our last agency went silent mid-project and the timeline kept slipping.”",
    solveHeading: "A dedicated in-house team with weekly demos",
    solvePara: "You get a named project manager, a fixed scope and a working build to review every week — so progress is visible, not promised.",
    solveList: [
      "Same engineers from kickoff to launch",
      "Weekly demo + written status update",
      "Milestone-based, transparent pricing"
    ]
  },
  {
    image: "/pain-app-DMw8Ufo_.jpg",
    problem: "“Our website and app are slow, dated, and visitors leave without buying.”",
    solveHeading: "Fast, conversion-focused web and mobile builds",
    solvePara: "We rebuild on modern stacks with performance budgets and UX validated in Figma first, so pages load quickly and checkout journeys actually convert.",
    solveList: [
      "Core Web Vitals in the green",
      "Mobile-first, accessible interfaces",
      "Clean code you fully own"
    ],
    isLeft: true
  },
  {
    image: "/pain-growth-C_GgAamz.jpg",
    problem: "“We spend on ads and marketplaces but can’t see what’s driving revenue.”",
    solveHeading: "Growth work tied to numbers you can track",
    solvePara: "SEO, paid ads, marketplace account management and CRO run off one analytics setup, so every rupee spent is traced to leads and orders.",
    solveList: [
      "Tracking and dashboards configured properly",
      "Amazon, Flipkart, Myntra & Nykaa managed end-to-end",
      "Monthly reporting on cost per lead and ROAS"
    ]
  }
]


export const Familiar = () => {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 md:py-28">
      <div className="max-w-2xl">
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-crimson">Sounds familiar</span>
        <h2 className="mt-3 text-[1.6rem] font-bold leading-[1.15] text-foreground md:mt-4 md:text-[2.6rem] md:leading-[1.1]">The problems that stall growth — and how we fix them</h2>
        <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground md:mt-5 md:text-base">Most businesses don't need more tools. They need the right build, shipped on time, by a team that stays accountable after launch.</p>
      </div>
      <div className="mt-8 space-y-6 md:mt-14 md:space-y-16">
        {cards.map((c, index) =>
          <Card key={`cards-${index}`} image={c.image} problem={c.problem}
            solveHeading={c.solveHeading} isLeft={c.isLeft} solvePara={c.solvePara} solveList={c.solveList} />
        )}
      </div>
    </section>
  )
}

const Card = ({ image, problem, solveHeading, solvePara, solveList, isLeft = false }: CardProp) => {
  return (
    <article className="grid items-center gap-5 overflow-hidden rounded-2xl border border-border bg-card p-4 sm:p-5 md:grid-cols-2 md:gap-14 md:rounded-none md:border-0 md:bg-transparent md:p-0">
      <div className={`${isLeft && "md:hidden"}`}>
        <Image src={image} alt="Tcongs Infotech engineers reviewing a project dashboard together" loading="lazy" width={"1024"} height={"768"} className="aspect-[16/9] w-full rounded-xl object-cover md:aspect-[4/3] md:rounded-2xl md:border md:border-border md:shadow-card" />
      </div>
      <div>
        <div className="rounded-xl border border-crimson/25 bg-crimson/5 px-4 py-3">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-crimson">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            What goes wrong
          </div>
          <p className="mt-1.5 text-sm font-medium leading-relaxed text-foreground">{problem}</p>
        </div>
        <div className="mt-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          How we solve it
        </div>
        <h3 className="mt-2 text-lg font-semibold leading-snug text-foreground md:text-2xl">{solveHeading}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground md:mt-3 md:text-base">{solvePara}</p>
        <ul className="mt-5 space-y-2.5">
          {solveList.map((sl, index) =>
            <List key={`list-${index}`} text={sl} />
          )}
        </ul>
      </div>
      {isLeft &&
        <div className={"hidden md:flex"}>
          <Image src={image} alt="Tcongs Infotech engineers reviewing a project dashboard together" loading="lazy" width={"1024"} height={"768"} className="aspect-[16/9] w-full rounded-xl object-cover md:aspect-[4/3] md:rounded-2xl md:border md:border-border md:shadow-card" />
        </div>
      }
    </article>
  )
}

const List = ({ text }: { text: string }) => {
  return (
    <li className="flex items-start gap-2.5 text-sm text-foreground">
      <svg xmlns="http://www.w3.org/2000/svg"
        width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true">
        <path d="M20 6 9 17l-5-5"></path></svg>
      {text}
    </li>
  )
}
