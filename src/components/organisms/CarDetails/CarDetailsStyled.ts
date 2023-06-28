import styled from 'styled-components';

export const StyledCardDetailsMainContainer = styled.section`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
	width: 100%;
	max-width: 1140px;
	z-index: 0;
	background-color: ${({ theme }) => theme.color.gray[10]};
`;
