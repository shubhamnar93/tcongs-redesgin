type ServiceCard = { svg: React.ReactNode, heading: string, paragraph: string }
const serviceData: ServiceCard[] = [
  {
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml h-5 w-5" aria-hidden="true" data-tsd-source="/src/routes/index.tsx:458:17">
        <path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
    ),
    heading: "Web Development",
    paragraph: "WordPress, Laravel, Node.js and React builds engineered for speed and scale."
  },
  {
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone h-5 w-5" aria-hidden="true" data-tsd-source="/src/routes/index.tsx:458:17"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>
    ),
    heading: "Mobile Apps",
    paragraph: "Flutter, Android and iOS apps with native performance and clean UX."
  },
  {
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart h-5 w-5" aria-hidden="true" data-tsd-source="/src/routes/index.tsx:458:17"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
    ),
    heading: "E-commerce & Marketplaces",
    paragraph: "Shopify stores plus Amazon, Flipkart, Myntra and Nykaa account management."
  },
  {
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud h-5 w-5" aria-hidden="true" data-tsd-source="/src/routes/index.tsx:458:17"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
    ),
    heading: "Custom Software",
    paragraph: "SaaS platforms, CRM/ERP, APIs and microservices on cloud infrastructure."
  },
  {
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-megaphone h-5 w-5" aria-hidden="true" data-tsd-source="/src/routes/index.tsx:458:17"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
    ),
    heading: "Digital Marketing",
    paragraph: "SEO, Google Ads, social media and CRO that turn traffic into revenue."
  },
  {
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pen-tool h-5 w-5" aria-hidden="true" data-tsd-source="/src/routes/index.tsx:458:17"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
    ),
    heading: "Branding & UI/UX",
    paragraph: "Identity systems, Figma design, wireframes and brand guidelines."
  }

]


export const Services = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-4 md:py-4">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-crimson">What we do</span>
          <h2 className="mt-4 text-2xl font-bold text-foreground md:text-[2.6rem] md:leading-[1.1]">
            One partner for build, launch and growth
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Strategy, design, engineering and marketing under one roof — so nothing gets lost between handoffs.
        </p>
      </div>
      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {serviceData.map((sd, index) => <ServiceCard key={`service-${index}`} svg={sd.svg} heading={sd.heading} paragraph={sd.paragraph} />)}
      </div>
    </section>
  )
}

const ServiceCard = ({ svg, heading, paragraph }: ServiceCard) => {
  return (
    <article className="group relative bg-card p-8 transition-colors hover:bg-secondary/50">
      <span className="absolute inset-x-0 top-0 h-0.5 scale-x-0 bg-gradient-to-r from-gold to-crimson transition-transform duration-300 group-hover:scale-x-100" />
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">{svg}</div>
      <h3 className="mt-6 text-lg font-semibold text-foreground">{heading}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{paragraph}</p>
    </article>

  )
}
