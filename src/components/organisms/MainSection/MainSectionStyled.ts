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
	@media (max-width: 1160px) {
		padding: 0 10px;
	}
	& > h1 {
		z-index: 1;
		position: sticky;
		top: -10px;
		display: flex;
		justify-content: start;
		align-items: start;
		background-color: ${({ theme }) => theme.color.gray[10]};
		color: ${({ theme }) => theme.color.gray[2]};
		font-size: 50px;
		font-weight: 700;
		text-align: left;
		letter-spacing: -1px;
		min-height: 214px;
		width: 100%;
		padding-top: 85px;
		box-shadow: 0px 3px 20px 20px rgba(255, 255, 255, 1);
		@media (max-width: 733px) {
			transition: all 0.2s;
			padding-top: 40px;
			top: 40px;
		}
		@media (max-width: 420px) {
			font-size: 40px;
		}
	}
`;
