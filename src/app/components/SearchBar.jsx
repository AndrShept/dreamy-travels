import Link from 'next/link';
import React, { useState } from 'react';
import { Counter } from './Counter';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchStore } from '@/lib/store';
import { motion } from 'framer-motion';

export const SearchBar = ({ toggleExpanded }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [dataRangeLabel, setDataRangeLabel] = useState('Select Ranges');
  const { location, guests } = useSearchStore((state) => state);
  const startDate = useSearchStore((state) => state.dates[0]);
  const endDate = useSearchStore((state) => state.dates[1]);
  const handleLocationUpdate = (e) => {
    useSearchStore.setState({ location: e.target.value });
  };
  const handleSelect = (ranges) => {
    useSearchStore.setState({
      dates: [ranges.selection.startDate, ranges.selection.endDate],
    });
    setDataRangeLabel(`${ranges.selection.startDate.toDateString()} - ${ranges.selection.endDate.toDateString()}`);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -100, scale: 0 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0, y: 0 }}
      className='flex  justify-between  items-center rounded-full border p-2 mt-8 '
    >
      <button
        className='border-r px-4 text-left grow'
        onClick={() => setIsSearchFocused(true)}
      >
        <p className='font-bold'>Where</p>
        {isSearchFocused ? (
          <input
            value={location}
            onChange={handleLocationUpdate}
            type='text'
            placeholder='Search destination'
            className='text-slate-800 bg-transparent border-none outline-none'
          />
        ) : (
          <p className='text-slate-600'>Search destination</p>
        )}
      </button>
      <div className='dropdown dropdown-end border-r px-2'>
        <label tabIndex={1}>
          <p className='font-bold'> Dates</p>
          <p className='text-slate-600'>{dataRangeLabel}</p>
        </label>
        <div
          tabIndex={1}
          className='dropdown-content menu p-2 shadow   bg-base-100 rounded-box w-52 '
        >
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            onChange={handleSelect}
          />
        </div>
      </div>
      <div className='dropdown dropdown-end  px-2'>
        <label tabIndex={2}>
          <p className='font-bold'>Who</p>
          <p className='text-slate-600 '>{guests > 0 ? `${guests} Guests`: 'Add Guests' }</p>
        </label>
        <div
          tabIndex={2}
          className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
        >
          <p>
            {' '}
            <Counter label='Adults' />
          </p>
        </div>
      </div>
      <Link
        href='/search/results'
        onClick={toggleExpanded}
        className='btn-primary text-white rounded-full gap-3  p-4 flex '
      >
        <MagnifyingGlassIcon className='h-6 w-6 ' />
        <span>Search</span>
      </Link>
    </motion.div>
  );
};
