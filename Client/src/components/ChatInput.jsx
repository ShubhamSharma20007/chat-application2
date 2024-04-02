import React, { useEffect, useRef } from 'react'
import { useState } from "react"
import EmojiPicker from 'emoji-picker-react';
import {IoMdSend} from "react-icons/io"
import {BsEmojiSmile} from "react-icons/bs"
const ChatInput = ({handleSendMsg}) => {
const emojiBtn =  useRef(null)

const [showEmojiPicker,setshowEmojiPicker] = useState(false)
const [message,setmessage] = useState('');
const [open,setOpen] = useState(false)



  const handleEmojiPickerHideShow =()=>{
    setshowEmojiPicker((prev)=>!prev)
    setOpen(true)
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
     <div className='flex h-[10vh] justify-between items-center md:p-5 p-2 my-4   relative'>
       {
         showEmojiPicker && <EmojiPicker style={{position:'absolute',top:'-300px'}} ref={emojiBtn} open={open}   onEmojiClick={handleEmojiClick} height={300} width={300} />
       }
        <div className="md:w-[5%]">
            <BsEmojiSmile onClick={handleEmojiPickerHideShow} className='text-zinc-800' size='30'/>
        </div>
        <div className=' w-[90%]  md:min-w-[200px] ' >
          <form className='flex items-center gap-5 relative overflow-hidden' onSubmit={(e)=>sendChat(e)}>
              <input value={message} onChange={(e)=>setmessage(e.target.value)} className='md:w-[90%] w-full h-[100%] rounded-full p-3 bg-zinc-800 text-white placeholder:text-sm  outline-none' type="text" name="" placeholder='type your message here' id="" />
              <button  type='submit' className=' bg-zinc-800  flex justify-center  items-center absolute  rounded-full h-full w-12 right-0   md:right-[10%]'>
                  <IoMdSend   size='20' className='text-zinc-300'  />
              </button>
          </form>
        </div>
    </div>
  )
}

export default ChatInput
