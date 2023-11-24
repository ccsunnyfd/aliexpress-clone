'use client'

import PayForm from './pay-form'
import { Elements } from '@stripe/react-stripe-js'
import {
  type StripeElementsOptions,
  type Appearance,
  loadStripe,
} from '@stripe/stripe-js'
import { useEffect, useMemo, useState } from 'react'
import { selectCheckout, useSelector } from '@/utils/redux'

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
)

const appearance: Appearance = {
  theme: 'stripe',
}
const options: StripeElementsOptions = {
  appearance,
}

const PayformElement = ({
  currentAddress,
}: {
  currentAddress: Address | null
}) => {
  const [clientSecret, setClientSecret] = useState('')
  const [message, setMessage] = useState<string | null>(null)

  const checkoutList = useSelector(selectCheckout)

  const total = useMemo(() => {
    const total = checkoutList.reduce(
      (sum, item) => sum + item.price * item.amount!,
      0
    )
    return total / 100
  }, [checkoutList])

  useEffect(() => {
    if (!currentAddress) {
      setMessage('Please add shipping address')
      return
    }

    if (total <= 0) {
      return
    }

    // Create PaymentIntent as soon as the page loads
    fetch('/checkout/api/paymentintent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: checkoutList,
        currentAddress: currentAddress,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret)
        options.clientSecret = data.clientSecret
      })
  }, [checkoutList, currentAddress, total])

  return (
    <>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <PayForm onErrorMessage={(message: string) => setMessage(message)} />
        </Elements>
      )}
      {/* Show any error or success messages */}
      {message && (
        <div
          id="payment-message"
          className="text-center font-semibold text-red-700"
        >
          {message}
        </div>
      )}
    </>
  )
}

export default PayformElement
