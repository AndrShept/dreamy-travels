'use client';
import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { CollapseCard } from '@/app/components/CollapseCard';
import clsx from 'clsx';
import { TestComponent } from '@/app/components/TestComponent';
import { Modal } from '@/app/components/Modal';

const ResultPage = () => {
  const handleClickCurrentTab = (index) => {};



  return (
    <div className='md:px-0 px-6'>
      <div>
        <button className='btn' onClick={() => window.my_modal_2.showModal()}>
          open modal
        </button>

        <Modal>
          <div className='mt-6'>
     
          <TestComponent  />
       
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ResultPage;
