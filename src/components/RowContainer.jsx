/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  return (
    <>
      <div
        ref={rowContainer}
        className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 relative"
      >
        {data &&
          data.length > 0 &&
          data.map((item) => {
            return (
              <div
                key={item?.id}
                className="bg-white rounded-md flex flex-col overflow-hidden relative"
                style={{
                  border: "1px solid #f3f3f3",
                  transition: ".25s ease-in-out",
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                >
                  <div className="flex justify-center items-center relative h-[180px]">
                    <Link
                      to={`/detail/${item?.id}`}
                      className="items-center justify-center w-full h-full relative text-[#212121] flex"
                    >
                      <img
                        className="rounded-none h-auto w-auto max-w-full max-h-full mb-0"
                        src={item?.imageURL}
                        alt={item?.name + "Catalog Game"}
                      />
                    </Link>
                  </div>
                </motion.div>

                <div className="pt-[10px] pr-[15px] pb-[15px] pl-[15px] md:pt-[15px] md:pr-5 md:pb-5 md:pl-5 flex flex-col flex-grow">
                  <div className="flex items-baseline font-semibold mb-[5px]">
                    <span className="text-[16px] capitalize text-[#212121] flex items-center flex-row-reverse">
                      <span>
                        <bdi>{item?.title || '-'}</bdi>
                      </span>
                    </span>

                    <span className="text-[13px] my-0 mx-[10px]"></span>
                  </div>

                  <Link
                    to={`/detail/${item?.id}`}
                    className="text-[#5a5a5a] text-[13px] mb-[25px]"
                    style={{
                      transition: ".15s ease-in-out",
                    }}
                  >
                    {item?.category || '-'}
                  </Link>
                  <div className="relative mt-auto">
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      className="text-[#212121]"
                      onClick={() => navigate(`/detail/${item?.id}`)}
                    >
                      <span
                        className="bg-[#f3f3f3] select-none rounded-md cursor-pointer flex h-[35px] left-0 top-0 overflow-hidden w-full"
                        style={{
                          zIndex: 1,
                          transition: ".15s ease-in-out",
                        }}
                      >
                        <span className="flex items-center flex-grow text-[13px] font-semibold justify-center">
                          Detail
                        </span>
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {data && data.length <= 0 && (
        <div className="grid place-items-center">
          <p className="text-xl text-headingColor font-semibold my-28">
            Item Tidak Tersedia
          </p>
        </div>
      )}
    </>
  );
};

export default RowContainer;
