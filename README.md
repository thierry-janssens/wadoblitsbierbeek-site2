# Karateclub Wado Blits Bierbeek — Website

Static website for [Karateclub Wado Blits Bierbeek](https://www.wadoblitsbierbeek.be),
built for **GitHub Pages** hosting.

---

## 📁 File Structure

```
/
├── index.html          ← Home page
├── wado-ryu.html       ← Wado Ryu info page
├── sponsors.html       ← Sponsors page
├── about.html          ← About & Contact page
├── css/
│   └── style.css       ← All styles (edit here to change look & feel)
├── js/
│   └── main.js         ← Navigation, form, animations
├── assets/
│   ├── images/
│   │   ├── logo.jpg              ← Club/WIKF logo (download from current site)
│   │   ├── favicon.ico           ← Browser tab icon
│   │   ├── club_foto.jpg         ← Club photo (About page)
│   │   └── sponsors/             ← Sponsor logo files
│   │       ├── bakkerij_armand.png
│   │       ├── van_der_velpen.png
│   │       ├── presta17.png
│   │       ├── defritzak.png
│   │       ├── ippon_sport.png
│   │       ├── trofeeland.jpg
│   │       └── karate_vlaanderen.jpg
│   └── docs/
│       ├── WIKF_Theorie.pdf              ← Download from current site
│       └── WIKF_Partneroefeningen.pdf    ← Download from current site
├── _headers            ← Security headers (for Cloudflare Pages)
└── README.md           ← This file
```

---

## 🚀 Deploying to GitHub Pages

### Step 1 — Create a GitHub repository

1. Go to [github.com](https://github.com) and sign in (or create a free account).
2. Click **"New repository"**.
3. Name it `wadoblitsbierbeek` (or any name you prefer).
4. Set it to **Public**.
5. Click **"Create repository"**.

### Step 2 — Upload your files

**Option A: via the GitHub website (easiest)**

1. In your new repository, click **"uploading an existing file"**.
2. Drag and drop ALL files and folders from this package.
3. Click **"Commit changes"**.

**Option B: via GitHub Desktop (recommended for ongoing updates)**

1. Download [GitHub Desktop](https://desktop.github.com/).
2. Clone your new repository to your computer.
3. Copy all files into the cloned folder.
4. In GitHub Desktop, write a commit message (e.g. "Initial website upload").
5. Click **"Commit to main"** then **"Push origin"**.

### Step 3 — Enable GitHub Pages

1. In your repository, go to **Settings → Pages**.
2. Under **Source**, choose **"Deploy from a branch"**.
3. Select branch: **main**, folder: **/ (root)**.
4. Click **Save**.
5. After ~1 minute, your site is live at:
   `https://YOUR-USERNAME.github.io/wadoblitsbierbeek/`

### Step 4 — Custom domain (e.g. wadoblitsbierbeek.be)

1. In **Settings → Pages → Custom domain**, enter `wadoblitsbierbeek.be`.
2. Log in to your domain registrar (where you bought the .be domain).
3. Add these DNS records:

   | Type  | Host | Value                  |
   |-------|------|------------------------|
   | A     | @    | 185.199.108.153         |
   | A     | @    | 185.199.109.153         |
   | A     | @    | 185.199.110.153         |
   | A     | @    | 185.199.111.153         |
   | CNAME | www  | YOUR-USERNAME.github.io |

4. In GitHub Pages settings, tick **"Enforce HTTPS"** (HTTPS is free and automatic).

---

## 📬 Setting up the Contact Form (Formspree)

GitHub Pages cannot process server-side forms. We use **Formspree** (free):

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Click **"+ New Form"**.
3. Enter your email: `contact@wadoblitsbierbeek.be`.
4. Copy your **Form ID** (looks like `xrgvkpbn`).
5. Open `about.html` and find this line:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
6. Replace `YOUR_FORM_ID` with your actual Form ID:
   ```html
   action="https://formspree.io/f/xrgvkpbn"
   ```
7. Save and re-upload `about.html`.

Free tier: 50 submissions/month — more than enough for a club website.

---

## 🖼️ Adding Your Images

Images are currently referenced from two places:
- `assets/images/` (local — **preferred**)
- Original CDN URLs (fallback if local file missing)

**To download your existing images:**

1. Open your current website: https://www.wadoblitsbierbeek.be
2. Right-click each image → **"Save image as"**
3. Save with the correct filename into `assets/images/`

Key images to save:

| Save as                          | From                                |
|----------------------------------|-------------------------------------|
| `assets/images/logo.jpg`         | The WIKF logo (top left on site)    |
| `assets/images/favicon.ico`      | Create a 32×32px version of logo    |
| `assets/images/club_foto.jpg`    | Club photo or logo rectangle        |
| `assets/images/sponsors/*.png`   | Each sponsor logo                   |
| `assets/docs/WIKF_Theorie.pdf`   | PDF from Wado Ryu page              |
| `assets/docs/WIKF_Partneroef...` | PDF from Wado Ryu page              |

---

## ✏️ How to Update Content

### Update the training schedule
Open `index.html`, find the section with `id="schema"` and edit the
`<div class="schedule-slot">` blocks.

### Add a new event
Open `index.html`, find the section with `id="evenementen"`. Copy an
existing `<div class="event-item">` block and update the date and name.

### Add a sponsor
Open `sponsors.html`, find the `sponsors-grid` section.
Copy an existing `<a class="sponsor-card">` block and update the image
path, href and aria-label.

### Update a board member
Open `about.html`, find the `team-grid` section. Each person is in an
`<article class="team-card">` block. Update the initials, role, name and rank.

### Change colours
Open `css/style.css`. At the top you'll find `:root { ... }` with all
colour variables. The main red is `--red: #C8102E;`. Change any value here
and it updates across the whole site.

---

## 🔒 Security Guide

### What GitHub Pages gives you for free
- ✅ **HTTPS / TLS** — always on for `*.github.io` and custom domains
- ✅ **DDoS protection** — GitHub's infrastructure
- ✅ **No server-side code** — static files only; no SQL injection, no RCE

### What we've added
- ✅ **Content Security Policy (CSP)** — embedded in every HTML `<head>` via
  `<meta http-equiv="Content-Security-Policy" ...>`. This blocks injected
  scripts from running even if someone finds an XSS vector.
- ✅ **X-Content-Type-Options: nosniff** — prevents MIME-type sniffing.
- ✅ **Referrer-Policy** — limits what URL is sent to third parties.
- ✅ **Honeypot field** in contact form — catches most spam bots.
- ✅ **`rel="noopener noreferrer"`** on all external links — prevents the
  opened tab from accessing your page via `window.opener`.
- ✅ **`loading="lazy"`** on images — improves performance.

### Recommended extra steps

#### 1. Add Cloudflare (free) in front of GitHub Pages
Cloudflare acts as a CDN + security layer and lets you set proper HTTP
security headers (which GitHub Pages cannot do natively):

1. Sign up at [cloudflare.com](https://cloudflare.com) (free plan).
2. Add your domain (`wadoblitsbierbeek.be`) and follow the DNS migration steps.
3. In Cloudflare → **Rules → Transform Rules → Modify Response Headers**,
   add the headers from the `_headers` file in this repo.
4. Enable **"Always Use HTTPS"** and **"HSTS"** in SSL/TLS settings.

Security headers to add via Cloudflare:
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

#### 2. Check your security score (free)
After going live, visit [securityheaders.com](https://securityheaders.com)
and enter your URL. Aim for a **B or A** rating.

#### 3. Monitor for issues
- [Google Search Console](https://search.google.com/search-console) — free,
  alerts you to security issues and indexing problems.
- GitHub sends automatic **Dependabot alerts** if any of your GitHub Actions
  dependencies have vulnerabilities.

#### 4. Keep the CSP up to date
If you ever add a new third-party script (e.g. Google Analytics, a map embed),
you must update the `Content-Security-Policy` in ALL 4 HTML files to allow it.

#### 5. Formspree spam protection
In your Formspree dashboard, enable:
- **reCAPTCHA** (free, Google)
- **Custom honeypot** (already in the form as `_gotcha`)

---

## 🌍 Power Pages Integration

Your Power Pages draft (`kcwadoblitsbierbeek.powerappsportals.com`) requires
a Microsoft login and could not be automatically imported.

**To include content from Power Pages:**
1. Log in to your Power Pages environment.
2. Copy any text/data you want to include.
3. Paste it into the relevant HTML file.

Power Pages is useful for **member portals** (login required), but for a
public club website GitHub Pages is simpler and free.

---

## 📄 License

© Karateclub Wado Blits Bierbeek vzw. All rights reserved.
