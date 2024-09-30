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
                <div className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden'>
                    <img src={conversation.profilePic} alt="user avatar" className="object-cover w-full h-full" />
                </div>
            </div>
    
            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between items-center'>
                    <p className='font-bold text-gray-200 text-sm sm:text-base md:text-lg'>{conversation.fullName}</p>
                    <span className='text-lg sm:text-xl md:text-2xl'>{emojis}</span>
                </div>
            </div>
        </div>
    
        {!lastInd && <div className='divider my-0 py-0 h-1' />}
    </>
    
    )
}

export default Conversation
