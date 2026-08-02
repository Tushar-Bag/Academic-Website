# User Manual — Your Academic Website

*A complete, beginner-friendly guide. No web-development experience assumed.*

---

## Table of Contents

1. [How the website works (2-minute overview)](#1-how-the-website-works)
2. [One-time setup: tools you need](#2-one-time-setup)
3. [Putting the website on GitHub (free hosting, private for now)](#3-putting-the-website-on-github)
4. [Viewing the website on your own computer](#4-viewing-the-website-locally)
5. [How to edit anything (the general method)](#5-how-to-edit-anything)
6. [Common tasks, step by step](#6-common-tasks)
   - 6.1 [Add a new publication](#61-add-a-new-publication)
   - 6.2 [Post a news item](#62-post-a-news-item)
   - 6.3 [Add a new research project / topic](#63-add-a-research-topic)
   - 6.4 [Upload lecture notes](#64-upload-lecture-notes)
   - 6.5 [Add a new course](#65-add-a-new-course)
   - 6.6 [Add students (and un-hide the Students page)](#66-add-students)
   - 6.7 [Advertise PhD / postdoc positions](#67-advertise-positions)
   - 6.8 [Update your CV](#68-update-your-cv)
   - 6.9 [Replace your photo or add images](#69-replace-images)
   - 6.10 [Add ORCID, GitHub, LinkedIn and other profiles](#610-add-profiles)
   - 6.11 [Turn on the Biography section](#611-biography)
7. [Customising colors, fonts, and layout](#7-customising-the-design)
8. [Writing mathematics (LaTeX) on the site](#8-writing-latex)
9. [Keeping the site private, then launching it](#9-private-mode-and-launch)
10. [Connecting your own domain name (optional, later)](#10-custom-domain)
11. [Backups, maintenance, and disaster recovery](#11-backups-and-recovery)
12. [Troubleshooting: common problems and fixes](#12-troubleshooting)

---

## 1. How the website works

Your website is just a **folder of text files**. There is no database, no
server program, no framework, and nothing to pay for — ever.

- Files ending in `.html` are the **pages** (home, research, publications…).
- `css/style.css` controls **how everything looks** (colors, fonts, spacing).
- `js/main.js` adds two small comforts (the phone menu and a gentle fade-in).
- `images/` and `files/` hold your **photo, CV, and lecture notes**.

To change the website, you edit these files in a text editor — like editing
a LaTeX document — and upload the changed files to **GitHub**, a free service
that stores your files and (through its "GitHub Pages" feature) shows them to
the world as a website.

**Why this setup meets your requirements:**

| Requirement | How it is met |
|---|---|
| Free forever | GitHub Pages hosting is free, with no ads and no expiry. |
| Lifetime access | Plain HTML files will work on any host, forever. If GitHub ever disappeared, you upload the same folder elsewhere (Netlify, Cloudflare Pages, a university server) in minutes. |
| Full ownership | The files live on your computer and in your GitHub account. |
| Private until launch | See section 9 — two independent mechanisms. |
| Easy updates | Every editable spot is marked with an `EDIT:` comment and has a copy-paste template. |
| LaTeX friendly | MathJax renders `\( \mathbb{F}_q \)` etc. — see section 8. |

---

## 2. One-time setup

You need three free things:

**(a) A text editor: Visual Studio Code** (recommended)
1. Go to <https://code.visualstudio.com> and click **Download**.
2. Install it with the default options.
3. Open VS Code → **File → Open Folder…** → choose your `academic-website`
   folder. You will see all the files in a sidebar. Click any file to edit it.

*(Any plain-text editor works — even Notepad — but VS Code colours the code
and makes mistakes much easier to spot.)*

**(b) A GitHub account**
1. Go to <https://github.com> → **Sign up**.
2. Choose a username you are happy to keep — your free website address will
   be `https://USERNAME.github.io/...`. Something like `tusharbag` or
   `tbag-math` is ideal.
3. The free plan is all you need.

**(c) GitHub Desktop** (uploads your changes with two clicks — no commands)
1. Go to <https://desktop.github.com> and install it.
2. Open it and sign in with your GitHub account.

---

## 3. Putting the website on GitHub

You do this **once**. Afterwards, updating the site takes under a minute.

1. Open **GitHub Desktop**.
2. Menu: **File → New repository…**
   - **Name:** `academic-website` (or any name; you can rename later).
   - **Local path:** choose a folder such as `Documents`.
   - Leave everything else as default → **Create repository**.
3. GitHub Desktop created an empty folder, e.g.
   `Documents/academic-website`. **Copy all the website files into it**
   (`index.html`, `css/`, `js/`, `images/`, `files/`, `robots.txt`,
   `.nojekyll`, everything).
4. Back in GitHub Desktop you will see the list of new files. In the bottom
   left, type a short description like `Initial version of my website`,
   click **Commit to main**.
5. Click **Publish repository** (top bar).
   - **✅ IMPORTANT: tick "Keep this code private"** — this keeps everything
     invisible to the world while you develop.
   - Click **Publish**.

Your files are now safely stored on GitHub, privately. Nothing is public yet.

**From now on, every update is the same 3 steps:**
1. Edit files on your computer and save.
2. Open GitHub Desktop → write a one-line summary → **Commit to main**.
3. Click **Push origin**.

That's it. (Once the site is live, changes appear online within ~1 minute.)

---

## 4. Viewing the website locally

You never need the internet to preview your site:

- **Simplest:** in your file manager, double-click `index.html`. It opens in
  your browser. Click around; all pages work.
- **Nicer (auto-refresh):** in VS Code, install the free extension
  **"Live Server"** (menu: View → Extensions → search "Live Server" →
  Install). Then right-click `index.html` → **"Open with Live Server"**.
  The browser now refreshes automatically every time you save a file.

> Note: MathJax (the LaTeX renderer) loads from the internet, so formulas
> only render when you are online. Everything else works offline.

---

## 5. How to edit anything

The universal method:

1. Open the relevant `.html` file in VS Code.
2. Press `Ctrl+F` (`Cmd+F` on Mac) and search for the text you want to
   change, or for the word `EDIT:` — every editable spot is marked with an
   `EDIT:` comment, and every missing piece of information is marked
   `EDIT-PLACEHOLDER`.
3. Change the text between the tags. For example, in
   `<p class="lead">I am an Assistant Professor…</p>` you edit only the
   words, never the `<p ...>` and `</p>` parts.
4. Save (`Ctrl+S`), check in the browser, then commit + push (section 3).

**Two syntax rules to know:**

- Anything between `<!--` and `-->` is a **comment**: invisible on the
  website. The site uses comments both for instructions and to **hide
  ready-made sections** (Biography, Conference Papers, Students link) that
  you can switch on later by deleting the `<!--` and `-->` around them.
- A link looks like `<a href="ADDRESS">visible text</a>`.

**Find-all placeholders:** in VS Code press `Ctrl+Shift+F` (search across
all files) and search for `EDIT-PLACEHOLDER` to get a to-do list of every
piece of information still missing (office number, arXiv links, etc.).

---

## 6. Common tasks

### 6.1 Add a new publication

1. Open `publications.html`.
2. Decide the category:
   - **Preprint / submitted paper** → the *Preprints & Under Review* section.
   - **Accepted / published journal paper** → the *Journal Papers* section.
   - **Conference paper** → un-hide the Conference section (bottom of the
     file — remove the `<!--` and `-->` around it), then add entries there.
3. At the top of each section there is a **TEMPLATE block inside a comment**.
   Copy it, paste it **above the current first paper**, remove the comment
   markers, and fill in:
   - the key: next number up (`[J26]`, `[P3]`, `[C1]`…),
   - the title (LaTeX allowed — see section 8),
   - authors (keep `<span class="me">T. Bag</span>` around your own name so
     it appears in bold),
   - journal, volume, pages, year,
   - optional DOI/arXiv links.
4. When a preprint gets **accepted**: delete it from Preprints, add it to
   Journal Papers with the next `[J…]` number, and remove the
   `<span class="badge">…</span>` status label.
5. Optional: update the *Selected Publications* on `index.html` (keep just
   your best 3) and the paper counts in the intro sentences of both pages.

### 6.2 Post a news item

1. Open `index.html`, search for `News`.
2. Copy one existing `<li> … </li>` block (or the commented template just
   below the list) and paste it at the **top** of the list — newest first.
3. Edit the date (`YYYY-MM`) and the text. Keep the list to 5–8 items;
   delete the oldest.

### 6.3 Add a research topic

1. Open `research.html`.
2. Find the commented **"Template for a new topic"** block.
3. Copy it, paste where you want it, remove the `<!--` `-->` markers, and
   write your heading and paragraph. You can also add keyword pills at the
   top by copying a `<span class="pill">…</span>` line.

### 6.4 Upload lecture notes

1. Put the PDF into the `files/` folder. Use simple names without spaces,
   e.g. `fic117-notes-week1.pdf`.
2. Open `teaching.html`, find the **Course Materials** section, and use the
   commented template there: one heading per course, one `<li>` per file:
   ```html
   <li><a href="files/fic117-notes-week1.pdf">Week 1 — Systems of linear equations (PDF)</a></li>
   ```
3. Delete the placeholder paragraph once you have real links.

### 6.5 Add a new course

Open `teaching.html`, copy one `<tr> … </tr>` row of the table, paste it at
the **top** of `<tbody>`, and edit the four cells (code, title, term,
institution/role).

### 6.6 Add students

The Students & Positions page (`students.html`) already exists but is
**hidden** — it is not in the menu, so visitors can't reach it.

**To fill it in:** open `students.html`; each section (Open Positions,
Current Students, Former Students) has a commented template — copy,
un-comment, edit.

**To make the page visible:** in **every** HTML file (`index.html`,
`research.html`, `publications.html`, `teaching.html`, `students.html`)
find this commented line in the navigation:

```html
<!-- ...
<li><a href="students.html">Students &amp; Positions</a></li>
... -->
```

and remove the comment markers so it becomes just:

```html
<li><a href="students.html">Students &amp; Positions</a></li>
```

(In `students.html` itself, use the version with `aria-current="page"`.)

### 6.7 Advertise positions

Open `students.html` → **Open Positions** section. Edit the existing
"Prospective PhD students" box, or copy the commented template to add a
postdoc/RA advert. State: topic, funding, duration, requirements, deadline,
and exactly what applicants should email you. Announce it in the News list
on the home page too (section 6.2). Make sure the page is visible (6.6).

### 6.8 Update your CV

1. Export your LaTeX CV to PDF as usual.
2. Rename the PDF to exactly `cv.pdf` and copy it into the `files/` folder,
   replacing the old one.
3. Commit + push. The "Download CV (PDF)" button on the home page always
   points to `files/cv.pdf`, so nothing else needs to change.

### 6.9 Replace images

**Your photo:** save your portrait as `profile.jpg` inside `images/`,
replacing the placeholder. A photo around 520×650 pixels (portrait
orientation, under ~300 KB) is ideal. To shrink a large photo for free, use
<https://squoosh.app> in your browser.

**Other images:** put them in `images/` and embed with:
```html
<img src="images/my-picture.jpg" alt="Short description of the picture">
```
Always write the `alt` text — screen readers read it aloud (accessibility).

### 6.10 Add profiles

Open `index.html`, find the `profile-links` list under the photo. Ready-made
commented lines for **ORCID, GitHub and LinkedIn** are already there — just
un-comment them and paste in your own profile addresses. For anything else
(e.g. arXiv, MathSciNet, zbMATH, Scopus), copy one line and adapt:

```html
<li><span class="tag">arxiv</span>
    <a href="https://arxiv.org/a/YOUR-ID">arXiv</a></li>
```

### 6.11 Biography

`index.html` contains a full Biography section that is switched off. Search
for `BIOGRAPHY-SWITCH`: delete the two marker lines (the one starting the
comment and the one ending it) and the section appears. Edit its text; one
`EDIT-PLACEHOLDER` paragraph invites personal details.

---

## 7. Customising the design

Open `css/style.css`. **Section 1, "DESIGN TOKENS"** (the very top) controls
the whole site:

- **Colors:** e.g. change `--navy: #003366;` to any color and every heading,
  link, rule and button updates at once. Pick colors at
  <https://htmlcolorcodes.com>.
- **Fonts:** the site uses three Google Fonts (STIX Two Text, Inter,
  IBM Plex Mono). To use different ones: browse <https://fonts.google.com>,
  click **Get font → Get embed code**, replace the
  `<link href="https://fonts.googleapis.com/...">` line in **each** HTML
  file, then update `--font-display` / `--font-body` / `--font-mono` in the
  tokens section.
- **Width & spacing:** `--content-width` (page width) and `--prose-width`
  (paragraph width) are also tokens.
- **Layout changes** (e.g. photo on the right instead of left) live in the
  numbered sections below the tokens; every section is commented. Change one
  thing at a time and preview.

---

## 8. Writing LaTeX

Anywhere on the site, write math between `\(` and `\)` exactly as in your
papers:

```html
<span class="pub-title">Constacyclic codes over
  \(\mathbb{F}_{q^2}[u]/\langle u^2-w^2\rangle\)</span>
```

MathJax renders it with proper mathematical typography. Displayed equations
work too: wrap them in `$$ … $$` on their own line. One caveat: since the
files are HTML, the characters `<` and `>` must be written `&lt;` and `&gt;`
if you ever need them *outside* math mode; inside `\( … \)` prefer
`\langle … \rangle`, as your CV already does.

---

## 9. Private mode and launch

Your privacy has **two independent layers**, both currently ON:

**Layer 1 — the site is not published at all (strongest).**
Your repository is *private* and GitHub Pages is not yet enabled: there is
no website on the internet, only files in your private account. Preview
locally (section 4). Stay in this mode as long as you like.

**Layer 2 — hidden from search engines.**
Every page contains `<meta name="robots" content="noindex, nofollow">` and
`robots.txt` blocks all crawlers. So even after you enable Pages, the site
won't appear in Google — only people you give the address to can find it.
This is perfect for a "soft launch" while you polish.

### Going live (soft launch)

GitHub Pages on the free plan requires the repository to be public. Making
it public only exposes your website files — which you intend to publish
anyway.

1. On <https://github.com>, open your repository →
   **Settings → General → Danger Zone → Change repository visibility →
   Make public**.
2. Still in **Settings**, click **Pages** (left sidebar):
   - **Source:** "Deploy from a branch"
   - **Branch:** `main`, folder `/ (root)` → **Save**.
3. After ~1 minute the page shows your address:
   `https://USERNAME.github.io/academic-website/`
4. Open it, click through every page on your computer **and your phone**.
   Search engines still ignore it (Layer 2), so take your time.

### Full public launch

When you are ready to be found on Google:

1. Delete the line
   `<meta name="robots" content="noindex, nofollow">`
   from **every** `.html` file (in VS Code: `Ctrl+Shift+F`, search for
   `noindex`, delete each line found).
2. Edit `robots.txt`: replace `Disallow: /` with `Allow: /`
   (instructions are inside the file).
3. Commit + push.
4. Optional but recommended: submit your address at
   <https://search.google.com/search-console> ("URL prefix" → verify →
   Request indexing) so Google finds you within days rather than weeks.
5. Add the address to your email signature, Google Scholar profile,
   ResearchGate, and your department page.

---

## 10. Custom domain

Optional — the free `username.github.io` address is perfectly respectable.
If you later want e.g. `tusharbag.com` (~USD 10–15/year, the only thing in
this whole setup that ever costs money):

1. Buy the domain from a registrar such as Namecheap, Porkbun, or Cloudflare.
2. GitHub repo → **Settings → Pages → Custom domain** → type your domain →
   **Save**, and tick **Enforce HTTPS** once available.
3. At your registrar, add the DNS records GitHub asks for (currently: a
   `CNAME` record for `www` pointing to `USERNAME.github.io`, and four `A`
   records for the bare domain pointing to GitHub Pages' IP addresses —
   GitHub's Pages documentation lists the current values; follow the
   on-screen instructions at Settings → Pages).
4. Wait up to a few hours for DNS to spread. Your old
   `username.github.io` address keeps working and redirects.

If you ever stop paying for the domain, the site simply reverts to the free
address — nothing is lost.

---

## 11. Backups and recovery

Good news: this setup is **triple-backed-up by design**:

1. **Your computer** has the full site (the GitHub Desktop folder).
2. **GitHub** has the full site *and its entire history* — every version you
   ever committed, forever.
3. Optionally, once a year, copy the folder to a USB stick or cloud drive.

### "I broke something and don't know how"

Every commit is a save-point you can return to:

- **Undo the most recent commit:** GitHub Desktop → **History** tab →
  right-click the top commit → **Revert changes in commit** → push.
- **Go back to any older version of one file:** on github.com open the file
  → click **History** → open the last good version → copy its contents over
  your local file → commit + push.
- **My local folder is a mess; give me the last good version:** delete (or
  rename) your local folder, then in GitHub Desktop: **File → Clone
  repository** → choose your repo. You get a fresh copy of the last pushed
  state.
- **Nuclear option:** even if you delete everything locally, the site keeps
  running from GitHub's copy, and you can re-clone at any time.

### Routine maintenance

There is essentially none — no software to update, nothing that expires.
A sensible twice-a-year 10-minute check:

- Open the live site; click every link (fix any that died).
- Add recent papers and news; refresh `files/cv.pdf`.
- Confirm your email addresses shown are current.

---

## 12. Troubleshooting

| Problem | Fix |
|---|---|
| **Formulas show as raw `\(\mathbb{F}_q\)` text** | You are offline (MathJax loads from the internet), or a `\(` is missing its closing `\)`. Check the pair. |
| **The page looks unstyled (plain black text on white)** | The link to `css/style.css` broke — usually the file was moved. Keep the folder structure exactly as is. |
| **My change doesn't appear online** | (1) Did you save the file? (2) Commit **and** Push in GitHub Desktop? (3) Wait 1–2 minutes, then hard-refresh the browser: `Ctrl+Shift+R` (`Cmd+Shift+R` on Mac). |
| **Half the page disappeared after my edit** | You probably deleted a closing tag (like `</section>`) or left a comment `<!--` unclosed. In GitHub Desktop, right-click the file → **Discard changes** to undo everything since your last commit, then redo the edit carefully. |
| **A publication renders strangely** | Compare it character-by-character with a working entry — most often a missing `</span>` or `</li>`. |
| **The site shows a 404 online** | GitHub Pages: check Settings → Pages says "Your site is live". Also note the address includes the repo name: `username.github.io/academic-website/`. |
| **Photo looks stretched** | Use a portrait-orientation photo; the frame is 4:5 (e.g. 520×650 px). |
| **I want to test how it looks on a phone** | In your browser press `F12`, then click the small phone/tablet icon (device toolbar). |

---

*Manual last updated: July 2026. Keep this file in the repository so it is
backed up together with the site.*
