import styled from 'styled-components/macro';

export const StyledCardDetailsMainContainer = styled.section`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
	width: 100%;
	height: fit-content;
	padding-top: 4.2rem;
	z-index: 0;
	background-color: ${({ theme }) => theme.color.gray[10]};
`;
