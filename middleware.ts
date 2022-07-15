// middleware.ts
import { NextRequest, NextResponse } from "next/server";

// If the incoming request has the "beta" cookie
// then we'll rewrite the request to /beta
export function middleware(req: NextRequest) {
  // console.log("it is workng>>>>>>>>>>>>>>>>>>>>");
}

// Supports both a single value or an array of matches
export const config = {
  matcher: "/",
};
