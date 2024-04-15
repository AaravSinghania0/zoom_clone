import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoute = createRouteMatcher([
	"/",
	"/upcoming",
	"/meeting(.*)",
	"/previous",
	"/recordings",
	"/personal-room",
]);
// const isIgnoredRoute = createRouteMatcher(["/sign-in", "/sign-up"]);

export default clerkMiddleware((auth, req) => {
	if (protectedRoute(req)) auth().protect();
	// if (!isIgnoredRoute(req)) auth().protect();
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
