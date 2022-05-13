import { ReactElement, useState } from 'react';
import { FullPageLayout } from '../components/FullPageLayout';
import Link from 'next/link';
import Box from '@mui/material/Box';
import StyledLink from '@mui/material/Link';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

const choices = ['starships', 'people'] as const;
type GameChoice = typeof choices[number];
export default function Index() {
	const [choice, setChoice] = useState<GameChoice>('starships');
	return (
		<Box
			width="100%"
			height="100%"
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
		>
			<InputLabel>
				<Select value={choice} onChange={(e) => setChoice(e.target.value as GameChoice)}>
					<MenuItem value="starships">Starships</MenuItem>
					<MenuItem value="people">People</MenuItem>
				</Select>
			</InputLabel>
			<Link href={`/${choice}`} passHref>
				<StyledLink variant="button" fontSize={20}>
					Play
				</StyledLink>
			</Link>
		</Box>
	);
}

Index.getLayout = (page: ReactElement) => <FullPageLayout>{page}</FullPageLayout>;
