import styled from 'styled-components';

export default styled.button`
  font-family: ${props => props.theme.fonts.graphik.regular};
  color: white;
  background: ${props => props.theme.colors.btn};
  cursor: pointer;
  border-radius: 4px;
  padding: 13px 38px;
  font-size: ${props => props.theme.fontSize.small};

  ${props => props.outline &&`
    background: transparent;
    color: ${props.theme.colors.textBtn};
    border: 1px solid rgba(25, 108, 255, 0.4);
    :hover {
      background: ${props.theme.colors.btn};
      color: white;
    }
  `}

  ${props => props.footer &&`
    background: transparent;
    color: ${props.theme.colors.textBtn};
    border-radius: 0 0 4px 4px;
    border-top: 1px solid rgba(25, 108, 255, 0.4);
  `}

  ${props => props.opaque &&`
    width: 200px;
    text-align: left;
    padding: 15px 20px;
    height: 60px;
    border-radius: 5px;
    border: none;
    background-color: rgba(234, 237, 242, 0.2);
    color: white;
    margin-right: 20px;
    :hover {
      background-color: rgba(234, 237, 242, 0.4);
    }
  `}

  img {
    display: inline;
    width: 30px;
    height: 30px;
  }

  ${props => props.wide &&`
    width: 100%;
    margin-bottom: 10px;
  `}

  ${props => props.small &&`
    width: auto;
    padding: 13px;
  `}
`;

export const Group = styled.div`
  button {
    border-radius: 0;
    :nth-of-type(1){
      border-radius: 4px 0 0 4px;
    }
    :nth-last-of-type(1){
      border-radius: 0 4px 4px 0;
    }
  }
`;
