import styled from 'styled-components';

export default styled.a`
  font-family: ${props => props.theme.fonts.graphik.regular};
  ${props => props.small &&`
    margin: auto 0;
    fontSize: props.theme.fontSize.small;
  `}
`;
