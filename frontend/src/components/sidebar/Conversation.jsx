import React from 'react'
import useConversation from '../../store/useConversation'
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({ conversation, emojis, lastInd }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    const isSelected = selectedConversation?._id === conversation._id;

    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);
    console.log(isOnline)

    console.log("conversation._id:", conversation._id);
    console.log("onlineUsers:", onlineUsers);


    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-green-600 rounded p-2 py-1 cursor-pointer
                ${isSelected ? 'bg-green-600' : ''}
                `}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className='w-12 rounded-full '>
                        <img src={conversation.profilePic} alt="user avatar" />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                        <span className='text-xl'>{emojis}</span>
                    </div>

                </div>

            </div>

            {!lastInd && <div className='divider my-0 py-0 h-1' />}


        </>
    )
}

export default Conversation
