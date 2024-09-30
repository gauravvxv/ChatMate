import React, { useState } from 'react'
import { BsSend } from "react-icons/bs"
import useSendMessage from '../../hooks/useSendMessage';


const MessageInput = () => {
    const [message, setMessage] = useState("");
    const { loading, sendMessage } = useSendMessage()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!message) return;

        await sendMessage(message);
        setMessage('');
    }
    return (
        <form className='px-4 my-3' onSubmit={handleSubmit}>
        <div className='w-full relative'>
            <input
                type="text"
                className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600'
                value={message}
                placeholder='Send a message'
                onChange={(e) => setMessage(e.target.value)}
            />
    
            <button
                type='submit'
                className='absolute inset-y-0 right-0 flex items-center p-2 text-gray-400 hover:text-white transition duration-200'
            >
                <BsSend />
            </button>      
        </div>
    </form>
    
    )
}

export default MessageInput
