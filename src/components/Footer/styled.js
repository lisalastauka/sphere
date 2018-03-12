import styled from 'styled-components';
import media from './../../styled-components/media';
import { Col, Row } from 'react-flexbox-grid';
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

export const Header = styled(Row)`
  margin-bottom: 20px;
`;

export const Badge = styled.div`
  top: -18px;
  right: 9px;
  position: absolute;
  width: 19px;
  height: 73.4px;
  border-radius: 0 100px 100px 0;
  background-color: rgb(255, 255, 255);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  font-size: 10px;
  font-weight: 500;
  color: rgb(102, 122, 211);

  div {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    font-family: ${props => props.theme.fonts.graphik.medium};
    margin-top: 24px;
    font-size: 10px;
    font-weight: 500;
    color: rgb(102, 122, 211);
  }
`;

export const ButtonGroup = styled.div`
  margin: 60px 0;
`

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
