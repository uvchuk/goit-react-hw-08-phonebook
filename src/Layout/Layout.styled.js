import styled from 'styled-components';
import background from 'assets/images/background.png';

export const Main = styled.main`
  overflow: auto;
  min-height: 70vh;
  background-image: url(${background});
  background-size: 100% 100%;
  background-position: bottom-right;
  background-repeat: no-repeat;
`;
