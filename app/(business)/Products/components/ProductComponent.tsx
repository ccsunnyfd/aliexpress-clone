import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'
import { MdStarRate } from 'react-icons/md'

const ProductComponent = ({ product }: { product: Product }) => {
  const priceComputed = useMemo(() => product.price / 100, [product.price])

  const oldPriceComputed = useMemo(
    () => ((product.price + product.price / 20) / 100).toFixed(2),
    [product.price]
  )

  return (
    <>
      <div
        className="
          inline-block 
          cursor-pointer 
          rounded 
          bg-white 
          hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.15)]
      "
      >
        <Link href={`/items/${product.id}`}>
          <div className="relative h-[200px] max-w-full sm:h-[150px] md:h-[165px] lg:h-[150px]">
            <Image
              className="rounded-t"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              referrerPolicy="no-referrer"
              src={product.url}
              alt="product"
            />
          </div>
          <div id="ProductDetails">
            <span className="flex items-center justify-start gap-3 px-1 pt-1">
              <span className="font-semibold text-[#FF6674]">
                {priceComputed}
              </span>
              <span className="text-light text-sm text-gray-500 line-through">
                {oldPriceComputed}
              </span>
            </span>

            <span className="relative -top-1.5 px-1 text-xs font-semibold text-[#FF6674]">
              Extra 5% off
            </span>

            <div className="relative -top-1 flex items-center gap-1 px-1">
              <span className="rounded-sm bg-[#FD374F] px-1.5 text-[9px] font-semibold text-white">
                Welcome Deal
              </span>
              <span className="rounded-sm border bg-[#F5F5F5] px-1.5 text-[9px] font-semibold text-[#C08562]">
                Top Selling
              </span>
            </div>

            <p className="flex items-center px-1 pt-0.5 text-xs text-[#252525]">
              5,000+ sold <MdStarRate className="ml-1.5 text-[#757575]" /> 4.7
            </p>

            <p className="px-1 pt-0.5 text-xs text-[#252525]">
              {product.title.substring(0, 60)}
            </p>

            <p className="px-1 pb-1">
              <span className="text-xs font-semibold text-[#009A66]">
                Free Shipping
              </span>
            </p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ProductComponent
