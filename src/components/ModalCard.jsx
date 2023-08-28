import { Backdrop, Box, Fade, Modal, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../data/features/movie/movieSlice';

import MovieCardInfo from './MovieCardInfo';

const ModalCard = () => {
  const { isModalOpen, movieInModal } = useSelector((store) => store.movieCard);
  const dispatch = useDispatch();

  const {
    title,
    release_date,
    box_office,
    duration,
    overview,
    cover_url,
    trailer_url,
    directed_by,
    phase,
    saga,
    chronology,
    post_credit_scenes,
    imdb_id,
  } = movieInModal;

  return (
    <>
      <Modal
        open={isModalOpen}
        onClose={() => dispatch(closeModal())}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 1000,
            sx: {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
          },
        }}
      >
        <Fade in={isModalOpen}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '75%',
              height: '80vh',
              border: 'none',
              borderRadius: '40px',
              background: '#fff',
              boxShadow: 24,
            }}
          >
            <Box sx={{ display: 'flex', height: '100%' }}>
              <Box
                sx={{
                  flex: 1,
                  height: '100%',
                  backgroundImage: `url(${cover_url})`,
                  backgroundColor: '#000',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  border: 'none',
                  borderRadius: '40px 0 0 40px',
                }}
              >
                {/* <img
                  src={cover_url}
                  alt={`"${title}" movie`}
                  style={{
                    width: '66%',
                    borderRadius: '40px 0 0 40px',
                  }}
                /> */}
              </Box>
              <Box sx={{ flex: 2, height: '100%' }}>
                <Typography
                  variant="h3"
                  textAlign="center"
                  fontStyle="italic"
                  mt={2}
                  mb={4}
                >
                  &quot;{title}&quot;
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    height: '100%',
                    gap: '1rem',
                    padding: '0 1rem',
                  }}
                >
                  <MovieCardInfo
                    header="Overview"
                    text={overview}
                    style={{ textAlign: 'justify' }}
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      height: '55%',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                      }}
                    >
                      <MovieCardInfo
                        header="Release date"
                        text={release_date}
                      />
                      <MovieCardInfo
                        header="Duration"
                        text={`${duration} minutes`}
                      />
                      <MovieCardInfo header="Directed by" text={directed_by} />
                      <MovieCardInfo header="Trailer" text={trailer_url} />
                      <MovieCardInfo header="Chronology" text={chronology} />
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                      }}
                    >
                      <MovieCardInfo header="MCU Saga" text={saga} />
                      <MovieCardInfo header="MCU Phase" text={phase} />
                      <MovieCardInfo
                        header="Post credit scenes"
                        text={post_credit_scenes}
                      />
                      <MovieCardInfo
                        header="Box office"
                        text={`${box_office} USD`}
                      />
                      <MovieCardInfo header="IMDB Score" text={imdb_id} />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ModalCard;

// background
