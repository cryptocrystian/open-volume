# Open Volume — Launch QA Runbook

## Automated coverage

The repository includes browser and performance QA intended to run before public launch and on future pull requests.

### Playwright
`npm run test:launch`

Coverage:
- Chromium, Firefox and WebKit desktop engines
- Pixel-class Android viewport
- iPhone-class Safari viewport
- successful rendering of launch routes
- accessibility guardrails
- logo image load check
- primary and mobile navigation checks
- signup error state
- custom 404 response

Automated accessibility is a guardrail, not a replacement for keyboard, screen-reader or visual review.

### Lighthouse CI
`npm run lighthouse`

Runs on:
- homepage
- Stories
- Join

Launch thresholds:
- Accessibility >= 0.90
- Best Practices >= 0.90
- SEO >= 0.90
- Performance monitored at >= 0.75 rather than hard-blocked because CI timing is variable
- LCP warning above 4 s
- CLS warning above 0.10
- TBT warning above 300 ms

## Manual launch checks

Run on the production domain after a release candidate is deployed:

1. Desktop Chrome, Safari, Firefox and Edge
2. iOS Safari and Android Chrome
3. Keyboard-only navigation from top of page through footer
4. Visible focus state on all links, form inputs and controls
5. 200% browser zoom without clipped content
6. Reduced-motion operating-system setting
7. Homepage, Experiences, Stories, Perspective 01, About, Partners, Join, Contact, Privacy and Terms
8. Unknown URL returns branded 404
9. Join form: invalid email, successful email, upstream failure copy
10. Header identity: approved artwork visible, no clipping/interpolation artifacts, minimum-size rules respected
11. Social/footer links after real profile URLs are installed
12. Check Core Web Vitals again against production RUM after traffic begins

## Analytics and consent

Cloudflare Web Analytics is enabled automatically for `openvolume.world` at the zone level. It is privacy-first and does not require an advertising-cookie consent banner for the current launch configuration.

Open Volume also records a deliberately narrow set of first-party interaction events:
- CTA click
- successful join

Those events contain page/path and interaction labels only. They must never contain email addresses or persistent visitor identifiers.

If advertising pixels, cross-site tracking, session replay or non-essential cookies are introduced later, the privacy notice and consent UI must be revisited before deployment.
