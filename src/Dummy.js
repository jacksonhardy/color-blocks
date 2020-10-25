import React from 'react';
import ReactDOM from 'react-dom';

let dummyRoot = document.getElementById('dummy-root');

export default class Dummy extends React.Component {
	constructor(props) {
		super(props);
		this.el = document.createElement('div');
	}
	componentDidMount() {
		dummyRoot.appendChild(this.el);
	}
	render() {
		return ReactDOM.createPortal(
			<input id="dummy-input" readOnly />,
			this.el
		);
	}
}
