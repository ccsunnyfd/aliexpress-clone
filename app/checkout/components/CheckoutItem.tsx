import Image from 'next/image'

type CheckoutItemProps = {
  product: Product
}

const CheckoutItem = ({ product }: CheckoutItemProps) => {
  return (
    <div className="my-2 flex justify-start">
      <div className="relative h-[90px] w-[90px] md:w-[150px]">
        <Image
          className="rounded-md"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          referrerPolicy="no-referrer"
          src={product.url}
          alt="product image"
        />
      </div>
      <div className="overflow-hidden pl-2">
        <div className="flex items-center">
          <span className="min-w-[80px] rounded-sm bg-[#FD374F] px-1.5 text-[9px] font-semibold text-white">
            Welcome Deal
          </span>
          <div className="truncate pl-2">{product.title} </div>
        </div>

        <div className="mt-2 text-lg font-semibold">
          $ <span className="font-bold">{product.price / 100}</span>
        </div>
      </div>
    </div>
  )
}

export default CheckoutItem
