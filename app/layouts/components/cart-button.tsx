'use client'

import { selectCartProducts, useSelector } from '@/utils/redux'
import { PiShoppingCartSimpleLight } from 'react-icons/pi'

const CartButton = () => {
  const cartProducts = useSelector(selectCartProducts)

  return (
    <button className="group relative hidden md:block">
      <span
        className="
            absolute 
            -right-[3px] 
            top-0 
            flex 
            h-[17px] 
            min-w-[17px] 
            items-center 
            justify-center 
            rounded-full 
            bg-[#FF4646] 
            px-0.5
            text-xs 
            text-white
        "
      >
        {cartProducts.length}
      </span>
      <div className="min-w-[40px]">
        <PiShoppingCartSimpleLight className="text-[33px] group-hover:text-[#FF4646]" />
      </div>
    </button>
  )
}

export default CartButton
