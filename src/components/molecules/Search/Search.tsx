import { SearchWrapper, SearchInput, SearchSubmit } from './Search.style';

export const Search = () => {
  return (
    <SearchWrapper>
      <SearchInput />
      <SearchSubmit type="submit">Search</SearchSubmit>
    </SearchWrapper>
  );
};
