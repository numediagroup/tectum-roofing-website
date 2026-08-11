# Tectum Roofing — Homepage

A single, self-contained homepage for Tectum Roofing. Plain HTML, CSS and a
little vanilla JavaScript — no frameworks, no build step, no backend. All images
and fonts are stored locally in `assets/`, so nothing loads from the internet.

The layout and content are a faithful rebuild of the reference site
(`numediag35.sg-host.com`), re-skinned in the Tectum brand (olive + cream, taken
from the logo) and rebranded from "Double A Roofing" to **Tectum Roofing**.

---

## How to preview it locally

### Option A — just open it (simplest)
Double-click `index.html`, or drag it into a browser.
> Note: everything works this way, but some browsers restrict local fonts/JS on
> `file://`. If anything looks off, use Option B.

### Option B — run a tiny local server (recommended)
Open Terminal, then:

```bash
cd "~/Desktop/Claude out/Tectum Roofing/website"
python3 -m http.server 8000
```

Then visit **http://localhost:8000** in your browser.
Press `Ctrl + C` in Terminal to stop the server.

---

## What's on the page (top to bottom)

1. **Header / nav** — Tectum logo + links: Home, Domestic Roofing, Commercial
   Roofing, Inspections & Surveys, Contact Us. Collapses to a mobile menu.
2. **Hero** — roof photo, "Tectum Roofing" headline, the 15-years tagline, and
   two calls-to-action (Get a Quote / Our Services).
3. **About** — "Roofing Professionals in South London…" intro text + image.
4. **Brand band** — a full-width roofing photo divider.
5. **Our Core Services** — the 8 services (Felt, GRP, Leadwork, Re-Roofing, Roof
   Tiling, Rubber, Slate, uPVC & Plastic), each with a real photo.
6. **What Sets Our Roofing Work Apart** — image + the two feature points.
7. **View Our Most Recent Projects** — 4 project cards.
8. **Contact Us Today** — intro, contact details, and a quote-request form.
9. **Footer** — logo, tagline, socials, quick links, contact details, copyright.

---

## Project structure

```
website/
├── index.html
├── README.md
└── assets/
    ├── css/styles.css
    ├── js/main.js
    ├── fonts/            (self-hosted Manrope — latin + latin-ext)
    └── images/
        ├── hero.jpg, band.jpg, intro.jpg, about.jpg
        ├── brand/        (Logo.png, favicon.png)
        ├── services/     (8 service photos)
        └── projects/     (4 project photos)
```

## Brand tokens (edit in `assets/css/styles.css`, `:root`)
- Olive `#565838` (from the logo), deep olive `#444629`, dark `#2c2e1c`
- Cream `#f6f2e9`, sand `#ece5d6`, brass accent `#a8894f`
- Font: **Manrope** (self-hosted)

## Adding more pages later
The site is a single page by design, but it's set up to grow: duplicate
`index.html`, keep the same `<header>` and `<footer>`, and update the nav `href`s
(e.g. `domestic-roofing.html`). The CSS and JS are already shared and reusable.

---

## ⚠️ Placeholders — replace these before going live
See `PLACEHOLDERS.md` for the full list of everything that's a guess or a stand-in.
You can also search the code for the word `PLACEHOLDER` to find each one.
