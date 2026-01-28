import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // KHÔNG CHECK AUTH Ở ĐÂY
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/patients/:path*", "/doctors/:path*", "/medical-records/:path*"],
};
