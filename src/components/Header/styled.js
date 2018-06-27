import styled from 'styled-components';
import media from './../../styled-components/media';

export default styled.div`
  margin-bottom: 15px;
  margin-top: 40px;
  max-width: 690px;
  ${media.desktop`
    margin-top: 0;
  `}

  h1 > span {
    white-space: nowrap;
    ${props => props.theme.colored.gradient};
  }

  .changeText li {
    font-weight: normal;
  }
`
export const P = styled.p`
  display: none;
  ${media.desktop`
    display: block;
  `}
`
