'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useMemo, useState } from 'react'
import CartItem from './components/cart-item'
import {
  selectCartProducts,
  useDispatch,
  useSelector,
  userSlice,
} from '@/utils/redux'
import { createClient } from '@/utils/supabase/client'
import { type User } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)

  const supabase = createClient()

  const fetchUser = useCallback(async () => {
    try {
      const { data, error } = await supabase.auth.getUser()
      if (!error) {
        setUser(data.user)
      } else {
        setUser(null)
      }
    } catch (e) {
      console.log(e)
    }
  }, [supabase.auth])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  const cards = ['/visa.png', '/mastercard.png', '/paypal.png', '/applepay.png']

  const [selectedItems, setSelectedItems] = useState<Product[]>([])

  const dispatch = useDispatch()
  const { deleteFromCart, addToCheckout } = userSlice.actions
  const cartProducts = useSelector(selectCartProducts)

  const itemSelectedhandler = useCallback(
    (product: Product, isSelected: boolean) => {
      if (isSelected) {
        setSelectedItems((prev) => [...prev, product])
      } else {
        setSelectedItems((prev) =>
          prev.filter((item) => item.id !== product.id)
        )
      }
    },
    []
  )

  const removeFromCart = useCallback(
    (productId: number, isSelected: boolean) => {
      if (isSelected) {
        setSelectedItems((prev) => prev.filter((item) => item.id !== productId))
      }
      dispatch(deleteFromCart(productId))
    },
    [deleteFromCart, dispatch]
  )

  const totalPriceComputed = useMemo(() => {
    const total = selectedItems.reduce(
      (sum, item) => sum + item.price * item.amount!,
      0
    )
    return total / 100
  }, [selectedItems])

  const goToCheckout = useCallback(() => {
    // add selectedItems to userStore.checkout
    dispatch(addToCheckout(selectedItems))

    // remove selectedItems from userStore.cart
    selectedItems.forEach((item) => dispatch(deleteFromCart(item.id)))

    // navigate to '/checkout'
    router.push('/checkout')
  }, [addToCheckout, deleteFromCart, dispatch, router, selectedItems])

  return (
    <>
      <div id="ShoppingCartPage" className="mx-auto mt-4 max-w-[1200px] px-2">
        {cartProducts.length === 0 ? (
          <div className="flex h-[500px] items-center justify-center">
            <div className="pt-20">
              <div className="relative h-[250px] w-[250px]">
                <Image
                  className="mx-auto"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  referrerPolicy="no-referrer"
                  src="/cart-empty.png"
                  alt="cart image"
                />
              </div>

              <div className="mt-4 text-center text-xl">No items yet?</div>

              {!user && (
                <div className="flex text-center">
                  <Link
                    href="/auth"
                    className="
                              mt-4 
                              w-full 
                              rounded-full 
                              bg-[#FD374F] 
                              p-1.5 
                              text-[21px] 
                              font-semibold
                              text-white
                          "
                  >
                    Sign in
                  </Link>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="mx-auto w-full justify-between gap-4 md:flex">
            <div className="md:w-[65%]">
              <div className="rounded-lg bg-white p-4">
                <div className="mb-2 text-2xl font-bold">
                  Shopping Cart ({cartProducts.length})
                </div>
              </div>

              <div className="mt-4 rounded-lg bg-[#FEEEEF] p-4">
                <div className="font-bold text-red-500">
                  Welcome Deal applicable on 1 item only
                </div>
              </div>

              <div id="Items" className="mt-4 rounded-lg bg-white p-4">
                {cartProducts.map((product: Product) => (
                  <div key={product.id}>
                    <CartItem
                      product={product}
                      onSelect={(product: Product, isSelected: boolean) =>
                        itemSelectedhandler(product, isSelected)
                      }
                      onRemove={(productId: number, isSelected: boolean) =>
                        removeFromCart(productId, isSelected)
                      }
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="my-4 block md:hidden" />
            <div className="md:w-[35%]">
              <div id="Summary" className="rounded-lg bg-white p-4">
                <div className="mb-2 text-2xl font-extrabold">Summary</div>
                <div className="my-4 flex items-center justify-between">
                  <div className="font-semibold">Total</div>
                  <div className="text-2xl font-semibold">
                    $
                    <span className="font-extrabold">{totalPriceComputed}</span>
                  </div>
                </div>
                <button
                  onClick={() => goToCheckout()}
                  className="
                              mt-4
                              flex
                              w-full
                              items-center 
                              justify-center 
                              rounded-full 
                              bg-[#FD374F] 
                              p-1.5 
                              text-[21px] 
                              font-semibold
                              text-white
                          "
                >
                  Checkout
                </button>
              </div>

              <div
                id="PaymentProtection"
                className="mt-4 rounded-lg bg-white p-4"
              >
                <div className="mb-2 text-lg font-semibold">
                  Payment methods
                </div>
                <div className="my-4 flex items-center justify-start gap-8">
                  {cards.map((card, idx) => (
                    <div key={idx} className="relative h-6 w-6">
                      <Image
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        referrerPolicy="no-referrer"
                        src={card}
                        alt="card image"
                      />
                    </div>
                  ))}
                </div>

                <div className="border-b" />

                <div className="mb-2 mt-2 text-lg font-semibold">
                  Buyer Protection
                </div>
                <p className="my-2">
                  Get full refund if the item is not as described or if is not
                  delivered
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Page
