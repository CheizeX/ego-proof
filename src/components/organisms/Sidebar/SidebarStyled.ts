import styled, { css } from 'styled-components/macro';

export const StyledSidebar = styled.aside<{ open: boolean }>`
	position: fixed;
	top: 4.375rem;
	bottom: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 24.375rem;
	height: calc(100% - 4.375rem);
	min-height: calc(100vh - 4.375rem);
	box-shadow: -0.125rem 0rem 0.3125rem 0rem rgba(0, 0, 0, 0.05);
	background-color: ${({ theme }) => theme.color.gray[10]};
	transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
	transition: all 0.2s;
	z-index: 1;
	@media (max-width: 30rem) {
		max-width: 100%;
	}
`;

export const StyledSidebarMainContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding-top: 0.625rem;
	scrollbar-width: 0;
	overflow-y: overlay;
	&:hover {
		transition: all 0.3s ease;
		scrollbar-width: 0.625rem;
		&::-webkit-scrollbar {
			width: 0.625rem;
		}
		&::-webkit-scrollbar-thumb {
			border-radius: 0.425rem;
			border: 0.125rem solid ${({ theme }) => theme.color.gray[10]};
			background-color: ${({ theme }) => theme.color.gray[8]};
			&:hover {
				transition: all 0.3s ease;
			}
		}
		&::-webkit-scrollbar-track {
			background: ${({ theme }) => theme.color.gray[10]};
		}
	}
	&::-webkit-scrollbar {
		transition: all 0.3s ease;
		width: 0;
	}
`;

export const StyledSidebarTopContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 0rem 1.25rem 0 1.875rem;
	& > div:not(:last-child) {
		border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray[9]};
	}
	& > div:first-child {
		padding-top: 0rem;
	}
`;

export const StyledSidebarTopContentItemsContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	gap: 0.625rem;
	padding: 1.875rem 2.1875rem 1.875rem 0;
`;

export const StyledSidebarTopContentItem = styled.button<{
	selected: boolean;
}>`
	margin-left: auto;
	font-size: 1.25rem;
	font-weight: 400;
	transition: all 0.2s;
	&:hover {
		transition: all 0.2s;
		cursor: pointer;
		color: ${({ theme }) => theme.color.red[1]};
	}
	${({ selected, theme }) =>
		selected &&
		css`
			color: ${theme.color.red[1]};
			animation: blinker 0.5s ease-in-out;
		`}

	@keyframes blinker {
		50% {
			opacity: 0;
		}
		60% {
			opacity: 1;
		}
		80% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

export const StyledSidebarFooterContent = styled.div`
	background-color: ${({ theme }) => theme.color.gray[9]};
	height: 100%;
	display: flex;
	width: 100%;
	flex-direction: column;
	gap: 0.625rem;
	padding: 1.875rem 3.4375rem 1.875rem 0;
`;

export const StyledSidebarFooterItem = styled.button<{
	selected: boolean;
}>`
	margin-left: auto;
	font-size: 1.25rem;
	font-weight: 400;
	transition: all 0.2s;
	&:hover {
		transition: all 0.2s;
		cursor: pointer;
		color: ${({ theme }) => theme.color.gray[10]};
	}
	${({ selected, theme }) =>
		selected &&
		css`
			color: ${theme.color.gray[10]};
			animation: blinker 0.5s ease-in-out;
		`}
	@keyframes blinker {
		50% {
			opacity: 0;
		}
		60% {
			opacity: 1;
		}
		80% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;
