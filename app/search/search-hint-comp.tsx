'use client'

import { type ChangeEvent, useCallback, useState, useEffect } from 'react'
import SearchBar from './search-bar'
import Image from 'next/image'
import Link from 'next/link'
import { useDebounce } from 'use-debounce'

async function requestSearch(text: string) {
  const res = await fetch(`/search/callback?search=${text}`, {
    method: 'POST',
  })
  return res.json()
}

const SearchHintComp = () => {
  const [searchText, setSearchText] = useState('')
  const [search] = useDebounce(searchText, 500)

  const [searchResultList, setSearchResultList] = useState<Product[]>([])

  const [isSearching, setIsSearching] = useState<boolean>(false)

  const searchChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.target.value)
    },
    []
  )

  const searchItems = useCallback(async () => {
    setIsSearching(true)
    const res = await requestSearch(search)
    setSearchResultList(res?.data)
    setIsSearching(false)
  }, [search])

  useEffect(() => {
    if (search) {
      searchItems()
    } else {
      setSearchResultList([])
    }
  }, [search, searchItems])

  return (
    <div className="relative">
      <SearchBar
        searchText={searchText}
        searchTextChangeHandler={searchChangeHandler}
        isSearching={isSearching}
      />
      <div className="absolute h-auto w-full max-w-[700px] bg-white">
        {searchResultList.map((item) => (
          <div key={item.id} className="p-1">
            <Link
              href={`/items/${item.id}`}
              className="flex w-full cursor-pointer items-center justify-between hover:bg-gray-100"
            >
              <div className="flex items-center">
                <div className="relative h-[40px] w-[40px]">
                  <Image
                    className="rounded-md"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    referrerPolicy="no-referrer"
                    src={item.url}
                    alt="hint item"
                  />
                </div>
                <div className="ml-2 truncate">{item.title}</div>
              </div>
              <div className="truncate">$ {item.price / 100}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchHintComp
