import { Badge } from "./Badge"
import { ContactForm } from "./ContactForm"

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-brand pb-16 pt-12 md:pb-24 md:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-grid bg-gradient-size opacity-40"></div>
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-crimson/20 blur-[120px]" />
      <div className="relative mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <div className="order-1 text-brand-foreground">
          <Badge />
          <h1 className="mt-5 max-w-[15ch] text-2xl font-bold leading-[1.05] sm:text-[2.6rem] md:mt-8 md:text-[3.9rem]">
            Build digital presense that{' '}
            <span className="bg-gradient-to-r from-gold to-crimson bg-clip-text text-transparent"
            >
              wins customers
            </span>
          </h1>
          <p className="mt-4 max-w-lg text-xs leading-relaxed text-brand-foreground/70 md:mt-7 md:text-lg">
            We help brands grow with web, apps & marketing solutions across the globe.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
