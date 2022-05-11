import { gql, useQuery } from '@apollo/client';
import { GetServerSideProps } from 'next';
import { addApolloState, initializeApollo } from '../lib/apolloClient';
import { Query } from 'generated-shared';

const GET_ALL_PEOPLE = gql`
	query {
		allPeople {
			id
			name
			mass
			starship {
				id
				name
			}
		}
	}
`;

export default function Web() {
	const { data } = useQuery<Pick<Query, 'allPeople'>>(GET_ALL_PEOPLE);
	console.log(data);

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
		query: GET_ALL_PEOPLE,
	});

	return addApolloState(client, {
		props: {},
	});
};
