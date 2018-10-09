import React, { Component } from 'react';
import * as firebase from 'firebase';

class Submit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newMessage: '',
			board: '',
			roomMessages: []
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			newMessage: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const message = {
			text: this.state.newMessage,
			board: this.props.board,
			user: this.props.user
		};
		if (this.props.user !== '') {
			firebase
				.database()
				.ref('messages')
				.push(message);
			this.setState({
				newMessage: ''
			});
		}
		this.getMessages();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps !== this.props) {
			this.getMessages();
		}
	}

	getMessages() {
		firebase
			.database()
			.ref(`messages`)
			.on('value', snapshot => {
				const messages = [];
				snapshot.forEach(message => {
					messages.push({
						message: message.key,
						board: message.val().board,
						user: message.val().user,
						text: message.val().text
					});
				});
				this.setState({
					roomMessages: messages.filter(message => message.board === this.props.board)
				});
			});
	}

	render() {
		return (
			<div className="form=group">
				<div>
					<h1 className="title">{this.props.board} Message Board</h1>
					<ul className="list-group-flush">
						{this.state.roomMessages.map(message => (
							<li className="list-group-item list-group-item-primary message">
								<p>{message.text}</p>
								<p>
									<strong>{message.user}</strong>
								</p>
							</li>
						))}
					</ul>
				</div>
				<form>
					<label htmlFor="newMessage">Input Message</label>
					<textarea
						name="newMessage"
						className="form-control"
						value={this.state.newMessage}
						onChange={this.handleChange}
					/>
					<button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default Submit;
