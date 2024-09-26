import { useState } from 'react';
export default function Product({ productInfo }) {
  return (
    <div className='hover:scale-105 text-zinc-300 hover:text-[#C74C26] cursor-pointer mx-3 transform transition-all duration-700 delay-200 ease-in-out hover:grayscale-0'>
      <img
        src={productInfo.image}
        alt={productInfo.name}
        className='w-full h-56 lg:h-64 xl:h-72 object-cover grayscale transition-all drop-shadow-md duration-700 delay-200 hover:grayscale-0'
      />
      <div className='w-full flex justify-between items-center pt-1 pb-4 pl-1 pr-4'>
        <h3 className='text-xl text-white font-bold text-left'>{productInfo.name}</h3>
        <p className='text-right'>${productInfo.price}</p>
      </div>
    </div>
  );
}
