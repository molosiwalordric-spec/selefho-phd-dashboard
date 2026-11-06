# Selefho PhD — Manual-aligned Performance Atlas

Public GIS and M&E research prototype. Not an official NPC system.

## Source alignment (6 November 2026)

Definitions were visually transcribed from the user's scanned copy of Botswana's **National Performance Monitoring and Evaluation Manual**, produced by the National Strategy Office, Office of the President. Publication date was not verified. Printed page numbers are 13 less than PDF viewer page numbers.

- Table 3.8, printed p. 39 / PDF p. 52: 23 operational indicator entries across project implementation, budget implementation, human resources and corruption. Compound entries remain together, with their measurement notes.
- Table 5.6, printed p. 99 / PDF p. 112: all eight NMES implementation indicators, units, baselines and historical **FY22/23** targets. These targets are not current NPC commitments.
- Table 5.7, printed p. 100 / PDF p. 113: all 12 ministerial implementation questions. Each Yes earns one point, maximum 12. Unanswered responses remain unknown; no complete index is issued without all responses.
- Tables 3.2 (p. 23), 3.4 (p. 32), 3.6 (p. 35), and reporting text pp. 36–37 inform the hierarchy, metadata requirements, reporting calendar interpretation, and corrective-action requirements.

`manual-indicators.json` contains source locators, measurements, notes, historical targets, null operational-data fields, the source document hash and checklist. The same source bundle is embedded in `index.html` so the register works without a fetch request. Dashboard IDs are local identifiers, not official indicator codes. The manual PDF and its page images are not published.

## Important distinctions

All synthetic indicator values and town markers from v1.0 have been removed. **No measured records are loaded.** A null actual value is not zero and is not a failed result. Missing approved current targets are not filled using historical targets. The register contains definitions, not observations.

The manual's Table 3.7 (p. 37) uses target achieved / 100% for green, 50–100% for yellow and less than 50% for red. The dashboard resolves the overlap at exactly 100% by assigning it to green: ≥100% green, ≥50% to <100% yellow, <50% red. This boundary resolution is an implementation interpretation. The guarded helper only permits future ratings with finite non-negative data, a positive approved current target, approved period and higher-is-better direction. Lower-is-better, range-based, compound and undefined measures need an approved operational protocol. **All present ratings remain Not assessed.**

Direction fields are dashboard interpretations. No unspecified formula, baseline, unit, frequency, reporting officer or agency assignment is invented. Agency names for OPIs remain as printed, not asserted as current. Current KPI/CMI definitions and targets must be obtained from their approved frameworks. This is not a complete contemporary national KPI register.

National and ministry measures have no invented town coordinates. The reference basemap has no performance markers. A spatial layer requires approved georeferenced project records or validated administrative aggregations matched to reporting units.

## Run and deploy

Open `index.html`, or serve the folder with `python -m http.server 8000`. GitHub Pages publishes `main`, root folder; `.nojekyll` is present. No build dependencies, database, credentials, uploads, analytics or AI calls.

Live: https://molosiwalordric-spec.github.io/selefho-phd-dashboard/

Filters support framework, category and text search. Indicator details expose measurement/source metadata. CSV export covers the filtered definitions and preserves missing fields as blanks. The JSON download includes the full catalog and index.

Leaflet 1.9.4 (BSD-2-Clause) loads from unpkg.com. Basemap © OpenStreetMap contributors; respect https://operations.osmfoundation.org/policies/tiles/ . Browser requests go to external library/tile providers. No repository-wide license has been assigned.

## Design

Version 1.2 uses the user-selected dark tiled dashboard direction: charcoal panels, compact numeric tiles, lime accents and a central Botswana reference map. No decorative gauges imply unmeasured results. Map tiles are rendered in monochrome using CSS; OpenStreetMap attribution remains visible.

