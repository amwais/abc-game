import React from 'react'
import { Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import AudioPlayer from '../AudioPlayer';
import { Icon } from 'semantic-ui-react'
import ReactAudioPlayer from 'react-audio-player';
import { a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, match } from '../AudioPlayer/audio'

export default (props) => {
  const getAudioByValue = (value) => {
    switch (value){
      case 'a':
        return a
      case 'b':
        return b
      case 'c':
        return c
      case 'd':
        return d
      case 'e':
        return e
      case 'f':
        return f
      case 'g':
        return g
      case 'h':
        return h
      case 'i':
        return i
      case 'j':
        return j
      case 'k':
        return k
      case 'l':
        return l
      case 'm':
        return m
      case 'n':
        return n
      case 'o':
        return o
      case 'p':
        return p
      case 'q':
        return q
      case 'r':
        return r
      case 's':
        return s
      case 't':
        return t
      case 'u':
        return u
      case 'v':
        return v
      case 'w':
        return w
      case 'x':
        return x
      case 'y':
        return y
      case 'z':
        return z
      default:
        return
    }
  };

  const card = (
    <div>
      <Card raised onClick={props.matched ? undefined : props.onClick}>
        <Card.Content>
          {props.matched && <p>Matched!</p>}
          <Card.Header>{props.value.toUpperCase()}</Card.Header>
          <Card.Description>{props.value}</Card.Description>
        </Card.Content>
        {/* <Icon name='headphones' onClick={() => onAudioClick(props.value)}/> */}
      </Card>
      {<AudioPlayer 
        src={getAudioByValue(props.value)}
        autoPlay={props.matched}
        matched={props.matched}
        volume={1.0}
      />}
      {<ReactAudioPlayer
        src={match}
        autoPlay={props.matched}
        volume={0.1}
      />}
    </div>
  );

  const cardBack = (
    <Card raised
     onClick={props.blocked ? (() => {}) : props.onClick}
     color='red' 
     image={require('../../../images/pink_unicorn.png')
    }/>
  );

  return (
    <div>
      {(props.selected || props.matched) ? card : cardBack}
    </div>
  )
}