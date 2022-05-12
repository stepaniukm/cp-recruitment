import { GetServerSideProps } from 'next';
import { addApolloState, initializeApollo } from '../lib/apolloClient';
import { useAllPeopleQuery, AllPeopleDocument } from 'generated-shared';
import type { ReactElement } from 'react';
import { FullPageLayout } from '../components/FullPageLayout.tsx/FullPageLayout';
import Grid from '@mui/material/Grid';

export default function Web() {
	const { data } = useAllPeopleQuery();

	return (
		<Grid container spacing={2}>
			<Grid item xs={2}>
				<h1>Web</h1>
			</Grid>
			<Grid item xs={10}>
				{data?.allPeople.map(({ id, name, mass, starship }) => (
					<li key={id}>
						{name}
						{mass}
						{starship?.name}
					</li>
				))}
			</Grid>
		</Grid>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	const client = initializeApollo();

	await client.query({
		query: AllPeopleDocument,
	});

	return addApolloState(client, {
		props: {},
	});
};

Web.getLayout = (page: ReactElement) => <FullPageLayout>{page}</FullPageLayout>;
