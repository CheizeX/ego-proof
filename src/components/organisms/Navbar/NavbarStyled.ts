import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

export const StyledNavbar = styled.nav`
	position: sticky;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 15px 0 35px;
	min-width: 100%;
	height: 70px;
	background-color: ${({ theme }) => theme.color.gray[10]};
	color: ${({ theme }) => theme.color.gray[1]};
	border-bottom: 1px solid ${({ theme }) => theme.color.gray[8]};
	z-index: 1;
`;

export const StyledNavbarLeftSideContainer = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	position: relative;
	& > img {
		z-index: 2;
		margin-right: 30px;
		width: 40px;
		height: 40px;
	}
`;

export const StyledNavbarLeftSideButton = styled.button<{ selected: boolean }>`
	height: 50px;
	width: 150px;
	min-height: 100%;
	font-size: 14px;
	font-weight: 600;
	border: none;
	background: none;
	color: ${({ selected, theme }) =>
		selected ? theme.color.red[2] : theme.color.gray[1]};
	transition: all 0.2s;
	position: relative;
	border-radius: 4px;
	transition: all 0.2s;
	&:hover {
		transition: all 0.2s;
		cursor: pointer;
		opacity: 0.8;
		box-shadow: inset 0px 3px 7px 0px rgba(0, 0, 0, 0.1);
	}
	@media (max-width: 580px) {
		display: none;
	}
`;

export const StyledUnderlineContainer = styled.div`
	position: relative;
	width: 150px;
	@media (max-width: 580px) {
		display: none;
	}
`;

export const StyledUnderline = styled(motion.div)<{
	selected: boolean;
}>`
	position: absolute;
	height: 4px;
	bottom: -2.5px;
	background-color: ${({ theme }) => theme.color.red[2]};
	border-radius: 0rem;
	width: 150px;
	@media (max-width: 580px) {
		display: none;
	}
`;

export const StyledNavbarRightSideContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 10px;
	z-index: 2;
`;
