import Container from '@mui/material/Container';

export const FullPageLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Container fixed style={{ height: '100vh' }}>
			{children}
		</Container>
	);
};
