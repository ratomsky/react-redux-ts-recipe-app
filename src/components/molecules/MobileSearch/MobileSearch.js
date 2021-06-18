import React from 'react'

import { MobileSearchWrapper, MobileSearchInput, MobileSearchSubmit } from './MobileSearch.style';

export const MobileSearch = ({ isOpen }) => {
    return (
        <MobileSearchWrapper isOpen={isOpen}>
            <MobileSearchInput/>
            <MobileSearchSubmit type="submit" value="Search"/>
        </MobileSearchWrapper>
    )
}