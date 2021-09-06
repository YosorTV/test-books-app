import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Context } from '../HOC';
import { Box, Typography } from '@material-ui/core';
import { StyledCardDetail } from '../styles';
import { booksBySameAuthor } from '../helpers';
import { Link } from 'react-router-dom';

export const BookDetail = () => {
  const books = useContext(Context);
  const [bySameAuthor, setBySameAuthor] = useState(null);
  const { bookId } = useParams();

  const {author, title, cover, description, isbn} = books?.find(({ id }) => id === bookId);

  useEffect(() => {
    const data = booksBySameAuthor(books, author, bookId);
    setBySameAuthor(...data);
  },[books, author, bookId]);

  const anotherBooksJSX = bySameAuthor && 
  <>
    <span>Another books by author:</span> 
    <Typography component={Link} to={`/all-books/${bySameAuthor.id}`}>{bySameAuthor.title}</Typography>
  </>


  return (
    <StyledCardDetail component="article">
      <Box component="figure" className="book-info">
        <img src={cover} title={`${title} by - ${author}`} loading="lazy" alt="cover" className="book-info__media"/>
        <Box component="figcaption" className="book-info__content">
          <Box className="book-info__content-description">
            <Typography component="p" className="book-info__content-description__title">
                {title}
              </Typography>
              <Typography component="p" className="book-info__content-description__author">
                {author}
              </Typography>
          </Box>
          <Box className="book-info__content-copy">
          {description && 
            <Typography component="p" className="book-info__content-copy__about">
              {description}
            </Typography>}
            <Box component="div" display="flex" flexDirection="column">
              <Typography component="p" className="book-info__content-copy__isbn">
                <span>Serial number:</span> {isbn}
              </Typography>
              <Typography component="p" className="book-info__content-copy__action">
                {anotherBooksJSX} 
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </StyledCardDetail>
  )
}
