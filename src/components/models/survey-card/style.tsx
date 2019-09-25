import styled from 'styled-components';
import * as BS from 'react-bootstrap';

export const StyledSurveyCard = styled(BS.Card)`
  cursor: pointer;
  ${({ expired }) => expired === 'true' && `background-color: lightgray`};
  .card-title {
    padding: 0 60px 0 60px;
    text-align: center;
    font-weight: bold;
  }
  .card-icon {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 30pt;
    color: gray;
  }
  .img-thumbnail {
    position: absolute;
    right: 5px;
    top: 5px;
  }
  .card-footer {
    text-align: right;
  }
`;
