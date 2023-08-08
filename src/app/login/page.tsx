 "use client";
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {auth} from '../../../firebase'
import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {async} from '@firebase/util'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation';


const LoginPage = () => {
  const router = useRouter();
  const [user, setUser]=useAuthState(auth);
  const googleAuth= new GoogleAuthProvider();
  const login= async ()=>{
    try{ 
      await signInWithPopup(auth, googleAuth);
      router.push('/')
    } catch(error){
      console.log(error);
    }
  
  };

  useEffect(()=>{
    console.log(user);

  },[user])

  return (
    <div className='p-4 h-[calc(100vh-10rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center text-center'>
      <div className='h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] lg:w-1/2'>
      <div className='relative h-1/3 w-full md:h-full md:w-1/2'>
        <Image src="/loginBg.png" alt="" fill className='object-cover'/>
      </div>
      <div className='flex flex-col gap-8 md:w-1/2'>
        <h1 className='font-bold text-xl xl:text-3xl'>Welcome</h1>
        <p>Log into your account</p>
        <div className='flex justify-center items-center' >
        <button className='flex gap-8 border-2 border-red-200 rounded-md w-3/4' onClick={login}>
      <Image src="/google.png" alt="" width={20} height={20} className='object-contain'/>
      <span>Sign in with Google</span>
        </button>
        </div>
        <p className='text-sm '>Don't you have a account?<Link className='underline' href="/Signup">Sign up</Link></p>
      </div>
      </div>
    </div>
  )
}

export default LoginPage