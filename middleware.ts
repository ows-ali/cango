import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  if (!req.auth) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }
});

export const config = {
  matcher: ["/((?!$|auth|_next|api/auth|api/beta|favicon.ico|manifest|sw.js|images|icons).*)"],

};
