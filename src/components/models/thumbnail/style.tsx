import styled from 'styled-components';
import * as BS from 'react-bootstrap';

export const StyledThumbnail = styled(BS.Image)`
  ${({ size }) => {
    if (size === 'sm') return 'width: 50px';
    else if (size === 'lg') return 'width: 200px';
    else return 'width: 100px';
  }};
`;
