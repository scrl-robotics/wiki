# Contributing to the SCRL Robotics Wiki

Thanks for wanting to contribute to the wiki! This is a community-editable resource, and all contributions are welcome!

## Ways to contribute

### Edit an existing page

Every page on the wiki has an **Edit this page** link at the bottom. Clicking it opens the page's source file on GitHub, where you can edit it directly and open a pull request.

### Add a new page

1. **Fork** the repository.
2. Create a new `.mdx` file in the appropriate folder under `docs/`:
   - `docs/getting-started/`: intro material, rules, safety
   - `docs/robot-design/`: archetypes, ground game, materials, construction
   - `docs/drive-systems/`: drivetrains, wheels, weapons
   - `docs/manufacturing/`: how parts are made
   - `docs/electronics/`: wiring, ESCs, control systems
   - `docs/testing-and-safety/`: testing, LiPo safety, competitions
   - `docs/appendices/`: advanced/niche topics
3. Add front matter with a `slug` and a `sidebar_position`:

   ```yaml
   ---
   sidebar_position: 5
   slug: /getting-started/my-page
   ---
   ```

4. Add the page to the corresponding category in `sidebars.js`.
5. Open a pull request.

## Style guidelines

- Write in plain, accessible language. This wiki is a beginner resource first.
- Use `.mdx` files so you can use Docusaurus components like `:::note`, `:::warning`, and `:::tip` where appropriate.
- Use markdown tables for reference data (specs, recommendations, etc.).
- Keep pages focused on one topic so the sidebar stays navigable.

## Attribution

The original guide was written by **Leo Ping**, with contributions from Lucas Skotiniotis, Ian Talbert, and Derek Tran. If you add substantial original content, feel free to add your name to the page's front matter under an `authors` field or mention it in the pull request.

## Need help?

Open an issue on GitHub if you have questions about contributing or want to propose a larger structural change before writing it.
