export const ContactForm = () => {
  return (
    <div className="order-2 bg-white rounded-2xl border border-border/60 px-5 py-3 sm:rounded-[1.75rem] sm:p-6 md:p-8">
      <h2 className="mt-3 text-xl font-bold text-foreground">
        Grow your business
      </h2>
      <form className="mt-4 space-y-4">
        <LabelAndInput text="Full name" type="text" placeholder="Full name" />
        <div className="grid gap-4 sm:grid-cols-2">
          <LabelAndInput text="Email" type="email" placeholder="jane@gmail.com" />
          <LabelAndInput text="Phone no." type="tel" placeholder="+91 98765 43210" />
        </div>
        <Label text="Tell us about your project" />
        <textarea className="flex min-h-[60px] w-full border border-input px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm rounded-xl bg-secondary/60"
          rows={3} placeholder="Goals, timeline, budget range…" />
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 px-8 group h-12 w-full rounded-xl text-sm">Schedule Meeting</button>
        <p className="text-center text-[11px] text-muted-foreground">No spam. Your details stay private.</p>
      </form>
    </div>
  )
}

const LabelAndInput = ({ text, type, placeholder }: { text: string, type: string, placeholder: string }) => {
  return (
    <div className="space-y-2">
      <Label text={text} />
      <Input type={type} placeholder={placeholder} />
    </div>
  )
}

const Label = ({ text }: { text: string }) => {
  return (
    <label className="text-xs font-medium text-muted-foreground">{text}</label>
  )
}
const Input = ({ type, placeholder }: { type: string, placeholder: string }) => {
  return (
    <input type={type} placeholder={placeholder} className="flex w-full border border-input px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-10 rounded-xl bg-secondary/60">
    </input>
  )
}
