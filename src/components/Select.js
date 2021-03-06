import React, { Component } from 'react';

class Select extends Component {
	constructor() {
		super();
		this.state = {
			value: 'Football'
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({ value: e.target.value });
	}
	handleSubmit(e) {
		e.preventDefault(e);
		this.props.selectBoard(this.state.value);
	}

	render() {
		return (
			<div className="form-group">
				<label htmlFor="board-select">Choose your board:</label>
				<select
					value={this.state.value}
					onChange={this.handleChange}
					className="form-control"
					id="board-select">
					<option value="Football">Football</option>
					<option value="Basketball">Basketball</option>
					<option value="Baseball">Baseball</option>
					<option value="Hockey">Hockey</option>
					<option value="Soccer">Soccer</option>
				</select>
				<button onClick={this.handleSubmit} type="submit">
					Go To Board
				</button>
			</div>
		);
	}
}

export default Select;
