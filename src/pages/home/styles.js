import styled, { css } from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	margin: auto;

	background: #ddd;
`;

export const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
export const Table = styled.table`
	height: 50rem;
	width: 50rem;

	border-collapse: collapse;
	font-size: 0.9em;
	font-family: sans-serif;
	min-width: 40rem;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

	thead tr {
		text-align: center;
		vertical-align: middle;
		background-color: #009879;
		color: #ffffff;
		text-align: left;
		border-bottom: 0.1rem solid #dddddd;
	}

	th,
	td {
		padding: 1.2rem 1.6rem;
	}
`;

export const TBody = styled.tbody`
	${({ isLastItem, isEven }) => css`
		tr {
			border-bottom: ${isLastItem ? '2px solid #009879' : '1px solid #dddddd'};
			background-color: ${isEven && ' #f3f3f3'};
		}

		a:link,
		a:visited {
			text-decoration: none;
			color: #009879;
		}
	`}
`;

export const MainTitle = styled.h1`
	text-align: center;
	padding: 2rem;
	font-size: 2.4rem;
	font-weight: 300;
`;
