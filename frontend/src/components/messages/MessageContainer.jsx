import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import NOChatSelected from './NOChatSelected'

const MessageContainer = () => {
    const notSelectedChat = false;
  return (
    <div className='md:min-w-[450px] flex flex-col'>
       {notSelectedChat ? <NOChatSelected/> : (
         <>
         <div className='bg-slate-500 px-4 py-2 mb-2'>
             <span className='label-text'>To:</span>{" "}
             <span className='text-gray-900 font-bold'>Gaurav</span>
         </div>
         <Messages/>
         <MessageInput/>
         </>
       )}
      
    </div>
  )
}

export default MessageContainer
