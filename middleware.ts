import { createServerClient } from "@/lib/supabase-server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  // Only protect /admin routes, but exclude /admin/reset-password
  if (
    req.nextUrl.pathname.startsWith("/admin") &&
    !req.nextUrl.pathname.startsWith("/admin/reset-password")
  ) {
    const supabase = createServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      const redirectUrl = new URL("/admin/sign-in", req.url);
      redirectUrl.searchParams.set("redirectedFrom", req.nextUrl.pathname);
      return NextResponse.redirect(redirectUrl);
    }

    if (user.app_metadata?.role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*']
}