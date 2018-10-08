import React from 'react';
import { render } from 'react-testing-library';
import Submit from './Submit';

describe('Submit', () => {
	it('renders the Submit message component', () => {
		const board = 'Football';
		const { queryByText } = render(<Submit board={board} roomMessages={posts} />);
		const header = queryByText('Football Message Board');
		expect(header.innerHTML).toBe(`${board} Message Board`);
	});
});
