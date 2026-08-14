import { IconBox } from "./IconBox"

export const Badge = () => {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-foreground/20 bg-brand-foreground/5 px-3.5 py-1.5 text-[8px] font-medium uppercase tracking-[0.2em] backdrop-blur sm:text-[11px]">
      <div className="flex">
        <IconBox icon="/react.svg" alt="react" />
        <IconBox icon="/development.svg" alt="development" />
        <IconBox icon="/figma.svg" alt="figma" />
        <IconBox icon="/branding.svg" alt="branding" />
        <IconBox icon="/chip-ai-svgrepo-com.svg" alt="chip-ai-svgrepo-com" />
      </div>
      Trusted Worldwide
    </span>
  )
}
