// import React from 'react'
// import Image from 'next/image' 
// import { singleProduct } from '@/data'
// import Price from '@/app/components/Price'

// const SingleProductPage = () => {
//   return (
//     <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center">
    
//       {singleProduct.img && (
//         <div className="relative w-full h-1/2 md:h-[70%]">
//           <Image
//             src={singleProduct.img}
//             alt=""
//             className="object-contain"
//             fill
//           />
//         </div>
//       )}
//       <div className='h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8'>
//         <h1 className='text-3xl font-bold uppercase xl:text-5xl'>{singleProduct.title}</h1>
//         <p>{singleProduct.desc}</p>
//         <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/>
//       </div>
//      </div>
//   )
// }

// export default SingleProductPage

"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { singleProduct } from '@/data';
import Price from '@/app/components/Price';

const SingleProductPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    const itemToAdd = {
      id: singleProduct.id,
      title: singleProduct.title,
      price: singleProduct.price,
      options: singleProduct.options || [], 
      
    };
    setCart([...cart, itemToAdd]as any);
  };

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center">
      {singleProduct.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image src={singleProduct.img} alt="" className="object-contain" fill />
        </div>
      )}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options} />
        {/* <button
          onClick={addToCart}
          className="bg-green-500 text-white px-4 py-2 rounded-md mt-4"
        >
          Add to Cart
        </button> */}
      </div>
    </div>
  );
};

export default SingleProductPage;

