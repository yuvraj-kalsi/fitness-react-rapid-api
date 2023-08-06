import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {

  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all');

  // console.log(bodyPart)
  
  return (
    <Box>
      
      {/* Front Page */}
      <HeroBanner />

      {/* Search and Categories */}
      <SearchExercises 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart}
      />

      {/* Exercise Component */}
      <Exercises 
        exercises={exercises}
        setExercises={setExercises} 
        bodyPart={bodyPart} 
      />
    
    </Box>
  )
}

export default Home