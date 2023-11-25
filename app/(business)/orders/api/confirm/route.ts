import confirmOrder from '@/app/third-party-requests/prisma/confirm-order'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const stripeId = searchParams.get('payment_intent')

    if (!stripeId) {
        return NextResponse.redirect(new URL('/orders/failure?error=Payment', request.url))
    }

    try {
        await confirmOrder(stripeId!)
    } catch (e) {
        console.log(e)
        return NextResponse.redirect(new URL('/orders/failure?error=Order', request.url))
    }

    // redirect
    return NextResponse.redirect(new URL('/orders/success', request.url))
}
