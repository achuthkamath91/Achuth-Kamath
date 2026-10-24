# Achuth Kamath - Portfolio

**Live site:** https://achuthkamath-mak.pages.dev

## About

A personal portfolio site for a Senior Software Engineer working in backend engineering, cloud architecture and distributed systems: experience, skills, projects, certifications and contact details.

## Features

- Plain, light-first layout in indigo that follows the visitor's browser theme (light or dark)
- Scales up on large screens, and works on phones
- Keyboard-accessible, with a skip link and visible focus
- Google Analytics 4 with `contact_click` events for email, LinkedIn, GitHub, certificate and repository links

## Structure

```
├── public/               # Everything Cloudflare publishes
│   ├── index.html
│   ├── styles/site.css
│   ├── scripts/site.js
│   ├── assets/           # Project screenshots and certificate images
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── _headers          # Security headers
└── README.md             # This file (not published)
```

## Development

Static HTML, CSS and vanilla JavaScript. No build step.

To view locally:
```bash
cd public
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

Hosted on Cloudflare Pages and connected to this repository. Pushing to `main` publishes the `public/` folder.

Cloudflare Pages settings: production branch `main`, no build command, build output directory `public`.

## Contact

- Email: achuth.138208@gmail.com
- LinkedIn: https://www.linkedin.com/in/akmmaktrix/
- GitHub: https://github.com/achuthkamath91

## License

© 2026 Achuth Kamath M. All rights reserved.
