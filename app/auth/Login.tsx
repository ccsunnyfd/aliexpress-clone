'use client'

import { useCallback, useState } from 'react'
import TextInput from '../components/TextInput'

const Login = () => {
  const [email, setEmail] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)
  const [errors, setErrors] = useState<Error | null>(null)

  const login = useCallback(() => {}, [])

  return (
    <>
      <div className="mb-4 text-center text-[28px] font-bold">Log in</div>

      <div className="px-6 pb-1.5 text-[15px]">Email address</div>

      <div className="px-6 pb-2">
        <TextInput
          placeholder="Email address"
          input={email || ''}
          inputChangeHandler={(e) => {
            setEmail(e.target.value)
          }}
          max={30}
          inputType="email"
          autoFocus={true}
          error={errors && errors.email ? errors.email[0] : ''}
        />
      </div>

      <div className="px-6 pb-2">
        <TextInput
          placeholder="Password"
          input={password || ''}
          inputType="password"
          max={40}
          inputChangeHandler={(e) => {
            setPassword(e.target.value)
          }}
        />
      </div>
      <div className="px-6 text-[12px] text-gray-600">Forgot password?</div>

      <div className="mt-6 px-6 pb-2">
        <button
          disabled={!email || !password}
          className={`${
            !email || !password ? 'bg-gray-200' : 'bg-[#F02C56]'
          } w-full rounded-sm py-3 text-[17px] font-semibold text-white`}
          onClick={() => login()}
        >
          Log in
        </button>
      </div>
    </>
  )
}

export default Login
