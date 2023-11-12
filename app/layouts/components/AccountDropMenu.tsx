'use client'

import { PiUserThin } from 'react-icons/pi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { type User } from '@supabase/supabase-js'
import { usePathname } from 'next/navigation'

const AccountDropMenu = () => {
  const currentPath = usePathname()
  const [showAccountMenu, setShowAccountMenu] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  const supabase = createClient()

  const fetchUser = useCallback(async () => {
    const { data, error } = await supabase.auth.getUser()
    if (!error) {
      setUser(data.user)
    } else {
      setUser(null)
    }
  }, [supabase.auth])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  const logout = useCallback(async () => {
    await supabase?.auth.signOut()
    setUser(null)
  }, [supabase?.auth])

  return (
    <div
      onMouseEnter={() => setShowAccountMenu(true)}
      onMouseLeave={() => setShowAccountMenu(false)}
      className={`${
        showAccountMenu
          ? 'bg-white shadow-[0_15px_100px_40px_rgba(0,0,0,0.3)]'
          : 'border border-[#FAFAFA]'
      }  relative z-40 flex h-full cursor-pointer items-center justify-center border px-2.5 hover:text-[#FF4646]`}
    >
      <PiUserThin className="text-[17px]" />
      Account
      <MdKeyboardArrowDown className="ml-5 text-[15px]" />
      {showAccountMenu && (
        <div
          id="AccountMenu"
          className="absolute -left-[100px] top-[38px] z-40 w-[220px] border-x border-b bg-white text-[#333333]"
        >
          {!user && (
            <div>
              <div className="text-semibold my-4 px-3 text-[15px]">
                Welcome to AliExpress!
              </div>
              <div className="mb-3 flex items-center gap-1 px-3">
                <Link
                  href={`/auth?next=${currentPath}`}
                  className="w-full rounded-sm bg-[#FF4646] p-2 text-center text-[16px] font-semibold text-white"
                >
                  Login / Register
                </Link>
              </div>
            </div>
          )}
          <div className="border-b" />
          {user && (
            <ul className="bg-white ">
              <Link href="/carts">
                <li className="w-full px-4 py-2 text-[13px] hover:bg-gray-200">
                  My Orders
                </li>
              </Link>
              <li
                onClick={() => logout()}
                className="w-full px-4 py-2 text-[13px] hover:bg-gray-200"
              >
                Sign out
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

export default AccountDropMenu
