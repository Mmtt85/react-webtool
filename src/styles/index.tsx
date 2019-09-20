import styled from 'styled-components';

export const StyledRoot = styled.div`
  height: 100%;
  filter: ${({ blur }) => (blur ? `blur(2px)` : '')}};
`;
