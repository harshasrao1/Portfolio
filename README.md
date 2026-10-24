# HARSHA S RAO — Portfolio

Complete static portfolio source, including the midnight-purple design and animated filling entrance button.

## Run on Windows
1. Extract the ZIP using Extract All.
2. Open the HARSHA_S_RAO_Portfolio folder in VS Code.
3. Open index.html with the Live Server extension, or run:

   py -m http.server 8000

4. Visit http://localhost:8000 in your browser.

You can also double-click index.html for a quick preview. A local server gives more consistent clipboard and session behavior. No npm installation, backend, database, or API key is needed.

## Files
- index.html: content and page structure
- style.css: styles, responsive layouts, themes, and animations
- app.js: projects, filters, detail dialogs, theme, navigation, and contact actions
- intro.js: welcome screen, keyboard entry, focus handoff, and per-tab session behavior
- assets/harsha.png: profile photo

## Welcome screen
The welcome screen appears once per tab session. Open the local URL in a new tab to replay it. Press Enter or click Enter Portfolio to continue. The filling animation is decorative; it does not download a file or delay entry.

## Editing
Edit the content in index.html. Project detail descriptions are also stored in app.js. Keep both consistent. Change colors and animation rules in style.css. Replace assets/harsha.png to update the portrait.

## Hosting
Upload the contents of this folder to a static host. The hosted ChatGPT version's private access is managed by its host and is not included in this static source. Configure access restrictions separately if deploying elsewhere.

Google Fonts requires an internet connection; the design falls back to Arial when unavailable. GitHub and LinkedIn links also require internet access.
