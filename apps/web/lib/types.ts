import type { NextPage, Redirect } from 'next';
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

export type BetterGetStaticPropsResult<Props> =
	| {
			props: Props;
			redirect?: undefined;
			revalidate?: number | boolean | undefined;
			notFound?: undefined;
	  }
	| {
			props?: undefined;
			redirect: Redirect;
			revalidate?: number | boolean | undefined;
			notFound?: undefined;
	  }
	| {
			props?: undefined;
			redirect?: undefined;
			revalidate?: number | boolean | undefined;
			notFound: true;
	  };

export type BetterGetServerSidePropsResult<Props> =
	| {
			props: Props | Promise<Props>;
			redirect?: undefined;
			notFound?: undefined;
	  }
	| {
			props?: undefined;
			redirect: Redirect;
			notFound?: undefined;
	  }
	| {
			props?: undefined;
			redirect?: undefined;
			notFound: true;
	  };
