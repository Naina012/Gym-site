import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="750" fontSize="36px">Workout Haven</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '40px', xs: '36px' } }} mb="23px" mt="30px">
    Embrace the burn, keep pushing, <br />
    and never give up.
    </Typography>
    <Typography fontSize="20px" fontFamily="Alegreya" lineHeight="32px">
    Reap the benefits of exercises personalized to your body, mind, and spirit.
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      GYM FIRE 
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
