//Core
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
//MUI
import { CardActions, CardContent, CardMedia, Typography, Button, Grid } from '@material-ui/core';
import { StyledCard } from '../../styles';
import { cacheImages } from '../../helpers';


export const Book = ({ title, author, cover, id }) => {
  
  useEffect(() => {
    cacheImages([cover])
  },[cover]);

  return (
    <Grid item xs={12} sm={12} md={6} lg={4} xl={4} component="li">
      <StyledCard>
        <CardMedia
          className="card-image"
          image={cover}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {author}
          </Typography>
        </CardContent>
      <CardActions>
        <Button component={Link} to={`/all-books/${id}`}>
          More information
        </Button>
      </CardActions>
    </StyledCard>
  </Grid>
  );
}