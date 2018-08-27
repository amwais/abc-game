import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MemoryGame from './components/memoryGame';
import store from './store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<MemoryGame />
				</div>
			</Provider>
		);
	}
}

export default App;
