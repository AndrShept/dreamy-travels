'use client';
import React from 'react';
import { SearchBar } from '../components/SearchBar';

const Header = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpanded = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <header className='container flex justify-between h-10 m-auto border-b z-50 w-full'>
      <div className='text-red-500'>DREAMY-TRAVELS</div>

      {isExpanded ? (
        <SearchBar />
      ) : (
        <button
          onClick={toggleExpanded}
          className='search-container rounded-lg flex gap-3'
        >
          <div className='input border-r'>
            <p>Anywhere</p>
          </div>
          <div className='input border-r'>
            <p>Any Date</p>
          </div>
          <div className='input border-r'>
            <p>Add Guests</p>
          </div>
        </button>
      )}

      <div className='search-btn'>Search</div>
      <div>user</div>
    </header>
  );
};

export default Header;
