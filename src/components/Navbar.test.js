import React from 'react';
import { render } from 'react-testing-library';
import Navbar from './Navbar';

describe('Navbar', () => {
	it('renders the Navbar', () => {
		const { queryByText } = render(<Navbar />);
		const header = queryByText('Home');
		expect(header.innerHTML).toBe('Home');
	});
});
