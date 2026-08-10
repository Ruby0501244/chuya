## Local Preview & Browser Validation Rules

When verifying UI changes locally:

1. Use the project's existing development workflow.
   - Read `package.json` scripts first.
   - Prefer existing `npm run dev`, `npm run preview`, or Vite commands.
   - Do not create custom PowerShell background startup solutions.
   - Do not spend time debugging Windows background process lifecycle issues.

2. Respect project base URL configuration.
   - Check `vite.config`, router configuration, or deployment settings before opening the browser.
   - If a base path exists, include it in the local URL.

   Example:
   - base: `/moneybook/`
   - Correct:
     `http://localhost:5173/moneybook/`
   - Incorrect:
     `http://localhost:5173/`

3. Preview validation priority:
   - Verify the modified feature first.
   - Do not perform unnecessary full-site checks.
   - Local preview is only for functional verification, not environment refactoring.

4. If preview startup fails:
   Check in this order:
   - package.json scripts
   - dependency/install issues
   - port availability
   - base path configuration

   Do not repeatedly try different background process methods.

5. Do not modify deployment configuration only to make local preview work.
   Preserve production settings such as GitHub Pages base paths.
