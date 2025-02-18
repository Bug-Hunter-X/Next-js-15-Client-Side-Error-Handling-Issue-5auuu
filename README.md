# Next.js 15 Client-Side Error Handling Bug

This repository demonstrates a bug in Next.js 15 where client-side errors on routes are not properly handled.  Instead of displaying an error page, a blank page is shown.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.

You will see a blank page instead of a proper error page.

## Expected Behavior

A proper error page should be displayed when an error is thrown on a client-side route.

## Actual Behavior

A blank page is displayed.

## Solution

The solution involves properly handling errors within the client-side route using error boundaries and custom error pages.