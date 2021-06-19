import { combineReducers } from 'redux';
import mainReducer from './mainReducer';
import recipeBookReducer from './recipeBookReducer';

export const rootReducer = combineReducers({
  main: mainReducer,
  recipeBook: recipeBookReducer,
});
