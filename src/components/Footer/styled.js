import styled from 'styled-components';
import media from './../../styled-components/media';
import { Col } from 'react-flexbox-grid';
import Link from '../Link/styled';

export const Footer = styled.div`
  padding: 20px 0;
  ${media.tablet`
    padding: 75px 0 100px;
  `}
  background-color: ${props => props.theme.colors.footer};
  * {
    color: white;
  }
`;

export const Links = styled.div`
  ${Link} {
    font-size: ${props => props.theme.fontSize.medium};
    margin-bottom: 20px;
    display: inline-block;
  }
`;

export const Column = styled(Col)`
  ${media.tablet`
    margin-bottom: 50px;
  `}
  ${props => props.right && media.tablet`
    text-align: right;
  `}
`
