import styled from "styled-components";

export const MobileSearchButtonWrapper = styled.div`
    color: white;
    display: none;
    font-size: 23px;
    @media(max-width: 576px){
        display: block;
    }
`