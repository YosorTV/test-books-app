//Core
import { Link } from 'react-router-dom'
//MUI
import { CardActions, CardContent, CardMedia, Typography, Button, Grid } from '@material-ui/core';
import { StyledCard } from '../../styles';
import placeholder from '../../assets/placeholder.jpg';

export const Book = ({ title, author, cover, id }) => {

  return (
    <Grid item xs={12} sm={12} md={6} lg={4} xl={4} component="li">
      <StyledCard>
        <CardMedia
          className="card-image"
          image={cover ? cover : placeholder}
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