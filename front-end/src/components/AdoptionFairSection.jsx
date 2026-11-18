import { PetFairCard } from './PetFairCard'

export function AdoptionFairSection({ pets }) {
  return (
    <section
      id="feira-adocao"
      aria-labelledby="fair-section-title"
      className="space-y-3"
    >
      <div className="flex items-center justify-between gap-2">
        <h2
          id="fair-section-title"
          className="text-base font-bold tracking-tight text-stone-900"
        >
          Na feira de adoção hoje
        </h2>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-2.5 py-1 text-[11px] font-semibold text-brand border border-brand-border">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
          Ao vivo
        </span>
      </div>

      <div className="space-y-3">
        {pets.map((pet) => (
          <PetFairCard
            key={pet.id}
            photo={pet.photo}
            name={pet.name}
            age={pet.age}
            sex={pet.sex}
            extraInfo={pet.extraInfo}
            fairLocation={pet.fairLocation}
          />
        ))}
      </div>
    </section>
  )
}
