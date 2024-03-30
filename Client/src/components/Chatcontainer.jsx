import React from 'react'

const Chatcontainer = ({currentChat}) => {
    console.log(currentChat)
  return (
    <div>
      <div  className="w-full flex my-4 bg-[#fcf7f733]  rounded-sm p-3 items-center justify-start gap-10 px-5">
            <div className='w-8 h-8 ' dangerouslySetInnerHTML={{__html:currentChat?.avatarImage}}></div>
            <h1 className='font-semibold text-md capitalize'>{currentChat.username}</h1>
          </div>
      </div>

  )
}

export default Chatcontainer
