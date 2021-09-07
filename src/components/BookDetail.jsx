import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Context } from '../HOC';
import { Box, Typography } from '@material-ui/core';
import { StyledCardDetail } from '../styles';
import { booksBySameAuthor } from '../helpers';
import { Link } from 'react-router-dom';

export const BookDetail = () => {
  const books = useContext(Context);
  const { bookId } = useParams();
  const [bySameAuthor, setBySameAuthor] = useState(null);
  const [content, setContent] = useState(null);

  // setting detailed book information
  useEffect(() => {
    const data = books?.find(({ id }) => id === bookId);
    setContent(data);
  },[bookId, books])
  // setting list of books by same author
  useEffect(() => {
    const data = booksBySameAuthor(books, content?.author, bookId);
    setBySameAuthor(data);
  },[books, content?.author, bookId]);

  // render list of books by same author
  const listOfBooksBySameAuthor = bySameAuthor?.map(({id, title}) => 
    <Box component="ul" key={id}>
      <Box component="li">
        <Box component={Link} to={`/all-books/${id}`}> {title} </Box>
      </Box>
    </Box>)

  // render another books section
  const anotherBooksJSX = bySameAuthor && 
  <>
    <span>Another books by author:</span> 
    {listOfBooksBySameAuthor}
  </>

  return (
    <StyledCardDetail component="article">
    {content?.author && 
      <Box component="figure" className="book-info">
        <img src={content?.cover} title={`${content?.title} by - ${content?.author}`} alt="cover" className="book-info__media"/>
        <Box component="figcaption" className="book-info__content">
          <Box className="book-info__content-description">
            <Typography component="p" className="book-info__content-description__title">
                {content?.title}
              </Typography>
              <Typography component="p" className="book-info__content-description__author">
                {content?.author}
              </Typography>
          </Box>
          <Box className="book-info__content-copy">
          {content?.description && 
            <Typography component="p" className="book-info__content-copy__about">
              {content?.description}
            </Typography>}
            <Box component="div" display="flex" flexDirection="column">
              <Typography component="p" className="book-info__content-copy__isbn">
                <span>Serial number:</span> {content?.isbn}
              </Typography>
              <Typography component="div" className="book-info__content-copy__action">
                {anotherBooksJSX} 
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    }
    </StyledCardDetail>
  )
}
