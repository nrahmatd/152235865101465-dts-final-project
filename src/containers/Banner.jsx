// // import CTABlock from 'components/CTABlock';
// // import CTAImage from 'assets/img/background.jpg';

// // export default function CallToAction() {
// //   return (
// //     <CTABlock
// //       background={CTAImage}
// //       parentClassName='mt-4 px-[30px] py-[50px] min-h-[200px] md:min-h-[300px] lg:min-h-[380] xl:min-h-[400px] border-0 flex flex-col items-center justify-center'
// //     >
// //       <div className='w-full text-center'>
// //         <h2 className='text-[#212121] text-2xl font-medium lg:text-4xl mb-4'>
// //           Yuk Makan Yuuk
// //         </h2>
// //         <div className='text-[#5A5A5A] mb-4'>
// //           Lorem ipsum dolor sit amet consectetur adipisicing elit
// //         </div>
// //       </div>
// //     </CTABlock>
// //   );
// // }

// import React from "react";
// import CarouselBanner from "components/carousel/CarouselBanner";

// const bannerData = [
//   {
//     id: 1,
//     // image:
//     //   "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     id: 2,
//     // image:
//     //   "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     id: 3,
//     // image:
//     //   "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     id: 4,
//     // image:
//     //   "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//   }
// ];

// const Banner = () => {
//   return (
//     <div>
//       <CarouselBanner data={bannerData} />
//     </div>
//   );
// };

// export default Banner;


import React from 'react';
import Carousel from 'components/carousel/CarouselBanner';
import AssasinCread from 'assets/img/assasins_creed.jpg'
import GodOfWar from 'assets/img/god_of_war.jpg'
import eFootBall from 'assets/img/efootball.jpg'
import GTA5 from 'assets/img/gta5.jpg'


const bannerData = [
  {
    id: 1,
    image: AssasinCread,
  },
  {
    id: 2,
    image: GodOfWar,
  },
  {
    id: 3,
    image: eFootBall,
  },
  {
    id: 4,
    image: GTA5,
  }
];

export default function Banner() {
  return (
    <div className='relative w-full my-[35px]'>
      <Carousel data={bannerData} itemClass='px-[10px]' />
    </div>
  );
}
