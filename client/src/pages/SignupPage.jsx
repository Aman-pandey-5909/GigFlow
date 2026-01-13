import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

const SignupPage = () => {
    const [errormsg, setErrormsg] = React.useState("");
  const navigate = useNavigate();
  const [userData, setUserData] = React.useState({
    name:"",
    email: "",
    password: ""
  });

  const signup = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/register", { ...userData });
      navigate("/login");
    } catch (error) {
      // console.log(error);
      setErrormsg(error?.response?.data?.message || error?.message || "Something went wrong");
    }
  };
  return (
    <main className='flex flex-col items-center my-5 gap-3 w-fit mx-auto border px-3 py-2 rounded-lg'>
      <h1 className='text-3xl font-bold'>Sign Up</h1>
      <form action="" onSubmit={signup} className='flex flex-col gap-3'>
        <div className='grid-cols-2 grid place-items-center gap-3'>
            <label htmlFor="name" className='text-xl font-semibold'>Name: </label>
            <input placeholder='John doe' className='px-3 py-1 border rounded-xl' type="text" name="name" id="name" onChange={(e) => {setUserData({...userData, name: e.target.value})}} required />
        </div>
        <div className='grid-cols-2 grid place-items-center gap-3'>
            <label htmlFor="email" className='text-xl font-semibold'>Email: </label>
            <input placeholder='abc@example.you' className='px-3 py-1 border rounded-xl' type="email" name="email" id="email" onChange={(e) => {setUserData({...userData, email: e.target.value})}} required />
        </div>
        <div className='grid-cols-2 grid place-items-center gap-3'>
            <label htmlFor="password" className='text-xl font-semibold'>Password: </label>
            <input placeholder='password' className='px-3 py-1 border rounded-xl' type="password" name="password" onChange={(e) => {setUserData({...userData, password: e.target.value})}} id="password" required />
        </div>
        <button type="submit" className='bg-green-300 px-3 py-1 rounded-md'>Signup</button>
        <p className='text-red-400'>{errormsg}</p>
        <p>Already registered? <a href="/login">Login</a></p>
      </form>
    </main>
  )
}

export default SignupPage