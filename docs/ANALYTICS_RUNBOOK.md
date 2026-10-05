# Open Volume — Analytics Runbook

## Launch analytics stack

Open Volume uses two privacy-first measurement layers:

1. **Cloudflare Web Analytics**
   - page views
   - visits
   - referrers
   - browser/device geography aggregates
   - Core Web Vitals / page-load performance

2. **Workers Analytics Engine — `open_volume_events`**
   - selected CTA clicks
   - successful Stay Close joins
   - no email addresses
   - no cookies
   - no persistent visitor IDs
   - no query strings

The launch site does not use advertising or cross-site tracking cookies.

## Event schema

Dataset: `open_volume_events`

| Field | Meaning |
|---|---|
| `timestamp` | Cloudflare event timestamp |
| `index1` | event name: `cta_click` or `join_success` |
| `blob1` | page path |
| `blob2` | CTA label |
| `blob3` | internal destination path |
| `blob4` | subscription source: `homepage` or `join-page` |
| `double1` | client-event receive time as Unix epoch milliseconds |

## Common queries

### Event totals — last 7 days

```sql
SELECT
  index1 AS event,
  COUNT(*) AS events
FROM open_volume_events
WHERE timestamp > NOW() - INTERVAL '7' DAY
GROUP BY event
ORDER BY events DESC
```

### CTA clicks by page and label

```sql
SELECT
  blob1 AS page,
  blob2 AS label,
  COUNT(*) AS clicks
FROM open_volume_events
WHERE timestamp > NOW() - INTERVAL '7' DAY
  AND index1 = 'cta_click'
GROUP BY page, label
ORDER BY clicks DESC
```

### Successful joins by source

```sql
SELECT
  blob4 AS source,
  COUNT(*) AS joins
FROM open_volume_events
WHERE timestamp > NOW() - INTERVAL '30' DAY
  AND index1 = 'join_success'
GROUP BY source
ORDER BY joins DESC
```

## Conversion reporting

Use Cloudflare Web Analytics for visits/page views and Analytics Engine for successful joins.

A simple launch conversion rate is:

`join_success events / visits`

Treat this as directional rather than person-level attribution because Open Volume intentionally does not assign persistent visitor IDs at launch.

## Privacy guardrails

Do not add any of the following to the analytics dataset without revisiting privacy and consent:
- email address
- subscriber key
- request ID tied back to CRM
- IP address
- full URL with query string
- advertising IDs
- cross-site identifiers
- fingerprinting attributes

If advertising, retargeting, cross-site tracking or non-essential cookies are introduced later, review both the privacy notice and consent experience before enabling them.
