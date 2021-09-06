//Core
import React from 'react'
import { motion } from 'framer-motion';
//MUI
import { Box } from '@material-ui/core'
// Components
import { BookDetail } from '../components'
// Animations
import { variants } from '../animations';
const { reveal } = variants;

const BookById = () => {
  return (
    <Box 
      component={motion.section} 
      variants={ reveal() }
      initial="hidden"
      animate="visible"
      exit="exit">
      <BookDetail />
    </Box>
  )
}

export default BookById
