import styled from 'styled-components';
import Link from '../Link/styled';

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
  background: rgba(43,83,170, 0.05);
  border-radius: 5px;
`;

export const Block = styled.div`
  display: inline-block;
  padding: 10px 20px 20px;
  height: 90px;
  margin: 0;
  width: fit-content;
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

export const Carousell = styled.div`
  position: relative;
  margin: auto;
  width: 720px;
  height: 260px;
  margin-bottom: 140px;
`;

export const Slide = styled.div`
  position: absolute;
  margin: auto;
  height: 160px;
  width: 720px;
  padding: 30px;
  background: ${props => props.theme.colors.side};
  border-radius: 5px;
  box-shadow: 0px 10px 30px rgba(21, 17, 97, 0.1), 0px 5px 5px rgba(32, 46, 113, 0.1);
  z-index: 3;
  top: 105px;
  font-size: ${props => props.theme.fontSize.regular};
  font-family: ${props => props.theme.fonts.graphik.medium};
  ${props => props.center && `
    z-index: 2;
    width: 640px;
    margin: 0 40px;
    top: 45px;
    h5 {
      opacity: 0.7;
    }
  `}
  ${props => props.backward && `
    font-size: ${props.theme.fontSize.small};
    padding: 20px 30px;
    z-index: 1;
    width: 540px;
    margin: 0 90px;
    top: 0;
    h6 {
      opacity: 0.5;
    }
  `}
`;

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
  height: 400px;
  border-radius: 5px;

  :hover {
    background: white;
    box-shadow: 0px 10px 30px rgba(51, 45, 179, 0.1), 0px 5px 5px rgba(32, 46, 113, 0.06);
  }

  img {
    margin-bottom: 25px;
  }

  ul {
    height: 120px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    line-height: ${props => props.theme.lineHeight.small};
    margin-bottom: 10px;
  }

  small {
    margin-bottom: 30px;
  }

  div {
    height: 55px;
    margin-bottom: 30px;
  }
`

export const Footer = styled.div`
  width: 100%;
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
