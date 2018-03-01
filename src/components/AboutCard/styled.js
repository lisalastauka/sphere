import styled from 'styled-components';
import media from './../../styled-components/media';
import { Row } from 'react-flexbox-grid';

export const AboutCard = styled(Row)`
  /* img {
    width: calc(100% + 40px);
    margin: -10px -20px;
    ${media.tablet`
      width: 400px;
      margin-left: -35px;
      margin-top: -14px;
    `}
  } */
`;

export const Card = styled.div`
  margin-bottom: 30px;
  ${media.tablet `
    height: 85px;
    margin-bottom: 25px;
  `}
`;
