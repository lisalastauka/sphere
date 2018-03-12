import styled from 'styled-components';
import media from './../../styled-components/media';
import { Row, Col } from 'react-flexbox-grid';

export const AboutCard = styled(Row)`
  margin: 0 -20px 70px;
  ${media.tablet`
    margin: 0 -20px 140px;
  `}

  img {
    width: calc(100% + 40px);
    margin-top: -10px;
    margin-left: -20px;
    ${media.tablet`
      margin-bottom: -45px;
      margin-left: -30px;
      width: 400px;
    `}
  }

  h3 {
    background: linear-gradient(274deg, #618ef1 0%, #e6664a 100%, #fbb933 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Card = styled.div`
  margin: 0 0 30px;
  ${media.tablet `
    margin: 60px 0 0;
  `}
`;

export const Column = styled(Col)`
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
`;
