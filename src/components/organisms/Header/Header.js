import React from "react";

import { Container } from "../../../styles/GlobalStyles";
import { HeaderWrapper } from './Header.style';
import { Logo } from "../../atom/Logo/Logo";
import { Search } from "../../molecules/Search/Search";
import { SearchSettings } from "../SearchSettings/SearchSettings";


export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
      <Logo />
      <Search />
      <SearchSettings />
      </Container>
    </HeaderWrapper>
  );
};
