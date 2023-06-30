'use client';
import clsx from 'clsx';
import React from 'react';

const mobileMenu = [{ label: 'Where?' }, { label: 'When?' }, { label: 'Who?' }];

export const TestComponent = () => {
  const [currentTab, setCurrentTab] = React.useState(0);

  return (
    <>
      {mobileMenu.map((item, index) => (
        <div
          key={index}
          onClick={()=> setCurrentTab(index)}
          // onClick={() => setCurrentTab(index)}
          className={clsx(
            ' bg-white rounded-lg text-black drop-shadow-lg p-4 my-2 cursor-pointer',
            {
              'text-pink-100': currentTab !== index,
              'text-pink-500': currentTab === index,
            }
          )}
        >
          <p>{item.label}</p>
        </div>
      ))}
    </>
  );
};
