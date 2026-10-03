# Open Volume — Stay Close Audience Capture Runbook

## Goal
Make the public **Stay Close** form production-safe without coupling the website directly to one CRM or email platform.

The website posts to `/api/join`. That route forwards a normalized payload to the private endpoint configured in `OPEN_VOLUME_JOIN_WEBHOOK_URL`.

## Recommended production architecture

**Website → `/api/join` → private n8n webhook → CRM/contact upsert → email/list membership → optional welcome message → 2xx response**

This keeps credentials and vendor-specific logic out of the public Next.js app.

## Webhook request contract

The receiving workflow should accept JSON shaped like:

```json
{
  "email": "person@example.com",
  "source": "homepage",
  "subscribedAt": "2026-10-03T18:00:00.000Z",
  "consent": "Open Volume announcements and editorial",
  "subscriberKey": "sha256-of-normalized-email",
  "requestId": "uuid"
}
```

Headers include:

- `Authorization: Bearer <OPEN_VOLUME_JOIN_WEBHOOK_TOKEN>` when configured
- `X-Open-Volume-Request-Id`
- `X-Open-Volume-Subscriber-Key`
- `User-Agent: open-volume-website/1.0`

## Recommended n8n workflow

1. **Webhook trigger**
   - POST only
   - require the shared bearer token
   - reject unauthorized requests

2. **Normalize and validate**
   - require `email`, `subscriberKey`, `requestId`, `subscribedAt`, and `consent`
   - accept known `source` values

3. **Deduplicate / upsert**
   - use normalized email or `subscriberKey` as the stable identity
   - existing subscribers should be updated, not duplicated
   - preserve first-subscribe date if available
   - update most-recent source/date separately if useful

4. **CRM/contact record**
   Suggested properties/tags:
   - email
   - source
   - consent text
   - consent timestamp
   - tag: `open-volume-stay-close`
   - tag: `open-volume-launch`

5. **Audience/list membership**
   - add the contact to the Open Volume owned-audience list
   - do not create duplicate list entries

6. **Welcome confirmation**
   Optional at initial launch, but preferred once email delivery is configured.

   Suggested message:

   **Subject:** You’re in.

   Thanks for joining Open Volume.

   We’ll share new performances, artist stories, premieres, places and collaborations when there is something worth sharing.

   **Open Volume**  
   Expand the space music can occupy.

7. **Respond quickly**
   - new/upserted subscriber: `200` or `201`
   - already subscribed and unchanged: `200` is preferred; `409` is also handled by the site as success
   - invalid/auth failure: appropriate `4xx`
   - downstream failure: `5xx`

## Production behavior already enforced by the website

- email normalization and validation
- honeypot bot suppression
- source allowlist
- HTTPS-only webhook requirement in production
- 8-second upstream timeout
- stable SHA-256 subscriber key for deduplication
- unique request ID for tracing
- duplicate (`409`) treated as success
- credentials remain server-side
- no browser exposure of webhook URL or bearer token

## Test matrix before launch

Run all of these against the production-like environment:

1. valid new email → success state + contact created
2. same email again → success state + no duplicate contact
3. uppercase/spaced version of same email → same subscriber
4. malformed email → local `400`, no webhook call
5. honeypot populated → silent success, no contact created
6. invalid/missing bearer token at receiver → receiver rejects
7. receiver returns `500` → site shows retry message
8. receiver times out → site shows retry message within ~8 seconds
9. homepage submission → source stored as `homepage`
10. Join-page submission → source stored as `join-page`
11. unsubscribe from later email → suppression honored by final email platform

## Launch gate

Do **not** consider owned-audience capture live until:

- production webhook URL is installed
- production bearer token is installed
- receiver validates the bearer token
- contact upsert is verified
- duplicate behavior is verified
- source and consent timestamp are retained
- failure state is tested
- privacy copy is reviewed against the actual CRM/email/analytics stack

## Future upgrades

Only add these when traffic justifies them:

- edge/WAF rate limiting
- bot challenge such as Turnstile
- double opt-in by jurisdiction/strategy
- referral/source attribution
- preference center
- first-party analytics event for successful signup
- automated audience segmentation
