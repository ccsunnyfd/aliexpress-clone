'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'

type PreviewImagesProps = {
  images: string[]
  initPreview: string
}

const PreviewImages = ({ images, initPreview }: PreviewImagesProps) => {
  const [currentImage, setCurrentImage] = useState<string>(initPreview)

  const previews = useMemo(
    () => [initPreview, ...images.slice(1)],
    [images, initPreview]
  )

  return (
    <>
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
      <div className="mt-2 flex items-center justify-center">
        {previews.map((img, index) => (
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
    </>
  )
}

export default PreviewImages
