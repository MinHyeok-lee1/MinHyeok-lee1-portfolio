// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /index-redirect → / (홈)
  if (pathname === "/index-redirect") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // /project-redirect → /project
  if (pathname === "/project-redirect") {
    return NextResponse.redirect(new URL("/project", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/index-redirect", "/project-redirect"],
};
