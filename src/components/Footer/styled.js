import styled from 'styled-components';
import Link from '../Link/styled';

export const Footer = styled.div`
  padding: 75px 0 100px;
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
