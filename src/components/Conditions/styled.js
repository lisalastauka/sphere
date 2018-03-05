import styled from 'styled-components';
import media from './../../styled-components/media';

export default styled.div`
  ul {
    list-style: none;
    padding: 0;

    ${media.tablet`
      margin: 0 0 50px;
    `}
  }

  li {
    padding-left: 2.5em;
    text-indent: -1.1em;
    line-height: 30px;
  }

  li::before {
    font-size: 28px;
    position: absolute;
    content: "• ";
    color: ${props => props.theme.colors.lightBlue};
  }

  h3 {
    color: ${props => props.theme.colors.lightBlue};
  }
`;
