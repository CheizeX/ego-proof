import styled, { css } from 'styled-components/macro';

export const StyledSidebar = styled.aside<{ open: boolean }>`
	position: fixed;
	top: 70px;
	bottom: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 390px;
	height: calc(100% - 70px);
	min-height: calc(100vh - 70px);
	box-shadow: -2px 0px 5px 0px rgba(0, 0, 0, 0.05);
	background-color: ${({ theme }) => theme.color.gray[10]};
	transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
	transition: all 0.2s;
	z-index: 1;
	@media (max-width: 480px) {
		max-width: 100vw;
	}
`;

export const StyledSidebarMainContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding-top: 10px;
	scrollbar-width: 0;
	overflow-y: overlay;
	&:hover {
		behavior: smooth;
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
	padding: 0px 20px 0 30px;
	& > div:not(:last-child) {
		border-bottom: 1px solid ${({ theme }) => theme.color.gray[9]};
	}
	& > div:first-child {
		padding-top: 0px;
	}
`;

export const StyledSidebarTopContentItemsContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	gap: 10px;
	padding: 30px 35px 30px 0;
`;

export const StyledSidebarTopContentItem = styled.button<{
	selected: boolean;
}>`
	margin-left: auto;
	font-size: 20px;
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
	gap: 10px;
	padding: 30px 55px 30px 0;
`;

export const StyledSidebarFooterItem = styled.button<{
	selected: boolean;
}>`
	margin-left: auto;
	font-size: 20px;
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
