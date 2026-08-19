# CreatorHub — Product Landing Page

A premium, production-ready landing page for a fictional SaaS product, built for the **CreatorHub Technologies Frontend Challenge**. It includes a polished home page, a login page, and a registration page — all fully responsive and visually consistent.

## Project overview

CreatorHub is a fictional product workspace that helps teams plan sprints, track work, and ship releases in one place. This project delivers the three pages the challenge asks for:

- **Home / Landing** — hero with a strong value proposition and clear CTAs, a realistic dashboard mockup, animated statistics, a features grid, a "how it works" section, and a responsive footer.
- **Login** — email + password, password visibility toggle, remember-me checkbox, forgot-password link, and inline validation.
- **Register** — full name, email, password, confirm password, password strength meter, password visibility toggle, and inline validation.

Authentication is **mocked** and clearly labeled as a demo. A successful login or registration stores a fake user object in `localStorage` and updates the navbar to show the signed-in state. No real credentials are verified and no backend is involved.

## Tech stack

- **React 18** + **TypeScript**
- **Vite** — dev server and build tooling
- **React Router DOM** — client-side routing (`/`, `/login`, `/register`)
- **Tailwind CSS** — utility-first styling with a custom design system
- **lucide-react** — icon set
- **Inter** + **Plus Jakarta Sans** — typography (loaded via Google Fonts)

## Features

- Custom Tailwind theme: primary/accent/neutral color ramps, display + body fonts, keyframe animations.
- Reusable components: `Button`, `Input`, `Card`, `Reveal` (scroll animation), `Logo`, `Navbar`, `Footer`, `AuthLayout`, `DashboardMockup`.
- Micro-interactions: scroll-reveal sections, animated statistics counters, hover lifts on cards, animated navbar background on scroll, password strength meter.
- Form validation: required-field checks, email format, password length, confirm-password match, with clear inline error messages and accessible `aria-invalid` / `aria-describedby` attributes.
- Loading, hover, focus, and error states throughout.
- Keyboard-navigable, visible focus rings, and accessible contrast.
- Responsive at 390px, tablet, and 1440px with no horizontal scrolling.

## How to run locally

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# type-check the project
npm run typecheck

# build for production
npm run build

# preview the production build
npm run preview
```

The dev server runs at the URL printed in your terminal (typically `http://localhost:5173`).

## Deployment instructions

This is a static Vite app and can be deployed to any static host:

1. Run `npm run build` — outputs static assets to `dist/`.
2. Deploy the `dist/` folder to your host of choice:
   - **Vercel / Netlify:** import the repo, set the build command to `npm run build` and the output directory to `dist`.
   - **GitHub Pages:** push the contents of `dist/` to your `gh-pages` branch (or use a GitHub Action).
   - **Any static host:** upload `dist/` as the web root.

No environment variables are required — authentication is mocked client-side.

## Where AI tools were used

- **Code generation:** the initial component structure, Tailwind theme, and page layouts were scaffolded with an AI coding assistant (Bolt).
- **Design decisions:** color system, spacing scale, and animation choices were guided by AI suggestions, then reviewed.
- **Copywriting:** product marketing copy on the landing page was drafted with AI assistance.

## What was personally verified / modified

- Reviewed and adjusted the Tailwind color ramps and typography for readability and contrast.
- Verified the responsive layout at 390px, 768px, and 1440px widths — confirmed no horizontal scroll.
- Checked all form validation paths (empty fields, invalid email, short password, mismatched confirm).
- Confirmed keyboard navigation through nav, forms, and interactive elements.
- Ensured the mock authentication is clearly labeled as a demo and does not impersonate a real backend.
- Replaced any placeholder/fabricated testimonials, user counts, or company logos with honest product copy and realistic UI content.
