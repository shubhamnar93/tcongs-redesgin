export const HeroList = () => {
  return (
    <ul className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
      <ListItem text="Dedicated team, no outsourcing" />
      <ListItem text="Fixed timelines with weekly demos" />
      <ListItem text="Post-launch support & maintenance" />
      <ListItem text="Transparent pricing, no surprises" />
    </ul>

  )
}
const ListItem = ({ text }: { text: string }) => {
  return (
    <li className="flex items-start gap-2.5 text-xs text-brand-foreground/75">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" >
        <path d="M20 6 9 17l-5-5">
        </path>
      </svg>
      {text}
    </li>

  )

}
