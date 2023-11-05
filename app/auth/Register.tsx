'use client'

import { useCallback, useState } from 'react'
import TextInput from '../components/TextInput'

const Register = () => {
  const [name, setName] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)
  const [confirmPassword, setConfirmPassword] = useState<string | null>(null)
  const [errors, setErrors] = useState<Error | null>(null)

  const register = useCallback(() => {}, [])

  return (
    <>
      <div className="mb-4 text-center text-[28px] font-bold">Sign up</div>

      <div className="px-6 pb-2">
        <TextInput
          placeholder="Full name"
          input={name || ''}
          inputType="text"
          autoFocus={true}
          max={30}
          inputChangeHandler={(e) => setName(e.target.value)}
          error={errors && errors.name ? errors.name[0] : ''}
        />
      </div>

      <div className="px-6 pb-2">
        <TextInput
          placeholder="Email address"
          input={email || ''}
          inputType="email"
          max={50}
          inputChangeHandler={(e) => setEmail(e.target.value)}
          error={errors && errors.email ? errors.email[0] : ''}
        />
      </div>

      <div className="px-6 pb-2">
        <TextInput
          placeholder="Password"
          input={password || ''}
          max={60}
          inputType="password"
          inputChangeHandler={(e) => setPassword(e.target.value)}
          error={errors && errors.password ? errors.password[0] : ''}
        />
      </div>

      <div className="px-6 pb-2">
        <TextInput
          placeholder="Confirm password"
          input={confirmPassword || ''}
          inputType="password"
          max={60}
          inputChangeHandler={(e) => setConfirmPassword(e.target.value)}
          error={
            errors && errors.confirmPassword ? errors.confirmPassword[0] : ''
          }
        />
      </div>
      <div className="px-6 text-[12px] text-gray-600">Forgot password?</div>

      <div className="mt-6 px-6 pb-2">
        <button
          disabled={!name || !email || !password || !confirmPassword}
          className={`${
            !name || !email || !password || !confirmPassword
              ? 'bg-gray-200'
              : 'bg-[#F02C56]'
          } w-full rounded-sm bg-[#F02C56] py-3 text-[17px] font-semibold text-white`}
          onClick={() => register()}
        >
          Sign up
        </button>
      </div>
    </>
  )
}

export default Register
