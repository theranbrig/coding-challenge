import React from 'react';
import { render } from 'react-testing-library';
import Home from './Home';

describe('Home', () => {
	it('Renders the Home page component', () => {
		const { getByText } = render(<Home />);
		const header = getByText('Bored');
		expect(header.innerHTML).toBe('Bored');
	});
});
