# Content Update Guide

**Purpose of this file:** this is a reference for Claude (or you) to make fast,
precise edits to this website without having to re-read every file from
scratch. In a future chat, upload this file (or just paste the relevant
section) and say what you want to add or change — e.g. *"add this paper"* or
*"post this announcement"* — and pasting this guide will let Claude find the
exact spot and match the exact format immediately.

This guide does **not** replace `MANUAL.md` (the full beginner's manual with
screenshots-style explanations). This file is a terse lookup table: task →
file → exact location → template to paste.

---

## 0. Project map

```
academic-website/
├── index.html          Home: profile, About, News, Selected Publications, hidden Biography
├── research.html        Research interests & topics
├── publications.html    Preprints, Journal Papers, hidden Conference Papers
├── teaching.html        Courses table, Course Materials (placeholder)
├── students.html        Open Positions, Current Students, Former Students (page is hidden from nav)
├── 404.html
├── robots.txt            Search-engine indexing control (privacy)
├── css/style.css         All styling — design tokens at the very top
├── js/main.js            Mobile nav + scroll animation (rarely needs editing)
├── js/mathjax/           Self-hosted LaTeX renderer (do not touch)
├── files/cv.pdf           Downloadable CV — replace file, keep same filename
└── images/profile.jpg    Profile photo — replace file, keep same filename
```

Every editable spot in the code is already marked with an `EDIT:` or
`EDIT-PLACEHOLDER:` HTML comment. Search the file for `EDIT` if unsure.

**Universal rules:**
- New list entries (news, papers, courses) are almost always added to the
  **top** of their list — newest first.
- Math goes in `\( ... \)`, e.g. `\(\mathbb{F}_q\)`, `\(\mathbb{F}_{q^m}\)`.
  MathJax renders it automatically; no extra setup needed.
- Citation keys increment from the current highest number:
  journal papers → `[J26]`, `[J27]`… (next after J25); preprints → `[P3]`,
  `[P4]`… (next after P2); conference papers → `[C1]` (none yet, section hidden).
- Every page has a `<!-- PRIVACY SWITCH -->` / `<meta name="robots" ...>` line
  near the top — leave it alone unless you're launching (see §7).

---

## 1. Add a journal paper (published/accepted)

**File:** `publications.html` → section `<section class="reveal" id="journal">`
**Also add to Home page** if it should appear in "Selected Publications"
(index.html keeps only the 3 most recent — see §1b).

Paste this **as the first `<li class="pub-item">`** inside `<ol class="pub-list">`
under "Journal Papers" (right after the `<!-- TEMPLATE ... -->` comment):

```html
<li class="pub-item">
  <span class="pub-key">[J26]</span>
  <div class="pub-body">
    <span class="pub-title">Title here — LaTeX like \(\mathbb{F}_q\) works</span><br>
    <span class="me">T. Bag</span> and Co-Authors.
    <span class="pub-venue">Journal Name</span>
    <strong>Vol</strong>(Issue), pages, YEAR.
    <div class="pub-links">
      <a href="https://doi.org/10.XXXX/XXXXX">DOI</a>
      <a href="https://arxiv.org/abs/XXXX.XXXXX">arXiv</a>
    </div>
  </div>
</li>
```
- Wrap `T. Bag` in `<span class="me">...</span>` wherever the name appears —
  that's what bolds it in the author list.
- Omit the `<div class="pub-links">` block entirely if there's no DOI/arXiv yet.
- Increment `[J26]` to whatever the next number is.

### 1b. Update "Selected Publications" on the Home page
**File:** `index.html` → section `<!-- ==================== SELECTED PUBLICATIONS ====================== -->`
Same `<li class="pub-item">` format as above. Keep it to **3 items** — add the
new one at the top, and delete the oldest of the 3.

---

## 2. Add a preprint / paper under review

**File:** `publications.html` → section `id="preprints"`, above the
`<!-- TEMPLATE ... -->` comment shown there. Paste at the **top**:

```html
<li class="pub-item">
  <span class="pub-key">[P3]</span>
  <div class="pub-body">
    <span class="pub-title">Title with LaTeX like \(\mathbb{F}_q\)</span>
    <span class="badge">submitted</span><br>
    <span class="me">T. Bag</span> and Co-Author.
    <div class="pub-links"><a href="https://arxiv.org/abs/XXXX.XXXXX">arXiv</a></div>
  </div>
</li>
```
- `<span class="badge">` text can be `submitted`, `revision submitted`,
  `major revision`, `minor revision`, etc. — free text, just keep it short.
- When a preprint gets accepted: **delete it from here** and add it to
  Journal Papers (§1) with a new `[J..]` key instead of `[P..]`.

---

## 3. Add a conference paper (first one — section is currently hidden)

**File:** `publications.html`, near the bottom, look for:
`<!-- HIDDEN FOR NOW: CONFERENCE PAPERS ... -->`

The whole `<section id="conference">...</section>` block is wrapped in an
HTML comment. Delete the `<!--` line just above `<section id="conference">`
and the `-->` line just below `</section>` to make it live, then edit the
`[C1]` placeholder entry inside it (same `pub-item` format as above) and add
a link to it in the on-page nav if one exists.

---

## 4. Post a News item (general announcements)

**File:** `index.html` → `<!-- ============================ NEWS =============================== -->`
Paste at the **top** of `<ul class="news-list">`:

```html
<li>
  <span class="news-date">YYYY-MM</span>
  <span>Your news text here.</span>
</li>
```
Keep 5–8 items total; delete the oldest when the list gets long. This is the
right place for: new papers accepted, awards, talks, promotions, grants,
conference attendance, etc.

---

## 5. Post an "advertisement" — open position / call for students

**File:** `students.html` → `<!-- ===================== OPEN POSITIONS =========================== -->`

- **This page is currently hidden from the site menu.** To show it, see §6.
- There's already one live box: "Prospective PhD students". Edit its `<p>`
  text directly when you have a *specific, funded* opening (topic, funding,
  duration, requirements, deadline).
- To add an **additional** position (e.g. postdoc), copy this block, paste
  it after the existing `.notice` box, and edit:

```html
<div class="notice">
  <h3>Postdoctoral position in quantum codes</h3>
  <p>Duration, funding source, start date, topic, requirements.</p>
  <p class="small">Application deadline: DATE. Email your CV and a
     research statement to tushar.b@srmap.edu.in.</p>
</div>
```

If instead you mean a **generic banner announcement** (not position-specific,
e.g. "Applications for Fall 2027 now open" shown site-wide), tell Claude —
it isn't in a fixed template yet and needs a short design decision (banner
vs. News item vs. its own notice box).

---

## 6. Show the Students & Positions page in the menu

Right now `students.html` exists but has no link in the navigation on any
page (kept hidden until you're ready to recruit). In **every** `.html` file,
find this line in the `<nav>`:

```html
<!-- <li><a href="students.html">Students &amp; Positions</a></li> -->
```
Remove the `<!--` and `-->` around it (5 files: index.html, research.html,
publications.html, teaching.html, students.html). Also remove the matching
`<meta name="robots" content="noindex, nofollow">` line from `students.html`
itself once it's ready to be public (see §7 for how that works generally).

---

## 7. Add / update a course

**File:** `teaching.html` → `<!-- ======================= COURSES TABLE ========================== -->`
Paste as the **first `<tr>`** inside `<tbody>`:

```html
<tr>
  <td class="code">COURSE CODE</td>
  <td>Course Title</td>
  <td>Term (e.g. Odd Sem. 2026)</td>
  <td>Institution — Role</td>
</tr>
```

**Course materials / lecture notes:** section `id` near
`<!-- ==================== COURSE MATERIALS ==========================` is
currently a placeholder paragraph; ask Claude to wire it up once you have
actual PDF files to link.

---

## 8. Add a current or former student

**File:** `students.html`

Current student — paste inside the "Current Students" section:
```html
<div class="person">
  <span><strong>Student Name</strong> — PhD, topic: quasi-cyclic codes</span>
  <span class="years">2026–</span>
</div>
```

Former student — paste inside the "Former Students" section:
```html
<div class="person">
  <span><strong>Student Name</strong> — M.Sc. thesis: title.
        Now at: current position.</span>
  <span class="years">2026–2028</span>
</div>
```
Delete the `<p class="muted"><em>[Placeholder ...]</em></p>` line once the
first real entry is added.

---

## 9. Turn on the Biography section

**File:** `index.html`. Search for `BIOGRAPHY-SWITCH` (appears twice — an
opening and closing marker around the whole section). Delete both marker
lines (and the `<!--`/`-->` they're attached to) to make the section appear;
then replace the placeholder paragraph inside it with real text.

---

## 10. Replace the CV or profile photo

- **CV:** overwrite `files/cv.pdf` with the new PDF — keep the exact filename
  `cv.pdf` so the Download button on index.html keeps working.
- **Photo:** overwrite `images/profile.jpg` — keep the exact filename
  `profile.jpg`. Any reasonably-sized photo works; CSS handles the cropping.

---

## 11. Colors, fonts, spacing

**File:** `css/style.css`, top of file — a block of `--variable: value;`
design tokens (search for `--navy`). Change a token once there and it
updates the whole site. Do not hand-edit colors elsewhere in the file.

---

## 12. Launching the site publicly (turning off privacy mode)

Every `.html` file has this line near the top of `<head>`:
```html
<meta name="robots" content="noindex, nofollow">
```
Delete this line from **every page** you want indexed by Google when you're
ready to launch. Also update `robots.txt` at the project root (it currently
disallows all crawling) and switch the GitHub repository from Private to
Public. Full step-by-step is in `MANUAL.md`, section 9.

---

## Known pending placeholders (as of last handoff)
These still contain placeholder text and were never given real values:
office/room number (index.html), real profile photo, ORCID/GitHub/LinkedIn
links, co-authors + arXiv links for preprints [P1]/[P2], lecture-note PDFs
(teaching.html), Biography personal details (currently hidden), and all of
students.html except the one generic PhD-recruiting notice.

## What NOT to do
- Don't touch anything inside `js/mathjax/` — it's a self-hosted library, not
  hand-written content.
- Don't rename `cv.pdf` or `profile.jpg` — other files link to those exact names.
- Don't remove the `<meta name="robots">` privacy line until you actually
  intend to go public (§12) — removing it early on a still-private GitHub
  repo does nothing, but on a public repo it lets Google index a half-built site.
