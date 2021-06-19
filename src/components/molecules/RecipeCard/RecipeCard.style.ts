import styled from 'styled-components';
import Card from '@material-ui/core/Card';

export const CardWrapper = styled(Card)`
  flex-grow: 1;

  .title {
    font-size: 30px;
    margin: 0;
  }

  .cardInfoWrapper {
    margin-top: 10px;
    min-width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cardInfo {
    font-size: 18px;
    display: flex;
    align-items: 'center';
    font-family: sans-serif;
    margin-left: 5px;
    cursor: pointer;
  }
`;

export const ImageStyled = styled.img`
  margin: auto;
  display: block;
  max-width: 100%;
  max-height: 100%;

  transition: 1s;

  :hover {
    transform: scale(1.1);
  }
`;
