import React from "react";
import { Logo } from "../../atom/Logo/Logo";
import { Search } from "../../molecules/Search/Search";
import { SearchSettings } from "../SearchSettings/SearchSettings";

export const Header = () => {
  return (
    <div>
      Header
      <Logo />
      <Search />
      <SearchSettings />
    </div>
  );
};
