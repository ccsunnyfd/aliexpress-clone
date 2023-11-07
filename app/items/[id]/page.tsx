import { MdStarRate } from 'react-icons/md'
import { MdStars } from 'react-icons/md'
import getProductById from '@/app/third-party-requests/prisma/get-product-by-id'
import PreviewImages from './components/PreviewImages'
import { Suspense } from 'react'
import Cart from './components/Cart'

const Page = async ({ params }: { params: { id: number } }) => {
  const product = await getProductById(Number(params.id))

  const images = [
    '',
    'https://picsum.photos/id/212/800/800',
    'https://picsum.photos/id/233/800/800',
    'https://picsum.photos/id/165/800/800',
    'https://picsum.photos/id/99/800/800',
    'https://picsum.photos/id/144/800/800',
  ]

  return (
    <div id="ItemPage" className="mx-auto mt-4 max-w-[1200px] px-2">
      <div className="mx-auto w-full justify-between gap-4 md:flex">
        <div className="md:w-[40%]">
          <Suspense fallback={<div>Loading...</div>}>
            <PreviewImages images={images} initPreview={product?.url || ''} />
          </Suspense>
        </div>
        <div className="rounded-lg bg-white p-3 md:w-[60%]">
          <div>
            <p className="mb-2">{product?.title}</p>
            <p className="mb-2 text-[12px] font-light">
              {product?.description}
            </p>
          </div>

          <div className="flex items-center pt-1.5">
            <span className="min-w-4 mr-2 h-4 rounded-full bg-[#FFD000] p-0.5">
              <MdStars className="-mt-[17px] text-[12px]" />
            </span>
            <p className="text-[#FF5353]">Extra 5% off</p>
          </div>

          <div className="my-2 flex items-center justify-start">
            {Array(5).map((_, idx) => (
              <MdStarRate key={idx} className="text-[#FF5353]" />
            ))}
            <span className="ml-2 text-[13px] font-light">
              5 213 Reviews 1,000+ orders
            </span>
          </div>

          <div className="border-b" />

          <div className="my-2 flex items-center justify-start gap-2">
            <div className="text-xl font-bold">
              $ {product?.price && product.price / 100}
            </div>
            <span className="rounded-sm border bg-[#F5F5F5] px-1.5 text-[9px] font-semibold text-[#C08562]">
              70% off
            </span>
          </div>

          <p className="pt-1 text-xs font-semibold text-[#009A66]">
            Free 11-day delivery over ￡8.28
          </p>

          <p className="pt-1 text-xs font-semibold text-[#009A66]">
            Free Shipping
          </p>

          <div className="py-2" />

          <Suspense fallback={<div>Loading...</div>}>
            {product ? <Cart product={product} /> : ''}
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Page
