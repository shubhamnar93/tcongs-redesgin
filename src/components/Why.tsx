type ContactBadge = { svg: React.ReactNode, text: string }
type StepProp = { stepNumber: string, heading: string, paragraph: string };
const contactData: ContactBadge[] = [
  {
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-4 w-4 text-brand" aria-hidden="true" ><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
    ),
    text: "info@tcongsinfotech.com"
  },
  {
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-4 w-4 text-brand" aria-hidden="true" ><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
    ),
    text: "+91 98765 43210"
  },
  {
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin h-4 w-4 text-brand" aria-hidden="true" ><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
    ),
    text: "India · serving clients worldwide"
  }
]
const steps: StepProp[] = [
  {
    stepNumber: "01",
    heading: "Discovery",
    paragraph: "Requirements, scope and a realistic delivery roadmap.",
  },

  {
    stepNumber: "02",
    heading: "Design",
    paragraph: "Figma prototypes validated before a line of code.",
  },
  {
    stepNumber: "03",
    heading: "Development",
    paragraph: "Clean, tested code shipped in weekly increments.",
  },
  {
    stepNumber: "04",
    heading: "Growth",
    paragraph: "SEO, ads and CRO to compound results after launch.",
  }
]
export const Why = () => {
  return (
    <section id="why" className="my-6 border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:py-28 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-crimson">
            Why Tcongs
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-[2.4rem] md:leading-[1.12]">Engineering discipline, business outcomes</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            We work as an embedded product team: discovery, architecture, delivery and growth in a single pipeline. Weekly demos, clear ownership, and code you actually own.
          </p>
          <div className="mt-9 space-y-3 text-sm">
            {contactData.map((cd, index) => <ContactBadge key={`contactdetail-${index}`} svg={cd.svg} text={cd.text} />)}
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {steps.map((st, index) => <Step key={`steps-${index}`} stepNumber={st.stepNumber} heading={st.heading} paragraph={st.paragraph} />)}
        </div>
      </div>
    </section>
  )
}

const Step = ({ stepNumber, heading, paragraph }: StepProp) => {
  return (
    <div className="rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-card">
      <span className="font-display text-xs font-bold tracking-widest text-gold"> {stepNumber}</span>
      <h3 className="mt-3 text-base font-semibold text-foreground"> {heading}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground"> {paragraph}</p>
    </div>
  )
}

const ContactBadge = ({ svg, text }: ContactBadge) => {
  return (
    <p className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-foreground">
      {svg}
      {text}
    </p>
  )
}
