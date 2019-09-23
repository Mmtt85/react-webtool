import styled from 'styled-components';

export const StyledRoot = styled.div`
  height: 100%;
  filter: ${({ isBlur }) => (isBlur ? `blur(2px)` : '')}};
`;
