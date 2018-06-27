import styled from 'styled-components';
import media from './../../styled-components/media';

export default styled.div`
  margin-bottom: 70px;
  ${media.tablet`
    margin-bottom: 140px;
  `}

  p {
    margin-bottom: 20px;
    ${media.tablet`
      margin-bottom: 40px;
    `}
  }
`;

export const Account = styled.div`
  position: relative;
  content: '';
  height: 265px;

  ${media.desktop`
    height: 423px;
  `}

  >img {
    width: 400px;
    margin: 20px 0 0 -100px;

    ${media.desktop`
      width: 800px;
      margin: 30px auto -90px;
    `}
  }
`;

export const Zoom = styled.div`
  position: absolute;
  top: 0;
  display: none;

  ${media.desktop`
    display: block;
  `}

  img {
    width: 470px;
  }
`;

export const ZoomMobile = styled.div`
  position: absolute;
  top: 0;

  img {
    margin: 32px 0 0 44px;
    width: 470px;
  }

  ${media.desktop`
    display: none;
  `}
`;
