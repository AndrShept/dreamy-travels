import React from 'react';

const CountIcon = ({icon, onClick}) => {
    return (
        <button onClick={onClick} className='border rounded-full w-5 h-5 flex items-center justify-center'>
            <span>{icon}</span>
        </button>
    )
}


export const Counter = ({ label }) => {
  const [count, setCount] = React.useState(0);
  return (
    <div className='flex justify-between'>
      <p>{label}</p>
      <div className='flex items-center gap-x-1'>

        {
            count > 0 && <CountIcon icon='-' onClick={()=> setCount(prevCount => prevCount - 1)} />
        }
        <span>{count}</span>
        <CountIcon icon='+' onClick={()=> setCount(prevCount => prevCount + 1)} />
      </div>
    </div>
  );
};
