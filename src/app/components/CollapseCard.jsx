'use client';
import clsx from 'clsx';
import React from 'react';

const mobileMenu = [{ label: 'Where?' }, { label: 'When?' }, { label: 'Who?' }];

export const CollapseCard = ({ children }) => {
  const [currentTab, setCurrentTab] = React.useState(0);
  return (
    <>
      {mobileMenu.map((item, index) => (
        <div
          key={index}
          onClick={() => setCurrentTab(index)}
          className={clsx(
            'collapse-card bg-white rounded-lg drop-shadow-lg p-4 my-2 cursor-pointer',
            {
              'drop-shadow-lg': currentTab !== index,
              'drop-shadow-2xl': currentTab === index,
            }
          )}
        >
          <div className='collapse-card-header  '>
            <h2
              className={clsx(
                'collapse-card-title  text-md font-semibold text-gray-600 mb-2',
                {
                  'text-gray-900 text-left': currentTab === index,
                  'text-gray-400 text-center': currentTab !== index,
                }
              )}
            >
              {item.label}
            </h2>
           { currentTab === index &&  <span>Children</span>}
          </div>
          <div>{children}</div>
        </div>
      ))}
    </>
  );
};
