import { NextResponse, type NextRequest } from 'next/server'
import { createClient } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
    try {
        // This `try/catch` block is only here for the interactive tutorial.
        // Feel free to remove once you have Supabase connected.
        const { supabase, response } = createClient(request)

        // Refresh session if expired - required for Server Components
        const { data, error } = await supabase.auth.getSession()

        // if user is signed in and the current path is /auth redirect the user to /
        if (request.nextUrl.pathname === '/auth' && !error && data?.session) {
            return NextResponse.redirect(new URL('/', request.url))
        }

        // if user is not signed in and the current path is not /auth redirect the user to /auth
        if ((request.nextUrl.pathname === '/checkout' || request.nextUrl.pathname === '/orders') && (error || !data?.session)) {
            return NextResponse.redirect(new URL(`/auth?next=${new URL(request.nextUrl.pathname, request.url)}`, request.url))
        }

        return response
    } catch (e) {
        // If you are here, a Supabase client could not be created!
        // This is likely because you have not set up environment variables.
        return NextResponse.next({
            request: {
                headers: request.headers,
            },
        })
    }


}

export const config = {
    matcher: ['/auth', '/checkout', '/orders'],
}