export const DEFAULT_BRAND_COLOR = '#047857'

export function applyBrandColor(
  color = import.meta.env.cor || DEFAULT_BRAND_COLOR,
) {
  const resolvedColor =
    typeof color === 'string' && color.trim()
      ? color.trim()
      : DEFAULT_BRAND_COLOR

  document.documentElement.style.setProperty('--brand-color', resolvedColor)
}
