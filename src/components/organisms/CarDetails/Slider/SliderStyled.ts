import styled from 'styled-components/macro';

export const StyledSlider = styled.div`
	width: 100%;
	min-height: 25.625rem;
	background: ${({ theme }) => theme.color.gray[9]};
	padding: 0rem;
	position: relative;
	margin-bottom: 1.875rem;
	& > :first-child,
	& > :last-child {
		top: 0;
		min-height: 25.625rem;
		background: ${({ theme }) => theme.color.gray[7]};
		width: 3.9063rem;
		height: 1.25rem;
		position: absolute;
		opacity: 0.8;
		z-index: 1;
	}

	& > :first-child {
		left: 0;
		box-shadow: inset 0rem 0rem 0.625rem rgba(0, 0, 0, 0.25);
		@media (max-width: 30rem) {
			transition: 0.5s;
			transform: translateX(-100%);
		}
	}

	& > :last-child {
		box-shadow: inset 0rem 0rem 0.625rem rgba(0, 0, 0, 0.25);
		right: 0;
		z-index: 0;
		@media (max-width: 30rem) {
			transition: 0.5s;
			transform: translateX(100%);
		}
	}

	& > :nth-child(2) {
		& > div {
			& > button {
				height: 100%;
				border-radius: 0;
				position: absolute;
				right: 0;
				background: ${({ theme }) => theme.color.gray[10]};
				min-width: 2.5rem;
				transition: 0.2s;
				&:hover {
					opacity: 1;
					& * {
						transition: 0.2s;
						fill: ${({ theme }) => theme.color.red[2]};
					}
				}
			}
			& > button:first-child {
				left: 0rem;
			}
			& > button:last-child {
				right: 0rem;
			}
			@media (max-width: 30rem) {
				& > button {
					opacity: 0;
					z-index: -10;
				}
			}
		}
	}
`;

export const StyledSliderImageContainer = styled.div<{}>`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	width: 100%;
	height: 25.625rem;
	object-fit: cover;
	padding: 2.5rem 0rem;
	max-width: 17.5rem;
	text-align: left;
	margin: 0 auto;
	cursor: grab;
	& > img {
		z-index: -1;
		max-height: 9.375rem;
		border-radius: 0.625rem;
	}
`;
