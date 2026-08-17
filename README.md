# AVLEN Digital Website

Official first-version website for AVLEN Digital, built with React, Vite, TypeScript and hand-written CSS.

## Run Locally

Install packages once:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## Publish Online

### Vercel

1. Upload this project to GitHub.
2. Create a new project on Vercel and import the GitHub repository.
3. Vercel should read `vercel.json` automatically. If it asks:
   - Framework: `Vite`
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click deploy.

### Netlify

1. Upload this project to GitHub.
2. Create a new site on Netlify and import the GitHub repository.
3. Use these settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click deploy.

The `public/_redirects` file is included so the site stays stable if page routes are added later.

## Where To Edit

- Contact information: `src/data/contact.ts`
- Turkish and English text: `src/data/translations.ts`
- Portfolio concept projects: `src/data/translations.ts`, inside `work.projects`
- Demo template websites: `src/data/demoTemplates.ts`
- Demo template page layout: `src/pages/TemplateDemo.tsx`
- Main page sections: `src/sections/`
- Shared components: `src/components/`
- Site styling and responsive behavior: `src/styles/global.css`

## Brand Mark

The site uses `public/avlen-mark.png` for the hero composition, about section, favicon and social metadata placeholder. Replace that file with the final official mark when available; the code can stay the same.

## Demo Visuals

The portfolio concept demos use 12 project images: one hero/atmosphere image and three service/menu images for each demo category.

- Barber: `public/demo-barber.png`, `public/demo-barber-cut.png`, `public/demo-barber-towel.png`, `public/demo-barber-beard.png`
- Detailing: `public/demo-detailing.png`, `public/demo-detailing-correction.png`, `public/demo-detailing-ceramic.png`, `public/demo-detailing-interior.png`
- Cafe: `public/demo-cafe.png`, `public/demo-cafe-latte.png`, `public/demo-cafe-filter.png`, `public/demo-cafe-plate.png`

They are referenced from `src/data/demoTemplates.ts` and appear in the selected work cards, service sections, package/menu cards and gallery areas.
