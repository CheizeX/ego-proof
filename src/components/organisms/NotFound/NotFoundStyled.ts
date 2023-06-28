import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const NotFoundContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

export const NotFoundTitle = styled.h1`
	font-size: 2.5rem;
	margin-bottom: 1rem;
`;

export const NotFoundDescription = styled.p`
	font-size: 1.5rem;
	margin-bottom: 2rem;
`;

export const HomeButton = styled(Link)`
	background-color: ${({ theme }) => theme.color.gray[1]};
	color: ${({ theme }) => theme.color.gray[10]};
	padding: 1rem 2rem;
	border-radius: 27px;
	font-size: 1.2rem;
	text-decoration: none;

	&:hover {
		transition: background-color 0.2s ease-in-out;
		background-color: ${({ theme }) => theme.color.gray[3]};
	}
`;
