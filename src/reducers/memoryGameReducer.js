import {
	SET_SELECTED,
	RESTART_GAME,
	WIN_GAME,
	DESELECT_ALL,
	PICK_LETTERS,
	SET_MATCHED,
	TOGGLE_BLOCK_SELECTION
} from '../actions/memoryGame/types';

const initialState = {
	gameLetters: [],
	selected: {},
	matched: [],
	gameOver: false,
	gameWon: false,
	blockSelection: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case PICK_LETTERS:
			return {
				...state,
				gameLetters: action.payload
			};
		case SET_MATCHED:
			return {
				...state,
				matched: [ ...state.matched, action.payload ]
			};
		case TOGGLE_BLOCK_SELECTION:
			return {
				...state,
				blockSelection: !state.blockSelection
			};
		case SET_SELECTED:
			return {
				...state,
				selected: {
					...state.selected,
					[action.id]: action.char
				}
			};
		case DESELECT_ALL:
			return {
				...state,
				selected: []
			};
		case WIN_GAME:
			return {
				...state,
				gameWon: true
			};
		case RESTART_GAME:
			return {
				...initialState,
				gameOver: false,
				gameLetters: action.payload
			};
		default:
			return state;
	}
}
