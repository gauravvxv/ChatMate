import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
    return (
        <form className='flex items-center gap-2'>
            <input
                type="text"
                placeholder="Search..." 
                className="input input-bordered rounded-full" />

                <button type='submit' className='btn btn-circle bg-green-700 text-white'>
                <IoSearch size={30} />
                </button>

        </form>
    )
}

export default SearchInput
