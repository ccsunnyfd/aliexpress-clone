'use client'

import Link from 'next/link'
import { useCallback, useState } from 'react'
import { AiOutlinePlus, AiOutlineLoading } from 'react-icons/ai'
import CheckoutItem from './components/checkout-item'

const Page = () => {
  const currentAddress = useState<Address | null>(null)
  const [isProcessing, setIsProcessing] = useState<boolean>(false)

  const [total, setTotal] = useState(1440)

  const pay = useCallback(() => {}, [])

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

  return (
    <div id="CheckoutPage" className="mx-auto mt-4 max-w-[1200px] px-2">
      <div className="mx-auto w-full justify-between gap-4 md:flex">
        <div className="md:w-[65%]">
          <div className="rounded-lg bg-white p-4">
            <div className="mb-2 text-xl font-semibold">Shipping Address</div>
            {currentAddress ? (
              <div>
                <Link
                  href="/address"
                  className="flex items-center pb-2 text-blue-500 hover:text-red-400"
                >
                  <AiOutlinePlus className="mr-2 text-[18px]" />
                  Update Address
                </Link>

                <div className="border-t pt-2">
                  <div className="pb-1 underline">Delivery Address</div>
                  <ul className="text-xs">
                    <li className="flex items-center gap-2">
                      <div>Contact name:</div>
                      <div className="font-bold">currentAddress.name </div>
                    </li>
                    <li className="flex items-center gap-2">
                      <div>Address:</div>
                      <div className="font-bold"> currentAddress.address </div>
                    </li>
                    <li className="flex items-center gap-2">
                      <div>Zip Code:</div>
                      <div className="font-bold">currentAddress.zipcode </div>
                    </li>
                    <li className="flex items-center gap-2">
                      <div>City:</div>
                      <div className="font-bold"> currentAddress.city </div>
                    </li>
                    <li className="flex items-center gap-2">
                      <div>Country:</div>
                      <div className="font-bold"> currentAddress.country </div>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                href="/address"
                className="flex items-center text-blue-500 hover:text-red-400"
              >
                <AiOutlinePlus className="mr-2 text-[18px]" />
                Add New Address
              </Link>
            )}
          </div>

          <div id="Items" className="mt-4 rounded-lg bg-white p-4">
            {testProducts.map((product) => (
              <div key={product.id}>
                <CheckoutItem product={product} />
              </div>
            ))}
          </div>
        </div>

        <div className="my-4 block md:hidden" />
        <div className="md:w-[35%]">
          <div id="PlaceOrder" className="rounded-lg bg-white p-4">
            <div className="mb-2 text-2xl font-extrabold">Summary</div>

            <div className="my-4 flex items-center justify-between">
              <div className="">Total Shipping</div>
              <div className="">Free</div>
            </div>

            <div className="border-t" />

            <div className="my-4 flex items-center justify-between">
              <div className="font-semibold">Total</div>
              <div className="text-2xl font-semibold">
                $ <span className="font-extrabold">{total / 100}</span>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                pay()
              }}
            >
              <div
                className="rounded-sm border border-gray-500 p-2"
                id="card-element"
              />

              <p
                id="card-error"
                role="alert"
                className="text-center font-semibold text-red-700"
              />

              <button
                disabled={isProcessing}
                type="submit"
                className={`${isProcessing ? 'opacity-70' : 'opacity-100'}
                                mt-4
                                w-full 
                                rounded-full 
                                bg-gradient-to-r
                                from-[#FE630C] 
                                to-[#FF3200] 
                                p-1.5 
                                text-[21px] 
                                font-semibold 
                                text-white`}
              >
                {isProcessing ? (
                  <AiOutlineLoading className="animate-spin" />
                ) : (
                  <div>Place order</div>
                )}
              </button>
            </form>
          </div>

          <div className="mt-4 rounded-lg bg-white p-4">
            <div className="mb-2 mt-2 text-lg font-semibold">AliExpress</div>
            <p className="my-2">
              AliExpress keeps your information and payment safe
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
