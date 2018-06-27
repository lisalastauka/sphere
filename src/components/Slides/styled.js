import styled from 'styled-components';
import media from './../../styled-components/media';
import Button, { Group } from '../Button/styled';

export default styled.div`
  ${media.tablet`
    margin-bottom: 70px;
  `}
  ${media.desktop`
    margin-bottom: 140px;
  `}

  h2 {
    ${media.desktop`
      line-height: 54px;
    `}
  }

  h2 > span {
    white-space: nowrap;
  }

  p {
    margin-bottom: 20px;
    ${media.desktop`
      margin-bottom: 40px;
    `}
  }

  .changeText li {
    font-size: ${props => props.theme.fontSize.large};
    line-height: ${props => props.theme.lineHeight.bitlarger};
    font-weight: 500;
    ${media.tablet`
      letter-spacing: -0.38px;
      font-size: ${props => props.theme.fontSize.larger};
      line-height: ${props => props.theme.lineHeight.larger};
    `}
  }
`;

export const Slides = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 720px;
  margin-top: 45px;
  height: 400px;

  ${media.desktop`
    margin-top: 0px;
    height: 260px;
  `}

  ${Group} {
    white-space: nowrap;
    display: none;
    ${media.desktop`
      display: block;
    `}
  }
`;

export const H2 = styled.h2`
  display: inline-block;
  margin: 0;
  ${media.tablet`
    line-height: 54px;
  `}
`;

export const Slide = styled.div`
  position: absolute;
  margin: auto;
  width: 100%;
  background: ${props => props.theme.colors.side};
  border-radius: 5px;
  box-shadow: 0px 10px 30px rgba(21, 17, 97, 0.1), 0px 5px 5px rgba(32, 46, 113, 0.1);
  z-index: 3;
  top: 150px;
  font-size: ${props => props.theme.fontSize.regular};
  font-family: ${props => props.theme.fonts.graphik.medium}, sans-serif;
  ${media.tablet`
    top: 170px;
  `}
  > ${Button} {
    ${media.desktop`
      display: none;
    `}
  }
`;

export const Inner = styled.div`
  padding: 30px;
`;
