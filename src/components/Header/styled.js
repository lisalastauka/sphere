import styled from 'styled-components';
import media from './../../styled-components/media';

export default styled.div`
  margin-bottom: 20px;
  max-width: 690px;

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
