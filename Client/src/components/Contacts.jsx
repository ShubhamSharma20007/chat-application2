import React, { useEffect } from 'react'
import { useState } from 'react'
import Welcome from './Welcome'
import Chatcontainer from './Chatcontainer'
import Logout from './Logout'
const Contacts = ({contacts,currentUser,changechat,currentChat}) => {
  const[currentuser,setCurrentuser]= useState(undefined)
  const[currentuserImage,setCurrentuserImage]= useState(undefined)
  const[currentSelected,setcurrentSelected]= useState(undefined)
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
      <div className="flex flex-col justify-between  h-full w-[20%] border-r-[1px] border-zinc-100">
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
      <div  className={`w-full flex my-4 bg-[#fcf7f775]  rounded-sm p-3 items-center justify-between gap-10 px-5`}>
            <div className=' items-center  gap-6 flex'>
            <div className='w-16 h-16 ' dangerouslySetInnerHTML={{__html:currentuserImage}}></div>
            <h1 className='font-semibold text-md capitalize'>{currentuser ? "me" : currentuser}</h1>
            </div>
          <Logout/>
          </div>
      </div>
    </div>
    <div className=" p-3 w-[80%]  h-full overflow-auto ">
      <div className="inner bg-zinc-500 w-full h-full rounded-md p-0 overflow-auto">
        {
          currentChat ===  undefined ? 
          <Welcome currentuser={currentUser}/>:
          <Chatcontainer currentChat={currentChat}/>
        }
      
      </div>
    
    </div>
    </div>
  )
}

export default Contacts
