import Stripe from 'stripe'
import { NextResponse } from 'next/server'

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

    // Create Unpayed Order first
    // TODO

    return NextResponse.json({
        clientSecret: paymentIntent.client_secret,
    })

}