"use client";
import React from 'react'
import {auth} from '../../../firebase'
import { useRouter } from 'next/navigation';
import Link from "next/link";
// import {useAuthState} from 'react-firebase-hooks/auth'

const Logout = () => {
    const router= useRouter();

    const navigateHome = () => {
        router.push('/menu');
      };
    // const [user, setUser]=useAuthState(auth);
    return (
      <div className='py-20'>
        <h1 className='font-bold text-center py-7 text-4xl'>Would you like to log out?</h1>
        <div className='flex justify-center items-center gap-10 py-10'>
      <div onClick={()=> auth.signOut()} className='bg-green-500 p-2 w-[10%] text-center text-white rounded-lg text-xl'>
          <button onClick={()=>alert('logged out')}>
          Logout</button>
          
         </div>
         <div className='bg-red-500 p-2 w-[10%] text-white text-xl rounded-lg text-center'>
            <Link href="/">Cancel</Link>
         </div>
         </div>
         </div>
  )
}

export default Logout