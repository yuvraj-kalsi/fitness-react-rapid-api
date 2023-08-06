import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">

      {/* 1 */}
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">

        Fitness Club

      </Typography>


      {/* 2 */}
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">

        Sweat, Smile <br />
        And Repeat

      </Typography>


      {/* 3 */}
      <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mb={4}>

        Check out the most effective exercises personalized to you

      </Typography>


      {/* 4 */}
      <Button variant="contained"
        color="error"
        href="#exercises"
        sx = {{backgroundColor: '#ff2625', padding: '10px'}}>

        Explore Exercises

      </Button>

      {/* 5 At the Background*/}
      <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
        
        Exercise
      
      </Typography>


      {/* 6 */}
      <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />

    </Box>
  )
}

export default HeroBanner