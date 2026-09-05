# Kylinn Ding portfolio

A responsive Next.js portfolio with `/` (homepage) and `/works` (My Works).

## Local development

Install Node.js 22 and pnpm 11.19.0. Open a terminal in this folder:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000. Run `pnpm build` before publishing; `pnpm start` serves that production build. Run `pnpm typecheck` for TypeScript checks.

## Where to edit

- `app/page.tsx`: homepage.
- `app/works/page.tsx`: work categories.
- `components/portfolio/`: reusable navigation, title, and project card.
- `lib/portfolio.ts`: biography, navigation destinations, and project text.
- `app/globals.css`: colors, typography, spacing, and responsive layouts.
- `public/`: future image assets. The current references contain no images.

## One-time GitHub setup

This folder is the repository root. Do not upload the surrounding ChatGPT project, `sources/`, `node_modules/`, or generated output.

1. The GitHub repository is https://github.com/kding-png/personal-website and is configured locally as `origin`.
2. Authenticate Git locally with your GitHub account. Set your commit name and verified GitHub email (or GitHub's provided private noreply email).
3. From this folder, run the following after setting your commit identity:

```sh
git config user.name "YOUR NAME"
git config user.email "YOUR VERIFIED GITHUB EMAIL"
git add .
git commit -m "Prepare portfolio for Vercel"
git push -u origin main
```

Do not paste access tokens into project files, remote URLs, or chat. Use GitHub's normal credential manager or sign-in flow.

## One-time Vercel setup

1. Sign into Vercel, select **Add New → Project**, and connect GitHub.
2. Grant access to this repository and import it.
3. Select **Next.js** as the framework and leave **Root Directory** at the repository root (`.`). This applies when you push this folder as instructed above.
4. Use Node.js **22.x**. The committed lockfile and packageManager field select pnpm. Keep the standard Next.js build/output defaults; do not set output to `dist`.
5. Deploy. In **Settings → Environments → Production → Branch Tracking**, confirm **main**. In **Settings → Git**, verify the correct repository is connected.

`vercel.json` enables Git deployments. Account linking and production branch tracking are Vercel project settings, not something a local file can activate on its own. No deployment token, webhook, manual upload, or GitHub Actions deployment workflow is needed with the native integration.

## Connect kding29.com and www.kding29.com

In the Vercel project's **Settings → Domains**, add both domains. Use `kding29.com` for production and set `www.kding29.com` to redirect to it. Keep this redirect in Vercel settings; the application does not hardcode either hostname.

At the provider that manages your domain's DNS, enter the exact records Vercel displays:

| Type | Name / Host | Value |
| --- | --- | --- |
| A | @ | Exact IPv4 address shown for kding29.com in Vercel |
| CNAME | www | Exact project-specific hostname shown for www.kding29.com |
| TXT, only if requested | Exact name Vercel supplies | Exact ownership verification value Vercel supplies |

The final IP address and CNAME target can only be confirmed after adding the domains to your Vercel project. Do not copy a generic IP or sample CNAME from an old tutorial. TTL can remain Automatic/default. If the registrar wants a full name instead of `@`, use `kding29.com`.

Replace conflicting web records for `@` and `www` as necessary; preserve email MX/TXT records and unrelated subdomains. You can keep the existing nameservers. Wait for Vercel to show both domains as valid and HTTPS certificates issued. DNS changes can take time to propagate.

## Future updates

1. Ask Codex to edit this project.
2. Review the change and run `pnpm build`.
3. Commit and push to `main`.
4. Vercel builds the commit automatically. Successful production deployments update the custom domains. If a build fails, inspect its Vercel logs; the previous successful deployment remains live.

Other branches receive preview deployments. Merge into `main` when ready for production. Do not enable an Ignored Build Step that skips builds if every push should be considered for deployment.

## Environment variables

No variables are needed today. `.env.example` is a safe template. Future local secrets belong in ignored `.env.local`; deployed values belong in **Vercel → Settings → Environment Variables**, scoped to Production, Preview, or Development. Redeploy after changing them. Use `process.env.NAME` only in server code for secrets. `NEXT_PUBLIC_` values are public and bundled into browser code; never use that prefix for secrets.

## Official references

- https://vercel.com/docs/git/vercel-for-github
- https://vercel.com/docs/git
- https://vercel.com/docs/domains/working-with-domains/add-a-domain
- https://vercel.com/kb/guide/a-record-and-caa-with-vercel

## Setup status

Local Vercel configuration is prepared and the GitHub remote points to `kding-png/personal-website`. The initial commit and push, account authorization, Vercel import, production deployment, and DNS verification must be completed before automatic updates are live.
