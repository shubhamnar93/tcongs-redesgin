import { IconBox } from "./IconBox"

export const Badge = () => {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-foreground/20 bg-brand-foreground/5 px-3.5 py-1.5 text-[8px] font-medium uppercase tracking-[0.2em] backdrop-blur sm:text-[11px]">
      <span>
      </span>
      <div className="flex">
        <IconBox icon="/react.svg" index={1} />
        <IconBox icon="/development.svg" index={2} />
        <IconBox icon="/figma.svg" index={3} />
        <IconBox icon="/branding.svg" index={4} />
        <IconBox icon="/chip-ai-svgrepo-com.svg" index={5} />
      </div>
      Trusted Worldwide
    </span>
  )
}
