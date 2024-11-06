import React from 'react';
import pizza from '../props/pizza.png';
import { Box, Typography, Button } from '@mui/material';
import logo from '../props/logo.png';

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        width: '100%',
        height: { xs: 'auto', md: '804px' },
      }}
    >
      {/* Left Section (Text) */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
          textAlign: { xs: 'center', md: 'left' },
          padding: { xs: '2rem 1rem', md: '0rem 6rem' },
          mt: { xs: 3, md: 0 },
        }}
      >
        {/* Logo (Hidden on Mobile) */}
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            width: '107px',
            height: '83px',
            mt: 5,
            mb: 8,
            display: { xs: 'none', md: 'block' },
          }}
        />
        {/* Main Heading */}
        <Typography
          sx={{
            fontFamily: 'Source Sans Pro, sans-serif',
            fontSize: { xs: '2.5rem', md: '62px' },
            fontWeight: '700',
            lineHeight: { xs: '1.2', md: '69px' },
            mb: '1.5rem',
          }}
          color="primary"
          gutterBottom
        >
          Discover the <br />
          <span style={{ color: 'red' }}>Best</span> Food <br />
          and Drinks
        </Typography>
        {/* Body Text */}
        <Typography
          sx={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: { xs: '1rem', md: '1.125rem' },
            lineHeight: { xs: '1.5', md: '1.75' },
            mb: '1rem',
          }}
          color="text.secondary"
          paragraph
        >
          Naturally made Healthcare Products for the <br /> better care & support of your body.
        </Typography>
        {/* Explore Button */}
        <Button
          variant="contained"
          color="secondary"
          sx={{
            borderRadius: '50px',
            fontFamily: 'Open Sans, sans-serif',
            mt: '1.5rem',
            px: { xs: 3, md: 4 },
            py: { xs: 1.5, md: 2 },
            fontSize: { xs: '1rem', md: '16px' },
          }}
        >
          Explore Now!
        </Button>
      </Box>
      {/* Right Section (Image and Transparent Button) */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' }, // Full width on mobile, half on desktop
          height: { xs: 'auto', md: '100%' }, // Auto height on mobile, full height on desktop
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden', // Prevents white space around the image
        }}
      >
        <img
          src={pizza}
          alt="Hero"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Transparent Button */}
        <Button
          variant="outlined"
          color="inherit"
          sx={{
            position: 'absolute',
            top: { xs: '16px', md: '32px' },
            right: { xs: '16px', md: '40px' },
            fontWeight: 700,
            color: 'white',
            borderColor: 'white',
            borderRadius: '50px',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
            fontSize: { xs: '0.75rem', md: '1rem' },
            px: { xs: 2, md: 3 },
            py: { xs: 0.5, md: 1 },
          }}
        >
          Get In Touch
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
