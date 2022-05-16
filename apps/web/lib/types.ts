import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout<T> = AppProps<T> & {
	Component: NextPageWithLayout;
};

export type BetterAppProps<P> = {
	pageProps: P;
} & Omit<AppPropsWithLayout<P>, 'pageProps'>;
