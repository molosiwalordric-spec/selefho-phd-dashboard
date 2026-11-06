# Selefho PhD — Performance Atlas

A static GIS dashboard prototype for exploring monitoring and evaluation in Botswana. It is not an official National Planning Commission system. The case scope and research objectives remain subject to refinement.

## Data and interpretation

Every indicator, value and target is **synthetic**. Six approximate town reference points, three illustrative indicators and three reporting quarters produce 54 observations; the default quarter shows 18. Coordinates are not actual project locations. Indicators and thresholds have **not** been verified against Botswana’s National Performance Monitoring and Evaluation Manual.

All demonstration indicators have an upward direction. Attainment = actual / target × 100. Status thresholds are ≥90% on track, ≥70% to <90% watch, and <70% below target. Map markers display the lowest status among visible observations at a location. Sector bars count on-track observations as a share of visible sector observations; the dashboard does not average unrelated indicators into a composite score.

## Features

- Period, sector, location and status filters; coordinated map and table.
- Keyboard-accessible location filtering and text alternatives for map information.
- CSV export of filtered synthetic observations.
- Methods and provenance notes, responsive layout and reduced-motion support.
- No database, credentials, tracking, AI API calls or uploads.

## Run locally

Open `index.html` in a browser, or serve this directory with `python -m http.server 8000`. Internet access is needed for Leaflet and the OpenStreetMap basemap. If the map library cannot load, filters, table and export continue to work.

## GitHub Pages

Publish the `main` branch, `/ (root)` folder in repository Settings → Pages → Deploy from a branch. No build dependencies are required. `.nojekyll` disables Jekyll processing.

Publish only approved public or synthetic data. This is a public site, not a suitable storage location for confidential NPC records or API keys. A secure database and server component would be separate work if the study requires them.

## Map attribution and dependencies

- Leaflet 1.9.4, BSD-2-Clause: https://leafletjs.com and https://github.com/Leaflet/Leaflet/blob/v1.9.4/LICENSE
- Basemap © OpenStreetMap contributors: https://www.openstreetmap.org/copyright
- Respect tile usage limits: https://operations.osmfoundation.org/policies/tiles/

Library files load from unpkg.com and map tiles from tile.openstreetmap.org. No assets are bundled from private libraries. The prototype introduces no repository-wide license; copyright and dependency licenses remain with their respective owners.

Prepared 6 November 2026.

