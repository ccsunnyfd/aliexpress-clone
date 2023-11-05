'use client'

import { useState } from 'react'

type TextInputProps = {
  input: string
  placeholder: string
  max: number
  inputType: string
  autoFocus?: boolean
  error?: string
  inputChangeHandler: React.ChangeEventHandler<HTMLInputElement>
}

const TextInput = ({
  input,
  placeholder,
  max,
  inputType,
  autoFocus = false,
  error,
  inputChangeHandler,
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  return (
    <div>
      <input
        placeholder={placeholder}
        maxLength={max}
        className={`${isFocused ? 'border-gray-900' : ''} ${
          error ? 'border-red-500' : ''
        }
              w-full
              rounded-lg
              border
              border-[#EFF0EB]
              bg-white
              p-3
              text-sm
              text-gray-800
              placeholder-gray-500
              focus:outline-none`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type={inputType}
        value={input}
        autoFocus={autoFocus}
        onChange={(e) => inputChangeHandler(e)}
        autoComplete="off"
      />
      {error ? (
        <span className="text-[14px] font-semibold text-red-500">{error}</span>
      ) : (
        ''
      )}
    </div>
  )
}

export default TextInput
