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
    padding-left: 1em;
    text-indent: -.7em;
  }

  li::before {
    content: "• ";
    color: ${props => props.theme.colors.lightBlue};
  }

  h3 {
    color: ${props => props.theme.colors.lightBlue};
  }
`;
