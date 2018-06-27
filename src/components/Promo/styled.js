import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import media from './../../styled-components/media';

export default styled(Row)`
  position: relative;
  small {
    color: ${props => props.theme.colors.textOpaque};
  }
  h2 {
    margin: 0;
    b {
      font-size: 18px;
    }
  }
  p {
    white-space: nowrap;
  }
`;

export const Side = styled.div`
  width: 4px;
  display: inline-block;
  border-radius: 2px;
  margin-right: 20px;
  margin-bottom: 25px;

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

  ${media.desktop`
    margin-bottom: 40px;
    margin-top: 55px;
  `}

  p {
    margin-left: 20px;
    width: 200px;
    margin-bottom: 0;
  }

  h2 {
    font-size: 20px;
    margin-left: 20px;
    ${media.desktop`
      margin-bottom: 10px;
      font-size: ${props => props.theme.fontSize.larger};
    `}
  }
`;

export const Phone = styled.div`
  position: absolute;
  top: 0;
  display: none;
  img {
    width: 209px;
    margin-top: 40px;
  }
  ${media.tablet`
    display: block;
  `}
`

export const Laptop = styled.div`
  img {
    position: relative;
    width: 491px;
  }
  ${media.tablet`
    img {
      width: 864px;
      margin-bottom: 20px;
    }
  `}
`

export const Box = styled.div`
  margin-top: 10px;
  z-index: 1;
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
`;

export const MediaBlock = styled(Col)`
  max-width: 45%;
  content: '';
  height: 291px;
  ${media.tablet`
    height: 540px;
  `}
`
