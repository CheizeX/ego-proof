import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

export const StyledNavbar = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 0.9375rem 0 2.1875rem;
	min-width: 100%;
	height: 4.375rem;
	background-color: ${({ theme }) => theme.color.gray[10]};
	color: ${({ theme }) => theme.color.gray[1]};
	border-bottom: 0.0625rem solid ${({ theme }) => theme.color.gray[8]};
	z-index: 1;
`;

export const StyledNavbarLeftSideContainer = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	position: relative;
	& > img {
		z-index: 2;
		margin-right: 1.875rem;
		width: 2.5rem;
		height: 2.5rem;
	}
`;

export const StyledNavbarLeftSideButton = styled.button<{ selected: boolean }>`
	height: 3.125rem;
	width: 9.375rem;
	min-height: 100%;
	font-size: 0.875rem;
	font-weight: 600;
	border: none;
	background: none;
	color: ${({ selected, theme }) =>
		selected ? theme.color.red[2] : theme.color.gray[1]};
	transition: all 0.2s;
	position: relative;
	border-radius: 0.25rem;
	transition: all 0.2s;
	&:hover {
		transition: all 0.2s;
		cursor: pointer;
		opacity: 0.8;
		box-shadow: inset 0rem 0.1875rem 0.4375rem 0rem rgba(0, 0, 0, 0.1);
	}
	@media (max-width: 36.25rem) {
		display: none;
	}
`;

export const StyledUnderlineContainer = styled.div`
	position: relative;
	width: 9.375rem;
	@media (max-width: 36.25rem) {
		display: none;
	}
`;

export const StyledUnderline = styled(motion.div)<{
	selected: boolean;
}>`
	position: absolute;
	height: 0.25rem;
	bottom: -0.1563rem;
	background-color: ${({ theme }) => theme.color.red[2]};
	border-radius: 0rem;
	width: 9.375rem;
	@media (max-width: 36.25rem) {
		display: none;
	}
`;

export const StyledNavbarRightSideContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.625rem;
	z-index: 2;
`;
