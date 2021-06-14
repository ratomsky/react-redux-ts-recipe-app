import styled from "styled-components";
import Card from "@material-ui/core/Card";

export const CardWrapper = styled(Card)`
  flex-grow: 1;
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
