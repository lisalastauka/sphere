import styled from 'styled-components';

export default styled.a`
  font-family: ${props => props.theme.fonts.graphik.regular};
  ${props => props.tel &&`
    font-family: ${props.theme.fonts.graphik.medium};
    font-size: 1.8rem;
  	font-weight: 500;
  `}
`;
