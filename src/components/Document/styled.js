import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';
import media from './../../styled-components/media';

export default styled.div`
  margin-bottom: 70px;
  ${media.tablet`
    margin-bottom: 140px;
  `}
`;

export const CarouselBox = styled.div`
  width: 100vw;
  margin: 0;
  position: relative;
  overflow: overlay;
  display: none;

  ${media.tablet`
    display: block;
  `}
`

export const Inner = styled(Row)`
  margin-bottom: 0;

  ${media.tablet`
    margin-bottom: -60px;
    background-size: contain;
    background: url(images/document.png) 90% center / 27% no-repeat;
  `}

  p {
    margin-bottom: 20px;
    ${media.tablet`
      margin-bottom: 40px;
    `}
  }
`
