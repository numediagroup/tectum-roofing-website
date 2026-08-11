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
| 6 | **Inner-page nav links** | `index.html` · header · **line 25** | "Domestic Roofing", "Commercial Roofing" and "Inspections & Surveys" currently jump to the services section (there are no inner pages yet — as per scope). When those pages exist, point these links at them. |

---

## 🟡 Placeholder copy I wrote (reference site had none)

| # | What it is | Where (file · line) | Note |
|---|------------|---------------------|------|
| 7 | **Project descriptions** | `index.html` · Projects · **lines 192, 198, 204, 210** | The reference had only project *titles* (descriptions were "…"). I wrote a short one-line caption under each of the 4 projects (Tiling / Felt / New Roofing / Roof Repairs). Swap for real project details if you have them. |
| 8 | **Hero eyebrow line** | `index.html` · Hero (~line 62) | "Domestic & Commercial Roofing Specialists" — my addition above the headline. Not on the original; easy to change or remove. |
| 9 | **Meta description** | `index.html` · `<head>` (~line 8) | SEO description I wrote for the page. Review the wording. |
| ~~10~~ | ~~Intro image~~ | About section | ✅ RESOLVED — now uses your real `Roof Repairs.jpg` (`assets/images/intro-roof-repair.jpg`). No longer a placeholder. |

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
