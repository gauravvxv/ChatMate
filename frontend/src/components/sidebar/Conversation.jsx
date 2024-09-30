import React from 'react'
import useConversation from '../../store/useConversation'
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({ conversation, emojis, lastInd }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    const isSelected = selectedConversation?._id === conversation._id;

    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);

    return (
        <>
        <div
            className={`flex gap-2 items-center hover:bg-green-600 rounded p-2 cursor-pointer transition duration-200
                 ${isSelected ? 'bg-green-600' : ''}`} 
            onClick={() => setSelectedConversation(conversation)}
        >
            <div className={`avatar ${isOnline ? "online" : ""}`}>
                <div className='w-6 h-6 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-10 lg:h-10 rounded-full overflow-hidden'>
                    <img src={conversation.profilePic} alt="user avatar" className="object-cover w-full h-full" />
                </div>
            </div>
    
            <div className='flex flex-col flex-1'>
                <div className='flex gap-4 justify-between items-center'>
                    <p className='font-bold text-gray-200 text-xs sm:text-sm md:text-sm lg:text-sm'>{conversation.username}</p>
                    <span className='text-sm sm:text-lg md:text-xl lg:text-2xl'>{emojis}</span>
                </div>
            </div>
        </div>
    
        {!lastInd && <div className='divider my-0 py-0 h-1' />}
    </>
    
    )
}

export default Conversation
