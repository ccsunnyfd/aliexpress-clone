'use client'

import { useCallback, useState } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
import TextInput from '../../components/TextInput'

const Page = () => {
  const [isWorking, setIsWorking] = useState<boolean>(false)

  const [contactName, setContactName] = useState<string | null>(null)
  const [address, setAddress] = useState<string | null>(null)
  const [zipCode, setZipCode] = useState<string | null>(null)
  const [city, setCity] = useState<string | null>(null)
  const [country, setCountry] = useState<string | null>(null)

  const [error, setError] = useState<Error | null>(null)

  const submit = useCallback(() => {}, [])

  return (
    <div id="AddressPage" className="mx-auto mt-4 max-w-[500px] px-2">
      <div className="mx-auto rounded-lg bg-white p-3">
        <div className="text-bold mb-2 text-xl">Address Details</div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            submit()
          }}
        >
          <div className="w-full">
            <TextInput
              input={contactName || ''}
              placeholder="Contact Name"
              max={50}
              inputType="text"
              error={error && error.type == 'contactName' ? error.message : ''}
              inputChangeHandler={(e) => {
                setContactName(e.target.value)
              }}
            />
          </div>

          <div className="mt-2 w-full">
            <TextInput
              input={address || ''}
              placeholder="Address"
              max={80}
              inputType="text"
              error={error && error.type == 'address' ? error.message : ''}
              inputChangeHandler={(e) => {
                setAddress(e.target.value)
              }}
            />
          </div>

          <div className="mt-2 w-full">
            <TextInput
              input={zipCode || ''}
              placeholder="Zip Code"
              max={10}
              inputType="text"
              error={error && error.type == 'zipCode' ? error.message : ''}
              inputChangeHandler={(e) => {
                setZipCode(e.target.value)
              }}
            />
          </div>

          <div className="mt-2 w-full">
            <TextInput
              input={city || ''}
              placeholder="City"
              max={20}
              inputType="text"
              error={error && error.type == 'city' ? error.message : ''}
              inputChangeHandler={(e) => {
                setCity(e.target.value)
              }}
            />
          </div>

          <div className="mt-2 w-full">
            <TextInput
              input={country || ''}
              placeholder="Country"
              max={20}
              inputType="text"
              error={error && error.type == 'country' ? error.message : ''}
              inputChangeHandler={(e) => {
                setCountry(e.target.value)
              }}
            />
          </div>

          <button
            disabled={isWorking}
            type="submit"
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
            {!isWorking ? (
              <div>Update Address</div>
            ) : (
              <AiOutlineLoading className="mr-2 animate-spin text-[25px]" />
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Page
