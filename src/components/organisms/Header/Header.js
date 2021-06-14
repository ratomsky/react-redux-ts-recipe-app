import React, { useState } from "react";

import { Container } from "../../../styles/GlobalStyles";
import { HeaderWrapper, HeaderInner } from './Header.style';
import { Logo } from "../../atom/Logo/Logo";
import { Search } from "../../molecules/Search/Search";
import { SearchSettings } from "../SearchSettings/SearchSettings";
import { SettingsButton } from "../../atom/SettingsButton/SettingsButton";
import { RecipeBookButton } from "../../atom/RecipeBookButton/RecipeBookButton";
import { MobileSearchButton } from "../../atom/MobileSearchButton/MobileSearchButton";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderInner>
          <Logo />
          <MobileSearchButton/>
          <Search />
          <SettingsButton />
          <RecipeBookButton />
        </HeaderInner>
      </Container>
    </HeaderWrapper>
  );
};
