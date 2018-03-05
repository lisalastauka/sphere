import styled from 'styled-components';
import media from './../../styled-components/media';

export default styled.div`
  position: absolute;
  top: 0;
  right: 480px;
  padding: 20px 0;
  min-height: 85px;
  margin: 0;
  display: none;

  ${media.desktop`
    display: block;
  `}

  a {
    font-family: ${props => props.theme.fonts.graphik.medium};
    font-size: 1.8rem;
  	font-weight: 500;
  	line-height: 1.11;
  	text-align: right;
  }
`;
