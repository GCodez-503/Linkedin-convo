# LinkedIn InMail Panel — Salesforce

A side-panel tool for cold LinkedIn outreach. Sits next to LinkedIn on your screen: pick the prospect's persona, pick the next message in their sequence, copy it, and send. Built to get you to the right message in under 5 seconds across 75+ daily touches.

Companion to the cold call app — same 29 personas, plus VP / Director of Sales or Service.

## Files

```
index.html         The app. Open this.
data/sequences.js  All persona + message content. Edit here to change defaults.
manifest.json      PWA manifest (optional, for installing as an app).
.gitignore
README.md
```

## How to use

Open `index.html` in Chrome. No build step, no login, works offline.

**Send tab** — the main view.
1. Pick a persona from the dropdown (grouped by function).
2. Pick message 1–6 (or press keys `1`–`6`).
3. The subject and body show with one-click **Copy** on each. `[Name]` is highlighted orange — swap it before sending.
4. **Copy message + open LinkedIn** copies the body and opens LinkedIn messaging in a new tab.

**Edit tab** — tweak any message. Pick persona + message, edit the subject/body, **Save**. Changes are stored in your browser and override the defaults. **Reset this message** or **Reset all** restores the originals.

**Add tab** — write a one-off custom message, preview it, copy + open LinkedIn. Not saved (use `data/sequences.js` for permanent messages).

## The 6-message sequence (per persona)

| # | Style     | Angle                                   |
|---|-----------|-----------------------------------------|
| 1 | curiosity | AI / Agentforce accountability          |
| 2 | direct    | Release / deployment / delivery pain    |
| 3 | question  | Role, visibility, or trade-off question |
| 4 | curiosity | Data quality + AI risk                  |
| 5 | direct    | Soft intro — who I am                    |
| 6 | question  | Soft ask — worth 20 minutes             |

Rules baked into the copy: no product named in messages 1–4, no meeting ask until 5–6, each message stands alone, goal is a reply not a meeting.

## Personas (30)

- **Admin & Platform** — Salesforce Admin · Manager of Salesforce Platform · Platform Engineer · Director of Platform Engineering · DevOps Engineer
- **Dev & Architecture** — Salesforce Developer · Salesforce Architect · Solutions Architect · Software Engineering Manager · Director of SW Engineering · Product Engineer
- **QA & Testing** — QA Leader · QA Manager · Director of QA · Director of Testing · SDET
- **Delivery & Product** — Delivery Lead · Delivery Manager · Product Manager · Product Owner · Technical Program Manager
- **Business Systems** — CRM Manager · Salesforce Business Analyst · Manager of Business Applications · Director of Business Applications · Manager of Business Systems · Director of Information Systems
- **RevOps & Leadership** — Revenue Operations Manager · VP Data Architecture and Innovation · VP / Director of Sales or Service

## Editing content in the file

Open `data/sequences.js`. Each persona lists messages 1–4 explicitly. Messages 5 and 6 (soft intro + soft ask) come from the shared `introMsg` / `askMsg` templates at the top, filled with each persona's `audience` word — edit a template to change them for everyone, or use the Edit tab to change one persona.

To add a persona, copy a block in `PERSONA_SOURCE`, give it a unique `id`, a `group` from `GROUPS`, a `label`, an `audience`, and four messages.

## Notes

- Edits made in the Edit tab live in your browser's local storage (key `inmail_edits_v1`). They follow the browser, not the file — clearing site data wipes them. Permanent copy belongs in `data/sequences.js`.
- A local file can't post to LinkedIn directly, so "send" = copy + open LinkedIn, then paste.
