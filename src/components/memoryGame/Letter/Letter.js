import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import AudioPlayer from '../AudioPlayer';
import ReactAudioPlayer from 'react-audio-player';
import {
	a,
	b,
	c,
	d,
	e,
	f,
	g,
	h,
	i,
	j,
	k,
	l,
	m,
	n,
	o,
	p,
	q,
	r,
	s,
	t,
	u,
	v,
	w,
	x,
	y,
	z,
	match
} from '../AudioPlayer/audio';

export default (props) => {
	const getAudioByValue = (value) => {
		switch (value) {
			case 'a':
				return a;
			case 'b':
				return b;
			case 'c':
				return c;
			case 'd':
				return d;
			case 'e':
				return e;
			case 'f':
				return f;
			case 'g':
				return g;
			case 'h':
				return h;
			case 'i':
				return i;
			case 'j':
				return j;
			case 'k':
				return k;
			case 'l':
				return l;
			case 'm':
				return m;
			case 'n':
				return n;
			case 'o':
				return o;
			case 'p':
				return p;
			case 'q':
				return q;
			case 'r':
				return r;
			case 's':
				return s;
			case 't':
				return t;
			case 'u':
				return u;
			case 'v':
				return v;
			case 'w':
				return w;
			case 'x':
				return x;
			case 'y':
				return y;
			case 'z':
				return z;
			default:
				return;
		}
	};

	const getImageByValue = (value) => {
		switch (value) {
			case 'a':
				return require('./images/a.jpg');
			case 'b':
				return require('./images/b.jpg');
			case 'c':
				return require('./images/c.jpg');
			case 'd':
				return require('./images/d.jpeg');
			case 'e':
				return require('./images/e.jpg');
			case 'f':
				return require('./images/f.jpg');
			case 'g':
				return require('./images/g.jpeg');
			case 'h':
				return require('./images/h.jpg');
			case 'i':
				return require('./images/i.jpg');
			case 'j':
				return require('./images/j.jpg');
			case 'k':
				return require('./images/k.jpeg');
			case 'l':
				return require('./images/l.jpg');
			case 'm':
				return require('./images/m.jpeg');
			case 'n':
				return require('./images/n.jpg');
			case 'o':
				return require('./images/o.jpg');
			case 'p':
				return require('./images/p.jpg');
			case 'q':
				return require('./images/q.jpeg');
			case 'r':
				return require('./images/r.jpeg');
			case 's':
				return require('./images/s.jpeg');
			case 't':
				return require('./images/t.jpeg');
			case 'u':
				return require('./images/u.jpg');
			case 'v':
				return require('./images/v.jpg');
			case 'w':
				return require('./images/w.jpeg');
			case 'x':
				return require('./images/x.jpg');
			case 'y':
				return require('./images/y.jpg');
			case 'z':
				return require('./images/z.jpg');
			default:
				return;
		}
	};

	const imageStyle = {
		height: '80px',
		width: '60%'
	};

	const card = (
		<div>
			<Card
				style={props.matched ? { backgroundColor: '#0dc617' } : { backgroundColor: '#f2e93e' }}
				raised
				onClick={props.matched ? undefined : props.onClick}
			>
				<Image style={imageStyle} centered src={getImageByValue(props.value)} />
				<Card.Content>
					{/* {props.matched && <p>Matched!</p>} */}
					<Card.Header>{props.value.toUpperCase()}</Card.Header>
					<Card.Description>{props.value}</Card.Description>
					{
						<AudioPlayer
							src={getAudioByValue(props.value)}
							autoPlay={true}
							matched={props.matched}
							volume={1.0}
						/>
					}
					{<ReactAudioPlayer src={match} autoPlay={props.matched} volume={0.3} />}
				</Card.Content>
			</Card>
		</div>
	);

	const cardBack = (
		<Card
			raised
			onClick={props.blocked ? () => {} : props.onClick}
			color="red"
			image={require('../../../images/pink_unicorn.png')}
		/>
	);

	const unifiedCard = <div className="unified-card">{props.selected || props.matched ? card : cardBack}</div>;

	return unifiedCard;
};
