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
    line-height: 20px;
    margin-bottom: 14px;
    position: relative;
    padding-left: 17px;
  }

  li::before {
    font-size: 27px;
    vertical-align: middle;
    position: absolute;
    left: 0;
    content: "• ";
    color: ${props => props.theme.colors.lightBlue};
  }

  h3 {
    color: ${props => props.theme.colors.lightBlue};
    margin-bottom: 15px;
  }
`;
