import styled from 'styled-components';
import media from './../../styled-components/media';

export default styled.div`
  margin-bottom: 20px;
  margin-top: 40px;
  max-width: 690px;
  ${media.desktop`
    margin-top: 0;
  `}
  h1 {
    min-height: 90px;
    ${media.tablet`
      min-height: 162px;
    `}
  }

  h1 > b {
    white-space: nowrap;
    ${props => props.theme.colored.gradient};
  }
`
