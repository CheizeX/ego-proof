import styled from 'styled-components/macro';

export const StyledItemsListContainer = styled.div`
	width: 100%;
	position: sticky;
	top: 270px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(268px, 1fr));
	grid-column-gap: 10px;
	grid-row-gap: 40px;
	justify-content: center;
	align-content: center;
	padding: 50px 0;
`;

export const StyledItemAndButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
	& > button {
		z-index: -10px;
		transition: all 0.2s;
		opacity: 0;
		cursor: pointer;
	}
	&:hover {
		& > div {
			& > h1 {
				color: ${({ theme }) => theme.color.red[2]};
				transition: all 0.2s;
			}
		}
		& > button {
			transition: all 0.2s;
			z-index: 0;
			opacity: 1;
		}
	}
`;

export const StyledItemBox = styled.div`
	display: flex;
	gap: 10px;
	flex-direction: column;
	justify-content: start;
	width: 268px;
	height: 200px;
	& > h1 {
		text-align: center;
		font-size: 28px;
		font-weight: 600;
		line-height: 30px;
		letter-spacing: -0.653px;
	}
	& > h2 {
		text-align: center;
		font-size: 14px;
		letter-spacing: -0.28px;
		font-weight: 400;
	}
`;

export const StyledItemBoxImage = styled.img`
	/* max-width: 221px; */
	/* max-height: 118px; */
	width: 100%;
	height: 100%;
	flex-shrink: 0;
	object-fit: contain;
`;

export const StyledItemBoxButton = styled.button`
	display: flex;
	width: 152px;
	height: 34px;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	background-color: ${({ theme }) => theme.color.gray[1]};
	color: ${({ theme }) => theme.color.gray[10]};
	border-radius: 27px;
`;
