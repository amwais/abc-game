import React, { Component } from 'react';
import Letter from '../Letter';
import { Card, Button } from 'semantic-ui-react';
import Confetti from 'react-confetti';
import _ from 'lodash';
import '../styles/main.css';

const randomLetters = () => {
	const abc = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z'
	];

	let finalArr = [];

	_.shuffle(abc).slice(0, 12).forEach((letter) => finalArr.push(letter, letter));

	return _.shuffle(finalArr);
};

const isMatch = (selected) => {
	const char1 = Object.values(selected)[0];
	const char2 = Object.values(selected)[1];

	if (char1 && char2) {
		return char1 === char2;
	}
};

export default class Letters extends Component {
	componentWillMount() {
		const letters = randomLetters();
		this.props.pickLetters(letters);
		console.log(letters);
	}

	componentDidUpdate() {
		const { selected } = this.props;
		if (_.size(selected) > 1) {
			if (isMatch(selected)) {
				this.props.setMatched(Object.values(selected)[0]);
				this.props.deselectAll();
			} else {
				setTimeout(() => {
					this.props.deselectAll();
				}, 1500);
			}
		}
	}

	render() {
		const style = {
			display: 'flex',
			justifyContent: 'center',
			flexWrap: 'wrap',
			margin: 'auto'
		};
		return (
			<div>
				<div
					hidden={this.props.matched.length < this.props.gameLetters.length / 2}
					style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
				>
					<Confetti width={window.innerWidth} height={window.innerHeight} />
				</div>
				<div className="app-header">
					<h1>ABC Spiel!</h1>
					<h3>Paare gefunden: {this.props.matched.length}</h3>
					<Button icon="repeat" color="green" onClick={() => this.props.restartGame(randomLetters())} />
				</div>
				<Card.Group itemsPerRow={4} className="cards-container" style={style}>
					{this.props.gameLetters.map((letter, i) => (
						<Letter
							key={i}
							value={letter}
							onClick={() => this.props.selectChar(i, letter)}
							selected={i in this.props.selected}
							matched={this.props.matched.includes(letter)}
							blocked={_.size(this.props.selected) > 1}
						/>
					))}
				</Card.Group>
			</div>
		);
	}
}
