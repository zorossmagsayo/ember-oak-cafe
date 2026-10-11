# Ember & Oak Café

A responsive café website built with **React 18 + Vite**. Front-end only: no backend and no database.

## Features

- Sticky navbar with mobile menu
- Hero, About, and Testimonials carousel
- Tabbed menu (Coffee, Breakfast, Lunch, Pastries) with dietary badges
- Gallery grid with a lightbox (closes with Esc or a click outside)
- Hours table with a live "Open now / Closed" indicator based on the visitor's clock
- Reservation form with validation and a confirmation screen
- Fully responsive, keyboard accessible, respects `prefers-reduced-motion`

## Run it

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The output goes to `dist/`. Drag that folder into Netlify, or connect the repo to Vercel or Cloudflare Pages.

## Make it yours

- **Content**: edit `src/data.js` (name, address, menu, hours, gallery, testimonials).
- **Photos**: in `src/data.js`, set the `image` field on a gallery item to a URL, or put files in a `public/` folder and use `/photo.jpg`.
- **Colors**: change the CSS variables at the top of `src/styles.css`.
- **Map**: replace the iframe `src` in `src/components/Hours.jsx` (OpenStreetMap or Google Maps embed link).

## Notes

The reservation form only shows a confirmation on screen. To receive real bookings without a backend, you could connect a form service such as Formspree or EmailJS.

## Project structure

```
src/
  App.jsx
  data.js
  styles.css
  components/
    Navbar, Hero, About, Menu, Gallery,
    Testimonials, Hours, Reservation, Footer
```
