import styled from 'styled-components/macro';

export const StyledLastSectionContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
	gap: 3.4375rem;
	width: 100%;
	flex: 1;
	min-height: 54.375rem;
	padding: 0 1.25rem;
	padding-top: 3.4375rem;
	& > :nth-child(2n) {
		flex-direction: row-reverse;
		@media (max-width: 52.5rem) {
			flex-direction: column-reverse;
			height: fit-content;
			padding-bottom: 3.4375rem;
		}
	}
`;

export const StyledLastSectionItem = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 18.75rem;
	height: fit-content;
	@media (max-width: 52.5rem) {
		transition: 0.2s;
		flex-direction: column-reverse;
		gap: 1.25rem;
		margin-top: 1.25rem;
	}
`;

export const StyledLastSectionItemText = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	height: 100%;
	@media (max-width: 52.5rem) {
		width: 100%;
	}
	& > div {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.625rem;
		width: 21.875rem;
		margin: 0 auto;
		text-align: left;
		@media (max-width: 52.5rem) {
			width: 100%;
		}
		& > h1 {
			width: 100%;
			text-align: left;
			font-size: 1.25rem;
			font-weight: 600;
			line-height: 1.6875rem;
			letter-spacing: -0.025rem;
		}
		& > span {
			& * {
				font-size: 1rem;
				line-height: 1.6875rem;
				letter-spacing: -0.0063rem;
			}
		}
	}
`;

export const StyledLastSectionItemImg = styled.div`
	display: flex;
	width: 50%;
	max-height: 18.75rem;
	overflow: hidden;
	margin: 0 auto;
	@media (max-width: 52.5rem) {
		width: 100%;
		min-height: 12.5rem;
		max-height: 31.25rem;
	}
	& > img {
		object-fit: cover;
		border-radius: 0.625rem;
		width: 100%;
	}
`;
