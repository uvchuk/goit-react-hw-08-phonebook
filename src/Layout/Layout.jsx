import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { Header } from 'components/Header/Header';
import { Main } from './Layout.styled';

export const Layout = () => {
  return (
    <Container fixed>
      <Header />
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};
