import React from 'react';
import { render } from 'react-testing-library';
import Select from './Select';

describe('Select', () => {
	it('renders the Select input component', () => {
		const { queryByText } = render(<Select />);
		const label = queryByText('Choose your board:');
		expect(label.innerHTML).toBe('Choose your board:');
	});
});
