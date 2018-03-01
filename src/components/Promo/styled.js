import styled from 'styled-components';
import media from './../../styled-components/media';

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
