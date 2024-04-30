import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import 'swiper/css/bundle';

// import './styles.css';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { useLoaderData } from 'react-router-dom';

const Banner = () => {
  const info = useLoaderData();
  // console.log(info);
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
          info.map((inf, idx) => (<>
            <SwiperSlide key={idx}>
              <div className='w-full relative'>
                <img className='absolute w-full object-cover -z-20' src={inf.url} alt="Banner Image" />
                <div className='absolute text-white space-y-4 z-20 w-[50%] mx-auto top-[14rem] right-[6rem]'>
                  <h2 className='font-mplus font-semibold text-4xl'>{inf.title}</h2>
                  <p className='font-mplus font-medium'>{inf.description}</p>
                </div>
              </div>
            </SwiperSlide>
          </>))
        }
        {/* <SwiperSlide>
          <img className='w-full object-cover -z-20' src="https://img.freepik.com/premium-photo/loom-with-many-multicolored-strips-generative-ai_272168-9720.jpg?w=1060" alt="Banner Image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full object-cover -z-20' src="https://img.freepik.com/premium-photo/precision-engineering-vividly-colored-cables-organized-industrial-setting_875722-36370.jpg?w=1060" alt="Banner Image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full object-cover -z-20' src="https://images.unsplash.com/photo-1476683874822-744764a2438f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Banner Image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full object-cover -z-20' src="https://images.unsplash.com/photo-1675176785803-bffbbb0cd2f4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Banner Image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full object-cover -z-20' src="https://images.unsplash.com/photo-1606053929013-311c13f97b5f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Banner Image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full object-cover -z-20' src="https://plus.unsplash.com/premium_photo-1664299852788-5a24db0d7e05?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Banner Image" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Banner;