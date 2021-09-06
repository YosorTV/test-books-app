
//Core
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { Outlet, useLocation } from 'react-router-dom';
import { CssBaseline, AppBar, useTheme, Container, IconButton } from "@material-ui/core";
import { ThemeProvider } from 'styled-components'

import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Main, Nav } from '../../styles';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

const Return = ({ path }) => {
  const rootPage = '/all-books';
  const navigate = useNavigate();
  const goBack = () => navigate(rootPage);

  return (
    <>
      {path !== rootPage && <IconButton onClick={ goBack } className="return"> <KeyboardReturnIcon/> </IconButton>}
    </>
  )
}

export const Layout = () => {
  const muiTheme = useTheme();
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top:0,
      left: 0,
      behavior: 'auto'
    });
  }, [pathname]);


  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Container disableGutters maxWidth="xl">
        <AppBar position="relative">
          <Nav>
            <MenuBookIcon />
            <Return path={pathname} />
          </Nav>
        </AppBar>
        <Main>
          <Outlet />
        </Main>
      </Container>
    </ThemeProvider>
  )
}