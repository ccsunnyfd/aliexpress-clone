'use client'

import {
  selectShowMenuOverlay,
  useDispatch,
  useSelector,
  userSlice,
} from '@/lib/redux'
import Link from 'next/link'
import Image from 'next/image'
import { SlClose } from 'react-icons/sl'
import { PiPenThin } from 'react-icons/pi'
import { PiShoppingCartSimpleThin } from 'react-icons/pi'
import { PiSignInThin } from 'react-icons/pi'
import { PiSignOutThin } from 'react-icons/pi'

const MenuOverlay = () => {
  const dispatch = useDispatch()
  const showMenuOverlay = useSelector(selectShowMenuOverlay)
  const { switchMenuOverlay } = userSlice.actions

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
                onClick={() => {}}
                // @click="goTo('orders')"
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
                onClick={() => {}}
                // @click="goTo('shoppingcart')"
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
                  {/* {{ userStore.cart.length }} */}
                  14
                </div>
              </li>

              <li
                // v-if="user"
                onClick={() => {}}
                // @click="signOut()"
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
                  <PiSignOutThin className="text-[33px]" />
                  <span className="pl-4">Sign out</span>
                </div>
              </li>

              <li
                // v-else
                onClick={() => {}}
                // @click="signIn()"
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
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuOverlay
