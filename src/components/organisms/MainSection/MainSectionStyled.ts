import styled from 'styled-components/macro';

export const StyledMainSection = styled.main`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
	width: 100%;
	max-width: 71.25rem;
	z-index: 0;
	background-color: ${({ theme }) => theme.color.gray[10]};
	@media (max-width: 72.5rem) {
		padding: 0 0.625rem;
	}
	& > h1 {
		z-index: 1;
		position: sticky;
		top: -0.625rem;
		display: flex;
		justify-content: start;
		align-items: start;
		background-color: ${({ theme }) => theme.color.gray[10]};
		color: ${({ theme }) => theme.color.gray[2]};
		font-size: 3.125rem;
		font-weight: 700;
		text-align: left;
		letter-spacing: -0.0625rem;
		min-height: 13.375rem;
		width: 100%;
		padding-top: 6rem;
		box-shadow: 0rem 0.1875rem 1.25rem 1.25rem rgba(255, 255, 255, 1);
		@media (max-width: 45.8125rem) {
			transition: all 0.2s;
			padding-top: 3.5rem;
			top: 1.5rem;
		}
		@media (max-width: 26.25rem) {
			top: 2.5rem;
			font-size: 2.5rem;
		}
	}
`;
