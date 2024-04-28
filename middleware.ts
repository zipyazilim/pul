import { clerkMiddleware, ClerkMiddlewareOptions } from "@clerk/nextjs/server";
import { createRouteMatcher } from "@clerk/nextjs/server";

const options: ClerkMiddlewareOptions = {
  publicRoutes: ['/site', '/api/uploadthing']
};

const routeMatcher = createRouteMatcher(options.publicRoutes);

export default clerkMiddleware(options);

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}; 
