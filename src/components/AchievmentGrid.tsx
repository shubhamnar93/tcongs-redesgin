export const AchievmentGrid = () => {
  return (
    <div className="mt-10 grid max-w-xl grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-brand-foreground/10 bg-brand-foreground/10">
      <IndividualAchievement text="190+" subText="Happy Client" />
      <IndividualAchievement text="240+" subText="Projects Completed" />
      <IndividualAchievement text="4.9" subText="Average rating" />
      <IndividualAchievement text="8+" subText="Years of experience" />
    </div>
  )
}

const IndividualAchievement = ({ text, subText }: { text: string, subText: string }) => {
  return (
    <div className="bg-brand-deep/40 px-4 py-5 backdrop-blur">
      <div className="font-display text-xl font-bold text-brand-foreground">
        {text}
      </div>
      <div className="mt-1 text-[8px] uppercase tracking-wide text-brand-foreground/55">
        {subText}
      </div>
    </div>
  )
}
