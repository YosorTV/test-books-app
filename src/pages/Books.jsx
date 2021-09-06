import { Box } from '@material-ui/core'
import { motion } from 'framer-motion'
import React from 'react'
import { BooksList } from '../components'
// Animations
import { variants } from '../animations';
const { reveal } = variants;

const Books = () => {
  return (
    <Box 
      component={motion.section} 
      variants={ reveal() }
      initial="hidden"
      animate="visible"
      exit="exit">
      <BooksList />
    </Box>
  )
}

export default Books
