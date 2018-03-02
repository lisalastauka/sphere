import styled from 'styled-components';
import media from './../../styled-components/media';
import { Row } from 'react-flexbox-grid';

export const Gradient = styled.div`
  height: 5px;
  margin-bottom: 65px;
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

   ${media.tablet`
      margin: 0 84px;
   `}

   ${media.desktop`
      max-width: 1280px;
      margin: 0 auto;
   `}
`;
