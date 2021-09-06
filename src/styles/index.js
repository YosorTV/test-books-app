import styled from 'styled-components';
import { Card, Paper } from '@material-ui/core';
export * from './theme';

export const Load = styled.div`
  background: linear-gradient(to bottom, #ffffff, #f1f1f1 50%, #d3d3d3 75%, #d3d3d3 75%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: relative;
    svg{
      font-size: 3rem;
      color:#534646;
    }
    .return{
      position: absolute;
      left: 0.5rem;
      svg{
        font-size: 2rem;
        color: #303030;
      }
    }
`;
export const Main = styled.main`
  padding:4rem;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding:2rem;
  }
  ${({ theme }) => theme.breakpoints.down("xs")} {
    padding:.5rem;
  }
`;
export const StyledCard = styled(Card)`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .card-image{
    min-height: 25vh;
    width: 100%;
    object-fit: cover; 
  }
`
export const StyledCardDetail = styled(Paper)`
  width: 45vw;
  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 60vw;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 75vw;
  }
  ${({ theme }) => theme.breakpoints.down("xs")} {
    width: 90vw;
  }
  .book-info{
    width: 100%;
    display: flex;
    flex-direction: column;
    &__media{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &__content{
      background: #f3f3f3;
      color:#303030;
      padding:1rem 2rem;
      &-description{
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        &__title{
          font-weight: bold;
          font-size: 1.4rem;
        }
        &__author{
          font-style: italic;
          font-size: 1rem;
        }
        ${({ theme }) => theme.breakpoints.down("sm")} {
          flex-direction: column;
          &__title{
            font-size: 1rem;
          }
          &__author{
            padding-top: .5rem;
          }
        }
      }
      &-copy{
        display: flex;
        justify-content: space-between;
        padding: 1rem 0rem;
        &__about{
          flex: 1 1 100%;
          padding-right: 1rem;
        }
        &__isbn, &__action{
          span{
            font-weight: bold;
          }
          font-style: italic;
          font-size: 1rem;
        }
        ${({ theme }) => theme.breakpoints.down("sm")} {
          flex-direction: column;
            &__isbn, &__action{
            padding:1rem 0 0 0;
            flex: 1;
          }
        }
      }
    }
  }
`;