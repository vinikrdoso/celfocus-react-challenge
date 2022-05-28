import React from 'react';
import { useNavigate } from 'react-router-dom';

import LeftArrow from '../../assets/left-arrow.svg';

import { Container, ArrowLeft, Text } from './styles';

const GoBackButton = () => {
	const navigate = useNavigate();

	return (
		<Container onClick={() => navigate(-1)}>
			<ArrowLeft src={LeftArrow} alt='Go back button' />
			<Text>Go back</Text>
		</Container>
	);
};

export default GoBackButton;
