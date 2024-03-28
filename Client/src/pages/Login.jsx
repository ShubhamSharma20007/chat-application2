import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
const Login = () => {
  const {register,handleSubmit} = useForm();
  const onSubmit = (data) => {
      const {email,password} = data;
      if(!email,!password){
        toast.error("All fields are required");
      }
      
  }
  return (
    <div class="w-full flex flex-col justify-center  items-center   min-h-screen bg-no-repeat  bg-[url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
    <form
      class="bg-white max-w-md w-full   shadow-md rounded px-8 pt-6 pb-8 mb-4"  onSubmit={handleSubmit(onSubmit)}  >
    
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Email
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Email"
          type="email"
          placeholder="Email"
          {...register('email')}
   
        />
      </div>
      <div className=" gap-4">
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            
            class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="password"
            {...register('password')}
          />
        </div>
        
      </div>

      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
        <p>
          Create a new account {" "}
          <Link
            to={"/register"}
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Register
          </Link>
        </p>
      </div>
    </form>
    <p class="text-center text-white text-xs">
      &copy;2024 Chat Application. All rights reserved.
    </p>
  </div>
  )
}

export default Login
