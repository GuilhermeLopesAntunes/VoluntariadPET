import { useState } from 'react'
import { Dialog } from 'radix-ui'
import { Check, Copy, Eye, Gift, Heart, Home, X } from 'lucide-react'
import { HelpActionItem } from './HelpActionItem'

const ONG_PIX_CNPJ = '12.345.678/0001-90'

const HELP_ITEMS = [
  {
    id: 'lar-temporario',
    icon: Home,
    title: 'Ser lar temporário',
    description: 'Ofereça uma vaga na sua casa',
    iconContainerClass: 'bg-brand-soft text-brand',
    modalDetails:
      'Acolha temporariamente um animal resgatado até a adoção definitiva. A ONG fornece ração, vacinas e acompanhamento veterinário.',
  },
  {
    id: 'doar-pix',
    icon: Heart,
    title: 'Doar via Pix',
    description: 'CNPJ da ONG',
    iconContainerClass: 'bg-brand-soft text-brand',
    modalDetails:
      'Sua doação vai direto para alimentação, exames, castração e resgates emergenciais, com registro público no painel de transparência.',
    isPix: true,
  },
  {
    id: 'apadrinhar-cota',
    icon: Gift,
    title: 'Apadrinhar uma cota',
    description: 'Ração, vacinas e campanhas',
    iconContainerClass: 'bg-brand-soft text-brand',
    modalDetails:
      'Escolha uma cota mensal ou pontual para custear sacos de ração, vacinação polivalente ou campanhas de castração comunitária.',
  },
  {
    id: 'transparencia',
    icon: Eye,
    title: 'Transparência',
    description: 'Saldo, cupons e despesas',
    iconContainerClass: 'bg-brand-soft text-brand',
    modalDetails:
      'Consulte em tempo real o saldo disponível, notas fiscais veterinárias, cupons de compra de ração e relatórios mensais da ONG.',
  },
]

export function HelpSection() {
  const [selectedItem, setSelectedItem] = useState(null)
  const [copied, setCopied] = useState(false)

  async function handleCopyPix() {
    try {
      await navigator.clipboard.writeText(ONG_PIX_CNPJ)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="ajudar" aria-labelledby="help-section-title" className="space-y-3">
      <h2
        id="help-section-title"
        className="text-base font-bold tracking-tight text-stone-900"
      >
        Como Ajudar
      </h2>

      <div className="space-y-2.5">
        {HELP_ITEMS.map((item) => (
          <HelpActionItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
            iconContainerClass={item.iconContainerClass}
            onClick={() => {
              setCopied(false)
              setSelectedItem(item)
            }}
          />
        ))}
      </div>

      <Dialog.Root
        open={Boolean(selectedItem)}
        onOpenChange={(open) => {
          if (!open) setSelectedItem(null)
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-stone-950/50 backdrop-blur-[2px]" />
          <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[calc(100%-32px)] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-stone-200">
            {selectedItem && (
              <>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${selectedItem.iconContainerClass}`}
                    >
                      <selectedItem.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <Dialog.Title className="text-base font-bold text-stone-900">
                        {selectedItem.title}
                      </Dialog.Title>
                      <p className="text-xs text-stone-500">
                        {selectedItem.description}
                      </p>
                    </div>
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

                <Dialog.Description className="mt-4 text-sm leading-relaxed text-stone-600">
                  {selectedItem.modalDetails}
                </Dialog.Description>

                {selectedItem.isPix && (
                  <div className="mt-4 flex items-center justify-between gap-2 rounded-xl border border-stone-200 bg-stone-50 px-3.5 py-2.5">
                    <div>
                      <span className="block text-[11px] font-medium text-stone-500">
                        Chave Pix (CNPJ)
                      </span>
                      <span className="font-mono text-sm font-semibold text-stone-900">
                        {ONG_PIX_CNPJ}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyPix}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-hover cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Copiado</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                )}

                <div className="mt-5 flex justify-end">
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="rounded-xl bg-stone-100 px-4 py-2 text-sm font-semibold text-stone-800 hover:bg-stone-200 cursor-pointer"
                    >
                      Fechar
                    </button>
                  </Dialog.Close>
                </div>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  )
}
