'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { MdStarRate } from 'react-icons/md'
import { MdStars } from 'react-icons/md'

const Page = () => {
  const images = [
    '',
    'https://picsum.photos/id/212/800/800',
    'https://picsum.photos/id/233/800/800',
    'https://picsum.photos/id/165/800/800',
    'https://picsum.photos/id/99/800/800',
    'https://picsum.photos/id/144/800/800',
  ]

  const [currentImage, setCurrentImage] = useState<string | null>(null)

  useEffect(() => {
    setCurrentImage('https://picsum.photos/id/212/800/800')
  }, [])

  const isInCart = useMemo(() => {
    return false
  }, [])

  return (
    <div id="ItemPage" className="mx-auto mt-4 max-w-[1200px] px-2">
      <div className="mx-auto w-full justify-between gap-4 md:flex">
        <div className="md:w-[40%]">
          {currentImage ? (
            <div className="relative h-[450px] w-full">
              <Image
                className="object-fit rounded-lg"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                referrerPolicy="no-referrer"
                src={currentImage!}
                alt="item image"
              />
            </div>
          ) : (
            ''
          )}
          <div className="mt-2 flex items-center justify-center">
            {images.map((img, index) => (
              <div key={index} className="relative h-[70px] w-[70px]">
                <Image
                  onMouseOver={() => {
                    setCurrentImage(img)
                  }}
                  onClick={() => {
                    setCurrentImage(img)
                  }}
                  className={`${
                    currentImage === img ? 'border-[#FF5353]' : ''
                  } object-fit cursor-pointer rounded-md border-[3px]`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  referrerPolicy="no-referrer"
                  src={img}
                  alt="thumbnail"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg bg-white p-3 md:w-[60%]">
          <div>
            <p className="mb-2">product.data.title</p>
            <p className="mb-2 text-[12px] font-light">
              product.data.description
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
            <div className="text-xl font-bold">$ 99.43</div>
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

          <button
            onClick={() => {}}
            disabled={isInCart}
            className="
                rounded-lg 
                bg-gradient-to-r 
                from-[#FF851A] 
                to-[#FFAC2C] 
                px-6 
                py-2 
                text-lg 
                font-semibold 
                text-white
            "
          >
            {isInCart ? <div>Is Added</div> : <div>Add to Cart</div>}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page
