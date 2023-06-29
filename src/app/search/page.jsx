import React from 'react';
import { ResultList } from '../components/ResultList';
import Link from 'next/link';
export const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/search`);
  return res.json();
};
const SearchPage = async () => {
   const data = await getData();

  return (
    <>
    <div className='flex items-center justify-center w-screen bg-cover bg-center h-48 bg-[url(/booking-website-hero.png)]'>
      <Link href={'/search/results'} className='text-white duration-200 font-light bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-full'>Browse Stays</Link>
    </div>
      <ResultList data={data} />
    </>
  );
};

export default SearchPage;
