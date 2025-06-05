# Reproduction of issue: user button menu items fail to update when props change

## Running locally

1. Clone the repo
2. Add `.env.local` file with `VITE_CLERK_PUBLISHABLE_KEY={{your_publishable_key}}`
3. Install dependencies: `npm install`
4. Run the app: `npm run dev`

## Reproduction steps

1. In the clerk dashboard
   1. Enable organizations
   2. Create a new organization
   3. Send an invitation to join the organization
2. On your local machine
   1. Pull the repo
   2. Add `.env.local` file with `VITE_CLERK_PUBLISHABLE_KEY={{your_publishable_key}}` (see `.env.example`)
   3. Install the dependencies: `npm install`
   4. Run the app: `npm run dev`
3. In the app
   1. Sign up by clicking the "Sign up" button and following the steps. Use the email address that you sent
   the invitation to.
   2. Click on the `join` button in the organization list to join the organization
   3. Click on the organization in the organization list to make it the active organization
   4. Click on the organization swither in the top left of the page to open it
   5. Notice that the organization is listed twice in the switcher
   6. Refresh the page
   7. Notice that the organization is now listed only once in the switcher

## Expected behavior

An organization should only be listed once in the organization switcher. Once the organization is joined, it should not be listed as joinable in the switcher.

