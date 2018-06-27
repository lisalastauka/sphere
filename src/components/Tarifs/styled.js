import styled from 'styled-components';
import media from './../../styled-components/media';
import { Row } from 'react-flexbox-grid';

export default styled.div`
  margin-bottom: 70px;
  ${media.tablet`
    margin-bottom: 140px;
  `}
`;

export const Size = styled.div`
  padding: 25px;
  border-radius: 5px;
  height: 100%;
  min-height: 400px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  background: white;

  ${media.tablet`
    box-shadow: 0px 10px 30px rgba(51, 45, 179, 0.1), 0px 5px 5px rgba(32, 46, 113, 0.06);
  	background-color: rgba(255, 255, 255, 0.5);
  `}

  ${media.tablet`
    :hover {
      background-color: rgba(255, 255, 255, 1);
      box-shadow: 0px 10px 30px rgba(51, 45, 179, 0.1), 0px 5px 5px rgba(32, 46, 113, 0.06);
    }
  `}

  img {
    margin-left: 0;
    margin-bottom: 25px;
  }

  ul {
    list-style: none;
    width: 100%;
    padding: 0;
    margin: 0;
    flex: 1 0 auto;
  }

  a {
    width: 100%;
  }

  li {
    line-height: ${props => props.theme.lineHeight.small};
    margin-bottom: 10px;
    min-height: 44px;
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
    height: 70px;
    margin-bottom: 30px;

    h3 {
      margin-bottom: 0;
    }
  }
`

export const Modes = styled(Row)`
  display: none;
  margin-bottom: 20px;
  ${media.tablet`
    display: flex;
    margin-bottom: 40px;
  `}
  ${media.desktop`
    display: none;
  `}
  ${media.bigDesktop`
    display: flex;
  `}
`

export const CarouselBox = styled.div`
  min-width: 600px;
  margin: 0 -2rem 20px;
  overflow: hidden;
  display: block;

  ${media.tablet`
    display: none;
  `}

  ${media.bigTablet`
    .slick-track {
      height: 468px;
    }
  `}

  ${media.desktop`
    display: flex;
  `}

  ${media.bigDesktop`
    display: none;
  `}

  .slick {
    &-active {
      opacity: 0.7;
      transition: opacity 0.2s ease-out;
    }
    &-current {
      opacity: 1;
      transition: opacity 0.2s ease-out;
    }
  }
`;


export const CarouselItem = styled.div`
  padding: 2rem;
`;
