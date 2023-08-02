import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { pizzas } from '@/data'

const categoryPage = () => {
  return (
    <div className='flex flex-wrap  text-red-500'>
      {pizzas.map(item=>
        (
          <Link className='w-full h-[60vh] border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-fuchsia-50' href={`/product/${item.id}`} key={item.id}>
            {item.img && (
            <div className='relative h-[80%]'>

            <Image src={item.img} alt='' fill className='object-contain '/>
            </div>
            )}
            <div className='flex items-center justify-between font-bold'>
              <h1 className='text-2xl p-2 uppercase'>{item.title}</h1>
              <h2 className='group-hover:hidden text-xl'>${item.price}</h2>
              <button className='hidden group-hover:block uppercase bg-red-500 p-2 text-white rounded-md'>Add to Cart</button>
            </div>
          </Link>
        ))}
    </div>
  )
};

export default categoryPage