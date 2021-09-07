import React from 'react'
import MuiAlert from '@material-ui/lab/Alert';
import { ErrorNotification } from '../../styles';

export const Error = ({ error }) => {
  const errorJSX = error && <MuiAlert elevation={6} variant="filled" severity="error" >{error}</MuiAlert>
  return (
    <ErrorNotification>
      {errorJSX}
    </ErrorNotification>
  )
}
