'use client'

import CheckoutItem from './checkout-item'
import { selectCheckout, useSelector } from '@/utils/redux'

const CheckoutList = () => {
  const checkout = useSelector(selectCheckout)

  return (
    <>
      {checkout?.map((product) => (
        <div key={product.id}>
          <CheckoutItem product={product} />
        </div>
      ))}
    </>
  )
}

export default CheckoutList
