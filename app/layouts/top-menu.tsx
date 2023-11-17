import { MdInstallMobile } from 'react-icons/md'
import AccountDropMenu from '@/app/layouts/components/account-drop-menu'

const TopMenu = () => {
  return (
    <div id="TopMenu" className="hidden w-full border-b bg-[#FAFAFA] md:block">
      <ul
        className="flex h-10 max-w-[1200px] items-center justify-end 
                    bg-[#FAFAFA] px-2 text-xs font-light text-[#333333]"
      >
        <li className="cursor-pointer border-r border-r-gray-400 px-3 hover:text-[#FF4646]">
          Sell on AliExpress
        </li>
        <li className="cursor-pointer border-r border-r-gray-400 px-3 hover:text-[#FF4646]">
          Cookie Preferences
        </li>
        <li className="cursor-pointer border-r border-r-gray-400 px-3 hover:text-[#FF4646]">
          Help
        </li>
        <li className="cursor-pointer border-r border-r-gray-400 px-3 hover:text-[#FF4646]">
          Buyer Protection
        </li>
        <li className="flex cursor-pointer items-center justify-center px-3 hover:text-[#FF4646]">
          <MdInstallMobile className="text-[17px]" />
          App
        </li>
        <li className="h-full">
          <AccountDropMenu />
        </li>
      </ul>
    </div>
  )
}

export default TopMenu
