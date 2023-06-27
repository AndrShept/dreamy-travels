import Link from 'next/link';
import React from 'react';

export const SearchBar = () => {
  const [isSearchFocused, setIsSearchFocused] = React.useState(false);
  return (
    <div className='flex flex-row self-center rounded-full border p-2 mt-8 w-3/4'>
      <button onClick={() => setIsSearchFocused(true)}>
      <p className='font-bold'>Where</p>
        {isSearchFocused ? (
          <input
            type='text'
            placeholder='Search destination'
            className='text-slate-800 bg-transparent border-none outline-none'
          />
        ) : (
          <p className='text-slate-600'>Search destination</p>
        )}
      </button>
      <div className='dropdown dropdown-end'>
        <label tabIndex={1}>
          <p className='font-bold'> Dates</p>
          <p className='text-slate-600'>Select Ranges</p>
        </label>
        <div tabIndex={1} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
            <li><Link href='#'>Range Selector</Link></li>
    <li><Link href='#'>Item 2</Link></li>
        </div>
      </div>
      <div className='dropdown dropdown-end'>
        <label tabIndex={2}>
          <p className='font-bold'>Who</p>
          <p className='text-slate-600'>Add Guests</p>
        </label>
        <div tabIndex={2} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
            <li><Link href='#'>Counter</Link></li>
        </div>
      </div>
    </div>
  );
};
