import Image from "next/image"

export const Header = () => {
  return (
    <header className="sticky top-0 z-30 backdrop-blur border-b border-border  bg-background ">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] mx-auto px-5 py-3 sm:px-6 sm:py-4 max-w-6xl">
        <Image className="md:hidden" src={"/logo.svg"} alt="logo of tcongs" width={"81"} height={"28"} />
        <Image className="hidden md:flex" src={"/logo.svg"} alt="logo of tcongs" height={"32"} width={"94"} />
        <nav className="hidden items-center gap-9 text-sm text-muted-foreground md:flex" data-tsd-source="/src/routes/index.tsx:128:11">
          <a href="#services" className="transition-colors hover:text-foreground">
            Services
          </a>
          <a href="#why" className="transition-colors hover:text-foreground">
            Why us
          </a>
          <button className="border-border rounded-full px-4 py-2 text-sm font-medium bg-primary text-primary-foreground">Let's Talk</button>
        </nav>
        <button className="md:hidden border-border rounded-full px-4 py-2 text-xs font-medium bg-primary text-primary-foreground">Let's Talk</button>
      </div>
    </header>
  )
}
