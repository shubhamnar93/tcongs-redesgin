import Image from "next/image"

type HeadingAndLinkProp = { heading: string, links: { title: string, href: string }[] }

const footerLinkData: HeadingAndLinkProp[] = [
  {
    heading: "Company",
    links: [
      { title: "Home", href: "#home" },
      { title: "Company", href: "#company" },
      { title: "Solution", href: "#solution" },
      { title: "Connect", href: "#connect" }
    ]
  },
  {
    heading: "Specialized Services",
    links: [
      { title: "Web & App Development", href: "#web" },
      { title: "Software Development", href: "#software" },
      { title: "E-commerce Solutions", href: "#ecommerce" },
      { title: "Digital Marketing", href: "#digital" },
      { title: "Branding & UI/UX", href: "#branding" },
      { title: "Business Growth", href: "#Business" }
    ]
  },
  {
    heading: "Scale Your Online Business",
    links: [
      { title: "Launch on Top Marketplaces", href: "#contact" },
      { title: "Build High-Converting Stores", href: "#contact" },
      { title: "Optimize Listings for Sales", href: "#contact" },
      { title: "Run Profitable Ad Campaigns", href: "#contact" },
      { title: "Grow Globally", href: "#contact" }
    ]
  },
]

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 md:py-16">
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:pr-14">
            <Image src="/logo.svg" width={"93"} height={"32"} alt="Tcongs Infotech" />
            <p className="mt-1 md:mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Empowering global brands with 8+ years of expertise in custom web development, e-commerce marketplace optimization, and Generative Engine Optimization (GEO). We turn complex challenges into seamless digital growth.
            </p>
            <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-crimson">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin h-4 w-4" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              {` `}LinkedIn
            </a>
          </div>
          {footerLinkData.map((fl, index) => <HeadingAndLink key={`footerdata-${index}`} heading={fl.heading} links={fl.links} />)}

        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin h-4 w-4 text-crimson" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
            Mumbai Office: Based in Mumbai, India. Serving clients worldwide.
          </p>
          <p>
            © 2026 Tcongs Infotech. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

const HeadingAndLink = ({ heading, links }: HeadingAndLinkProp) => {
  return (
    <div className="pt-8 md:pt-0">
      <h3 className="font-display text-sm font-semibold tracking-wide text-foreground">{heading}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link, index) =>
          <li
            key={`footerlink-${index}`}
          >
            <a
              className="text-sm text-muted-foreground transition-colors hover:text-crimson"
              href={link.href}
            >
              {link.title}
            </a>
          </li>
        )}
      </ul>
    </div>
  )
}
