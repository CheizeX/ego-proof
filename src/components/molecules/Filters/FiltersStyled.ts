import styled, { css } from 'styled-components/macro';

export const StyledFiltersComponent = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray[8]};
	padding-bottom: 0.9375rem;
	font-weight: 600;
	position: sticky;
	top: 8.75rem;
	background: ${({ theme }) => theme.color.gray[10]};
	z-index: 2;
	@media (max-width: 45.8125rem) {
		transition: all 0.2s;
		top: 13.125rem;
	}
	@media (max-width: 26.25rem) {
		transition: all 0.2s;
		top: 11.875rem;
	}
`;

// Filtro izquierda Desktop
export const StyledLeftFiltersContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	gap: 1.25rem;
	max-width: 43.75rem;
	@media (max-width: 52.5rem) {
		transition: all 0.2s;
		display: none;
	}
`;

export const StyledFilterButton = styled.button<{ selected: boolean }>`
	border-radius: 1.125rem;
	font-size: 0.875rem;
	padding: 0.3125rem 0.9375rem;
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

// filtro derecha
export const StyledRightFiltersContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
`;

export const StyledFilterDropdownButton = styled.button<{ open: boolean }>`
	position: relative;
	display: flex;
	align-items: center;
	gap: 0.375rem;
	font-size: 0.875rem;
	font-weight: 600;
	line-height: 0.875rem;
	letter-spacing: 0.0049rem;
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
	top: 2.1875rem;
	right: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-width: 10.625rem;
	border-radius: 0.375rem;
	background: #fff;
	box-shadow: 0.125rem 0.5rem 1.25rem 0rem rgba(0, 0, 0, 0.1);
	overflow: hidden;
	& > button:not(:last-child) {
		border-bottom: 0.125rem solid ${({ theme }) => theme.color.gray[9]};
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

	@media (max-width: 26.25rem) {
		max-width: 11.625rem;
		min-width: 9.5625rem;
	}
`;

export const StyledFilterDropdownItem = styled.button<{
	selected: boolean;
}>`
	min-height: 2.1875rem;
	display: flex;
	gap: 0.25rem;
	align-items: center;
	justify-content: start;
	width: 100%;
	font-size: 0.625rem;
	line-height: 2.1875rem;
	letter-spacing: -0.0063rem;
	padding: 0 1rem;
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
	@media (max-width: 26.25rem) {
		padding: 0 0.625rem;
		& * {
			font-size: 0.75rem;
		}
	}
`;

// Filtro izquierda Mobile
export const StyledLeftFiltersMobileContainer = styled(
	StyledRightFiltersContainer
)`
	display: none;
	@media (max-width: 52.5rem) {
		display: flex;
	}
`;

export const StyledLeftFilterDropdownMobileButton = styled(
	StyledFilterDropdownButton
)``;

export const StyledLeftFilterDropdownMobile = styled(StyledFilterDropdown)<{
	open: boolean;
}>`
	left: 0;
`;

export const StyledLeftFilterDropdownItemMobile = styled(
	StyledFilterDropdownItem
)`
	flex: 1;
	font-size: 0.75rem;
`;
