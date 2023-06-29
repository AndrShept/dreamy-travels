import { useSearchStore } from '@/lib/store';
import React from 'react';

const CountIcon = ({icon, onClick}) => {
    return (
        <button onClick={onClick} className='border rounded-full w-5 h-5 flex items-center justify-center'>
            <span>{icon}</span>
        </button>
    )
}


export const Counter = ({ label }) => {
  const {increaseGuests, decreaseGuests, guests} = useSearchStore(state=> state)
  return (
    <div className='flex justify-between'>
      <p>{label}</p>
      <div className='flex items-center gap-x-1'>

        {
            guests > 0 && <CountIcon icon='-' onClick={()=> decreaseGuests()} />
        }
        <span>{guests}</span>
        <CountIcon icon='+' onClick={()=> increaseGuests()} />
      </div>
    </div>
  );
};
