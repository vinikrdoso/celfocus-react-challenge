import styled, { css } from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	margin: auto;

	background: #ededed;
`;

export const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const MainTitle = styled.h1`
	text-align: center;
	padding: 2rem;
	font-size: 2.4rem;
	font-weight: 300;
`;

export const DetailSection = styled.div`
	min-height: 1rem;
	padding: 1rem;
`;
export const Identifier = styled.span`
	${({ isData }) => css`
		padding: 0 0 0 0.5rem;
		color: ${isData && '#ed1c48'};
		font-weight: ${!isData && 600};
	`}
`;

export const DetailSectionContainer = styled.div`
	background-color: #f3f3f3;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
	border-radius: 0.4rem;
`;
