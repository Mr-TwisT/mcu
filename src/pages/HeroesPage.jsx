import { Box, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/HeroesPage.css';

import HeroSmallCard from '../components/HeroSmallCard';

const HeroesPage = () => {
  const { movieCardItems } = useSelector((store) => store.movieCard);

  return (
    <Stack sx={{ height: '100vh', padding: '1rem', backgroundColor: '#aaa' }}>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            maxWidth: '1320px',
            width: '100%',
            padding: '2rem 2.75rem',
            overflow: 'hidden',
          }}
        >
          <Box sx={{ borderRadius: '25px' }}>
            <Swiper
              slidesPerView={3}
              spaceBetween={45}
              loop={true}
              centeredSlides={true}
              grabCursor={false}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              style={{ paddingBottom: '4rem', overflow: 'visible' }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                650: {
                  slidesPerView: 2,
                  centeredSlides: false,
                },
                1100: {
                  slidesPerView: 3,
                  centeredSlides: true,
                },
              }}
            >
              <SwiperSlide>
                <HeroSmallCard
                  name={movieCardItems[34].title}
                  image={movieCardItems[34].cover_url}
                  desc={movieCardItems[3].overview}
                />
              </SwiperSlide>
              <SwiperSlide>
                <HeroSmallCard
                  name={movieCardItems[34].title}
                  image={movieCardItems[34].cover_url}
                  desc={movieCardItems[3].overview}
                />
              </SwiperSlide>
              <SwiperSlide>
                <HeroSmallCard
                  name={movieCardItems[34].title}
                  image={movieCardItems[34].cover_url}
                  desc={movieCardItems[3].overview}
                />
              </SwiperSlide>
              <SwiperSlide>
                <HeroSmallCard
                  name={movieCardItems[34].title}
                  image={movieCardItems[34].cover_url}
                  desc={movieCardItems[3].overview}
                />
              </SwiperSlide>
              <SwiperSlide>
                <HeroSmallCard
                  name={movieCardItems[34].title}
                  image={movieCardItems[34].cover_url}
                  desc={movieCardItems[3].overview}
                />
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default HeroesPage;
