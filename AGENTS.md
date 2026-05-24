# BracesJourney

Mobile braces tracking application for users to manage their orthodontic journey including appointments, progress photos, braces colours, and payment tracking.

---

# Project Overview

BracesJourney is a mobile-first application built using React Native and Laravel API.

The application allows users to:
- Track orthodontist appointments
- Upload monthly braces progress photos
- Record braces colours
- Monitor treatment payments
- Track pain/progress notes
- Receive reminders

---

# Tech Stack

## Mobile App
- React Native
- Expo
- NativeWind (TailwindCSS for React Native)
- React Navigation
- React Query
- Axios
- React Hook Form

## Backend API
- Laravel
- Laravel Sanctum / JWT
- MySQL
- REST API architecture

## Storage
- Cloudflare R2 / AWS S3 (After finished development)
- Local storage for development

---

# Project Structure

## Mobile

```text
mobile/
 ├── src/
 │    ├── screens/
 │    ├── components/
 │    ├── navigation/
 │    ├── hooks/
 │    ├── services/
 │    ├── api/
 │    ├── store/
 │    ├── utils/
 │    ├── constants/
 │    └── types/
 └── assets/
```

---

# Current Implementation Notes

Last updated: 2026-05-24

## Mobile Navigation
- The app is focused on `npm run ios` / Expo iOS development.
- Main tabs are defined in `src/constants/main-tabs.ts`.
- Current tabs:
  - Dashboard
  - Appointments
  - Journey Timeline
  - Payments
  - Progress Gallery
  - Settings

## Branding
- Logo asset: `assets/images/braces-journey-logo.png`
- Reusable logo component: `src/components/brand-logo.tsx`
- App icon and splash image are configured in `app.json` using the BracesJourney logo.

## Currency
- Default currency is Malaysian Ringgit.
- Use `src/utils/format-currency.ts` for RM formatting.
- Do not hardcode `$` values in UI files.

## Scalable Frontend Structure
- Shared app screen shell/cards: `src/components/main-screen.tsx`
- Dashboard feature files:
  - `src/features/dashboard/types.ts`
  - `src/features/dashboard/data/dashboard.ts`
  - `src/features/dashboard/components/`
- Payments feature data:
  - `src/features/payments/data/payments.ts`

## Maintenance Rule
- Update this `AGENTS.md` after each completed feature or structural change so future agents can continue quickly.
