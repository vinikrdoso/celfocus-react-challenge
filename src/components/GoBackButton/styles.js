import styled from 'styled-components';

export const Container = styled.button`
	background: none;
	border: none;
	font: inherit;
	cursor: pointer;

	display: flex;
	flex-direction: row;
	align-items: center;

	padding: 1rem;
`;

export const ArrowLeft = styled.img`
	width: 1.5rem;
	height: 1.5rem;
	margin-right: 0.5rem;
`;

export const Text = styled.span`
	font-size: 1.5rem;
`;
