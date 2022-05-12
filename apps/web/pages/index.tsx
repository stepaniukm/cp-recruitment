import { GetServerSideProps } from 'next';
import { addApolloState, initializeApollo } from '../lib/apolloClient';
import { useAllPeopleQuery, AllPeopleDocument } from 'generated-shared';

export default function Web() {
	const { data } = useAllPeopleQuery();

	return (
		<div>
			<h1>Web</h1>
			<ul>
				{data?.allPeople.map(({ id, name, mass, starship }) => (
					<li key={id}>
						{name}
						{mass}
						{starship?.name}
					</li>
				))}
			</ul>
		</div>
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
