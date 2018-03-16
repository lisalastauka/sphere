import styled from 'styled-components';
import media from './../../../styled-components/media';

export default styled.img`
  width: calc(100% + 40px);
  margin-top: -10px;
  ${media.tablet`
    margin-bottom: -45px;
    width: 400px;
  `}
`;
