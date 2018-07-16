import { SET_SELECTED, DESELECT_ALL, RESTART_GAME, WIN_GAME, PICK_LETTERS, SET_MATCHED, TOGGLE_BLOCK_SELECTION } from './types';

export const selectChar = (id, char) => dispatch => {
  dispatch({
    type: SET_SELECTED,
    id,
    char
  });
};

export const setMatched = (char) => dispatch => {
  dispatch({
    type: SET_MATCHED,
    payload: char
  });
};

export const deselectAll = () => dispatch => {
  dispatch({
    type: DESELECT_ALL,
  });
};

export const restartGame = () => dispatch => {
  dispatch({
    type: RESTART_GAME
  });
};

export const winGame = () => dispatch => {
  dispatch({
    type: WIN_GAME
  });
};

export const pickLetters = (letters) => dispatch => {
  dispatch({
    type: PICK_LETTERS,
    payload: letters
  });
};

export const toggleBlockSelection = () => dispatch => {
  dispatch({
    type: TOGGLE_BLOCK_SELECTION
  });
};
