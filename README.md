# SCRL Robotics Wiki

Community-editable knowledge base for combat robotics.

Based on *Beetleweights for Dummies* by Leo Ping (with contributions from Lucas Skotiniotis, Ian Talbert, and Derek Tran), this wiki covers everything from your first robot design to advanced weapon-stack engineering.

## Getting Started

```bash
npm install
npm run start
```

This starts a local development server at http://localhost:3000. Most changes are reflected live.

## Build

```bash
npm run build
```

This generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

## Contributing

The wiki is community-editable. Click the **edit this page** link at the bottom of any page to open it in GitHub and propose a change via a pull request.

### Adding a new page

1. Create a new `.mdx` file in the appropriate folder under `docs/`
2. Add a `slug` and `sidebar_position` in the front matter
3. Add the page to the corresponding category in `sidebars.js`
