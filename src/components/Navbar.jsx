import { div } from 'framer-motion/client'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()
    
    const handleClick = () => {
        localStorage.setItem('userData', "")
        navigate('/')
    }

    return (
        <div className='flex justify-between px-3 bg-emerald-400 py-5 '>
            <div className='text-center md:text-5xl text-2xl font-extrabold text-gray-700'>
                Abhishek Singh
            </div>
            <button onClick={handleClick} className='bg-red-500 px-2 py-1 rounded-lg'>Change user_data</button>
        </div>
    )
}

export default Navbar
