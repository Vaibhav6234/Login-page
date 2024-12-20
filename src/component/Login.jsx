import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-auto items-center justify-center'>
        <div className='border-2 border-white rounded bg-gray-600  shadow-lg shadow-blue-500/100 p-20'>
      <form className='flex flex-col items-center justify-center gap-5'>
        <div className='flex flex-col gap-2'>
            <label className='text-white font-serif' htmlFor="Enter name">Enter your email:</label>
            <input className='bg-transparent border-solid border-2 outline-none border-white pr-20 pl-4 py-2 rounded hover:border-2 hover:border-black ' type="email" placeholder='Enter email...' />
        </div>
        <div className='flex flex-col gap-2'>
            <label className='text-white font-serif' htmlFor="Enter name">Enter your email:</label>
            <input className='bg-transparent border-solid border-2 outline-none border-white pr-20 pl-4 py-2 rounded hover:border-2 hover:border-black ' type="email" placeholder='Enter email...' />
        </div>
        
        <div className='flex flex-col gap-2'>
            <button className='bg-blue-500 px-28 py-2 text-sm rounded hover:shadow-lg hover:shadow-blue-600/50 '>Log In</button>
            {/* <button className='bg-blue-400 px-28 py-1 text-sm rounded hover:bg-blue-600'>Sign Up</button> */}
            <h3 className='text-center'>Create a account ? <span className='text-blue-500'>Sign Up</span> </h3>
        </div>
      </form>

        </div>
    </div>
  )
}

export default Login
