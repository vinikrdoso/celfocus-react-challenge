import React, { useEffect, useState } from 'react';
import api from '../../api';
import Table from '../../components/Table';

import { Container, Content, MainTitle } from './styles';

const Home = () => {
	const [companies, setCompanies] = useState([]);

	const headTitles = {
		firstTitle: 'Company name',
		secondTitle: 'Vatin',
	};
	useEffect(() => {
		const fetchData = async () => {
			const res = await api.get(`companies`);
			setCompanies(res.data);
		};
		fetchData();
	}, []);

	return (
		<Container>
			<Content>
				<MainTitle>Companies</MainTitle>
				{companies.length > 0 && (
					<Table headTitles={headTitles} data={companies} type={'company'} />
				)}
			</Content>
		</Container>
	);
};

export default Home;
