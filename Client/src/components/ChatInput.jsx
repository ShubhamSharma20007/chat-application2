import React from 'react'
import { useState } from "react"
import EmojiPicker from 'emoji-picker-react';
import {IoMdSend} from "react-icons/io"
import {BsEmojiSmile} from "react-icons/bs"
const ChatInput = ({handleSendMsg}) => {
  const [showEmojiPicker,setshowEmojiPicker] = useState(false)
  const [message,setmessage] = useState('');
  
  const handleEmojiPickerHideShow =()=>{
    setshowEmojiPicker((prev)=>!prev)
  }
  const handleEmojiClick=(event,emoji)=>{
    let message =[]
    message +=event.emoji;
    setmessage((prev)=>[...prev, message].join(''))
  }


  const sendChat =(e)=>{
    e.preventDefault();
    if(message.length >0){
      handleSendMsg(message);
      setmessage('');
    }
  }

  return (
     <div className='flex h-[10vh] justify-between items-center p-5 my-4   relative'>
       {
         showEmojiPicker && <EmojiPicker className='absolute mr-2 -top-[160px] z-10'  onEmojiClick={handleEmojiClick} height={350} width={350} />
       }
        <div className="w-[5%]">
            <BsEmojiSmile onClick={handleEmojiPickerHideShow} className='text-zinc-800' size='30'/>
        </div>
        <div className='w-full' style={{ minWidth: "200px" }}>
          <form className='flex items-center gap-5 relative overflow-hidden' onSubmit={(e)=>sendChat(e)}>
              <input value={message} onChange={(e)=>setmessage(e.target.value)} className='w-[90%] h-[100%] rounded-full p-3 bg-zinc-800 text-white outline-none' type="text" name="" placeholder='type your message here' id="" />
              <button type='submit' className=' bg-zinc-800  flex justify-center  items-center absolute  rounded-full h-full w-12 right-[10%]'>
                  <IoMdSend size='30' className='text-zinc-300' />
              </button>
          </form>
        </div>
    </div>
  )
}

export default ChatInput
