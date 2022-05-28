import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api';
import Table from '../../components/Table';
import GoBackButton from '../../components/GoBackButton';

import { Container, Content, MainTitle } from './styles';

const Company = () => {
	const { companyId } = useParams();
	const [numbers, setNumbers] = useState([]);
	const headTitles = {
		firstTitle: 'Number',
		secondTitle: 'Type',
	};

	useEffect(() => {
		const fetchData = async () => {
			const res = await api.get(`phone_numbers`);
			const filteredNumbers = res.data.filter(
				(number) => number.company_id === Number(companyId)
			);
			setNumbers(filteredNumbers);
		};
		fetchData();
	}, [companyId]);

	return (
		<Container>
			<Content>
				<GoBackButton />
				<MainTitle>Local Public Office</MainTitle>
				<Table headTitles={headTitles} data={numbers} type={'number'} />
			</Content>
		</Container>
	);
};

export default Company;
