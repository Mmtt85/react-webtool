import styled from 'styled-components';

export const StyledToastWrapper = styled.div`
  position: absolute;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 10%;
  .toast {
    @keyframes fadeInAnimation {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    opacity: 1;
    animation-name: fadeInAnimation;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.3s;
    margin-left: auto;
    margin-right: auto;
  }
  .toast-header {
  }
  .toast-body {
    word-break: break-word;
  }
`;
