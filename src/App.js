import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MemoryGame from './components/memoryGame';
import Confetti from 'react-dom-confetti';
import store from './store';

const config = {
  angle: 190,
  spread: 215,
  startVelocity: 60,
  elementCount: 171,
  decay: 0.83
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Confetti active config={config}/>
          <MemoryGame />
        </div>
      </Provider>
    );
  }
}

export default App;