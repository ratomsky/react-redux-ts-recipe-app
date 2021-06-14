import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    background-color: black;
`;

export const HeaderInner = styled.div`
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 992px){
        padding: 15px 0;
    }
`

