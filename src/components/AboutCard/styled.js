import styled from 'styled-components';
import media from './../../styled-components/media';
import { Row, Col } from 'react-flexbox-grid';

export default styled(Row)`
  margin: 0 -20px 70px;
  position: relative;
  top: -20px;
  ${media.tablet`
    margin: 0 -20px 140px;
  `}
`;

export const H3 = styled.h3 `
  ${props => props.theme.colored.gradient};
`;

export const P = styled.div`
  margin: 0 0 30px;
`;

export const Link = styled.a`
  opacity: 0.8;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: normal;
  color: #4b52ba;

  ${media.tablet`
    font-size: 18px;
  `}
`;

export const Column = styled(Col)`
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: column;
  justify-content: flex-start;
  display: flex;
`;
