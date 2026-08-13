import Image from "next/image"

export const IconBox = ({ icon }: { icon: string, }) => {
  return (
    <div className="-ml-1 md:-ml-2 h-[16px] md:h-[28px]  md:p-2 w-[16px] md:w-[28px] bg-gradient-brand border-1 border-gold/40 p-1  shrink-0 flex items-center justify-center rounded-full">
      <Image className="md:hidden" alt="figma" decoding="async" height="14" src={icon} width="14" />
      <Image className="md:flex hidden" alt="figma" decoding="async" height="24" src={icon} width="24" />
    </div>
  )
}
