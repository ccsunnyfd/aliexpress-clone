'use client'

import { selectCheckout, useSelector } from '@/utils/redux'
import { useMemo } from 'react'

const Total = () => {
  const checkout = useSelector(selectCheckout)

  const total = useMemo(() => {
    const total = checkout.reduce(
      (sum, item) => sum + item.price * item.amount!,
      0
    )
    return total / 100
  }, [checkout])

  return (
    <>
      $ <span className="font-extrabold"> {total}</span>
    </>
  )
}

export default Total
