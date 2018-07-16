import React from 'react'
import ReactAudioPlayer from 'react-audio-player';


export default (props) => {
  return (
    <div>
      <ReactAudioPlayer
          src={props.src}
          autoPlay={props.autoPlay}
          controls={!props.matched}
          volume={props.volume || undefined}
      />
    </div>
  )
}
