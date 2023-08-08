"use client";  
import React, {useState} from 'react'
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../../firebase'


const SignupPage = () => {
 
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        router.push('/')
      })
      .catch((err) => {
        console.log(err);
      });
    
  };
  return (
    <div className='flex flex-col justify-center items-center'>
        <form onSubmit={handleSubmit} className='w-[60%] '>
        <div>
                <label
                  className='block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Your email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='name@company.com'
                  required
                 
                />
              </div>
              <div>
                <label
                
                  className='block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}

                  placeholder='••••••••'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  required
                />
              </div>
              
              <button 
                type='submit'
                className='w-full text-white bg-[#03C9D7] py-1 rounded-md my-10'
              >
                Create an account
              </button>
        </form>
    </div>
  )
}

export default SignupPage;

