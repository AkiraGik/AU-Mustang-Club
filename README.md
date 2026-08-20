# AU Mustangs FC Website

Club website built with React + Vite. Five pages, all reachable from the nav bar:

- **Home** — quick overview, next fixture, latest result
- **Squads & Coaches** (`/squads`) — season-by-season player photos and coaching staff
- **All-Time Players** (`/players`) — every player who has ever played for the club, searchable
- **Gallery** (`/gallery`) — photos, filterable by category
- **Honours & Fixtures** (`/honours`) — trophies, recent results, upcoming matches, and the season roadmap
- **Contact** (`/contact`) — club details and a message form

## Running it

```
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

To build a deployable version:

```
npm run build
```

This outputs static files to `dist/`, which can be hosted anywhere (Netlify, Vercel, GitHub Pages, etc.).

## Editing content

Everything shown on the site — players, coaches, seasons, gallery captions, honours, fixtures, the roadmap, and club/contact info — lives in plain JS files in `src/data/`:

- `club.js` — club name, tagline, location, email, social links
- `players.js` — the all-time roster
- `seasons.js` — squads and coaching staff per season
- `gallery.js` — gallery photo entries
- `honours.js` — trophies, results, fixtures, and the yearly roadmap

Edit those files directly — no need to touch any component code.

## Adding real photos

Every player/coach card and gallery tile currently shows a placeholder (initials avatar, or a colored tile) because no `photo`/`src` is set. To use a real photo:

1. Put the image file somewhere under `public/` (e.g. `public/players/jane-doe.jpg`).
2. Reference it with a leading slash in the matching data entry, e.g. `photo: "/players/jane-doe.jpg"` in `seasons.js`, or `src: "/gallery/match-1.jpg"` in `gallery.js`.

The placeholder disappears automatically once a photo is set.

## Contact form

The form on the Contact page is currently a placeholder (it just shows an alert on submit — no message is sent anywhere). To make it work, wire it up to a form backend (e.g. Formspree, a serverless function, or your own API) in `src/pages/Contact.jsx`.
