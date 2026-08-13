import { IconBox } from "./IconBox"

export const Badge = () => {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-foreground/20 bg-brand-foreground/5 px-3.5 py-1.5 text-[8px] font-medium uppercase tracking-[0.2em] backdrop-blur sm:text-[11px]">
      <span>
      </span>
      <div className="flex">
        <IconBox icon="/react.svg" />
        <IconBox icon="/development.svg" />
        <IconBox icon="/figma.svg" />
        <IconBox icon="/branding.svg" />
        <IconBox icon="/chip-ai-svgrepo-com.svg" />
      </div>
      Trusted Worldwide
    </span>
  )
}
