import React from 'react';
// import HomeContainer from '../components/HomeContainer';
// import { motion } from 'framer-motion';
// import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
// import RowContainer from '../components/RowContainer';
import MenuContainer from '../components/MenuContainer';
import Banner from 'containers/Banner';

const MainContainer = () => {
  
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center '>
      <Banner />
      <MenuContainer />
    </div>
  );
};

export default MainContainer;
