import styled, { css } from 'styled-components';

export const Container = styled.table`
	${({ hasData }) => css`
		min-height: 200px;
		min-width: 400px;

		border-collapse: collapse;
		font-size: 0.9rem;
		font-weight: 600;

		text-align: ${!hasData && 'center'};

		box-shadow: ${hasData && '0 0 20px rgba(0, 0, 0, 0.15)'};

		thead tr {
			text-align: center;
			vertical-align: middle;
			background-color: #ed1c48;
			color: #ffffff;
			text-align: left;
			border-bottom: 1px solid #dddddd;
		}

		th,
		td {
			padding: 12px 15px;
		}
	`}
`;

export const TBody = styled.tbody`
	${({ isLastItem, isEven }) => css`
		width: 100%;
		tr {
			border-bottom: ${isLastItem ? '2px solid #ed1c48' : '1px solid #dddddd'};
			background-color: ${isEven && ' #f3f3f3'};
		}

		a:link,
		a:visited {
			text-decoration: none;
			color: #ed1c48;
		}
	`}
`;

export const NoDataMessage = styled.span`
	font-size: 1.5rem;
	color: #ed1c48;
`;
