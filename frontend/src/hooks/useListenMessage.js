import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversation from '../store/useConversation';
import notification from "../assets/notification.mp3"
const useListenMessage = () => {

    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation()


    useEffect(() => {

        socket?.on("newMessage", (newMessages) => {
            newMessages.shouldShake = true;
            const sound = new Audio(notification)
            sound.play();
            setMessages([...messages, newMessages]);
        })

        return () => socket?.off("newMessage");

    }, [socket, setMessages, messages])
}



export default useListenMessage
