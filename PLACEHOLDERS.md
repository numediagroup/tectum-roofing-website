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
| ~~4~~ | ~~Contact form has no backend~~ | all five forms | ✅ RESOLVED — every form posts to Formspree (`mljejbwz`), submitted over fetch so the visitor stays on the page. Each carries a `_subject` naming the page it came from, and a honeypot field for spam. Falls back to a normal POST with JavaScript off. |
| 5 | **Social media links** | `index.html` · footer · **line 287** | Facebook + Instagram icons currently link to `#` (nowhere). **Send me the real social URLs** (or say if there are none and I'll remove them). |
| ~~6~~ | ~~Inner-page nav links~~ | `index.html` · header | ✅ RESOLVED — all four nav items now resolve to real pages: `domestic-roofing.html`, `commercial-roofing.html` and `inspections-surveys.html`. |

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
| ~~11~~ | ~~Section photos are stand-ins~~ | ✅ RESOLVED — replaced with genuine Tectum photography supplied by the client (Aug 2026). |
| 12 | **"Double A Roofing" in the supplied copy** | `domestic-roofing.html` · Felt, Slating, Tiling, New Roofing | Your text said "At Double A Roofing…" in four places. I wrote **Tectum Roofing**, consistent with the rest of the site (see item 2). Confirm. |
| 13 | **Menu labels vs section headings** | "Jump to" row + footer vs section `<h2>`s | Your menu list and your body copy use different names for four services: **"Slate Roofs"** → heading **"Slating"**; **"GRP Roofs"** → **"GRP (Fibreglass Roofing)"**; **"Tiled Roofs"** → **"Tiling"**; **"uPVC & Plastic Roofing"** → **"uPVC & Plastics"**. Both are your words so I kept both as written. Say which set you want and I'll make them match. |
| 14 | **Service area wording** | sitewide | ⚠️ PARTLY RESOLVED — every **contact block and footer** now reads "London, Surrey, Sussex & Surrounding Areas", matching your three newer briefs. Two things on the homepage still say **South London**, and I left them deliberately because they look like local-SEO positioning rather than contact details: the page `<title>` and the heading *"Roofing Professionals in South London and the Surrounding Areas"*. Tell me whether South London should stay in those, and I'll finish the job either way. |
| ~~15~~ | ~~No quote form on the service page~~ | Contact section | ✅ RESOLVED — the page now ends with its own **Request a Quote** section, the same form as the homepage. Still no backend (see item 4). |
| 17 | **CTA break copy is mine** | `domestic-roofing.html` · two CTA bands | Two photo CTA bands split the eight services (after GRP and after New Roofing). Nothing was supplied for these, so I wrote the headings and paragraphs: *"Not sure which system your roof needs?"* and *"Roof leaking? Talk to us today."* Both are marked `PLACEHOLDER` in the code — rewrite freely. |
| 18 | **Your copy was regrouped into paragraphs** | `domestic-roofing.html` · all 8 sections | Your text arrived as ~15 standalone statements per service. To make it read as prose I grouped them into three paragraphs plus four key points, joining sentences with light connectives ("and", "it", "they"). No facts were added, removed or changed — but the wording is no longer identical line-for-line. Worth a read-through. |
| ~~16~~ | ~~Hero image is reused~~ | ✅ RESOLVED — the domestic banner is now its own drone shot. |

---

## 🟣 Commercial Roofing page (`commercial-roofing.html`) — added from your supplied copy

| # | What it is | Where | What I need from you |
|---|------------|-------|----------------------|
| ~~19~~ | ~~Every photo is a domestic job~~ | ✅ RESOLVED — the commercial page now uses genuine commercial jobs: office blocks, tower cranes, membrane going down, crews in hi-vis. This was the biggest gap on the site and it is closed. |
| 20 | **"Double A Roofing" in the supplied copy** | throughout | Your text said "Double A Roofing" in four places. I wrote **Tectum Roofing**, consistent with the rest of the site (see items 2 and 12). |
| 21 | **Section headings are my wording** | all section `<h2>`s | Your copy arrived as eight paragraphs with a single heading ("Commercial Roofing Services", which I kept). To break 366 words into a browsable page I wrote the rest: *Buildings We Work On*, *Commercial Roofing Systems*, *Fully Insured, Fully Accredited*, *Inspections, Repairs & Re-Roofing*, *Clear Communication, Start to Finish*, *Arrange a Professional Assessment*. The CTA band heading *"Leaks cost more than a repair does"* is also mine. All easy to change. |
| 22 | **The systems chips link to the domestic page** | `commercial-roofing.html` · Commercial Roofing Systems | The seven system chips (felt, GRP, EPDM, tiling, slating, leadwork, re-roofs) link through to the full write-up of each on the domestic page, since your commercial copy names them but doesn't describe them. Tell me if you'd rather they didn't link at all, or if you want commercial-specific descriptions written. |
| 23 | **"Flat roofing systems" has no chip of its own** | `commercial-roofing.html` · Commercial Roofing Systems | Your list of services opens with "flat roofing systems" and then names felt, GRP and rubber — which *are* the flat roofing systems. I left the phrase in the paragraph but didn't give it a separate chip, to avoid it looking like a ninth product. Say if you'd rather it had one. |

---

## 🔵 Inspections & Surveys page (`inspections-surveys.html`) — added from your supplied copy

| # | What it is | Where | What I need from you |
|---|------------|-------|----------------------|
| ~~24~~ | ~~No inspection photography~~ | ✅ RESOLVED — the inspections page now has its own set: aerial survey view, parapet edge, lead detailing and a completed roof. |
| 25 | **"Double A Roofing" in the supplied copy** | throughout | Said "Double A Roofing" in four places; written as **Tectum Roofing** to match the rest of the site. |
| 26 | **Section headings are my wording** | all section `<h2>`s | Your copy carried one heading ("Roof Inspections & Surveys", which I kept). I wrote the rest: *The Surveys We Carry Out*, *What We Check*, *Commercial Roof Surveys*, *Clear, Unbiased Assessments*, *What You Get Afterwards*, *Arrange a Roof Inspection*, plus the CTA band line *"A survey now is cheaper than a roof later"*. |
| 27 | **What does the client actually receive?** | "What You Get Afterwards" section | Your copy says you provide "a detailed overview of our findings". It doesn't say whether that's a **written report / PDF**, photographs, or a conversation on the day. That's usually a deciding factor for pre-purchase and insurance work, so it's worth spelling out. Tell me which it is and I'll add a line. |
| 28 | **No price or turnaround given** | whole page | Nothing in the copy says what a survey costs, or whether it's free. For pre-purchase enquiries especially, people look for that. Happy to add it if you have a figure or a "from £X" line. |

---

## ⚫ Contact page (`contact.html`) — no copy was supplied for this one

| # | What it is | Where | What I need from you |
|---|------------|-------|----------------------|
| 29 | **Some page copy is mine** | `contact.html` · banner + cards + routing section | The banner line, the four card notes ("Best for anything urgent", "Send us a photo of the problem", "For quotes, plans and drawings") and the *Have a Look at What We Do* section are my wording. The **A Name You Can Trust** section and the form intro are your own copy. |
| 34 | ⚠️ **The About copy duplicates the homepage** | `contact.html` · *A Name You Can Trust* vs `index.html` · About section | The copy you sent for the contact page is an **expanded version of what already sits on the homepage** — same 15-years opening, same accreditation paragraph, same "a name you can trust" close. Google treats near-identical blocks across two pages as duplicate content, and the two pages then compete with each other. My recommendation: use this longer version on **one** page only. Either (a) replace the homepage About section with this fuller copy and cut it from contact, or (b) leave the homepage alone and shorten the contact version to two paragraphs. Say which and it's a five-minute change. |
| ~~30~~ | ~~No postal address~~ | not on the page | ✅ RESOLVED — confirmed no address is to be published anywhere on the site. |
| 31 | **No opening hours** | not on the page | Deliberately left off rather than guessed, since wrong hours cost you calls. Send them and I'll add an hours block. Worth saying separately whether you take emergency calls out of hours. |
| 32 | **No map** | not on the page | Needs the address first. Note that a Google Maps embed loads third-party scripts and triggers cookie-consent obligations — worth a decision before it goes on. |
| ~~33~~ | ~~No company number~~ | footer | ✅ RESOLVED — confirmed not to be published. (If Tectum is VAT registered, a VAT number is a separate question — say if you want one added.) |

---

## ⚖️ Privacy Policy (`privacy-policy.html`) — read this before publishing

**This policy is not legal advice and has not been reviewed by a solicitor.** It
is written to describe what this website genuinely does, which is a better
starting point than generic boilerplate, but somebody responsible for the
business needs to check it before it goes live.

**No blanks are left** — the page reads as a finished document. Two statements
below are my assumptions rather than things you confirmed. Both are safe
defaults, but glance at them.

| # | What it is | Where | What I need from you |
|---|------------|-------|----------------------|
| ~~35~~ | ~~Data controller identity~~ | "Who we are" | ✅ RESOLVED — the policy now names **Tectum Roofing** as the data controller, with no company number and no registered address. |
| ~~36~~ | ~~Postal address~~ | "Contact us" | ✅ RESOLVED — no address published. Data-protection requests come in by email or phone. |
| 37 | ⚠️ **Retention: six years — my assumption** | "How long we keep it" | The page now states that records of completed jobs are kept for **six years from the end of the work**, then deleted. Nobody told me that figure — I used it because it matches what HMRC requires for business records and the window in which a claim about the work could be brought. It is the standard answer for a UK trade business. If you actually keep things longer (warranties often run longer than six years) tell me and I'll change it. Enquiries that don't lead to work are kept until the enquiry is closed, as you specified. |
| 38 | ⚠️ **Netlify named as host — my assumption** | "Who we share it with" | The policy now names **Netlify** plainly, and says its servers may sit outside the UK. I took that from `netlify.toml` in this repo, not from you. If the site ends up hosted somewhere else, this line must change before go-live. And if the enquiry forms are later wired to a third party (see item 4), that provider needs adding back to the list. |
| ~~39~~ | ~~The cookie section is true today~~ ✅ RESOLVED — GA4 is now live behind consent and the policy describes it accurately. Original note kept below for context. **The cookie section is true today — keep it true** | "Cookies and analytics" | Right now the site sets **no cookies**, uses **no analytics**, and loads **nothing** from third parties. That's why there's no cookie banner. The moment anyone adds Google Analytics, a Facebook pixel, an embedded Google Map or a hosted font, that paragraph becomes false and you will need a consent banner. Tell me before adding any of those and I'll handle both. |
| 40 | **ICO registration** | not currently mentioned | Most businesses that process personal data must register with the ICO and pay the annual data protection fee. If Tectum is registered, send the number and I'll add it. If not, worth checking whether you need to be. |

---

## 📸 Previous Projects page (`previous-projects.html`)

Built from the original WordPress site's media library at
`numediag35.sg-host.com`. Every image was **downloaded and stored locally** in
`assets/images/` — nothing is hot-linked, so the gallery will not break if the
old site is taken down.

**What was actually there.** The old media library holds 121 items, but most of
it is WordPress theme furniture — icons, logos, background graphics, and stock
photos of tunnels, bridges, harbour cranes and men with chainsaws that came with
the template. I went through them and used **only genuine Tectum job photos**.
None of the theme stock is presented as your work.

Only **two** real job photos existed that weren't already in this repo. Both are
now saved locally: a felt flat roof over a bay and porch, and a moss-covered
pitched roof (now the Inspections banner — see item 24).

| # | What it is | Where | What I need from you |
|---|------------|-------|----------------------|
| 41 | **Captions describe, they don't record** | gallery | The old site carried no project details — no dates, locations, client names or job descriptions. So each caption just says what the photo shows ("Slate roof with roof windows", "Re-roof, stripped to the rafters"). If you can tell me what any of these jobs actually were, real captions would make this page far stronger. |
| ~~42~~ | ~~This is all the photography that exists~~ | ✅ RESOLVED — 41 new job photos supplied. The gallery now uses thirteen photos that appear **nowhere else** on the site, so nothing repeats. |
| ~~43~~ | ~~A house number is visible~~ | ✅ RESOLVED — that photo is no longer used anywhere on the site. |
| 44 | **Four project titles are real, descriptions are not** | "Recent Projects" | The four titles (Tiling Project, Felt Roofing, New Roofing, Roof Repairs) come from your old site. The one-line descriptions under them are still my invented copy — same as item 7. |

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
