import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSignup = (e) => {
        e.preventDefault()
        // Check if the user already exists
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some((user) => user.email === email);
      
        if (!userExists) {
          const newUser = { email, password };
          users.push(newUser);
          localStorage.setItem('users', JSON.stringify(users));
          setEmail('')
          setPassword('');
          navigate('/log-in')
        } else {
          alert('User already exists');
        }

        
      };
     
    
      
      
      
      
      
      
  return (
    <div className='bg-hero w-screen h-screen grid place-content-center'>
      
      <div>
      <p className='text-3xl mb-10'>Sigup Page</p>
        <form className='flex flex-col gap-5 ' onSubmit={handleSignup}>
            <div className='flex flex-col'>
                <label>Email</label>
                <input type='text' placeholder='Enter Email' value={email} required className='bg-transparent outline-none border-b-2 placeholder:text-slate-300' onChange={(e)=> setEmail(e.target.value)}/>
            </div>

            <div className='flex flex-col'>
                <label>Password</label>
                <input type='password' placeholder='Password' value={password} required className='bg-transparent outline-none border-b-2 placeholder:text-slate-300' onChange={(e)=> setPassword(e.target.value)}/>
            </div>

            <button type='submit' className='border-2 py-2 hover:bg-white'>Sign Up</button>
        </form>
        <div className='text-center mt-4'>
            <Link to={'/log-in'} className='text-blue-600 underline cursor-pointer hover:text-blue-500'>Go to Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
