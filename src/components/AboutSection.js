import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ingredients from '../props/ingredients.png';

const AboutSection = () => {
  return (
    <Box
      sx={{
        background:
          'linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)',
        display: 'flex',
        height: '467px',
        justifyContent: 'center',
        alignItems: 'center',
        my: 5,
        px: { xs: 2, md: 5 },
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          alt="About Us"
          src={ingredients}
          style={{
            height: '468px',
            objectFit: 'cover',
            width: '384px',
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          px: { xs: 2, md: 0 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '447px',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography
            color="primary"
            gutterBottom
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: { xs: '30px', md: '45px' },
              fontWeight: '600',
              lineHeight: '1.2',
            }}
          >
            About Us
          </Typography>
          <Typography
            paragraph
            sx={{
              color: 'text.secondary',
              fontFamily: 'Open Sans, sans-serif',
              fontSize: '15px',
              fontWeight: '400',
              lineHeight: '27px',
              mt: 1,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
          </Typography>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            sx={{
              borderRadius: '50px',
              fontFamily: 'Open Sans, sans-serif',
              mt: 2,
              px: 4,
              py: 1.5,
              fontWeight: '700',
              fontSize: '13px',
            }}
          >
            Read More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;