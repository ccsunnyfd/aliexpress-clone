'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useMemo } from 'react'
import CartItem from './components/CartItem'

const Page = () => {
  const cards = ['/visa.png', '/mastercard.png', '/paypal.png', '/applepay.png']

  const testProducts = [
    {
      id: 1,
      title: 'Title 1',
      description: 'This is a description',
      url: 'https://picsum.photos/id/7/800/800',
      price: 9899,
    },
    {
      id: 2,
      title: 'Title 2',
      description: 'This is a description',
      url: 'https://picsum.photos/id/71/800/800',
      price: 9699,
    },
    {
      id: 3,
      title: 'Title 3',
      description: 'This is a description',
      url: 'https://picsum.photos/id/72/800/800',
      price: 9969,
    },
    {
      id: 4,
      title: 'Title 4',
      description: 'This is a description',
      url: 'https://picsum.photos/id/73/800/800',
      price: 29999,
    },
    {
      id: 5,
      title: 'Title 5',
      description: 'This is a description',
      url: 'https://picsum.photos/id/74/800/800',
      price: 9699,
    },
    {
      id: 6,
      title: 'Title 6',
      description: 'This is a description',
      url: 'https://picsum.photos/id/75/800/800',
      price: 94999,
    },
    {
      id: 7,
      title: 'Title 7',
      description: 'This is a description',
      url: 'https://picsum.photos/id/76/800/800',
      price: 39999,
    },
    {
      id: 8,
      title: 'Title 8',
      description: 'This is a description',
      url: 'https://picsum.photos/id/77/800/800',
      price: 93999,
    },
    {
      id: 9,
      title: 'Title 9',
      description: 'This is a description',
      url: 'https://picsum.photos/id/78/800/800',
      price: 99599,
    },
    {
      id: 10,
      title: 'Title 10',
      description: 'This is a description',
      url: 'https://picsum.photos/id/79/800/800',
      price: 69999,
    },
  ]

  const totalPriceComputed = useMemo(() => 200, [])

  const selectedRadioFunc = useCallback(() => {}, [])

  const goToCheckout = useCallback(() => {}, [])

  return (
    <>
      <div id="ShoppingCartPage" className="mx-auto mt-4 max-w-[1200px] px-2">
        {false ? (
          <div
            //   v-if="!userStore.cart.length"
            className="flex h-[500px] items-center justify-center"
          >
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

              <div
                //   v-if="!user"
                className="flex text-center"
              >
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
            </div>
          </div>
        ) : (
          <div className="mx-auto w-full justify-between gap-4 md:flex">
            <div className="md:w-[65%]">
              <div className="rounded-lg bg-white p-4">
                <div className="mb-2 text-2xl font-bold">Shopping Cart (4)</div>
              </div>

              <div className="mt-4 rounded-lg bg-[#FEEEEF] p-4">
                <div className="font-bold text-red-500">
                  Welcome Deal applicable on 1 item only
                </div>
              </div>

              <div id="Items" className="mt-4 rounded-lg bg-white p-4">
                {testProducts.map((product: Product) => (
                  <div key={product.id}>
                    <CartItem
                      product={product}
                      onSelectedRadio={() => selectedRadioFunc()}
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
                    ${' '}
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
