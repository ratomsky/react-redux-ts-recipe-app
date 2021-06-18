import React from 'react'

import { MobileSearchButtonWrapper } from './MobileSearchButton.style';

export const MobileSearchButton = ({ toggleMobileSearch }) => {

    return (
        <MobileSearchButtonWrapper onClick={toggleMobileSearch}>
            <i className="fas fa-search"></i>
        </MobileSearchButtonWrapper>
    )
}
