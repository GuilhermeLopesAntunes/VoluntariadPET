import { useState } from 'react'
import { Dialog } from 'radix-ui'
import { Lock, PawPrint, X } from 'lucide-react'

export function Header() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  function handleOpenChange(nextOpen) {
    setOpen(nextOpen)
    if (!nextOpen) {
      setSubmitted(false)
    }
  }

  return (
    <header className="flex items-center justify-between gap-3">
      <a
        href="#inicio"
        className="flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand rounded-xl"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-xs">
          <PawPrint className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="text-lg font-extrabold tracking-tight text-stone-900">
          VoluntariadPET
        </span>
      </a>

      <Dialog.Root open={open} onOpenChange={handleOpenChange}>
        <Dialog.Trigger asChild>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-xl border border-stone-200 bg-white px-3.5 py-2 text-sm font-semibold text-stone-700 shadow-2xs transition-colors hover:bg-stone-100 active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <Lock className="h-4 w-4 text-brand" aria-hidden="true" />
            <span>Equipe</span>
          </button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-stone-950/50 backdrop-blur-[2px]" />
          <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[calc(100%-32px)] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-stone-200">
            <div className="flex items-start justify-between gap-4">
              <div>
                <Dialog.Title className="text-lg font-bold text-stone-900">
                  Acesso da Equipe
                </Dialog.Title>
                <Dialog.Description className="mt-1 text-sm text-stone-600">
                  Área restrita para voluntários e gestão de adoções e prestação de contas.
                </Dialog.Description>
              </div>
              <Dialog.Close asChild>
                <button
                  type="button"
                  aria-label="Fechar"
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-stone-500 hover:bg-stone-100 hover:text-stone-800 cursor-pointer"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </Dialog.Close>
            </div>

            {submitted ? (
              <div className="mt-5 rounded-xl bg-brand-soft p-4 text-sm text-brand border border-brand-border">
                Login da equipe será conectado ao back-end em breve.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="staff-email"
                    className="block text-xs font-semibold text-stone-700"
                  >
                    E-mail institucional
                  </label>
                  <input
                    id="staff-email"
                    type="email"
                    required
                    placeholder="voluntario@voluntariadpet.org.br"
                    className="w-full rounded-xl border border-stone-300 bg-stone-50 px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:border-brand focus:bg-white focus:outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="staff-password"
                    className="block text-xs font-semibold text-stone-700"
                  >
                    Senha
                  </label>
                  <input
                    id="staff-password"
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-stone-300 bg-stone-50 px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:border-brand focus:bg-white focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover cursor-pointer"
                >
                  Entrar
                </button>
              </form>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  )
}
