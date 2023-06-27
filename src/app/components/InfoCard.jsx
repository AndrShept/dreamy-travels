'use client'
import React, { useState } from 'react';
import { HeartIcon, StarIcon } from '@heroicons/react/24/outline';
import {
  StarIcon as StarIconSolid,
  HeartIcon as HeartIconSolid,
} from '@heroicons/react/24/solid';
import Image from 'next/image';

export const InfoCard = ({ listing }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className='group max-w-md mx-auto shadow-md  rounded-lg overflow-hidden relative'>
      <Image
      width={500}
      height={500}
        className='group-hover:scale-105 duration-200  object-cover  w-full transition-transform'
        src={listing.image}
        alt={listing.name}
      />
      <div className='p-4'>
        <div className='flex items-center justify-between mb-2'>
          <h3>{listing.name}</h3>
          <div className='flex items-center'>
            <StarIconSolid className='h-5 w-5 text-yellow-500 mr-1' />
            <span className='text-gray-800'>{listing.rating}</span>
          </div>
        </div>
        <p className='text-gray-600 mb-4'>{listing.description}</p>
        <button onClick={()=> setIsFavorite(prev => !prev)} className='absolute right-4 bottom-4'>
         {!isFavorite ? <HeartIcon className='w-5 h-5 text-red-500' /> : <HeartIconSolid className='w-5 h-5 text-red-500' />}
        </button>
      </div>
    </div>
  );
};
