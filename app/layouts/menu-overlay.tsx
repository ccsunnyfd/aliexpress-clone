'use client'

import {
  selectCartProducts,
  selectIsLoggedIn,
  selectShowMenuOverlay,
  useDispatch,
  useSelector,
  userSlice,
} from '@/utils/redux'
import Link from 'next/link'
import Image from 'next/image'
import { SlClose } from 'react-icons/sl'
import { PiPenThin } from 'react-icons/pi'
import { PiShoppingCartSimpleThin } from 'react-icons/pi'
import { AiOutlineLoading } from 'react-icons/ai'
import { PiSignInThin } from 'react-icons/pi'
import { PiSignOutThin } from 'react-icons/pi'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'

const MenuOverlay = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const showMenuOverlay = useSelector(selectShowMenuOverlay)
  const cartProducts = useSelector(selectCartProducts)
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const { switchMenuOverlay, setIsLoggedIn } = userSlice.actions

  const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false)

  const supabase = createClient()

  const fetchUser = useCallback(async () => {
    try {
      const { error } = await supabase.auth.getUser()
      if (!error) {
        await dispatch(setIsLoggedIn(true))
      } else {
        await dispatch(setIsLoggedIn(false))
      }
    } catch (e) {
      console.log(e)
    }
  }, [dispatch, setIsLoggedIn, supabase.auth])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <>
      <div
        className={`${
          showMenuOverlay
            ? 'visible max-h-[100vh] transition-all duration-200 ease-in'
            : 'invisible max-h-0 transition-all duration-200 ease-out'
        }`}
      >
        <div
          id="MenuOverlay"
          className="fixed bottom-0 z-50 h-full w-full bg-white px-3"
        >
          <div className="flex items-center justify-between py-5">
            <Link
              href="/"
              onClick={() => {
                dispatch(switchMenuOverlay(false))
              }}
            >
              <div className="relative h-[40px] w-[170px]">
                <Image
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  referrerPolicy="no-referrer"
                  src="/AliExpress-logo.png"
                  alt="logo"
                />
              </div>
            </Link>

            <button
              onClick={() => {
                dispatch(switchMenuOverlay(false))
              }}
              className="rounded-full p-1 hover:bg-gray-200"
            >
              <SlClose className="text-[30px]" />
            </button>
          </div>

          <div className="flex items-center justify-between pt-5">
            <ul className="w-full">
              <li
                onClick={() => {
                  dispatch(switchMenuOverlay(false))
                  router.push('/orders')
                }}
                className="
                        relative 
                        flex 
                        cursor-pointer 
                        items-center 
                        justify-between 
                        border-b 
                        px-3 
                        py-2.5 
                        hover:bg-gray-100
                    "
              >
                <div className=" flex items-center text-[20px] font-semibold">
                  <PiPenThin className="text-[33px]" />
                  <span className="pl-4">My Orders</span>
                </div>
              </li>

              <li
                onClick={() => {
                  dispatch(switchMenuOverlay(false))
                  router.push('/carts')
                }}
                className="
                        relative 
                        flex 
                        cursor-pointer 
                        items-center 
                        justify-between 
                        border-b 
                        px-3 
                        py-2.5 
                        hover:bg-gray-100
                    "
              >
                <div className=" flex items-center text-[20px] font-semibold">
                  <PiShoppingCartSimpleThin className="text-[33px]" />
                  <span className="pl-4">Cart</span>
                </div>
                <div
                  className="
                            flex 
                            h-[35px] 
                            min-w-[35px] 
                            items-center 
                            justify-center 
                            rounded-full 
                            bg-[#FF4646] 
                            text-lg
                            text-white
                        "
                >
                  {cartProducts.length}
                </div>
              </li>

              {isLoggedIn ? (
                <li
                  onClick={async () => {
                    setIsLoggingOut(true)
                    try {
                      await supabase.auth.signOut()
                      await dispatch(setIsLoggedIn(false))
                      await dispatch(switchMenuOverlay(false))
                    } catch (e) {
                      console.log(e)
                    } finally {
                      setIsLoggingOut(false)
                    }
                  }}
                  className="
                        relative 
                        flex 
                        cursor-pointer 
                        items-center 
                        justify-between 
                        border-b 
                        px-3 
                        py-2.5 
                        hover:bg-gray-100
                    "
                >
                  <div className=" flex items-center text-[20px] font-semibold">
                    {isLoggingOut ? (
                      <AiOutlineLoading className="mr-2 animate-spin text-[13px]" />
                    ) : (
                      <>
                        <PiSignOutThin className="text-[33px]" />
                        <span className="pl-4">Sign out</span>
                      </>
                    )}
                  </div>
                </li>
              ) : (
                <li
                  onClick={() => {
                    dispatch(switchMenuOverlay(false))
                    router.push('/auth')
                  }}
                  className="
                        relative 
                        flex 
                        cursor-pointer 
                        items-center 
                        justify-between 
                        border-b 
                        px-3 
                        py-2.5 
                        hover:bg-gray-100
                    "
                >
                  <div className=" flex items-center text-[20px] font-semibold">
                    <PiSignInThin className="text-[33px]" />
                    <span className="pl-4">Sign in / Register</span>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuOverlay
