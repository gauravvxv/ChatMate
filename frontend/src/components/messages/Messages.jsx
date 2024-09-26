import React, { useEffect  , useRef} from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageLoading from '../loadingChat/MessageLoading';

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessage = useRef(null);

  useEffect(() => {
    setTimeout(()=>{
      lastMessage.current?.scrollIntoView({ behavior: "smooth" })
    },500)
  }, [messages])

  return (
    <div className='px-4 flex-1 overflow-auto'>

      {!loading && messages.length > 0 && messages.map((mess) => (
        <div key={mess._id} ref={lastMessage}>
          <Message message={mess} />
        </div>
      ))}

      {loading && [...Array(3)].map((_, idx) => <MessageLoading key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start a conversation</p>
      )}


    </div>
  )
}

export default Messages
