# Cloud OS Project Dashboard

A three-page static website for CCIS-673: Operating Systems Design.
The project explores website deployment and cloud hosting using GitHub
and Cloudflare Pages.

The site contains an introduction, an interactive project checklist,
a Cloud OS architecture page, and a custom 404 page.

## Project files

- `index.html` — project introduction and navigation
- `progress.html` — project checklist
- `architecture.html` — cloud architecture and responsibilities
- `404.html` — custom page for missing URLs
- `style.css` — shared styles
- `script.js` — interactive checklist and browser storage
- `_headers` — Cloudflare Pages response-header configuration

## Test locally

1. Download or clone this repository.
2. Open a terminal in the project folder.
3. Start a local web server:

   ```bash
   python -m http.server 8000
   ```

   On Windows, if `python` does not work, try:

   ```powershell
   py -m http.server 8000
   ```

4. Open `http://localhost:8000` in a browser.
5. Test the navigation links and the checklist. Refresh the progress
   page to check whether the selections remain saved.
6. Visit `http://localhost:8000/404.html` to inspect the custom error
   page. A basic Python server does not apply Cloudflare's custom 404
   routing or `_headers` configuration. Test a missing URL and the
   response header again after deployment.
7. Press `Ctrl+C` in the terminal to stop the server.

## Deployment

The intended deployment platform is Cloudflare Pages, connected to this
GitHub repository. No private data or credentials should be committed to
the repository.
