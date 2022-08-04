/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'firebase.config';
import { getGameItemById } from 'utils/firebaseFunctions';
import { useParams } from 'react-router-dom';
import { Loader } from 'components';

const ProductDetail = () => {
  const [isLoading] = useAuthState(auth);
  const [loadingData, setLoadingData] = useState(true);

  let { id } = useParams();

  const [data, setData] = useState({});

  console.log('data', data);

  const fetchData = async () => {
    setLoadingData(true);
    await getGameItemById(id).then((data) => {
      setLoadingData(false);
      setData(data);
    });
  };

  useEffect(() => {
    id && fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // Handle buat scroll to top ketika loading page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isLoading]);

  return (
    <motion.div id='section-1' className='scroll-smooth'>
      {loadingData ? (
        <div className='grid place-items-center min-h-[75vh]'>
          <Loader />
        </div>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=' grid grid-cols-1 md:grid-cols-2'
          >
            <div
              className='flex justify-center items-start lg:items-center'
              data-columns='4'
              style={{ opacity: 1, transition: 'opacity 0.25s ease-in-out 0s' }}
            >
              <figure className='w-full md:w-[30vw]'>
                <div className='relative overflow-hidden'>
                  <img
                    width='600'
                    height='600'
                    src={data?.imageURL}
                    alt=''
                    loading='lazy'
                  />
                </div>
              </figure>
            </div>

            <div className='float-right width-[48%] clear-none'>
              <h1
                className='text-2xl font-medium mb-2 clear-none mt-0 p-0 capitalize'
                style={{
                  lineHeight: 1.6,
                  letterSpacing: '.2px',
                }}
              >
                {data?.title}
              </h1>
              <p className='text-lg font-medium mb-1 mt-0'>
                <span className='woocommerce-Price-amount amount'>
                  Kategori Game: {data?.category}
                </span>
              </p>
              <p className='text-lg font-medium mb-7 mt-0'>
                <span className='woocommerce-Price-amount amount'>
                  Tanggal Rilis: {data?.release_date}
                </span>
              </p>
              <div className='woocommerce-product-details__short-description'>
                <p className='text-[#5a5a5a] mb-0'>{data?.description}</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default ProductDetail;
