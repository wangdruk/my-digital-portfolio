import { clerkMiddleware, createRouteMatcher, getAuth } from "@clerk/nextjs/server";
import { isAdmin } from "@/lib/auth";
import { NextResponse } from "next/server";

// Define protected routes that require authentication
const isProtectedRoute = createRouteMatcher(['/admin','/resources(.*)', '/projects']);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect()
})

export const config = {
  // Only run the Clerk proxy for explicitly protected routes and API endpoints.
  // This avoids applying auth-related redirects to public pages like `/blog`.
  matcher: [
    '/admin(.*)',
    '/resources(.*)',
    '/projects(.*)',
    '/(api|trpc)(.*)'
  ],
};
