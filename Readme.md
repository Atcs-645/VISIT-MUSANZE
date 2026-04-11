# Visit Musanze

A tourism website for Musanze, Rwanda — built as a single-page application with vanilla HTML, CSS, and JavaScript.

## Project Structure

```
visit-musanze/
├── index.html      # Main HTML shell (navbar, hero, footer)
├── style.css       # All styles (dark editorial theme)
├── script.js       # SPA routing + page rendering
└── vercel.json     # Vercel rewrite config
```

## Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
cd visit-musanze
vercel
```

### Option 2: Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo
4. Leave all settings as default — Vercel will detect the static site
5. Click **Deploy**

No build step required. It's pure HTML/CSS/JS.

## Pages
- **Home** — intro, stats, featured destinations
- **Destinations** — 6 destination cards
- **Plan Trip** — tips, best-time, transport info
- **Sports & Activities** — 6 activity cards
- **Food & Drink** — restaurants, street food, cafés, bars
- **Advertise** — partnership info
- **Login** — sign-in form

## Customization
- Swap placeholder card backgrounds with real images in `script.js` by adding an `img:` property to each card object
- Update colors in `style.css` via CSS variables in `:root`
- The YouTube embed in the hero can be swapped by editing the `<iframe src>` in `index.html`
