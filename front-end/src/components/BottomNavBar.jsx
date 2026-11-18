import { Eye, HeartHandshake, Home, PawPrint } from 'lucide-react'

const NAV_ITEMS = [
  { id: 'inicio', label: 'Início', icon: Home },
  { id: 'adotar', label: 'Adotar', icon: PawPrint },
  { id: 'ajudar', label: 'Ajudar', icon: HeartHandshake },
  { id: 'transparencia', label: 'Transparência', icon: Eye },
]

export function BottomNavBar({ activeTab, onTabChange }) {
  return (
    <nav
      aria-label="Navegação principal"
      className="fixed right-0 bottom-0 left-0 z-40 border-t border-stone-200/90 bg-white/95 backdrop-blur-md"
    >
      <ul className="mx-auto grid max-w-md grid-cols-4 px-2 py-2">
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
          const isActive = activeTab === id
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => onTabChange(id)}
                aria-current={isActive ? 'page' : undefined}
                className={`flex w-full flex-col items-center justify-center gap-1 rounded-xl py-1.5 text-[11px] font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                  isActive
                    ? 'text-brand'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                <span
                  className={`flex h-7 w-12 items-center justify-center rounded-full transition-colors ${
                    isActive ? 'bg-brand-soft' : 'bg-transparent'
                  }`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>{label}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
