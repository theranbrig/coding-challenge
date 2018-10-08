import React from 'react';
import { render } from 'react-testing-library';
import User from './User';

describe('User', () => {
	it('renders the User login buttons', () => {
		const { queryByText } = render(<User />);
		const button = queryByText('Sign In');
		expect(button.innerHTML).toBe(`<i class=\"fas fa-user\"></i>Sign In`);
	});
});
