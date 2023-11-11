import { useCallback, useState } from 'react'
import Image from 'next/image'
import { RiDeleteBin6Line } from 'react-icons/ri'

type CartItemProps = {
  product: Product
  onSelectedRadio: () => void
}

const CartItem = ({ product, onSelectedRadio }: CartItemProps) => {
  const [isSelected, setIsSelected] = useState(false)

  const removeFromCart = useCallback(() => {}, [])

  return (
    <div className="my-2 flex justify-start">
      <div className="my-auto">
        <div className="group flex cursor-pointer items-center justify-start p-0.5">
          <div
            onClick={() => setIsSelected((prev) => !prev)}
            className={`ml-2 mr-5
               flex h-[20px] w-[20px] items-center justify-center
                rounded-full border border-gray-300 group-hover:border-[#FD374F] ${
                  isSelected ? 'bg-[#FD374F]' : ''
                }`}
          >
            <div className="h-[8px] w-[8px] rounded-full bg-white" />
          </div>
        </div>
      </div>

      <div className="h-90px] relative w-[90px] md:h-[150px] md:w-[150px]">
        <Image
          className="rounded-md"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          referrerPolicy="no-referrer"
          src={product.url}
          alt="cart item image"
        />
      </div>

      <div className="w-full overflow-hidden pl-2">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center justify-between truncate">
            <span className="hidden min-w-[80px] rounded-sm bg-[#FD374F] px-1.5 text-[9px] font-semibold text-white sm:block">
              Welcome Deal
            </span>
            <div className="truncate sm:pl-2">{product.title}</div>
          </div>
          <button
            onClick={() => removeFromCart()}
            className="mx-3 -mt-0.5 hidden hover:text-red-500 sm:block"
          >
            <RiDeleteBin6Line className="text-[20px]" />
          </button>
        </div>

        <div className="text-xl font-semibold">
          $ <span className="font-bold">{product.price / 100}</span>
        </div>

        <p className="pt-1 text-xs font-semibold text-[#009A66]">
          Free 11-day delivery over ￡8.28
        </p>

        <p className="pt-1 text-xs font-semibold text-[#009A66]">
          Free Shipping
        </p>

        <div className="flex items-center justify-end">
          <button
            onClick={() => removeFromCart()}
            className="-mt-0.5 block hover:text-red-500 sm:hidden"
          >
            <RiDeleteBin6Line className="text-[20px]" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
