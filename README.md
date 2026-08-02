# Academic Website of Tushar Bag

A fast, free, framework-free academic website built with plain HTML, CSS and
a little JavaScript — designed to be hosted on **GitHub Pages** (free forever)
and maintained by editing simple text files. LaTeX in publication titles is
rendered by MathJax.

**➡ New here? Read `MANUAL.md` — it explains everything step by step,
assuming no web-development experience.**

## Project structure — what every file does

```
academic-website/
├── index.html          Home page: about, contact, news, selected papers.
│                       Also contains a hidden "Biography" section you can
│                       switch on (search for BIOGRAPHY-SWITCH inside it).
├── research.html       Research interests, topic blocks, collaborators.
├── publications.html   Full publication list: preprints, journal papers,
│                       and a hidden Conference Papers section for later.
├── teaching.html       Courses-taught table + course materials section.
├── students.html       Students & Open Positions page. EXISTS but is
│                       HIDDEN (not linked in the menu) until you enable it.
├── 404.html            Friendly "page not found" page (shown automatically).
│
├── css/
│   └── style.css       The ONLY stylesheet. All colors/fonts are defined
│                       at the top in the "DESIGN TOKENS" section — edit
│                       that one section to re-theme the entire site.
├── js/
│   └── main.js         The ONLY script: mobile menu + gentle scroll fade-in.
│                       The site works fine even if JavaScript is disabled.
├── images/
│   └── profile.jpg     Your portrait photo (currently a placeholder).
├── files/
│   ├── README.txt      Notes about this folder.
│   └── (cv.pdf)        Put your CV PDF here, named exactly cv.pdf.
│
├── robots.txt          Tells search engines to stay away (private mode).
│                       Edit when you launch — instructions inside the file.
├── .nojekyll           Tells GitHub Pages to serve the files as-is
│                       (skips its default Jekyll processing). Never edit.
├── README.md           This file.
└── MANUAL.md           The complete beginner's user manual.
```

## Design in one paragraph

The palette is built around the navy (`#003366`) used in the header of the
owner's LaTeX CV, so CV and website share one identity. Headings are set in
**STIX Two Text**, the typeface designed for mathematical publishing; body
text is **Inter**; citation keys like `[J25]` and dates use **IBM Plex Mono**.
Everything is responsive, keyboard-accessible, prints cleanly, and respects
the visitor's reduced-motion preference.

## Key properties

- **Free forever:** static files on GitHub Pages; no server, no database,
  no build step, no subscription.
- **You own everything:** the repository is yours; the site is plain files
  you can move to any host in minutes.
- **Private until launch:** `noindex` meta tags + `robots.txt` keep it out
  of search engines; or simply don't enable Pages until ready (MANUAL §9).
- **LaTeX friendly:** write `\( \mathbb{F}_q \)` in publication titles and
  MathJax renders it like a journal.
- **Easy to grow:** hidden, ready-made sections for Biography, Conference
  Papers, Students, and Open Positions.
