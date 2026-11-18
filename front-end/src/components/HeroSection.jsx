import { ArrowRight } from 'lucide-react'

export function HeroSection({ availableCount, onViewAnimals }) {
  return (
    <section aria-labelledby="hero-title" className="space-y-4">
      <div className="space-y-2.5">
        <h1
          id="hero-title"
          className="text-[1.75rem] leading-[1.15] font-extrabold tracking-tight text-stone-900"
        >
          Adote, acolha ou apadrinhe.
        </h1>
        <h2 className="text-[0.95rem] leading-relaxed font-normal text-stone-600">
          Proteção animal com selo sanitário e prestação de contas em tempo real.
        </h2>
      </div>

      <button
        type="button"
        onClick={onViewAnimals}
        className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-brand px-4 py-3.5 text-center text-white shadow-sm transition-all hover:bg-brand-hover active:scale-[0.99] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        <span className="text-[0.95rem] font-semibold">
          Ver animais para adoção
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-bold tabular-nums">
          <span>{availableCount}</span>
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </button>
    </section>
  )
}
