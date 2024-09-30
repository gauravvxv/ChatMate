import React from 'react'
import {TiMessages} from "react-icons/ti"
import { useAuthContext } from '../../context/AuthContext'
const NOChatSelected = () => {

      const {authUser} = useAuthContext()
  return (
    <div className="flex items-center justify-center w-full h-full p-4">
    <div className="text-center sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl">Welcome {authUser.fullName}</p>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl">Select a chat to start messaging</p>
        <TiMessages className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl" />
    </div>
</div>

  )
}

export default NOChatSelected
