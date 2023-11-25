import Stripe from 'stripe'
import { NextResponse } from 'next/server'
import createOrder from '@/app/third-party-requests/prisma/add-order'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

const calculateOrderAmount = (items: Product[]) => {
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    const total = items.reduce(
        (sum, item) => sum + item.price * item.amount!,
        0
    )
    return total
}

export async function POST(request: Request) {
    const { items, currentAddress }: { items: Product[], currentAddress: Address } = await request.json()

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "usd",
        // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
        automatic_payment_methods: {
            enabled: true,
        },
    })

    // Create Unpaid Order first
    const supabase = createClient(cookies())
    const { data: userData, error } = await supabase.auth.getUser()

    if (error || !userData?.user) {
        return NextResponse.json({
            message: 'Cannot get user session info'
        })
    }


    try {
        await createOrder(userData.user.id, paymentIntent.id, currentAddress, items)
    } catch (e) {
        console.log(e)
        return NextResponse.json({
            message: 'Cannot create order'
        })
    }

    return NextResponse.json({
        clientSecret: paymentIntent.client_secret,
    })
}