import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { CollapseCard } from './CollapseCard';

export const MobileNav = () => {
  return (
    <div className='md:px-0 px-6'>
      <button
        className='btn-neutral items-center duration-200  bg-white  w-full flex text-left rounded-full px-4  gap-4 border border-gray-200 drop-shadow-md '
        onClick={() => window.my_modal_3.showModal()}
      >
        <MagnifyingGlassIcon className='w-7 h-7 text-gray-400 ' />
        <div className='mr-auto my-1'>
          <h2 className='font-semibold  text-lg'>Anywhere</h2>
          <div className='flex  text-gray-500'>
            <span className='mr-2'>Any week</span>
            <span className='mr-2'>+</span>
            <span className='mr-2'>Add Guest</span>
          </div>
        </div>
      </button>
      <dialog id='my_modal_3' className='modal'>
        <form method='dialog' className='modal-box'>
          <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
            ✕
          </button>

          <div className='mt-6'>

            <CollapseCard></CollapseCard>
            
          </div>
          <div className='modal-footer'>
            <div className='modal-footer-content flex p-4 justify-between items-center'>
              <div className='underline'>Clear All</div>
              <button className='bg-primary px-4 py-2 rounded-md text-white mr-2 flex justify-between items-center'>
                {' '}
                Search
              </button>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
};
