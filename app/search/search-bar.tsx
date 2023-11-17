'use client'

import { useState } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
import { PiMagnifyingGlass } from 'react-icons/pi'

type SearchItemProps = {
  searchText: string
  searchTextChangeHandler: React.ChangeEventHandler<HTMLInputElement>
  isSearching: boolean
}

const SearchBar = ({
  searchText,
  searchTextChangeHandler,
  isSearching,
}: SearchItemProps) => {
  return (
    <div className="flex w-full items-center rounded-md border-2 border-[#FF4646]">
      <input
        className="
          w-full
          pl-3
          text-sm
          placeholder-gray-400
          focus:outline-none
      "
        placeholder="kitchen accessories"
        type="text"
        value={searchText}
        onChange={(e) => searchTextChangeHandler(e)}
      />
      {isSearching ? (
        <AiOutlineLoading className="mr-2 animate-spin text-[25px]" />
      ) : (
        ''
      )}
      <button className="flex h-[100%] items-center bg-[#FF4646] p-1.5 px-2">
        <PiMagnifyingGlass className="text-[20px] text-white" />
      </button>
    </div>
  )
}

export default SearchBar
