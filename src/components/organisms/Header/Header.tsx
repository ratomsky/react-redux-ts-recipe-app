import { useState } from 'react';
//components
import { Container } from '../../../styles/GlobalStyles';
import { HeaderWrapper, HeaderInner } from './Header.style';
import { Logo } from '../../atom/Logo/Logo';
import { Search } from '../../molecules/Search/Search';
import { SettingsButton } from '../../atom/SettingsButton/SettingsButton';
import { RecipeBookButton } from '../../atom/RecipeBookButton/RecipeBookButton';
import { MobileSearchButton } from '../../atom/MobileSearchButton/MobileSearchButton';
import { MobileSearch } from '../../molecules/MobileSearch/MobileSearch';

import { CSSTransition } from 'react-transition-group';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileSearch = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <HeaderWrapper>
        <Container>
          <HeaderInner>
            <Logo />
            <MobileSearchButton toggleMobileSearch={toggleMobileSearch} />
            <Search />
            <SettingsButton />
            <RecipeBookButton />
          </HeaderInner>
        </Container>
      </HeaderWrapper>
      <CSSTransition in={isOpen} timeout={200} classNames="mobile-search" unmountOnExit>
        <MobileSearch />
      </CSSTransition>
    </div>
  );
};
