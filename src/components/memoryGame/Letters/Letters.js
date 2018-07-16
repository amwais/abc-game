import React, { Component } from 'react'
import Letter from '../Letter';
import { Card } from 'semantic-ui-react'
import _ from 'lodash';

const randomLetters = () => {
    const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 
          'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    const shuffle = (abc) => {
      let currentIndex = abc.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = abc[currentIndex];
        abc[currentIndex] = abc[randomIndex];
        abc[randomIndex] = temporaryValue;
      }
      return abc
    };

    let finalArr = [];
    abc.slice(0,6).map((letter) => {
      finalArr.push(letter, letter);
    });

    return shuffle(finalArr);
};

const isMatch = (selected) => {
  const char1 = Object.values(selected)[0]
  const char2 = Object.values(selected)[1]

  if (char1 && char2){
    return char1 === char2
  }
};

export default class Letters extends Component {
  componentWillMount(){
    const letters = randomLetters();
    this.props.pickLetters(letters);
  }

  componentDidUpdate(){
    const { selected } = this.props;
    if (_.size(selected) > 1){
      if (isMatch(selected)){
        this.props.setMatched(Object.values(selected)[0]);
        this.props.deselectAll();
      }
      else {
        setTimeout(() => {
          this.props.deselectAll();
        }, 1500);
      }
    }
  }

  render() {
    return (
      <div>
        <h1>ABC Spiel!</h1>
        <h3>Matches found: {this.props.matched.length}</h3>
        <Card.Group itemsPerRow={4} centered>
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
    )
  }
}
