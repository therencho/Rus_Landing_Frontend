/**
 * The Rus product app (Clerk-protected dashboard) lives on the `app` subdomain.
 * The landing site is fully public and links out to it for sign in / sign up.
 */
export const APP_URL = "https://app.rus.therencho.com";

/** Clerk auth surfaces on the product app. */
export const SIGN_IN_URL = `${APP_URL}/sign-in`;
export const WAITLIST_URL = `${APP_URL}/waitlist`;
