import React, { Component } from 'react';
import Submit from './Submit';
import Select from './Select';

export default class Home extends Component {
	render() {
		return (
			<div className="container">
				<Select selectBoard={this.props.selectBoard} />
				<p>
					Logged in as: <strong>{this.props.user}</strong>
				</p>
				<Submit user={this.props.user} board={this.props.board} />
			</div>
		);
	}
}
