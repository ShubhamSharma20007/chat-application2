import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import Loader from '../components/Loader';

const Avatar = () => {
  const navigate = useNavigate()
    const AvatarAPI = 'https://api.multiavatar.com'
    const[avatars,setAvatars] = React.useState([])
    const[selectedAvatar,setselectedAvatar] = React.useState(undefined)
    const[loading,setLoading] = React.useState(false)

  async function AvatarAPICall() {
    try {
      const data= []
      for(var i=0; i<4;i++){
        const images = await axios.get(`${AvatarAPI}/${(Math.random() * 1000).toFixed(0)}`,{
          responseType: 'arraybuffer'
        })
        data.push(images.data)
      }
      setAvatars(data)
    } catch (error) {
      
    }
  }

  console.log(avatars)
  useEffect(()=>{
    AvatarAPICall()
  },[])

  return (
    <div>

    </div>
  )
}

export default Avatar
