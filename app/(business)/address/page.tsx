import AddressForm from './address-form'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import getAddressByUserId from '@/app/third-party-requests/prisma/get-address-by-user-id'
import Link from 'next/link'
import { PiShoppingCartSimpleLight } from 'react-icons/pi'

const page = async () => {
  const supabase = createClient(cookies())
  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) {
    return <>cannot get session info!</>
  }

  const initAddress = await getAddressByUserId(data.user.id)

  return (
    <div id="AddressPage" className="mx-auto mt-4 max-w-[500px] px-2">
      <div className="mx-auto rounded-lg bg-white p-3">
        <div className="text-bold mb-2 text-xl">Address Details</div>
        <AddressForm initValue={initAddress} />
        <Link
          className="
          mt-6
          p-1.5 
      "
          href="/carts"
        >
          <PiShoppingCartSimpleLight className="text-[33px] group-hover:text-[#FF4646]" />
        </Link>
      </div>
    </div>
  )
}

export default page
