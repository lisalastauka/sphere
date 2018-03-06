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
    line-height: 30px;
  }

  li::before {
    font-size: 27px;
    vertical-align: middle;
    content: "• ";
    color: ${props => props.theme.colors.lightBlue};
  }

  h3 {
    color: ${props => props.theme.colors.lightBlue};
  }
`;
