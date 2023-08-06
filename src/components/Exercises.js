import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {


  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9


  // Showing first 9 then next 9 and so on...

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);


  const paginate = (event, value) => {
    setCurrentPage(value);

    // Move up after clicking the page number
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  // When the horizontal scroll is clicked
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  return (

    // When navbar click exercises it matches href with this id
    <Box id="exercises"
      sx={{ mt: { lg: '70px' }}}
      mt="50px"
      p="20px"
    >

      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">

        Showing Results

      </Typography>

      <Stack direction="row" sx={{ gap: { lg: '50px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">

        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}

      </Stack>

      {/* If the total exercises are more than 9 */}
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">

        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}

            // paginate send the event and the value of the page which is clicked 
            onChange={paginate}

            size="large"
          />
        )}

      </Stack>
    </Box>
  )
}

export default Exercises