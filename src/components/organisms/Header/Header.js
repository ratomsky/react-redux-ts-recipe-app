import React from "react";
import { HeaderWrapper } from './Header.style';
import { Logo } from "../../atom/Logo/Logo";
import { Search } from "../../molecules/Search/Search";
import { SearchSettings } from "../SearchSettings/SearchSettings";


export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Search />
      <SearchSettings />
    </HeaderWrapper>
  );
};
