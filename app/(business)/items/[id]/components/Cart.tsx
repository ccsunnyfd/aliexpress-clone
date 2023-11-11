'use client'

import {
  selectCartProducts,
  useDispatch,
  useSelector,
  userSlice,
} from '@/utils/redux'
import { useMemo } from 'react'

type CartProps = {
  product: Product
}

const Cart = ({ product }: CartProps) => {
  const dispatch = useDispatch()
  const { addToCart } = userSlice.actions
  const cartProducts = useSelector(selectCartProducts)

  const isInCart = useMemo(
    () => cartProducts.some((prod) => product.id === prod.id),
    [cartProducts, product.id]
  )

  return (
    <button
      onClick={() => {
        dispatch(addToCart(product))
      }}
      disabled={isInCart}
      className="
      rounded-lg 
      bg-gradient-to-r 
      from-[#FF851A] 
      to-[#FFAC2C] 
      px-6 
      py-2 
      text-lg 
      font-semibold 
      text-white
  "
    >
      {isInCart ? <div>Is Added</div> : <div>Add to Cart</div>}
    </button>
  )
}

export default Cart
