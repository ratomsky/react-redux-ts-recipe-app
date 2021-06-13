import styled from 'styled-components';

export const SearchWrapper = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 576px){
        display: none;
    }
`;

export const SearchInput = styled.input`
    padding: 5px 10px;
    border-top-left-radius: 14px;
    border-bottom-left-radius: 14px;
    border: none;
    outline: none;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    @media(max-width: 992px){
        font-size: 18px;
    }
    @media(max-width: 768px){
        font-size: 15px;
    }
`

export const SearchSubmit = styled.button`
    padding: 5px 10px;
    border: none;
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    background-color: yellowgreen;
    text-transform: uppercase;
    @media(max-width: 992px){
        font-size: 18px;
    }
    @media(max-width: 768px){
        font-size: 15px;
    }
`