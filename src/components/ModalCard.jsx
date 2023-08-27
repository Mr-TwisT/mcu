import { Backdrop, Box, Fade, Modal, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../data/features/movie/movieSlice';

import MovieCardInfo from './MovieCardInfo';

const ModalCard = () => {
  const { isModalOpen, movieInModal } = useSelector((store) => store.movieCard);
  const dispatch = useDispatch();

  const {
    title,
    cover_url,
    release_date,
    duration,
    directed_by,
    phase,
    post_credit_scenes,
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
              border: '2px solid #000',
              borderRadius: '40px',
              background: '#fff',
              boxShadow: 24,
            }}
          >
            <Box sx={{ display: 'flex' }}>
              <Box>
                <img
                  src={cover_url}
                  alt={`"${title}" movie`}
                  style={{
                    width: '66%',
                    borderRadius: '40px 0 0 40px',
                  }}
                />
              </Box>
              <Box>
                <Typography variant="h3" textAlign="center" mt={2} mb={4}>
                  &quot;{title}&quot;
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    gap: '1rem',
                    transform: 'translateX(-55%)',
                  }}
                >
                  <MovieCardInfo header="Release date" text={release_date} />
                  <MovieCardInfo header="Duration" text={duration} />
                  <MovieCardInfo header="Directed by" text={directed_by} />
                  <MovieCardInfo header="MCU Phase" text={phase} />
                  <MovieCardInfo
                    header="Post credit scenes"
                    text={post_credit_scenes}
                  />
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

//zmienić background, dodać więcej info, naprawić pozycjonowanie
