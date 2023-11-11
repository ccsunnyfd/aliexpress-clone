import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const code = searchParams.get('code')
    const next = searchParams.get('next') ?? new URL('/', request.url)

    if (code) {
        const supabase = createClient(cookies())

        const { error } = await supabase.auth.exchangeCodeForSession(code)
        if (!error) {
            return NextResponse.redirect(next)
        }
    }

    // return the user to an error page with instructions
    return NextResponse.redirect(new URL(`/auth?error=An error occurred when logging in with a third-party account`, request.url))
}