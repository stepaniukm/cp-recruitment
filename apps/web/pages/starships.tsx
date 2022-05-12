import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import {
	TwoRandomStarshipsDocument,
	TwoRandomStarshipsQuery,
	useTwoRandomStarshipsQuery,
} from 'generated-shared';
import { ReactElement, useEffect, useMemo, useState } from 'react';
import { FullPageLayout } from '../components/FullPageLayout.tsx/FullPageLayout';
import { addApolloState, initializeApollo } from '../lib/apolloClient';
import Button from '@mui/material/Button';
import _omit from 'lodash/omit';
import { colors } from '@mui/material';
import Box from '@mui/system/Box';
import { betterEntries } from '../lib/helpers';

type Result = number | 'draw' | 'loading';

const getOutlineColor = (winner: Result, id: number): string => {
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

const getWinner = (data: TwoRandomStarshipsQuery | undefined): Result => {
	if (!data) {
		return 'loading';
	}

	const c1 = data.p1?.crew?.length ?? 0;
	const c2 = data.p2?.crew?.length ?? 0;

	if (c1 > c2) {
		return data.p1.id;
	}
	if (c1 < c2) {
		return data.p2.id;
	}

	return 'draw';
};

export default function Starships() {
	const { data, fetchMore: tryAgain, loading } = useTwoRandomStarshipsQuery();
	const [score, setScore] = useState({ p1: 0, p2: 0 });

	const result = useMemo(() => getWinner(data), [data]);

	useEffect(() => {
		if (result === data?.p1.id) {
			setScore((s) => ({ ...s, p1: s.p1 + 1 }));
		} else if (result === data?.p2.id) {
			setScore((s) => ({ ...s, p2: s.p2 + 1 }));
		}
	}, [data?.p1.id, data?.p2.id, result]);

	const onTryAgain = async () => {
		await tryAgain({});
	};

	if (!data || loading) return <CircularProgress />;

	return (
		<Grid container marginTop={20}>
			<Grid container item display="flex" justifyContent="space-around">
				{betterEntries(_omit(data, '__typename')).map(([key, value]) => {
					const outlineColor = getOutlineColor(result, value.id);

					return (
						<Grid item xs={4} key={key}>
							<Typography fontSize={25}>
								Score({key.toUpperCase()}): {score[key]}
							</Typography>
							<Card
								variant="outlined"
								sx={{ outlineColor, outlineStyle: 'dashed', outlineWidth: 2 }}
							>
								<CardContent>
									<Typography>Starship one name: {value.name}</Typography>
									<Typography>Crew amount: {value?.crew?.length}</Typography>
								</CardContent>
							</Card>
							<Box
								display="flex"
								justifyContent="center"
								height={5}
								alignItems="center"
								marginTop={2}
							>
								{result === value.id && <Typography fontSize={20}>^^^Winner^^^</Typography>}
							</Box>
						</Grid>
					);
				})}
			</Grid>
			<Grid container item justifyContent="center" marginY={1} height={5}>
				{result === 'draw' && <Typography fontSize={25}>Draw</Typography>}
			</Grid>
			<Grid item display="flex" justifyContent="center" marginTop={5}>
				<Button variant="contained" color="primary" size="large" onClick={onTryAgain}>
					Try again
				</Button>
			</Grid>
			<Grid item display="flex" justifyContent="center" marginTop={5}>
				<Button variant="contained" color="primary" size="large" onClick={onTryAgain}>
					Go back
				</Button>
			</Grid>
		</Grid>
	);
}

export const getServerSideProps = async () => {
	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: TwoRandomStarshipsDocument,
	});

	return addApolloState(apolloClient, {
		props: {},
	});
};

Starships.getLayout = (page: ReactElement) => <FullPageLayout>{page}</FullPageLayout>;
