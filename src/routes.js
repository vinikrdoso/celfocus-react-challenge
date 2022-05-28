import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Company from './pages/company';
import Number from './pages/number';

const MainRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/company/:companyId' element={<Company />} />
				<Route path='/number/:numberId' element={<Number />} />
			</Routes>
		</BrowserRouter>
	);
};

export default MainRoutes;
