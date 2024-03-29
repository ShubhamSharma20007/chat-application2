import React, { useEffect } from 'react'
import { useState } from 'react'
import Welcome from './Welcome'
const Contacts = ({contacts,currentUser,changechat}) => {
  const[currentuser,setCurrentuser]= useState(undefined)
  const[currentuserImage,setCurrentuserImage]= useState(undefined)
  const[currentSelected,setcurrentSelected]= useState(undefined)
  console.log(currentSelected)
  useEffect(()=>{
    if(currentUser){
      setCurrentuser(currentUser?.username)
      setCurrentuserImage(currentUser?.avatarImage)
  

    }
  })

  const changeCurrentChat =(index,contact)=>{
      setcurrentSelected(index)
      changechat(contact)
  }
  
  return (
    <div className='w-full bg-zinc-700 h-screen p-[1px] flex  '>
      <div className="flex flex-col justify-between h-full max-w-md border-r-[1px] border-zinc-100">
      <div className=" max-h-[80vh] overflow-auto p-5 w-full">
      {
        contacts && contacts.map((contact,index)=>(
          <>
          <div  onClick={()=>changeCurrentChat(index,contact)} key={index} className={`w-full flex my-4 bg-[#ffffff39]  rounded-sm p-3 items-center  justify-start gap-10 px-5 contact ${index === currentSelected ? "selected bg-zinc-400" : ""}`}>
            <div className='w-16 h-16 ' dangerouslySetInnerHTML={{__html:contact.avatarImage}}></div>
            <h1 className='font-semibold text-md capitalize'>{contact.username}</h1>
          </div>
          </>
        ))
      }
       
      </div>
      {/* my profile */}
      <div className="w-full h-[20vh] p-5 mb-5">
      <div  className={`w-full flex my-4 bg-[#fcf7f775]  rounded-sm p-3 items-center justify-start gap-10 px-5`}>
            <div className='w-16 h-16 ' dangerouslySetInnerHTML={{__html:currentuserImage}}></div>
            <h1 className='font-semibold text-md capitalize'>{currentuser ? "me" : currentuser}</h1>
          </div>
      </div>
    </div>
    <div className="h-full p-3 w-full ">
      <div className="inner bg-zinc-500 w-full h-full rounded-md p-5 overflow-auto">
      <Welcome currentuser={currentuser}/>
      </div>
    </div>
    </div>
  )
}

export default Contacts
