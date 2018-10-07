import React, { Component } from 'react';
import Submit from './Submit';
import Select from './Select';

export default class Home extends Component {
	render() {
		return (
			<div className="container">
				<p>
					<Select selectBoard={this.props.selectBoard} />
					Logged in as: <strong>{this.props.user}</strong>
					<Submit user={this.props.user} board={this.props.board} />
				</p>
			</div>
		);
	}
}
