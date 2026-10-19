# JeanieChoo Portfolio

Personal portfolio with Projects, About and Lab pages.

## Preview

Run `node server.cjs` and open `http://127.0.0.1:4175/`.

## Publish

The repository includes prebuilt React bundles and an automatic GitHub Pages workflow. No dependency installation is needed for deployment.

In repository Settings > Pages, select **GitHub Actions** as the source. Pushes to `main` publish the site at `https://jeaniechoo.github.io/porfolio/`.

Run `node build-site.cjs` to prepare the static website in `dist/`.

## Rebuild components

After editing React components under `src/`, run `npm ci`, then the appropriate `node build-*.cjs` commands. Commit the resulting JavaScript and CSS bundles as well as the sources.

The publication copy contains optimized photographs and a web-ready version of the video. Original source media remains in the local preview project.

## Cloudflare Workers

Use repository `JeanieChoo/porfolio`, branch `main`, root directory `/`.
Set the deploy command to:

```
node build-cloudflare.cjs && npx wrangler deploy
```

`wrangler.jsonc` publishes only `dist/`. The Cloudflare build reuses the existing
GitHub Pages URL for `lab-under-two-wings.mp4` because it exceeds the Workers
25 MiB per-asset limit. GitHub Pages continues to publish that video locally.
