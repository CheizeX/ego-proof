import styled, { css } from 'styled-components/macro';

export const StyledFiltersComponent = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid ${({ theme }) => theme.color.gray[8]};
	padding-bottom: 15px;
	font-weight: 600;
	position: sticky;
	top: 140px;
	background: ${({ theme }) => theme.color.gray[10]};
	z-index: 2;
`;

export const StyledLeftFiltersContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	gap: 20px;
	max-width: 700px;
`;

export const StyledFilterButton = styled.button<{ selected: boolean }>`
	border-radius: 18px;
	font-size: 14px;
	padding: 5px 15px;
	transition: all 0.2s;

	${({ selected, theme }) =>
		selected &&
		css`
			background-color: ${theme.color.gray[9]};
			opacity: 0.8;
		`}

	&:hover {
		cursor: pointer;
		opacity: 0.5;
		transition: all 0.2s;
	}
`;

export const StyledRightFiltersContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	& > button {
	}
`;

export const StyledFilterDropdownButton = styled.button<{ open: boolean }>`
	position: relative;
	display: flex;
	align-items: center;
	gap: 6px;
	font-size: 14px;
	font-weight: 600;
	line-height: 14px;
	letter-spacing: 0.079px;
	transition: all 0.2s;
	& > svg {
		transition: all 0.2s;
	}
	${({ open }) =>
		open &&
		css`
			& > svg {
				transition: all 0.2s;
				transform: rotate(180deg);
			}
		`}

	&:hover {
		cursor: pointer;
		opacity: 0.7;
		transition: all 0.2s;
	}
`;

export const StyledFilterDropdown = styled.div<{ open: boolean }>`
	position: absolute;
	top: 35px;
	right: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-width: 170px;
	min-height: 182px;
	border-radius: 6px;
	background: #fff;
	box-shadow: 2px 8px 20px 0px rgba(0, 0, 0, 0.08);
	overflow: hidden;
	& > button:not(:last-child) {
		border-bottom: 2px solid ${({ theme }) => theme.color.gray[9]};
	}
	${({ open }) =>
		open
			? css`
					z-index: 1;
					opacity: 1;
					visibility: visible;
					transition: all 0.2s;
			  `
			: css`
					z-index: -1;
					opacity: 0;
					visibility: hidden;
					transition: all 0.2s;
			  `}
`;

export const StyledFilterDropdownItem = styled.button<{
	selected: boolean;
}>`
	display: flex;
	gap: 4px;
	align-items: center;
	justify-content: start;
	width: 100%;
	font-size: 10px;
	line-height: 35px;
	letter-spacing: -0.1px;
	padding: 0 16px;
	transition: all 0.2s;
	${({ selected }) =>
		selected &&
		css`
			background-color: rgba(209, 214, 214, 0.2);
		`}

	&:hover {
		cursor: pointer;
		color: ${({ theme }) => theme.color.red[1]};
		transition: all 0.2s;
	}
`;
