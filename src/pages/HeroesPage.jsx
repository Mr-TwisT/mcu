import { Box, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import HeroSmallCard from '../components/HeroSmallCard';

const HeroesPage = () => {
  const { cardItems } = useSelector((store) => store.card);

  return (
    <Stack sx={{ height: '100vh', padding: '1rem' }}>
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
            background: 'grey',
            maxWidth: '1320px',
            width: '100%',
            padding: '2.5rem',
          }}
        >
          <Box sx={{ padding: '2.82rem 1.25rem' }}>
            <Box>
              <Swiper
                slidesPerView={3}
                spaceBetween={25}
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
      </Box>
    </Stack>
  );
};

export default HeroesPage;
