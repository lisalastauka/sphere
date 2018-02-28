import styled from 'styled-components';
import Link from '../Link/styled';
import Button, { Group } from '../Button/styled';
import media from './../../styled-components/media';
import { Row , Col } from 'react-flexbox-grid';

export const Gradient = styled.div`
  height: 5px;
  width: 100%;
  margin-bottom: 65px;
  -webkit-background:
    -webkit-gradient(linear, 270deg, #749EFB 0%, #E6664A 49.42%, #FBB933 100%);
  -webkit-background:
    -webkit-linear-gradient(270deg, #749EFB 0%, #E6664A 49.42%, #FBB933 100%);
  -moz-background:
    -moz-linear-gradient(270deg, #749EFB 0%, #E6664A 49.42%, #FBB933 100%);
  -o-background:
    -o-linear-gradient(270deg, #749EFB 0%, #E6664A 49.42%, #FBB933 100%);
  background:
    linear-gradient(270deg, #749EFB 0%, #E6664A 49.42%, #FBB933 100%);
`;

export const Colored = styled.span`
  background: linear-gradient(274deg, #618ef1 0%, #e6664a 100%, #fbb933 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const H3 = styled.h3`
  ${props => props.theme.colored.gradient};
`

export const Box = styled.div`
  margin-top: 20px;
  width: fit-content;
  background: rgba(233, 237, 248, 0.9);
  border-radius: 5px;
  position: absolute;
  z-index: 1;
`;

export const Block = styled.div`
  display: inline-block;
  padding: 10px;
  margin: 0;
  width: fit-content;
  ${media.tablet`
    padding: 10px 20px 20px;
  `}
  h2 {
    margin: 0;
  }
  small {
    color: ${props => props.theme.colors.textColor};
  }
  :nth-of-type(1) {
    border-right: 1px solid rgba(26, 56, 105, 0.1);
  }
`;

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
`

export const Conditions = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 50px;
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

export const Size = styled.div`
  padding: 25px;
  border-radius: 5px;
  height: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;

  :hover {
    background: white;
    box-shadow: 0px 10px 30px rgba(51, 45, 179, 0.1), 0px 5px 5px rgba(32, 46, 113, 0.06);
  }

  img {
    margin-bottom: 25px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    flex: 1 0 auto;
  }

  li {
    line-height: ${props => props.theme.lineHeight.small};
    margin-bottom: 10px;
  }

  small {
    margin-bottom: 30px;
    white-space: nowrap;
  }

  button {
    white-space: nowrap;
    padding: 13px;
  }

  div {
    height: 55px;
    margin-bottom: 30px;
  }
`

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

export const AboutCard = styled(Row)`
  img {
    width: calc(100% + 40px);
    margin: -10px -20px;
    ${media.tablet`
      width: 400px;
      margin-left: -35px;
      margin-top: -14px;
    `}
  }
`;

export const Card = styled.div`
  margin-bottom: 30px;
  ${media.tablet `
    height: 85px;
    margin-bottom: 25px;
  `}
`;

export const Side = styled.div`
  width: 4px;
  display: inline-block;
  border-radius: 2px;
  margin-right: 20px;
  margin-bottom: 40px;
  margin-top: 55px;
  -webkit-background:
    -webkit-gradient(linear, to bottom, #7189de, #df6752);
  -webkit-background:
    -webkit-linear-gradient(to bottom, #7189de, #df6752);
  -moz-background:
    -moz-linear-gradient(to bottom, #7189de, #df6752);
  -o-background:
    -o-linear-gradient(to bottom, #7189de, #df6752);
  background:
    linear-gradient(to bottom, #7189de, #df6752);

  p {
    margin-left: 20px;
    width: 200px;
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0px;
    margin-bottom: 10px;
    margin-left: 20px;
  }
`;

export const Modes = styled(Row)`
  display: none;
  ${media.desktop`
    display: flex;
  `}
`

export const CarouselBox = styled.div`
  max-width: calc(100vw);
  margin: 0 -2rem;
  overflow: hidden;
  display: block;
  ${media.desktop`
    display: none;
  `}
`;


export const CarouselItem = styled.div`
  padding: 2rem;
`;
