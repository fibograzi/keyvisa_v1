# KEYVISA — Next.js (Pages Router) + Tailwind

Production‑ready, bilingual (RU/EN) landing with Terms & Privacy.  
**Run locally:**

```bash
npm i
npm run dev
```

**Deploy to Vercel:** push this folder to GitHub and import the repo in Vercel (framework auto‑detects Next.js).

## Features
- Clean, elegant UI (Playfair Display + Inter), navy/gold palette
- RU/EN toggle (localStorage) with JSON dictionaries in `/src/locales`
- Framer Motion fade‑ins, smooth scrolling
- Accessible, semantic sections and alt text
- Contact form opens a `mailto:` to `hello@keyvisa.co`
- Telegram CTA points to `https://t.me/keyvisa_consult` (adjust as needed)
- Security headers via `vercel.json`

## Structure
```
/src
  /components
  /pages            # index, privacy, terms, 404, _app, _document
  /assets           # add your images here (hero.jpg, thailand.jpg, ...)
  /styles
  /locales
```
Add images into `/src/assets` matching names already referenced (hero.jpg, thailand.jpg, vietnam.jpg, india.jpg, china.jpg, bali.jpg, schengen.jpg).

## Notes
- This project uses a lightweight in‑app i18n. If you later need routes like `/en/...`, you can integrate `next-i18next` with minimal refactor.
- Policies mention 152‑FZ and GDPR concepts. Always keep content up to date with current law.
