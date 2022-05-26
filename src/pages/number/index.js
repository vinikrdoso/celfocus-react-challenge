import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import maskPhone from '../../helpers/formatters';
import GoBackButton from '../../components/GoBackButton';

import {
	Container,
	Content,
	MainTitle,
	DetailSection,
	Identifier,
	DetailSectionContainer,
} from './styles';

const Number = () => {
	const location = useLocation();
	const [numberInfos, setNumberInfos] = useState({});

	useEffect(() => {
		setNumberInfos(location?.state);
	}, [location?.state]);

	return (
		<Container>
			<Content>
				<GoBackButton />
				<MainTitle>Number Details</MainTitle>
				<DetailSectionContainer>
					<DetailSection>
						<Identifier>Number:</Identifier>
						<Identifier isData>{maskPhone(numberInfos?.id)}</Identifier>
					</DetailSection>
					<DetailSection>
						<Identifier>Type:</Identifier>
						<Identifier isData>{numberInfos?.type}</Identifier>
					</DetailSection>
				</DetailSectionContainer>
			</Content>
		</Container>
	);
};

export default Number;
