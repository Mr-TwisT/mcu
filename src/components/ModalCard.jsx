import { Backdrop, Box, Fade, Modal, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../data/features/movie/movieSlice';

const ModalCard = () => {
  const { isModalOpen, movieInModal } = useSelector((store) => store.movieCard);
  const dispatch = useDispatch();

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
                  src={movieInModal.cover_url}
                  alt={`"${movieInModal.title}" movie`}
                  style={{
                    width: '66%',
                    borderRadius: '40px',
                  }}
                />
              </Box>
              <Box
                className="info"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'start',
                  paddingLeft: '12px',
                  gap: '1rem',
                }}
              >
                <Typography variant="h3" textAlign="center">
                  {movieInModal.title}
                </Typography>
                <Box className="releaseDate">
                  <Typography sx={{ fontWeight: 'bold' }}>
                    Release data:{' '}
                  </Typography>
                  <Typography>{movieInModal.release_date}</Typography>
                </Box>
                <Box className="duration">
                  <Typography sx={{ fontWeight: 'bold' }}>
                    Duration:{' '}
                  </Typography>
                  <Typography>{movieInModal.duration} min</Typography>
                </Box>
                <Box className="directedBy">
                  <Typography sx={{ fontWeight: 'bold' }}>
                    Directed by:{' '}
                  </Typography>
                  <Typography>{movieInModal.directed_by}</Typography>
                </Box>
                <Box className="phase">
                  <Typography sx={{ fontWeight: 'bold' }}>
                    MCU Phase:{' '}
                  </Typography>
                  <Typography>{movieInModal.phase}</Typography>
                </Box>
                <Box className="postCredit">
                  <Typography sx={{ fontWeight: 'bold' }}>
                    Post credit scenes:{' '}
                  </Typography>
                  <Typography>{movieInModal.post_credit_scenes}</Typography>
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
