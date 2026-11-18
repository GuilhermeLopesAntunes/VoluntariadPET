import { ChevronRight } from 'lucide-react'

export function HelpActionItem({
  icon: Icon,
  title,
  description,
  iconContainerClass = 'bg-brand-soft text-brand',
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-full items-center gap-3.5 rounded-2xl border border-stone-200/90 bg-white p-3.5 text-left shadow-2xs transition-all hover:border-stone-300 hover:bg-stone-50/70 active:scale-[0.99] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconContainerClass}`}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-[0.95rem] font-semibold leading-snug text-stone-900">
          {title}
        </span>
        <span className="mt-0.5 block text-xs leading-snug text-stone-500">
          {description}
        </span>
      </span>

      <ChevronRight
        className="h-5 w-5 shrink-0 text-stone-400 transition-transform group-hover:translate-x-0.5 group-hover:text-stone-600"
        aria-hidden="true"
      />
    </button>
  )
}
