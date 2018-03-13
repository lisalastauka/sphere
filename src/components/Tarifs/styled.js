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
  box-shadow: 0px 10px 30px rgba(51, 45, 179, 0.1), 0px 5px 5px rgba(32, 46, 113, 0.06);

  ${media.tablet`
    background: transparent;
    box-shadow: none;
  `}

  ${media.tablet`
    :hover {
      background: white;
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

export const Modes = styled(Row)`
  display: none;
  margin-bottom: 20px;
  ${media.tablet`
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

  .slick {
    &-active {
      opacity: 0.7;
      transition: all 0.2s ease-out;
    }
    &-current {
      opacity: 1;
      transition: all 0.2s ease-out;
    }
  }
`;


export const CarouselItem = styled.div`
  padding: 2rem;
`;
