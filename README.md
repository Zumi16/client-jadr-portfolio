# Jadr Panes Portfolio

A custom portfolio website developed for **Jadr Panes as a paid client project**. This commissioned freelance work presents the client's professional experience, services, creative samples, and artist collaborations.

The website was built around the client's portfolio guide, supplied content, photographs, and media assets, with design refinements based on client feedback.

## About the client

Jadr Panes is a Virtual Assistant, Social Media Manager, and Audio & Sound Mixing Engineer. The portfolio showcases customer service and administrative experience alongside social media, graphic design, video, and audio-mixing work.

## Features

- Responsive layout with desktop and mobile navigation.
- Services, professional experience, work process, tools, and testimonials.
- Canva and social-media sample galleries with image enlargement.
- Playable sample reels and videos.
- Spotify-style audio collaboration cards with full-card embedded players and flip-back controls.
- Artist artwork linked directly to the corresponding Spotify profiles.
- Expandable FAQ and contact information.

## Technology

- React
- Vite
- MUI React icons
- Custom CSS
- Spotify embeds

## Run locally

From the project directory:

```bash
npm ci
npm run dev
```

Node.js and npm must be installed. Open the local URL printed by Vite in the terminal.

## Build and preview

```bash
npm run build
npm run preview
```

The production build is generated in `dist/`. The preview command serves that build locally for checking before deployment.

## Deploy on Vercel

Import the project's Git repository into Vercel and use these settings:

- **Framework preset:** Vite
- **Root directory:** The directory containing `package.json`, not `src/`. If this project is at the repository root, leave the root directory setting at its default.
- **Build command:** `npm run build`
- **Output directory:** `dist`

Include the required files in `images/` when committing and pushing changes. Vite uses this directory as its public assets folder and copies those files into the production output.

See the [official Vite on Vercel guide](https://vercel.com/docs/frameworks/frontend/vite) for deployment details.

## Project files

- `src/App.jsx` — React components, client content, services, and portfolio interactions.
- `src/styles.css` — Theme, layout, responsive styling, and animations.
- `src/main.jsx` — React entry point.
- `images/` — Client photographs, design samples, videos, and artist images.
- `index.html` — Page metadata and application shell.
- `vite.config.js` — Vite configuration and public asset directory.
- `Jadr Portfolio Guide.pdf` — Client-supplied content reference.

## Contact and external services

The contact form currently uses `mailto:` to prepare a message in the visitor's email application. It **does not send email automatically** and has no email-sending backend or hosted form service connected.

Music playback is provided by Spotify. Embedded playback availability depends on Spotify and the visitor's browser or account. Spotify embeds and externally hosted fonts require an internet connection.

## Client materials

This is a paid, client-specific portfolio project. Client branding, copy, photographs, design samples, and videos should not be reused without the appropriate permission. Third-party music, artwork, and trademarks remain subject to their respective owners' rights.
