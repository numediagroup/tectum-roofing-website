# Tectum Roofing — Placeholder & Assumption List

Everything below is something I **guessed, invented, or stood in** because it
wasn't provided. Please review and swap in the real details. Every item is also
marked in the code with a `PLACEHOLDER` comment — search the files for the word
`PLACEHOLDER` to jump to each one.

---

## 🔴 Please confirm / provide — these are guesses

| # | What it is | Where (file · section · line) | What it should be / what I need |
|---|------------|-------------------------------|----------------------------------|
| ~~1~~ | ~~Email address~~ | Contact + footer | ✅ RESOLVED — now `info@tectum-roofing.co.uk`. |
| 2 | **Brand name swap** | `index.html` · throughout | The reference site's body copy said **"Double A Roofing"** everywhere, but the title/logo/favicon said **Tectum Roofing**. I wrote everything as **Tectum Roofing**. Confirm that's correct. |
| 3 | **Font** | `assets/css/styles.css` · `:root` / `@font-face` | No brand font was in the assets folder, so I used **Manrope** (a clean, professional sans). If Tectum has an official typeface, send it and I'll swap it in. |
| 4 | **Contact form has no backend** | `index.html` · line 235 · and `assets/js/main.js` · line 60 | Submitting just shows a "demo form" message. Before go-live it needs a real handler (Formspree, Netlify Forms, or an email endpoint). Tell me your preference. |
| 5 | **Social media links** | `index.html` · footer · **line 287** | Facebook + Instagram icons currently link to `#` (nowhere). **Send me the real social URLs** (or say if there are none and I'll remove them). |
| 6 | **Inner-page nav links** | `index.html` · header | ⚠️ PARTLY RESOLVED — **Domestic Roofing** now has its own page (`domestic-roofing.html`) covering all 8 services. **"Commercial Roofing"** and **"Inspections & Surveys"** still have no pages and continue to point at the homepage services grid. |

---

## 🟡 Placeholder copy I wrote (reference site had none)

| # | What it is | Where (file · line) | Note |
|---|------------|---------------------|------|
| 7 | **Project descriptions** | `index.html` · Projects · **lines 192, 198, 204, 210** | The reference had only project *titles* (descriptions were "…"). I wrote a short one-line caption under each of the 4 projects (Tiling / Felt / New Roofing / Roof Repairs). Swap for real project details if you have them. |
| 8 | **Hero eyebrow line** | `index.html` · Hero (~line 62) | "Domestic & Commercial Roofing Specialists" — my addition above the headline. Not on the original; easy to change or remove. |
| 9 | **Meta description** | `index.html` · `<head>` (~line 8) | SEO description I wrote for the page. Review the wording. |
| ~~10~~ | ~~Intro image~~ | About section | ✅ RESOLVED — now uses your real `Roof Repairs.jpg` (`assets/images/intro-roof-repair.jpg`). No longer a placeholder. |

---

## 🟠 Domestic Roofing page (`domestic-roofing.html`) — added from your supplied copy

| # | What it is | Where | What I need from you |
|---|------------|-------|----------------------|
| 11 | **Section photos are stand-ins** | `domestic-roofing.html` · all 8 sections | Each service section reuses the photo already in `assets/images/services/` for that service — the same eight images as the homepage cards, taken from the reference site. They are correct *subjects* but they are not new photography. Send genuine Tectum job photos (ideally 2–3 per service) and I'll swap them in. Marked `PLACEHOLDER: image` at each one. |
| 12 | **"Double A Roofing" in the supplied copy** | `domestic-roofing.html` · Felt, Slating, Tiling, Re-Roofs | Your text said "At Double A Roofing…" in four places. I wrote **Tectum Roofing**, consistent with the rest of the site (see item 2). Confirm. |
| 13 | **Menu labels vs section headings** | "Jump to" row + footer vs section `<h2>`s | Your menu list and your body copy use different names for four services: **"Slate Roofs"** → heading **"Slating"**; **"GRP Roofs"** → **"GRP (Fibreglass Roofing)"**; **"Tiled Roofs"** → **"Tiling"**; **"uPVC & Plastic Roofing"** → **"uPVC & Plastics"**. Both are your words so I kept both as written. Say which set you want and I'll make them match. |
| 14 | **Service area wording** | `domestic-roofing.html` vs `index.html` | The new copy says "London, Surrey, Sussex, and surrounding areas". The homepage contact block and footer say "Surrey, South London & Surrounding Areas". Pick one and I'll standardise the whole site. |
| ~~15~~ | ~~No quote form on the service page~~ | Contact section | ✅ RESOLVED — the page now ends with its own **Request a Quote** section, the same form as the homepage. Still no backend (see item 4). |
| 17 | **CTA break copy is mine** | `domestic-roofing.html` · two CTA bands | Two photo CTA bands split the eight services (after GRP and after Re-Roofs). Nothing was supplied for these, so I wrote the headings and paragraphs: *"Not sure which system your roof needs?"* and *"Roof leaking? Talk to us today."* Both are marked `PLACEHOLDER` in the code — rewrite freely. |
| 18 | **Your copy was regrouped into paragraphs** | `domestic-roofing.html` · all 8 sections | Your text arrived as ~15 standalone statements per service. To make it read as prose I grouped them into three paragraphs plus four key points, joining sentences with light connectives ("and", "it", "they"). No facts were added, removed or changed — but the wording is no longer identical line-for-line. Worth a read-through. |
| 16 | **Hero image is reused** | `domestic-roofing.html` · page hero | The page banner reuses `assets/images/band.jpg` from the homepage divider. A dedicated domestic-roofing banner shot would be better. |

---

## ✅ Real details used (from the reference site — please still verify)

These were taken from the reference site and treated as real. Worth a quick check:

- **Phone:** landline `01372 613023` and WhatsApp `07762 204033` (you supplied these; a
  floating WhatsApp button links to `wa.me/447762204033`). The old reference-site mobiles
  (07939 920233 / 07539 633820) have been removed.
- **Service area:** "Surrey, South London & Surrounding Areas"
- **All body copy** (about, services intro, "what sets us apart", contact intro)
- **All 8 service names** and **4 project names**
- **All photography** — downloaded from the reference site and stored locally in
  `assets/images/` (hero, services, projects, about). If any of these are stock
  or belong to a previous client, replace them with genuine Tectum job photos.
- **Logo & favicon** — the real files (logo from your `Desktop/Tectum Roofing`
  folder; favicon from the site).

---

## Note on the original that I cleaned up
The reference site printed the heading **"What Sets Our Roofing Work Apart"
twice** in a row (a template glitch). I kept a single, clean heading. Say if you
actually want it twice.
