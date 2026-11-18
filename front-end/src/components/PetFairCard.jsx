import { MapPin, ShieldCheck } from 'lucide-react'

export function PetFairCard({ photo, name, age, sex, extraInfo, fairLocation }) {
  return (
    <article className="flex gap-3.5 rounded-2xl border border-stone-200/90 bg-white p-3 shadow-2xs">
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-stone-100">
        <img
          src={photo}
          alt={`Foto de ${name}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
        <div>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="truncate text-base font-bold text-stone-900">
              {name}
            </h3>
          </div>
          <p className="text-xs font-medium text-stone-500">
            {age} - {sex}
          </p>
          <p className="mt-1.5 flex items-start gap-1 text-xs leading-snug text-stone-700">
            <ShieldCheck
              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand"
              aria-hidden="true"
            />
            <span>{extraInfo}</span>
          </p>
        </div>

        <p className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
          <span className="truncate">{fairLocation}</span>
        </p>
      </div>
    </article>
  )
}
