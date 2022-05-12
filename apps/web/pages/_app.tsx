import { ApolloProvider, NormalizedCacheObject } from '@apollo/client';
import { APOLLO_STATE_PROP_NAME, useApollo } from '../lib/apolloClient';
import { BetterAppProps } from '../lib/types';

export type PageProps = {
	[APOLLO_STATE_PROP_NAME]?: NormalizedCacheObject;
};

export default function App({ Component, pageProps }: BetterAppProps<PageProps>) {
	const apolloClient = useApollo(pageProps);

	return (
		<ApolloProvider client={apolloClient}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}
