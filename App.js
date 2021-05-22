import React, { Component } from 'react';

import './styles.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayName: '',
			name: '',
		};
	}

	handleChange = (evt) => {
		this.setState({
			name: evt.target.value,
		});
	};

	handleClick = (evt) => {
		this.setState({
			displayName: this.state.name,
		});
	};

	render() {
		return (
			<>
				<h1>Welcome to the app!</h1>
				<p>
					Hi there! {this.state.displayName || "We haven't been introduced yet"}
				</p>
				<input value={this.state.name} onChange={this.handleChange} />
				<button onClick={this.handleClick}>Update Name</button>
			</>
		);
	}
}

export default App;
