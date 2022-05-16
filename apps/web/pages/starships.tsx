import Typography from '@mui/material/Typography';
import { TwoRandomStarshipsDocument, useTwoRandomStarshipsQuery } from 'generated-shared';
import { ReactElement } from 'react';
import { FullPageLayout } from '../components/FullPageLayout';
import { addApolloState, initializeApollo } from '../lib/apolloClient';
import Game from '../components/Game/Game';

export default function Starships() {
	const { data, fetchMore: tryAgain, loading } = useTwoRandomStarshipsQuery();

	const onTryAgain = async () => {
		await tryAgain({});
	};

	return (
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
