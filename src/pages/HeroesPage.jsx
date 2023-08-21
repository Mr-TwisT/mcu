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
  const { cardItems } = useSelector((store) => store.card);

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
              fadeEffect={true} //?
              grabCursor={true}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              style={{ padding: '0 0 4rem 0', overflow: 'visible' }}
            >
              <SwiperSlide>
                <HeroSmallCard
                  name={cardItems[34].title}
                  image={cardItems[34].cover_url}
                  desc={cardItems[3].overview}
                />
              </SwiperSlide>
              <SwiperSlide>
                <HeroSmallCard
                  name={cardItems[34].title}
                  image={cardItems[34].cover_url}
                  desc={cardItems[3].overview}
                />
              </SwiperSlide>
              <SwiperSlide>
                <HeroSmallCard
                  name={cardItems[34].title}
                  image={cardItems[34].cover_url}
                  desc={cardItems[3].overview}
                />
              </SwiperSlide>
              <SwiperSlide>
                <HeroSmallCard
                  name={cardItems[34].title}
                  image={cardItems[34].cover_url}
                  desc={cardItems[3].overview}
                />
              </SwiperSlide>
              <SwiperSlide>
                <HeroSmallCard
                  name={cardItems[34].title}
                  image={cardItems[34].cover_url}
                  desc={cardItems[3].overview}
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
