/**
 * all the routes which we will allow logged out users to visit
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * routes that will be used for authentication
 * @type {string[]}
 */
export const authRoutes = [
   "/auth/login", 
   "/auth/register",
   "/auth/error",
   "/auth/new-password"
];

/**
 * any route that starts with this prefix is gonna be used for API authentication purposes
 * need nextauth to access this, so we need to make sure not to protect these routes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * default route that a user will be redirected to once logged in
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
