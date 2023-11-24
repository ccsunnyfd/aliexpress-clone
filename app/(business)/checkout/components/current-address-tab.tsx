import Link from 'next/link'
import { AiOutlinePlus } from 'react-icons/ai'

const currentAddressTab = async ({
  currentAddress,
}: {
  currentAddress: Address | null
}) => {
  return (
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
                <div className="font-bold">{currentAddress.name}</div>
              </li>
              <li className="flex items-center gap-2">
                <div>Address:</div>
                <div className="font-bold"> {currentAddress.address} </div>
              </li>
              <li className="flex items-center gap-2">
                <div>Zip Code:</div>
                <div className="font-bold">{currentAddress.zipcode} </div>
              </li>
              <li className="flex items-center gap-2">
                <div>City:</div>
                <div className="font-bold"> {currentAddress.city} </div>
              </li>
              <li className="flex items-center gap-2">
                <div>Country:</div>
                <div className="font-bold">{currentAddress.country} </div>
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
  )
}

export default currentAddressTab
