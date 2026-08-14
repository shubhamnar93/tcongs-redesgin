"use client"
import { useState } from "react"

export type QuestionsProp = { question: string, answer: string }
export const Questions = ({ question, answer }: QuestionsProp) => {
  const [showAnswer, setShowAnswer] = useState(false)
  return (
    <div
      data-state={showAnswer ? "open" : "closed"}
      className="rounded-2xl border border-border bg-card px-5 shadow-card">
      <h3 className="flex">
        <button onClick={() => setShowAnswer((p) => !p)} className="flex flex-1 items-center justify-between py-4 cursor-pointer transition-all text-left text-base font-semibold text-foreground hover:no-underline">
          {question}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 [[data-state=open]_&]:rotate-180 " aria-hidden="true" ><path d="m6 9 6 6 6-6"></path></svg>
        </button>
      </h3 >
      <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${showAnswer
        ? "grid-rows-[1fr] opacity-100"
        : "grid-rows-[0fr] opacity-0"
        }`}>
        <div
          className="overflow-hidden text-sm min-h-0"
        >
          <div className="pb-4 pt-0 text-sm leading-relaxed text-muted-foreground">{answer}</div>
        </div>
      </div>
    </div >
  )
}
