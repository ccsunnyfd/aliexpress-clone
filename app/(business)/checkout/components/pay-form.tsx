'use client'

import { AiOutlineLoading } from 'react-icons/ai'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { type StripePaymentElementOptions } from '@stripe/stripe-js'
import { type FormEvent, useEffect, useState } from 'react'
import { useDispatch, userSlice } from '@/utils/redux'

type PayFormProps = {
  onErrorMessage: (message: string) => void
}

const PayForm = ({ onErrorMessage }: PayFormProps) => {
  const stripe = useStripe()
  const elements = useElements()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const dispatch = useDispatch()
  const { clearCheckout } = userSlice.actions

  useEffect(() => {
    if (!stripe) {
      return
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    )

    if (!clientSecret) {
      return
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case 'succeeded':
          onErrorMessage('Payment succeeded!')
          break
        case 'processing':
          onErrorMessage('Your payment is processing.')
          break
        case 'requires_payment_method':
          onErrorMessage('Your payment was not successful, please try again.')
          break
        default:
          onErrorMessage('Something went wrong.')
          break
      }
    })
  }, [onErrorMessage, stripe])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    setIsLoading(true)

    const { protocol, host } = window.location

    // clear checkout list
    dispatch(clearCheckout())

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // paymentId will be automatically added to the Path parameter: ?payment_intent=pi_30xxx
        return_url: `${protocol}//${host}/orders/api/confirm`,
      },
    })

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      onErrorMessage(error.message!)
    } else {
      onErrorMessage('An unexpected error occurred.')
    }

    setIsLoading(false)
  }

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: 'tabs',
  }

  return (
    <form id="payment-form" onSubmit={(e) => handleSubmit(e)}>
      <PaymentElement
        id="payment-element"
        options={paymentElementOptions}
        className="rounded-sm border border-gray-500 p-2"
      />
      <button
        disabled={isLoading || !stripe || !elements}
        type="submit"
        id="submit"
        className={`mt-4 w-full rounded-full bg-gradient-to-r 
        from-[#FE630C] to-[#FF3200] p-1.5 text-[21px] font-semibold text-white ${
          isLoading ? 'opacity-70' : 'opacity-100'
        }`}
      >
        <span id="button-text">
          {isLoading ? (
            <AiOutlineLoading className="animate-spin" />
          ) : (
            'Place order'
          )}
        </span>
      </button>
    </form>
  )
}

export default PayForm
