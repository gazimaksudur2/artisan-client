import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { useLoaderData } from 'react-router-dom';

const Banner = () => {
  const info = useLoaderData();
  return (
    <div className='h-[50vh] md:h-[90vh] w-full mt-5 mb-16'>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        navigation={true}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Pagination, Navigation]}
        className="h-full bg-gray-400"
      >
        {
          info && info.map((inf, idx) => (<>
            <SwiperSlide key={idx}>
              <div className='w-full relative'>
                <img className='absolute w-full object-cover -z-20' src={inf.url} alt="Banner Image" />
                <div className='absolute z-30 right-12 top-32 md:right-14 md:top-[16rem] flex flex-col lg:justify-center justify-evenly items-start p-3 lg:p-6 rounded-3xl w-[80%] lg:w-[40%] gap-2 md:gap-6 text-start backdrop-blur-lg'>
                  <h2 className='font-exo text-white font-bold text-xl md:text-2xl lg:text-5xl'>{inf.title}</h2>
                  <p className='font-mplus text-white font-normal text-xs lg:text-lg'>{inf.description}</p>
                  <button className='btn btn-accent'>Learn More</button>
                </div>
              </div>
            </SwiperSlide>
          </>))
        }
      </Swiper>
    </div>
  );
};

export default Banner;