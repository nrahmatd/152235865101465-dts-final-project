import React from 'react';
import RowContainer from './RowContainer';
import { useStateValue } from '../context/StateProvider';

const MenuContainer = () => {
  const [{ foodItems }] = useStateValue();


  return (
    <section className='w-full my-6' id='menu'>
      <div className='w-full flex flex-col items-center justify-center'>
        <p className='text-2xl mb-8 text-center font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-blue-400 to-blue-600 transition-all ease-in-out duration-100 mr-auto'>
          Daftar Game 2022
        </p>
        {/* <Categories /> */}

        <div className='w-full'>
          <RowContainer flag={false} data={foodItems} />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
