'use client'

import { type ChangeEvent, useCallback, useState } from 'react'
import SearchBar from './SearchBar'
import Image from 'next/image'
import Link from 'next/link'

const SearchHintComp = () => {
  const [searchText, setSearchText] = useState('')

  const searchChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.target.value)
    },
    []
  )

  return (
    <div className="relative">
      <SearchBar
        searchText={searchText}
        searchTextChangeHandler={searchChangeHandler}
      />

      <div className="absolute h-auto w-full max-w-[700px] bg-white">
        <div
          // v-if="items && items.data"
          // v-for="item in items.data"
          className="p-1"
        >
          <Link
            href={`/item/11`}
            className="flex w-full cursor-pointer items-center justify-between hover:bg-gray-100"
          >
            <div className="flex items-center">
              <div className="relative h-[40px] w-[40px]">
                <Image
                  className="rounded-md"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  referrerPolicy="no-referrer"
                  src="https://picsum.photos/id/83/300/320.jpg"
                  alt="hint item"
                />
              </div>
              <div className="ml-2 truncate">item title</div>
            </div>
            <div className="truncate">$5.43</div>
          </Link>
          <Link
            href={`/item/11`}
            className="flex w-full cursor-pointer items-center justify-between hover:bg-gray-100"
          >
            <div className="flex items-center">
              <div className="relative h-[40px] w-[40px]">
                <Image
                  className="rounded-md"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  referrerPolicy="no-referrer"
                  src="https://picsum.photos/id/83/300/320.jpg"
                  alt="hint item"
                />
              </div>
              <div className="ml-2 truncate">item title</div>
            </div>
            <div className="truncate">$5.43</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SearchHintComp
