import { MAIN_ROUTE, RECIPE_BOOK_ROUTE, RECIPE_PAGE_ROUTE } from '../utils/paths';
//Components
import { Main, RecipeBook, RecipePage } from '../pages';

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: RECIPE_BOOK_ROUTE,
    Component: RecipeBook,
  },
  {
    path: RECIPE_PAGE_ROUTE + '/:id',
    Component: RecipePage,
  },
];
