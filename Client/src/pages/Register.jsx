import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
const Register = () => {

  const { register, handleSubmit,formState:{errors} } = useForm();
  function onSubmit(data){
   if(data.password !== data.con_password){
    toast.error('password not match')
    console.log(data)
   }
   else{
    toast.success('successfully register')
   }
  }


 
  return (
    <div class="w-full flex flex-col justify-center items-center bg-zinc-400  min-h-screen">
    <form class="bg-white max-w-md  shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" {...register('username',{required:true,minLength:2})} />
        {errors.username && <small className="text-red-500 font-medium">Invalid Name</small>}
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Email
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Email" type="email" placeholder="Email" {...register('email',{required:true})} />
        {errors.email && <small className="text-red-500 font-medium">Email field is required</small>}
      </div>
     <div className="flex gap-4">
     <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input {...register('password',{required:true})} class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password"/>
        {errors.password && <small className="text-red-500 font-medium">Password field is required</small>}
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
         Confirm-Password
        </label>
        <input {...register('con_password',{required:true})} class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="con-password" type="text" placeholder="con-password"/>
        {errors.con_password && <small className="text-red-500 font-medium">Con-Password field is required</small>}
      </div>
     </div>
     
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Sign In
        </button>
        <p>Already have a account ? <Link to={"/login"} class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Login
          </Link></p>
      </div>
    </form>
    <p class="text-center text-black text-xs">
      &copy;2024 Chat Application. All rights reserved.
    </p>
  </div>
  )
};

export default Register;
