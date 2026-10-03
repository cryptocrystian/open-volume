# Open Volume — Stay Close Audience Capture Runbook

## Goal
Make the public **Stay Close** form production-safe while keeping the website decoupled from downstream systems.

The website posts to `/api/join`. That route forwards a normalized payload to the private endpoint configured in `OPEN_VOLUME_JOIN_WEBHOOK_URL`.

## Locked production architecture

**Website → `/api/join` → private n8n webhook → Attio Person upsert → Open Volume Audience membership → optional email-platform sync → optional welcome message → 2xx response**

Attio is the CRM/source-of-truth layer for Open Volume relationships. n8n remains the orchestration layer so the public Next.js app is not coupled directly to Attio or to the eventual email-delivery vendor.

## Current Attio workspace audit

The connected Attio workspace has been inspected.

- `people` is available and is the correct parent object for Stay Close subscribers.
- `email_addresses` is writable, multiselect, and unique, so normalized email is the correct Attio upsert key.
- The workspace currently has **no lists configured**.
- Standard People attributes are present, but launch-specific Open Volume consent/source attributes are not yet present.

Do not create a second custom Audience object merely to hold subscribers. Use People as the canonical identity record and segment them through an **Open Volume Audience** list plus Open Volume-specific attributes.

## Recommended Attio model

### Parent object
**People**

### Required list
Create one list:

**Open Volume Audience**

This list is for opted-in Open Volume audience/community contacts. It should remain separate from artist, venue, sponsor and business-development pipelines even when the same Person eventually participates in more than one relationship.

### Recommended Open Volume attributes
Prefer attributes on People when the value describes the person/contact globally across Open Volume:

- `Open Volume Audience` — checkbox or select
- `OV Consent Status` — status/select: Subscribed / Unsubscribed / Suppressed
- `OV Consent Timestamp` — timestamp
- `OV First Source` — text/select
- `OV First Subscribed At` — timestamp
- `OV Latest Source` — text/select
- `OV Latest Subscribed At` — timestamp
- `OV Subscriber Key` — text

Keep request-level tracing (`requestId`) in n8n execution/logging rather than polluting Attio with a new permanent value on every submission.

If Attio list-entry attributes are preferred for campaign-specific fields, source/campaign can live on the Open Volume Audience list entry instead. The enduring consent status and canonical email should remain attached to the Person.

## Webhook request contract

The receiving workflow accepts:

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

- `Authorization: Bearer <OPEN_VOLUME_JOIN_WEBHOOK_TOKEN>`
- `X-Open-Volume-Request-Id`
- `X-Open-Volume-Subscriber-Key`
- `User-Agent: open-volume-website/1.0`

## n8n → Attio workflow

1. **Webhook trigger**
   - POST only
   - require the shared bearer token
   - reject unauthorized requests

2. **Normalize and validate**
   - require `email`, `subscriberKey`, `requestId`, `subscribedAt`, and `consent`
   - allow known source values such as `homepage` and `join-page`

3. **Upsert Attio Person by email**
   - target object: `people`
   - matching attribute: `email_addresses`
   - value: normalized email
   - never create a second Person for the same email

4. **Preserve first-touch data**
   - if first subscription fields are empty, set them
   - never overwrite `OV First Source` or `OV First Subscribed At` on repeat submissions

5. **Update current subscription data**
   - set `Open Volume Audience = true`
   - set `OV Consent Status = Subscribed`
   - set `OV Consent Timestamp = subscribedAt` when this is a genuine opt-in/re-opt-in event
   - set `OV Latest Source = source`
   - set `OV Latest Subscribed At = subscribedAt`
   - set `OV Subscriber Key = subscriberKey`

6. **Add Person to Open Volume Audience list**
   - create membership only if not already present
   - do not duplicate list entries

7. **Optional email-platform sync**
   Attio is the relationship system, not necessarily the bulk-email delivery engine. When the email platform is selected, sync the subscriber there after the Attio upsert succeeds.

8. **Welcome confirmation**
   Optional at initial launch, preferred once sending is configured.

   **Subject:** You’re in.

   Thanks for joining Open Volume.

   We’ll share new performances, artist stories, premieres, places and collaborations when there is something worth sharing.

   **Open Volume**  
   Expand the space music can occupy.

9. **Respond quickly**
   - new/upserted subscriber: `200` or `201`
   - already subscribed and unchanged: `200` preferred; `409` is also handled by the website as success
   - invalid/auth failure: appropriate `4xx`
   - downstream failure: `5xx`

## Unsubscribe doctrine

An unsubscribe should **not delete the Attio Person**.

Instead:
- set `OV Consent Status = Unsubscribed` or Suppressed as appropriate
- keep the Person and historical relationship data
- ensure the delivery platform suppresses future marketing sends
- do not automatically re-subscribe through a background sync
- only change back to Subscribed after a new valid consent event

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

1. valid new email → Attio Person created + Open Volume Audience membership
2. same email again → same Person + no duplicate list entry
3. uppercase/spaced same email → same Person
4. repeat subscriber → first-source/date preserved; latest-source/date updated
5. malformed email → local `400`, no webhook call
6. honeypot populated → silent success, no Attio record created
7. invalid/missing bearer token → receiver rejects
8. Attio/API failure → site shows retry message
9. receiver timeout → site shows retry message within ~8 seconds
10. homepage submission → latest source stored as `homepage`
11. Join-page submission → latest source stored as `join-page`
12. unsubscribe → Person retained; status/suppression honored

## Launch gate

Do **not** consider owned-audience capture live until:

- Open Volume Audience list exists in Attio
- Open Volume launch attributes are created
- n8n has authenticated Attio access
- production webhook URL and bearer token are installed
- Person upsert by email is verified
- Audience list membership is verified
- duplicate behavior is verified
- source and consent timestamps are retained
- unsubscribe/suppression behavior is verified
- failure state is tested
- privacy copy is reviewed against the final Attio/email/analytics stack

## Future upgrades

Only add these when traffic justifies them:

- edge/WAF rate limiting
- bot challenge such as Turnstile
- double opt-in by jurisdiction/strategy
- richer referral/source attribution
- preference center
- first-party analytics event for successful signup
- automated Attio audience segmentation
- lead scoring or engagement tiers
