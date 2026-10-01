# Open Volume — Content Layer + Audience Capture

## Decision for pre-launch
Use a repository abstraction now rather than coupling the site to a CMS before the publishing workflow is proven.

The website reads Story and Experience content through `ContentRepository`. The current provider is local and repository-native. A future CMS provider can replace it without rewriting page components.

This keeps the launch site:
- simple
- versioned
- portable
- easy to review
- ready for a CMS when real editorial volume justifies one

## CMS selection gate
Select an external CMS when at least one of these becomes true:
- non-developers need to publish without GitHub
- editorial cadence makes PR-based publishing slow
- multiple editors require roles/workflow
- scheduled publishing becomes necessary
- media-library governance requires a dedicated backend
- partner/artist approvals need formal draft/review states

When that happens, preserve the existing `ContentRepository` contract and implement the provider behind it.

## Audience capture
`JoinForm` posts to the server-side `/api/join` route.

The API:
- validates email
- uses a honeypot field for basic bot filtering
- does not expose provider credentials in the browser
- sends a normalized JSON payload to a configured server-side webhook
- supports an optional bearer token
- fails visibly rather than pretending a subscriber was captured when no provider is connected

### Environment
`OPEN_VOLUME_JOIN_WEBHOOK_URL` — required in production.

`OPEN_VOLUME_JOIN_WEBHOOK_TOKEN` — optional, recommended if the receiving endpoint supports bearer authentication.

## Provider neutrality
The receiving webhook can later be:
- an email platform
- n8n
- a CRM workflow
- a serverless function
- another consent-aware owned-audience system

No vendor is hard-coded into the website.

## Consent payload
The current payload records:
- email
- source
- subscription timestamp
- consent context: Open Volume announcements and editorial

Before launch, legal/privacy copy and the destination system's unsubscribe/consent behavior must be reviewed.

## Next implementation gates
1. choose the actual audience destination
2. configure the production webhook and token
3. test successful, duplicate, invalid, and failure states
4. add privacy-policy language before public launch
5. add analytics events only after analytics/consent strategy is selected
