'use client'

import {
  selectShowMenuOverlay,
  useSelector,
  userSlice,
  useDispatch,
} from '@/utils/redux'
import { RxHamburgerMenu } from 'react-icons/rx'

const MenuButton = () => {
  const showMenuOverlay = useSelector(selectShowMenuOverlay)
  const dispatch = useDispatch()
  const { switchMenuOverlay } = userSlice.actions

  return (
    <>
      <button
        onClick={() => {
          dispatch(switchMenuOverlay(true))
        }}
        className="-mt-[4px] block rounded-full p-1.5 hover:bg-gray-200 md:hidden"
      >
        <RxHamburgerMenu className="text-[33px]" />
      </button>
    </>
  )
}

export default MenuButton
