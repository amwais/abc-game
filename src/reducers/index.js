import { combineReducers } from 'redux';
import memoryGameReducer from './memoryGameReducer';

export default combineReducers({
  memoryGame: memoryGameReducer
});