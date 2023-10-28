import Image from 'next/image'
import Link from 'next/link'
import CartItem from './components/CartButton'
import MenuButton from './components/MenuButton'
import SearchHintComp from './components/SearchHintComp'

const MainHeader = () => {
  return (
    <div className="flex w-full items-center bg-white">
      <div className="mx-auto flex w-full max-w-[1150px] justify-between gap-10 px-3 py-5 lg:justify-start">
        <Link href="/" className="min-w-[170px]">
          <div className="relative h-[40px] w-[170px]">
            <Image
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              referrerPolicy="no-referrer"
              src="/AliExpress-logo.png"
              alt="logo"
            />
          </div>
        </Link>

        <div className="hidden w-full max-w-[700px] md:block">
          <SearchHintComp />
        </div>

        <Link href="/shoppingcart" className="flex items-center">
          <CartItem />
        </Link>
        <MenuButton />
      </div>
    </div>
  )
}

export default MainHeader
