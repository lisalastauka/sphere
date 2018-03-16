import styled from 'styled-components';
import media from './../../styled-components/media';
import { Row, Col } from 'react-flexbox-grid';

export default styled(Row)`
  margin: 0 -20px 70px;
  ${media.tablet`
    margin: 0 -20px 140px;
  `}

  h3 {
    ${props => props.theme.colored.gradient};
  }
`;

export const P = styled.div`
  margin: 0 0 30px;
`;

export const Column = styled(Col)`
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: column;
  justify-content: flex-start;
  display: flex;
`;
