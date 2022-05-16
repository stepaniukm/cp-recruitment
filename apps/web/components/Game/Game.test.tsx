import { render, screen } from '@testing-library/react';
import Game from './Game';
import '@testing-library/jest-dom';
import { APP_STRING } from '../../lib/constants';

describe('Game', () => {
	it('renders a game players', () => {
		render(
			<Game
				data={{ p1: { id: 5, name: 'P1', mass: 10 }, p2: { id: 10, name: 'P2', mass: 20 } }}
				getCardContent={() => <></>}
				getComparingField={(p) => p.mass}
				onTryAgain={() => Promise.resolve()}
				loading={false}
			/>,
		);

		const p1 = screen.getByTestId('player-p1');
		const p2 = screen.getByTestId('player-p2');

		expect(p1).toBeTruthy();
		expect(p2).toBeTruthy();
	});

	it('checks the win of player one', () => {
		render(
			<Game
				data={{ p1: { id: 5, name: 'P1', mass: 20 }, p2: { id: 10, name: 'P2', mass: 10 } }}
				getCardContent={() => <></>}
				getComparingField={(p) => p.mass}
				onTryAgain={() => Promise.resolve()}
				loading={false}
			/>,
		);

		const p1Score = screen.getByTestId('score-p1');
		const p2Score = screen.queryByTestId('score-p2');

		expect(p1Score?.textContent).toEqual(APP_STRING.WIN);
		expect(p2Score).toBeNull();
	});

	it('checks the win of player two', () => {
		render(
			<Game
				data={{ p1: { id: 5, name: 'P1', mass: 10 }, p2: { id: 10, name: 'P2', mass: 20 } }}
				getCardContent={() => <></>}
				getComparingField={(p) => p.mass}
				onTryAgain={() => Promise.resolve()}
				loading={false}
			/>,
		);

		const p1Score = screen.queryByTestId('score-p1');
		const p2Score = screen.getByTestId('score-p2');
		const draw = screen.queryByTestId('draw');

		expect(p1Score).toBeNull();
		expect(draw).toBeNull();
		expect(p2Score?.textContent).toEqual(APP_STRING.WIN);
	});

	it('checks the draw', () => {
		render(
			<Game
				data={{ p1: { id: 5, name: 'P1', mass: 10 }, p2: { id: 10, name: 'P2', mass: 10 } }}
				getCardContent={() => <></>}
				getComparingField={(p) => p.mass}
				onTryAgain={() => Promise.resolve()}
				loading={false}
			/>,
		);

		const p1 = screen.queryByTestId('score-p1');
		const p2 = screen.queryByTestId('score-p2');

		const draw = screen.getByTestId('draw');

		expect(draw?.textContent).toEqual(APP_STRING.DRAW);
		expect(p1).toBeNull();
		expect(p2).toBeNull();
	});
});
