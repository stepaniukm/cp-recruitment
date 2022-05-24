import Typography from '@mui/material/Typography';
import { TwoRandomStarshipsDocument, useTwoRandomStarshipsQuery } from 'generated-shared';
import { ReactElement } from 'react';
import { FullPageLayout } from '../components/FullPageLayout';
import { addApolloState, initializeApollo } from '../lib/apolloClient';
import Game from '../components/Game/Game';
import Head from 'next/head';

export default function Starships() {
	const { data, fetchMore: tryAgain, loading } = useTwoRandomStarshipsQuery();

	const onTryAgain = async () => {
		await tryAgain({});
	};

	return (
		<>
			<Head>
				<title>Starships game</title>
			</Head>
			<Game
				data={data}
				getCardContent={(starship) => (
					<>
						<Typography>Starship name: {starship.name}</Typography>
						<Typography>Crew: {starship.crew?.length}</Typography>
					</>
				)}
				getComparingField={(starship) => starship.crew?.length ?? 0}
				loading={loading}
				onTryAgain={onTryAgain}
			></Game>
		</>
	);
}

export const getStaticProps = async () => {
	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: TwoRandomStarshipsDocument,
	});

	return addApolloState('static', apolloClient, {
		props: {},
		revalidate: 1,
	});
};

Starships.getLayout = (page: ReactElement) => <FullPageLayout>{page}</FullPageLayout>;
