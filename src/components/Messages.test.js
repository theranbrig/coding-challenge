import React from 'react';
import { render } from 'react-testing-library';
import Messages from './Messages';

describe('Messages', () => {
	it('renders the Message component with the user name', () => {
		const props = {user: 'test@example.com'}
		const { getByText } = render(<Messages {...props}/>);
		const header = getByText(props.user);
		expect(header.innerHTML).toBe(props.user);
	});
});
