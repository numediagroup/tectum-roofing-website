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
3. **About** — "Roofing Professionals in South London…" intro text + the site video.
4. **Brand band** — a full-width roofing photo divider.
5. **Our Core Services** — the 8 services (Felt, GRP, Leadwork, New Roofing, Roof
   Tiling, Rubber, Slate, uPVC & Plastic), each with a real photo.
6. **What Sets Our Roofing Work Apart** — image + the two feature points.
7. **View Our Most Recent Projects** — 4 project cards.
8. **Contact Us Today** — intro, contact details, and a quote-request form.
9. **Footer** — logo, tagline, socials, quick links, contact details, copyright.

---

## The Domestic Roofing page (`domestic-roofing.html`)

The site's first inner page. One page covering all eight domestic services —
there is deliberately **no separate page per service**.

- A **Jump to** row under the banner links to all eight sections. The header
  nav is flat — no dropdown.
- Each section is three paragraphs of prose beside its photo, then four key
  points as a two-column tick list.
- **Two CTA bands** break the page up (after GRP and after New Roofing), and the
  page ends with its own **Request a Quote** form — the same form as the
  homepage, so it behaves identically.
- The homepage service cards link through to their matching section, and both
  footers carry a Domestic Roofing column.

Section order and anchors:

| # | Section | Anchor |
|---|---------|--------|
| 1 | Felt Roofing | `#felt-roofing` |
| 2 | Slating | `#slate-roofing` |
| 3 | GRP (Fibreglass Roofing) | `#grp-roofing` |
| 4 | Tiling | `#roof-tiling` |
| 5 | Rubber Roofing (EPDM) | `#rubber-roofing` |
| 6 | New Roofing | `#new-roofing` |
| 7 | Lead Roofing & Leadwork | `#leadwork` |
| 8 | uPVC & Plastics | `#upvc-plastic` |

## The Commercial Roofing page (`commercial-roofing.html`)

The second inner page, built from the 366-word commercial brief.

- **Banner**, then an intro block pairing the opening copy with a photo.
- **Buildings We Work On** — the six property types from the copy as plain
  typographic tiles (no photos needed).
- **Commercial Roofing Systems** — the systems named in the copy as chips,
  each linking to its full write-up on the domestic page.
- A **CTA band**, then three alternating text/photo sections: accreditation
  and compliance, inspections and repairs, and how the team works on site.
- Ends with its own **Arrange a Professional Assessment** form, which adds
  Company and Property Type fields to the standard one.

Section anchors: `#overview`, `#buildings`, `#systems`, `#accreditation`,
`#repairs`, `#working-with-us`, `#quote`.

All photography on this page is genuine commercial work — office blocks,
tower cranes, membrane being laid, crews on site.

## The Inspections & Surveys page (`inspections-surveys.html`)

The third and final inner page, built from the 369-word survey brief.

- **Banner**, then an intro block pairing the opening copy with a photo.
- **The Surveys We Carry Out** — the four survey types from the copy as tiles.
- **What We Check** — the eleven roofing elements as a three-column checklist.
- A **CTA band** built around the "catch it early" argument, then three
  alternating text/photo sections: commercial surveys, accreditation and
  impartiality, and what the client receives afterwards.
- Ends with its own **Arrange a Roof Inspection** form, which adds Survey
  Type and Property Type selects to the standard one.

Section anchors: `#overview`, `#survey-types`, `#what-we-check`,
`#commercial-surveys`, `#accreditation`, `#your-report`, `#quote`.

The page has its own photo set: an aerial survey view, a parapet edge, lead
detailing and a completed roof.

## The Previous Projects page (`previous-projects.html`)

- **Banner**, then **Recent Projects** — the four projects from the old site,
  with their original titles.
- **More of Our Work** — a 13-image gallery. Fixed row height plus column
  spans, so the two wide tiles and eleven standard ones pack into exactly ten
  rows with no gaps. Captions sit on the photo under a gradient scrim rather
  than in a bar underneath.
- A **CTA band** to close.

The thirteen gallery photos appear **nowhere else on the site**, so the page
never repeats what you have already seen. All imagery is client-supplied and
stored locally in `assets/images/` — nothing is hot-linked and nothing is stock.

Reachable from the nav, both footers, and the homepage "View Our Projects"
button (which previously pointed at the contact form by mistake).

See `PLACEHOLDERS.md` items 41–44.

---

## The Contact page (`contact.html`)

No copy was supplied for this page, so it is built from the contact details
already on the site and nothing was invented.

- **Banner**, then four cards: phone, WhatsApp, email and area covered.
- **A Name You Can Trust** — client-supplied about copy, as a centred
  text-only column (no image).
- The main **Tell Us About Your Roof** form, which asks for property type and
  service so an enquiry arrives already sorted.
- **Have a Look at What We Do** — three cards routing to the service pages.

Nothing on the page states an address, opening hours or a company number,
because none were provided. See `PLACEHOLDERS.md` items 29–33.

## The Privacy Policy (`privacy-policy.html`)

A plain-English UK GDPR policy, written to describe what this site actually
does rather than generic boilerplate. Linked from the footer bar on every page.

It is deliberately accurate about the fact that the site sets **no cookies**,
runs **no analytics** and loads **nothing** from third parties — which is why
there is no cookie banner anywhere on the site. Adding analytics, a pixel, an
embedded map or a hosted font would all make that section untrue.

No blanks remain — the page reads as a finished document. Two statements are
assumptions rather than confirmed facts (six-year retention, and Netlify as the
host); both are flagged in `PLACEHOLDERS.md` items 37–38.

The `legal__todo` class is still available: wrap any future gap in it and it
renders as a highlighted bracket, so the page can't be published looking
finished while a detail is outstanding.

⚠️ Not legal advice, and not reviewed by a solicitor.

---

## Internal docs are blocked from the web

The publish directory is the repo root, so every file is served — `README.md`
and `PLACEHOLDERS.md` were readable at `/README.md` and `/PLACEHOLDERS.md` on
the live site. `netlify.toml` now returns 404 for both.

They have to be listed **one per rule**. Netlify only supports a splat at the
end of a path, so `from = "/*.md"` matches nothing and fails silently without
any error. Add a rule for any new markdown file at the repo root.

---

## The site video

`assets/video/tectum-roofing.mp4` — client-supplied phone footage of torch-on
felt being laid, sitting in the homepage About section in place of a photo.

- Re-encoded from 8.3 MB to **2.4 MB** (H.264, CRF 34, 480x854, mono audio,
  `+faststart` so it streams rather than waiting for a full download).
- `preload="none"` with a poster frame, so nothing downloads until someone
  actually scrolls to it.
- It is **portrait 9:16**. Shown whole it was only ~350px wide in the column,
  so it fills the full width and is cropped to **4:5** with `object-fit:cover`.
  The torch and hands sit centre frame, so the crop trims sky and decking at
  the edges rather than the action. Change `aspect-ratio` on `.intro__video`
  to adjust how much is cropped.
- Autoplay is handled in `main.js`, not by an `autoplay` attribute: it starts
  muted and looped only when the clip scrolls into view, and **not at all** if
  the visitor has asked for reduced motion. Controls are on so it can be
  paused or unmuted.

---

## Images

All photography is client-supplied (Aug 2026), resized to roughly twice its
display size and saved at quality 76–78. Roughly 8 MB across 40 files; every
one is referenced, and every `<img>` carries `alt`, `width` and `height`.

```
assets/images/
├── *.jpg                 shared banners and section images
├── services/             the eight domestic services
├── projects/             the four featured projects
├── commercial/           genuine commercial jobs
├── inspections/          survey photography
└── gallery/              13 photos used only on the projects page
```

**Filenames are not fingerprinted.** If you swap a photo, give the file a new
name as well — otherwise browsers keep serving the old one. The image cache
header is one day with revalidation, so a same-name swap recovers within a day
rather than the month it used to take.

---

## Cache busting

`styles.css` and `main.js` are linked with a `?v=YYYYMMDD` query on every page.
**Bump that version whenever you change either file**, otherwise browsers keep
serving the old one and your changes appear not to have happened:

```bash
sed -i '' 's/?v=[0-9]\{8\}/?v=20260901/g' *.html
```

---

## The footer

Every page carries an **identical** four-column footer: brand, Quick Links,
Domestic Roofing, Get In Touch. Edit it in one page and paste it into the
others, or the pages will drift apart again.

---

## Project structure

```
website/
├── index.html
├── domestic-roofing.html
├── commercial-roofing.html
├── inspections-surveys.html
├── contact.html
├── privacy-policy.html
├── previous-projects.html
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
Every item in the nav now has a page. To add another, duplicate the closest
existing page, keep the same `<header>` and `<footer>`, and swap the sections.
The CSS and JS are shared, so a new page needs no new files.

---

## ⚠️ Placeholders — replace these before going live
See `PLACEHOLDERS.md` for the full list of everything that's a guess or a stand-in.
You can also search the code for the word `PLACEHOLDER` to find each one.
