import Link from 'next/link';
import React,{ useState} from 'react';
import { Counter } from './Counter';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchStore } from '@/lib/store';

export const SearchBar = ({toggleExpanded}) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);


  const {location} = useSearchStore(state=> state)
  const startDate = useSearchStore(state=> state.dates[0])
  const endDate = useSearchStore(state=> state.dates[1])
  const handleLocationUpdate = (e)=>{
    useSearchStore.setState({location: e.target.value})
  }
  const handleSelect = (ranges) => {
    useSearchStore.setState({dates: [ranges.selection.startDate , ranges.selection.endDate]})

  }
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }
  return (
    <div className='flex  justify-between items-center rounded-full border p-2 mt-8 w-3/4'>
      <button className='border-r px-4 text-left' onClick={() => setIsSearchFocused(true)}>
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
      <div className='dropdown dropdown-end'>
        <label tabIndex={1}>
          <p className='font-bold'> Dates</p>
          <p className='text-slate-600'>Select Ranges</p>
        </label>
        <div tabIndex={1} className='dropdown-content menu p-2 shadow   bg-base-100 rounded-box w-52 '>
           <DateRangePicker ranges={[selectionRange]}
           minDate={new Date()}
           onChange={handleSelect}
           />
           
        </div>
      </div>
      <div className='dropdown dropdown-end'>
        <label tabIndex={2}>
          <p className='font-bold'>Who</p>
          <p className='text-slate-600 '>Add Guests</p>
        </label>
        <div tabIndex={2} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
            <p>  <Counter label='Adults'/></p>
        </div>
      </div>
      <Link href='/search/results' onClick={toggleExpanded} className='btn-primary text-white rounded-full gap-3  p-4 flex '>
      <MagnifyingGlassIcon className="h-6 w-6 " />
        <span>Search</span>
      </Link>
    </div>
  );
};
