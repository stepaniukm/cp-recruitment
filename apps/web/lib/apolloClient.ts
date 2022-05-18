import { BetterGetServerSidePropsResult, BetterGetStaticPropsResult } from './types';
import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';
import { PageProps } from '../pages/_app';
import { GetServerSidePropsResult, GetStaticPropsResult, Redirect } from 'next';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient: ApolloClient<NormalizedCacheObject>;
function createApolloClient() {
	return new ApolloClient({
		ssrMode: typeof window === 'undefined',
		link: new HttpLink({
			uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
		}),
		cache: new InMemoryCache(),
	});
}

export function initializeApollo(initialState: NormalizedCacheObject | null = null) {
	const _apolloClient = apolloClient ?? createApolloClient();
	if (initialState) {
		const existingCache = _apolloClient.extract();
		const data = merge(existingCache, initialState, {
			arrayMerge: (destinationArray, sourceArray) => [
				...sourceArray,
				...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s))),
			],
		});

		_apolloClient.cache.restore(data);
	}

	if (typeof window === 'undefined') return _apolloClient;
	if (!apolloClient) apolloClient = _apolloClient;

	return _apolloClient;
}

export function addApolloState<
	Key extends keyof any,
	Props extends Record<Key | typeof APOLLO_STATE_PROP_NAME, unknown>,
	Type extends 'static' | 'server',
	Result extends Type extends 'static'
		? BetterGetStaticPropsResult<Props>
		: BetterGetServerSidePropsResult<Props>,
>(type: Type, client: ApolloClient<NormalizedCacheObject>, pageResult: Result) {
	return {
		...pageResult,
		props: {
			...pageResult?.props,
			[APOLLO_STATE_PROP_NAME]: client.cache.extract(),
		},
	};
}

export function useApollo(pageProps: PageProps) {
	const state = pageProps[APOLLO_STATE_PROP_NAME];
	const store = useMemo(() => initializeApollo(state), [state]);
	return store;
}
