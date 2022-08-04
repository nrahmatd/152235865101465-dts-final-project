import React from 'react';
import Loader from './Loader';

const GameLoader = () => {
  return (
    <div className='min-h-[96vh] grid place-items-center content-center gap-2'>
      <Loader width='25px' />
      <div className='text-headingColor text-xl font-bold'>
        <span className='text-gray-800'>Catalog </span> 
        <span className='text-blue-800'>Games 2022</span> 
      </div>
    </div>
  );
};

export default GameLoader;
