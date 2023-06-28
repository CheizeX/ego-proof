import styled from 'styled-components/macro';

export const StyledCardDetailsMainContainer = styled.section`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
	width: 100%;
	z-index: 0;
	background-color: ${({ theme }) => theme.color.gray[10]};
`;
