import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { TwoRandomPeopleQuery, TwoRandomStarshipsQuery } from 'generated-shared';
import { ReactElement, useEffect, useMemo, useState } from 'react';
import Button from '@mui/material/Button';
import _omit from 'lodash/omit';
import { colors } from '@mui/material';
import Box from '@mui/system/Box';
import { betterEntries } from '../../lib/helpers';
import { APP_STRING } from '../../lib/constants';
import Link from 'next/link';

type Result = number | 'draw' | 'loading';
type RandomQuery = TwoRandomStarshipsQuery | TwoRandomPeopleQuery;

const getOutlineColor = (winner: Result, id: number) => {
	if (winner === 'loading') {
		return colors.grey[300];
	}
	if (winner === 'draw') {
		return colors.brown[300];
	}
	if (winner === id) {
		return colors.green[300];
	}
	return colors.red[300];
};

type Props<T extends RandomQuery> = {
	data: T | undefined;
	loading: boolean;
	getComparingField: (data: T['p1']) => number;
	getCardContent: (data: T['p1']) => ReactElement;
	onTryAgain: () => Promise<void>;
};

const getWinner = function <T extends RandomQuery>(
	data: T | undefined,
	getComparingField: Props<T>['getComparingField'],
): Result {
	if (!data) {
		return 'loading';
	}

	const c1 = getComparingField(data.p1) ?? 0;
	const c2 = getComparingField(data.p2) ?? 0;

	if (c1 > c2) {
		return data.p1.id;
	}
	if (c1 < c2) {
		return data.p2.id;
	}

	return 'draw';
};

export default function Game<T extends RandomQuery>({
	data,
	loading,
	getComparingField,
	getCardContent,
	onTryAgain,
}: Props<T>) {
	const [score, setScore] = useState({ p1: 0, p2: 0 });

	const result = useMemo(() => getWinner(data, getComparingField), [data, getComparingField]);

	useEffect(() => {
		if (result === data?.p1.id) {
			setScore((s) => ({ ...s, p1: s.p1 + 1 }));
		} else if (result === data?.p2.id) {
			setScore((s) => ({ ...s, p2: s.p2 + 1 }));
		}
	}, [data?.p1.id, data?.p2.id, result]);

	if (!data || loading) return <CircularProgress />;

	return (
		<Grid container marginTop={20}>
			<Grid container item display="flex" justifyContent="space-around">
				{betterEntries(_omit(data, '__typename')).map(([key, value]) => {
					// Object.entries is dumb so here I have to fix typings like this
					const typedKey = key as keyof typeof score;
					const typedValue = value as unknown as T['p1'];

					const outlineColor = getOutlineColor(result, typedValue.id);

					return (
						<Grid item xs={4} key={typedKey} data-testid={'player-' + typedKey}>
							<Typography fontSize={25}>
								Score({typedKey.toUpperCase()}): {score[typedKey]}
							</Typography>
							<Card
								variant="outlined"
								sx={{ outlineColor, outlineStyle: 'dashed', outlineWidth: 2 }}
							>
								<CardContent>{getCardContent(typedValue)}</CardContent>
							</Card>
							<Box
								display="flex"
								justifyContent="center"
								height={5}
								alignItems="center"
								marginTop={2}
							>
								{result === typedValue.id && (
									<Typography fontSize={20} data-testid={'score-' + typedKey}>
										{APP_STRING.WIN}
									</Typography>
								)}
							</Box>
						</Grid>
					);
				})}
			</Grid>
			<Grid container item justifyContent="center" marginY={1} height={5}>
				{result === 'draw' && (
					<Typography fontSize={25} data-testid={'draw'}>
						{APP_STRING.DRAW}
					</Typography>
				)}
			</Grid>
			<Grid container item alignItems="center" justifyContent="center" height={10} width="100%">
				<Grid container item marginTop={5} justifyContent="center">
					<Button variant="contained" color="primary" size="large" onClick={onTryAgain}>
						{APP_STRING.TRY_AGAIN}
					</Button>
				</Grid>
				<Grid container item marginTop={5} justifyContent="center">
					<Link href="/">
						<Button variant="contained" color="secondary" size="large">
							{APP_STRING.GO_HOME}
						</Button>
					</Link>
				</Grid>
			</Grid>
		</Grid>
	);
}
