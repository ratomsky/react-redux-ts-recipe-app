import { FC } from 'react';
import { MobileSearchButtonWrapper } from './MobileSearchButton.style';

interface Props {
  toggleMobileSearch: () => void;
}

export const MobileSearchButton: FC<Props> = ({ toggleMobileSearch }: Props) => {
  return (
    <MobileSearchButtonWrapper onClick={toggleMobileSearch}>
      <i className="fas fa-search"></i>
    </MobileSearchButtonWrapper>
  );
};
