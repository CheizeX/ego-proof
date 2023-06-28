import styled from 'styled-components/macro';

export const StyledHeroContainer = styled.section`
	flex: 1;
	display: flex;
	width: 100%;
	height: 100vh;
	min-height: 30rem;
	@media (max-width: 52.5rem) {
		flex-direction: column;
		margin-bottom: 2.5rem;
	}
`;

export const StyledHeroImageContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 60%;
	min-height: 100%;
	object-fit: cover;
	& > img {
		width: 95%;
	}
	@media (max-width: 52.5rem) {
		object-fit: contain;
		max-height: 50vh;
	}
`;

export const StyledHeroDescription = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
	gap: 0.625rem;
	width: 40%;
	min-height: 100%;
	text-align: left;
	padding: 0 1.875rem;
	@media (max-width: 52.5rem) {
		width: 100%;
		height: fit-content;
	}
	& > h1 {
		font-size: 1.25rem;
		font-weight: 600;
		line-height: 1.6875rem;
	}
	& > h2 {
		font-size: 3.125rem;
		font-weight: 600;
		letter-spacing: -0.0625rem;
		line-height: 3.5625rem;
		@media (max-width: 64rem) {
			transition: 2s;
			line-height: 2.8125rem;
			font-size: 2.5rem;
		}
		@media (max-width: 52.5rem) {
			transition: 2s;
			line-height: 2.75rem;
			font-size: 2.1875rem;
		}
	}
	& > h3 {
		& > * {
			font-size: 1rem;
			line-height: 1.6875rem;
			letter-spacing: -0.0063rem;
			font-weight: 600;
			color: ${({ theme }) => theme.color.gray[4]};
			@media (max-width: 52.5rem) {
				transition: 2s;
				line-height: 1.6875rem;
				font-size: 1rem;
			}
		}
	}
	& > p {
		font-size: 1rem;
		line-height: 1.6875rem;
		letter-spacing: -0.0063rem;
		@media (max-width: 52.5rem) {
			transition: 2s;
			line-height: 1.25rem;
			font-size: 0.875rem;
		}
	}
`;
