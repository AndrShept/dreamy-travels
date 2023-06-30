import React from 'react';

export const Modal = ({children}) => {
  return (
    <div>
      <dialog id='my_modal_2' className='modal'>
        <form method='dialog' className='modal-box'>
          <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
            ✕
          </button>

{children}

        </form>
      </dialog>
    </div>
  );
};
