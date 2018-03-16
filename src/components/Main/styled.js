import styled from 'styled-components';
import media from './../../styled-components/media';
import { Row } from 'react-flexbox-grid';

export const Gradient = styled.div`
  height: 5px;
  display: none;
  ${media.tablet`
    display: block;
    margin-bottom: 30px;
  `}
  -webkit-background:
    -webkit-gradient(linear, 270deg, #749EFB 0%, #E6664A 49.42%, #FBB933 100%);
  -webkit-background:
    -webkit-linear-gradient(270deg, #749EFB 0%, #E6664A 49.42%, #FBB933 100%);
  -moz-background:
    -moz-linear-gradient(270deg, #749EFB 0%, #E6664A 49.42%, #FBB933 100%);
  -o-background:
    -o-linear-gradient(270deg, #749EFB 0%, #E6664A 49.42%, #FBB933 100%);
  background:
    linear-gradient(270deg, #749EFB 0%, #E6664A 49.42%, #FBB933 100%);
`;

export const Container = styled(Row)`
   margin: 20px;

   ${media.desktop`
      margin: 0 100px;
   `}

   ${media.giant`
      max-width: 1280px;
      margin: 0 auto;
   `}
`;

export const FullScreen = styled.div`
  display: flex;
  flex-direction: column;
  ${media.tablet`
    height: 100vh;
    min-height: fit-content;
  `}
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  justify-content: center;
`
