// Core
import React, { useContext } from 'react'
// MUI
import { Grid } from '@material-ui/core';

import { Context } from '../HOC'
import { Book } from './UI';

export const BooksList = () => {
  const books = useContext(Context);
  const listOfBooksJSX = books?.map((book) => <Book key={book.id} {...book} />);
  return (
    <Grid container component="ul">
      {listOfBooksJSX}
    </Grid>
  )
}
