# Reproduction of issue: user button menu items fail to update when props change

## Running locally

1. Clone the repo
2. Add `.env.local` file with `VITE_CLERK_PUBLISHABLE_KEY=pk_test_bmV4dC1tb3NxdWl0by0yLmNsZXJrLmFjY291bnRzLmRldiQ`
3. Install dependencies: `npm install`
4. Run the app: `npm run dev`

## Reproduction steps

1. Open the app
2. Sign up by clicking the "Sign up" button and following the steps
3. Click the user button to open the menu
4. Notice the custom menu item says "Value is false" and the console log says "current value is false"
5. Click the custom menu item
6. Notice the console log has 'setting value to true'
7. Click the user button to open the menu again
8. Notice the console log has 'current value is true'
9. Notice the custom menu item still says "Value is false" even though it should say "Value is true"

## Expected behavior

Changing the value of a prop in the <UserButton.Action> component should update the menu item.

## Relevant code

Found in `src/layouts/root.tsx`

