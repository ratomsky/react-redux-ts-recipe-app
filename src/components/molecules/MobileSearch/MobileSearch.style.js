import styled from "styled-components";

export const MobileSearchWrapper = styled.form`
    display: flex;
    background-color: black;
    padding: 5px 10px;
`;

export const MobileSearchInput = styled.input`
    outline: none;
    width: 100%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border: none;
    padding: 3px 10px;
    position: relative;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
`;

export const MobileSearchSubmit = styled.input`
    border: none;
    background-color: yellowgreen;
    text-transform: uppercase;
    font-family: 'Raleway', sans-serif;
    padding: 3px 10px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    font-weight: 500;
    cursor: pointer;
`