import { Questions, QuestionsProp } from "./Questions"

const questionData: QuestionsProp[] = [
  { question: "What services does Tcongs Infotech offer?", answer: "We offer web development, mobile app development, custom software solutions, eCommerce management, and digital marketing services to help businesses grow online." },
  { question: "How long does it take to build a website or app?", answer: "The timeline depends on project complexity. A basic website may take 7–15 days, while advanced platforms or mobile apps can take 3–8 weeks or more." },
  { question: "Do you work with international clients?", answer: "Yes, we work with clients from the USA, Canada, Dubai, and globally. We provide remote support and communication throughout the project." },
  { question: "Can you help grow my business after development?", answer: "Yes, we offer SEO, digital marketing, and marketplace management services to help you generate leads, increase traffic, and boost sales." },
  { question: "What makes Tcongs Infotech different?", answer: "We focus on complete business solutions — not just development. From idea to execution and marketing, we help you build, launch, and scale successfully." },
  { question: "How can I get started?", answer: "Just share your requirements through the form above and our team will guide you with the best solution for your business." },
]

export const Faqs = () => {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-16 sm:px-6 md:py-20">
      <div className="text-center">
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-crimson">FAQs</span>
        <h2 className="mt-4 text-3xl font-bold text-foreground md:text-[2.4rem] md:leading-[1.12]">Questions? We’ve got answers</h2>
      </div>
      <div className="mt-10 space-y-3">
        {questionData.map((qd, index) => <Questions key={`questions-${index}`} question={qd.question} answer={qd.answer} />)}
      </div>
    </section>
  )
}

