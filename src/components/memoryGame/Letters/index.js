import Letters from './Letters';

import { connect } from 'react-redux';
import { selectChar, deselectAll, restartGame, winGame, pickLetters, setMatched, toggleBlockSelection } from '../../../actions/memoryGame/actions';

// Posts.propTypes = {

// };

const mapStateToProps = state => ({
  gameLetters: state.memoryGame.gameLetters,
  selected: state.memoryGame.selected,
  matched: state.memoryGame.matched,
  gameOver: state.memoryGame.gameOver,
  gameWon: state.memoryGame.gameWon,
  blockSelection: state.memoryGame.blockSelection
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  pickLetters: (letters) => {
    dispatch(pickLetters(letters))
  },
  selectChar: (id, char) => {
    dispatch(selectChar(id, char));
  },
  deselectAll: () => {
    dispatch(deselectAll());
  },
  setMatched: (char) => {
    dispatch(setMatched(char));
  },
  toggleBlockSelection: () => {
    dispatch(toggleBlockSelection());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Letters);;