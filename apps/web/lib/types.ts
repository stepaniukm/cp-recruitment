import { AppProps } from 'next/app';

export type BetterAppProps<P = any> = {
	pageProps: P;
} & Omit<AppProps<P>, 'pageProps'>;
