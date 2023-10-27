import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find((user) => user.email === email);
      
        if (user && user.password === password) {
         
          localStorage.setItem('login', true)
          navigate('/')
          // Perform your login action, such as setting an authenticated state or redirecting
        } else {
          alert('Invalid email or password');
        }
      };
    
      
      
      
      
      
      
  return (
    <div className='bg-hero w-screen h-screen grid place-content-center'>
      
      <div>
        <p className='text-3xl mb-10'>Login Page</p>
        <form className='flex flex-col gap-5 ' onSubmit={handleLogin}>
            <div className='flex flex-col'>
                <label>Email</label>
                <input type='text' placeholder='Enter Email' value={email} required className='bg-transparent outline-none border-b-2 placeholder:text-slate-300' onChange={(e)=> setEmail(e.target.value)}/>
            </div>

            <div className='flex flex-col'>
                <label>Password</label>
                <input type='password' placeholder='Password' value={password} required className='bg-transparent outline-none border-b-2 placeholder:text-slate-300' onChange={(e)=> setPassword(e.target.value)}/>
            </div>

            <button type='submit' className='border-2 py-2 hover:bg-white'>Login</button>
        </form>
        <div className='text-center mt-4'>
            <Link to={'/sign-up'} className='text-blue-600 underline cursor-pointer hover:text-blue-500'>Go to Sigup</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
