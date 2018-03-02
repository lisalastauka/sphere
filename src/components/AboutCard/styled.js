import styled from 'styled-components';
import media from './../../styled-components/media';
import { Row, Col } from 'react-flexbox-grid';

export const AboutCard = styled(Row)`
  margin-bottom: 156px;
  margin-left: -20px;
  margin-right: -20px;
  /* img {
    width: calc(100% + 40px);
    margin: -10px -20px;
    ${media.tablet`
      width: 400px;
      margin-left: -35px;
      margin-top: -14px;
    `}
  } */

  h3 {
    background: linear-gradient(274deg, #618ef1 0%, #e6664a 100%, #fbb933 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Card = styled.div`
  margin-top: 30px;
  ${media.tablet `
    margin-top: 60px;
  `}
`;

export const Column = styled(Col)`
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
`;
