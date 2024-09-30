import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation'
import { getEmojis } from '../../utils/emojis'

const Conversations = () => {
  const { loading, conversations } = useGetConversation();

  console.log("CONVERSATION:", conversations)
  return (
    <div className='py-2 flex flex-col overflow-auto max-h-[calc(100vh-100px)]'>
    {conversations.map((e, i) => (
        <Conversation
            key={e._id}
            conversation={e}
            emojis={getEmojis()}
            lastInd={i === conversations.length - 1}
        />
    ))}

    {loading && (
        <div className='flex justify-center items-center py-4'>
            <span className='loading loading-spinner'></span>
        </div>
    )}
</div>
  )
}

export default Conversations
