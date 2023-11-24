import { Suspense } from 'react'
import getAddressByUserId from '@/app/third-party-requests/prisma/get-address-by-user-id'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import CurrentAddressTab from './components/current-address-tab'
import Total from './components/total'
import CheckoutList from './components/checkout-list'
import PayformElement from './components/payform-element'

async function fetchAdddressByUser(userId: string) {
  let currentAddress: Address | null = null
  try {
    currentAddress = await getAddressByUserId(userId)
  } catch (e) {
    console.log(e)
  }
  return currentAddress
}

const Page = async () => {
  const supabase = createClient(cookies())
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    return <>cannot get session info!</>
  }
  const currentAddress = await fetchAdddressByUser(data.user.id)

  return (
    <div id="CheckoutPage" className="mx-auto mt-4 max-w-[1200px] px-2">
      <div className="mx-auto w-full justify-between gap-4 md:flex">
        <div className="md:w-[65%]">
          <Suspense fallback={<div>Loading...</div>}>
            <CurrentAddressTab currentAddress={currentAddress} />
          </Suspense>

          <div id="Items" className="mt-4 rounded-lg bg-white p-4">
            <CheckoutList />
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
                <Total />
              </div>
            </div>

            <PayformElement currentAddress={currentAddress} />
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
