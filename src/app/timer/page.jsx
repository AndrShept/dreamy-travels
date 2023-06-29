'use client';
import React, { useCallback, useEffect } from 'react';
import { PlayIcon, PauseIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useStore } from '@/lib/store';

const TimerPage = () => {
  const [mlSec, setMlSec] = React.useState(0);
  const [sec, setSec] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [isTimerStart, setIsTimerStart] = React.useState(false);

  

  const handleReset = () => {
    setIsTimerStart((prev) => (prev = false));
    setMinutes(0);
    setHours(0);
    setSec(0);
    setMlSec(0);
  };
  const timeCounter = useCallback((interval) => {
    setTimeout(() => {
    //   if (mlSec !== 100) {
    //     setMlSec((prevMlSec) => prevMlSec + 10);
    //   }
      if (sec !== 59) {
        setSec((prevSec) => prevSec + 1);
        setMlSec(0);
      }
      if (sec === 59) {
        setMinutes((prevMinutes) => prevMinutes + 1);
        setSec(0);
      }
      if (minutes === 59) {
        setHours((prevHours) => prevHours + 1);
        setMinutes(0);
      }
    }, interval);
  },[minutes, sec])
  useEffect(() => {
    if (isTimerStart) {
      timeCounter(1000);
    }
  }, [sec, minutes, hours, mlSec, isTimerStart, timeCounter]);
  return (
    <div className=' bg-slate-800 mx-auto flex flex-col items-center w-max px-6 py-3 rounded-box mt-5 shadow-lg text-white gap-3'>
      <h1 className='text-3xl font-bold'>Timer Start:</h1>
      <span className=' text-2xl font-light text-yellow-400'>
        {' '}
        {`${hours < 10 ? '0' + hours : hours}:${
          minutes < 10 ? '0' + minutes : minutes
        }:${sec < 10 ? '0' + sec : sec}`}
      </span>
      <div className='flex'>
        {!isTimerStart ? (
          <PlayIcon
            onClick={() => setIsTimerStart(true)}
            className='h-8 w-8 text-yellow-400 cursor-pointer hover:text-yellow-600 duration-200'
          />
        ) : (
          <PauseIcon
            onClick={() => setIsTimerStart(false)}
            className='h-8 w-8 cursor-pointer text-yellow-400 hover:text-yellow-600 duration-200'
          />
        )}
        <button
          className='text-yellow-400  hover:text-yellow-600 duration-200 disabled:opacity-40 disabled:hover:text-yellow-400 '
          disabled={isTimerStart}
          onClick={handleReset}
        >
          <XMarkIcon className='h-8 w-8 ' />
        </button>
      </div>


    </div>
  );
};

export default TimerPage;
