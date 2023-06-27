'use client';
import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';

const Header = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const headerContainerClasses = clsx(
    'container',
    'items-center',
    'mx-auto',
    'flex',
    'justify-between',
    'bg-white',
    'py-8',
    {
      'h-[7.5rem]': !isExpanded,
      'h-[13rem]': isExpanded,
    }
  );

  const toggleExpanded = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <header className='flex fixed bg-white border-b z-50 w-full '>
      <div className={headerContainerClasses}>
        <Link href='/'  className='text-primary font-extrabold text-xl '>DREAMY-TRAVELS</Link>

        {isExpanded ? (
          <SearchBar />
        ) : (
          <button
            onClick={toggleExpanded}
            className={clsx(
              '  flex flex-row py-2 px-4 justify-center items-center rounded-full border drop-shadow-md bg-white',
              {
                'border-b-0': !isExpanded,
                'border-b-8': isExpanded,
              }
            )}
          >
            <div className='input flex items-center px-4 border-r'>
              <p className='font-bold'>Anywhere</p>
            </div>
            <div className='input flex items-center px-4 border-r'>
              <p className='font-bold'>Any Date</p>
            </div>
            <div className='input flex items-center px-4 border-r'>
              <p className='font-bold'>Add Guests</p>
            </div>
            <div className='search-btn rounded-full px-4 bg-primary h-10 w-10 relative'>
              <MagnifyingGlassIcon className='h-6 w-6 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' />
            </div>
          </button>
        )}

        <div>user</div>
      </div>
    </header>
  );
};

export default Header;
