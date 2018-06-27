import styled from 'styled-components';
import media from '../../styled-components/media';

export default styled.div`
  font-weight: 600;
  overflow: hidden;
  height: ${props => props.theme.lineHeight.bitlarger};
  display: flex;
  align-items: baseline;
  ${media.tablet`
    height: ${props => props.theme.lineHeight.larger};
  `}

  ${props => props.inline &&`
    display: inline-block;
    vertical-align: top;
  `}

  h2 {
    display: inline;
    margin: 0;
    white-space: nowrap;
  }

  ul {
    margin-top: 0;
    padding: 0;
    text-align: left;
    list-style: none;
  }

  li {
    white-space: nowrap;
    font-size: ${props => props.theme.fontSize.bitlarger};
    line-height: ${props => props.theme.lineHeight.bitlarger};
    ${props => props.theme.colored.gradient};
    ${media.tablet`
      font-size: ${props => props.theme.fontSize.giant};
      line-height: ${props => props.theme.lineHeight.larger};
    `}
  }
`;
