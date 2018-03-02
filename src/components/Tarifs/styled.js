import styled from 'styled-components';
import media from './../../styled-components/media';
import { Row } from 'react-flexbox-grid';

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