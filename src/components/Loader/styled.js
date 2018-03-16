import styled from 'styled-components';

export default styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background: rgba(255,255,255,90%);
  display: flex;
  flex-direction: column;
  justify-content: center;

  svg {
    width: 100%;
  }
`;
