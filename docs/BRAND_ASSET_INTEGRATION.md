# Open Volume — Production Brand Asset Integration

## Status
The website foundation is ready for the approved production identity files, but the repository does **not** currently contain the canonical Resonance 01 SVG masters.

Do not reconstruct the logo from screenshots, generated boards, the old vector studies, or live Outfit type.

## Canonical identity
- **Symbol:** Resonance 01 — deep-curved closed nested rings with a solid center.
- **Wordmark:** approved modern geometric B outlined artwork.
- **Production typeface:** Outfit Regular 400 for display/body and Medium 500 for labels/controls.
- **Preferred logo color:** Charcoal on Bone or Bone on Charcoal.
- **Secondary supplied variants:** black, white, Mineral, Oxide, and recolorable masters.

## Files required in `/public/brand`
Use the supplied production masters and preserve their geometry and lockup spacing.

Recommended normalized filenames:
- `open-volume-symbol-charcoal.svg`
- `open-volume-symbol-bone.svg`
- `open-volume-horizontal-charcoal.svg`
- `open-volume-horizontal-bone.svg`
- `open-volume-stacked-charcoal.svg`
- `open-volume-stacked-bone.svg`

Optional after optical testing:
- favicon / 16 px compatibility fallback
- favicon / 24 px compatibility fallback
- high-resolution social avatar export
- Mineral and Oxide variants where a real use case requires them

## Website usage
### Header
Use the **horizontal lockup** once supplied. The design-system working minimum is 160 CSS px for lockups.

### Footer
Use the horizontal or stacked lockup based on final responsive balance; preserve at least the required clear space.

### Social/avatar and future favicon
Use the standalone symbol. Routine digital minimum: 32 CSS px. Smaller favicon exports are compatibility fallbacks and require optical testing.

### Photography
Marks must sit in a quiet, contrast-safe area. Do not add glow, bevel, gradient, drop shadow, stroke thickening, or improvised backing plates.

## Geometry rules
Never:
- split the rings
- hollow the center
- flatten the deep bow
- stretch or rotate the silhouette
- add rings
- combine the identity with an O/V monogram
- rebuild the wordmark with live text

## Clear space
Working unit `x` = one quarter of the symbol's total height.
- minimum: `x`
- spacious editorial placement: `2x` preferred

## Current website fallback
`components/brand-signature.tsx` intentionally renders a restrained text fallback until the approved outlined master is physically present in the repository.

This is a temporary implementation state, not a new logo treatment.
