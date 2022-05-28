import React from 'react';
import { Link } from 'react-router-dom';
import maskPhone from '../../helpers/formatters';

import { Container, TBody, NoDataMessage } from './styles';

const Table = ({ headTitles, data, type }) => {
	const getKeyType = (type) => {
		switch (type) {
			case 'company':
				return { firstKey: 'name', secondKey: 'vatin' };
			case 'number':
				return { firstKey: 'id', secondKey: 'type' };
			default:
				break;
		}
	};
	const keys = getKeyType(type);
	const hasData = data?.length > 0;

	return (
		<Container hasData={hasData}>
			{hasData ? (
				<>
					<thead>
						<tr>
							<th>{headTitles.firstTitle}</th>
							<th>{headTitles.secondTitle}</th>
						</tr>
					</thead>
					{data.map((item, key) => {
						const isLastItem = key === data.length - 1;
						const isEven = key % 2 === 0;
						return (
							<TBody isLastItem={isLastItem} isEven={isEven} key={key}>
								<tr>
									<td>
										<Link to={`/${type}/${item.id}`} state={item}>
											{type === 'number'
												? maskPhone(item[keys.firstKey])
												: item[keys.firstKey]}
										</Link>
									</td>
									<td>
										<Link to={`/${type}/${item.id}`}>
											{item[keys.secondKey]}
										</Link>
									</td>
								</tr>
							</TBody>
						);
					})}
				</>
			) : (
				<NoDataMessage>This company has no number</NoDataMessage>
			)}
		</Container>
	);
};

export default Table;
