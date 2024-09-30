import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import useConversation from '../../store/useConversation';
import useGetConversation from '../../hooks/useGetConversation';
import toast from 'react-hot-toast';

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation()
    const { conversations } = useGetConversation()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) return;

        if (search.length < 3) {
            return toast.error("Search term must be at least 3 charaters long")
        }

        const conversation = conversations.find((e) => e.fullName.toLowerCase().includes(search.toLocaleLowerCase()));

        if (conversation) {
            setSelectedConversation(conversation);
            setSearch("");
        }
        else {
            toast.error("No such user found!")
        }
    }

    return (
        <form className="flex items-center gap-2 w-full md:w-auto" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search..."
                className="input input-bordered rounded-full w-full md:w-64 lg:w-72 px-4 py-2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
             <button type='submit' className='btn btn-circle bg-green-700 text-white'>
                <IoSearch size={27} />
                </button>
        </form>

    )
}

export default SearchInput
