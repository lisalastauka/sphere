import styled from 'styled-components';
import media from './../../styled-components/media';
import Button, { Group } from '../Button/styled';

export const Slides = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 720px;
  height: 260px;
  margin-bottom: 140px;

  ${Group} {
    white-space: nowrap;
    display: none;
    ${media.tablet`
      display: block;
    `}
  }
`;

export const Slide = styled.div`
  position: absolute;
  margin: auto;
  width: 100%;
  background: ${props => props.theme.colors.side};
  border-radius: 5px;
  box-shadow: 0px 10px 30px rgba(21, 17, 97, 0.1), 0px 5px 5px rgba(32, 46, 113, 0.1);
  z-index: 3;
  top: 30px;
  font-size: ${props => props.theme.fontSize.regular};
  font-family: ${props => props.theme.fonts.graphik.medium};
  ${media.tablet`
    top: 105px;
    ${props => props.backward && `
      top: 0;
    `}
    ${props => props.center && `
      top: 45px;
    `}
  `}
  ${props => props.center && `
    z-index: 2;
    padding: 30px;
    width: 88%;
    max-width: 640px;
    margin: 0 6%;
    top: 15px;
    h5 {
      opacity: 0.7;
    }
  `}

  ${props => props.backward && `
    font-size: ${props.theme.fontSize.small};
    padding: 20px 30px;
    z-index: 1;
    width: 75%;
    max-width: 540px;
    margin: 0 13%;
    top: 0;
    h6 {
      opacity: 0.5;
    }
  `}

  > ${Button} {
    ${media.tablet`
      display: none;
    `}
  }
`;

export const Inner = styled.div`
  padding: 30px;
`;
