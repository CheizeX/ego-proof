import styled from 'styled-components/macro';

export const StyledMainSection = styled.main`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
	width: 100%;
	max-width: 1140px;
	z-index: 0;
	background-color: ${({ theme }) => theme.color.gray[10]};
	& > h1 {
		z-index: 1;
		position: sticky;
		background-color: ${({ theme }) => theme.color.gray[10]};
		top: -10px;
		color: ${({ theme }) => theme.color.gray[2]};
		font-size: 50px;
		font-weight: 700;
		line-height: 57px;
		letter-spacing: -1px;
		min-height: 214px;
		width: 100%;
		display: flex;
		justify-content: start;
		padding-top: 85px;
		box-shadow: 0px 3px 20px 20px rgba(255, 255, 255, 1);
	}
`;
