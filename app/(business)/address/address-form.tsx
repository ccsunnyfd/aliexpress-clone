'use client'

import { AiOutlineLoading } from 'react-icons/ai'
import { useFormState, useFormStatus } from 'react-dom'
import { submitAddress } from './actions'

type AddressFormProps = {
  initValue: Address | null
}

const initialState = {
  message: null,
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="
          mt-6
          w-full 
          rounded-full 
          bg-gradient-to-r
          from-[#FE630C] 
          to-[#FF3200] 
          p-1.5 
          text-[21px] 
          font-semibold 
          text-white
      "
    >
      {!pending ? (
        <div>Update Address</div>
      ) : (
        <AiOutlineLoading className="mr-2 animate-spin text-[25px]" />
      )}
    </button>
  )
}

const AddressForm = ({ initValue }: AddressFormProps) => {
  const [state, formAction] = useFormState(submitAddress, initialState)

  return (
    <form action={formAction}>
      <input type="hidden" name="id" defaultValue={initValue?.id} />
      <div className="w-full">
        <input
          name="name"
          defaultValue={initValue?.name || ''}
          placeholder="Contact Name"
          max={50}
          type="text"
          className="
                w-full
                rounded-lg
                border
                border-[#EFF0EB]
                bg-white
                p-3
                text-sm
                text-gray-800
                placeholder-gray-500
                focus:border-gray-900 focus:outline-none"
        />
      </div>

      <div className="mt-2 w-full">
        <input
          name="address"
          defaultValue={initValue?.address || ''}
          placeholder="Address"
          max={80}
          type="text"
          className="
          w-full
          rounded-lg
          border
          border-[#EFF0EB]
          bg-white
          p-3
          text-sm
          text-gray-800
          placeholder-gray-500
          focus:border-gray-900 focus:outline-none"
        />
      </div>

      <div className="mt-2 w-full">
        <input
          name="zipcode"
          defaultValue={initValue?.zipcode || ''}
          placeholder="Zip Code"
          max={10}
          type="text"
          className="
          w-full
          rounded-lg
          border
          border-[#EFF0EB]
          bg-white
          p-3
          text-sm
          text-gray-800
          placeholder-gray-500
          focus:border-gray-900 focus:outline-none"
        />
      </div>

      <div className="mt-2 w-full">
        <input
          name="city"
          defaultValue={initValue?.city || ''}
          placeholder="City"
          max={20}
          type="text"
          className="
          w-full
          rounded-lg
          border
          border-[#EFF0EB]
          bg-white
          p-3
          text-sm
          text-gray-800
          placeholder-gray-500
          focus:border-gray-900 focus:outline-none"
        />
      </div>

      <div className="mt-2 w-full">
        <input
          name="country"
          defaultValue={initValue?.country || ''}
          placeholder="Country"
          max={20}
          type="text"
          className="
          w-full
          rounded-lg
          border
          border-[#EFF0EB]
          bg-white
          p-3
          text-sm
          text-gray-800
          placeholder-gray-500
          focus:border-gray-900 focus:outline-none"
        />
      </div>
      <SubmitButton />
      <p className="bg-slate-300 text-red-300">{state?.message}</p>
    </form>
  )
}

export default AddressForm
