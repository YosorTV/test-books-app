import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Load } from '../../styles';

export const Loader = () => {
  return (
    <Load>
      <CircularProgress />
    </Load>
  )
}
