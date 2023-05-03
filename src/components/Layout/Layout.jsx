import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header } from './Layout.styled';
import UserMenu from 'components/UserMenu/UserMenu';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <UserMenu />
      </Header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
