import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Messages from './components/Messages';
import Navbar from './components/Navbar';
import * as firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyANRwiqwbNnLT-2chBMikZ8g64febUJ6VI',
	authDomain: 'bored-718b1.firebaseapp.com',
	databaseURL: 'https://bored-718b1.firebaseio.com',
	projectId: 'bored-718b1',
	storageBucket: 'bored-718b1.appspot.com',
	messagingSenderId: '1073064848250'
};

firebase.initializeApp(config);

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			user: '',
			board: ''
		};

		this.changeBoard = this.changeBoard.bind(this);
	}

	signIn() {
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(result => {
				const user = result.user.email;
				this.setState({ user });
			});
	}

	signOut() {
		firebase.auth().signOut();
		this.setState({ user: null });
	}

	changeBoard(board) {
		this.setState({
			board: board
		});
	}

	render() {
		return (
			<Router>
				<div>
					<Navbar
						signIn={this.signIn.bind(this)}
						signOut={this.signOut.bind(this)}
						user={this.state.user}
					/>
					<Route exact path="/" render={props => <Home {...props} state={this.state} />} />
					<Route
						exact
						path="/messages"
						render={props => (
							<Messages
								{...props}
								user={this.state.user}
								board={this.state.board}
								selectBoard={this.changeBoard}
							/>
						)}
					/>
				</div>
			</Router>
		);
	}
}

export default App;
