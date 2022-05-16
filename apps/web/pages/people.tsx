import Typography from '@mui/material/Typography';
import { TwoRandomPeopleDocument, useTwoRandomPeopleQuery } from 'generated-shared';
import { ReactElement } from 'react';
import { FullPageLayout } from '../components/FullPageLayout';
import { addApolloState, initializeApollo } from '../lib/apolloClient';
import Game from '../components/Game/Game';

export default function Starships() {
	const { data, fetchMore: tryAgain, loading } = useTwoRandomPeopleQuery();

	const onTryAgain = async () => {
		await tryAgain({});
	};

	return (
		<Game
			data={data}
			getCardContent={(person) => (
				<>
					<Typography>Person name: {person.name}</Typography>
					<Typography>Mass: {person.mass}</Typography>
				</>
			)}
			getComparingField={(starship) => starship.mass ?? 0}
			loading={loading}
			onTryAgain={onTryAgain}
		></Game>
	);
}

export const getServerSideProps = async () => {
	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: TwoRandomPeopleDocument,
	});

	return addApolloState(apolloClient, {
		props: {},
	});
};

Starships.getLayout = (page: ReactElement) => <FullPageLayout>{page}</FullPageLayout>;
