//Style
import { MobileSearchWrapper, MobileSearchInput, MobileSearchSubmit } from './MobileSearch.style';

export const MobileSearch = () => {
  return (
    <MobileSearchWrapper>
      <MobileSearchInput />
      <MobileSearchSubmit type="submit" value="Search" />
    </MobileSearchWrapper>
  );
};
