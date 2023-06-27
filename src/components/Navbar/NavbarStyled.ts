import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

export const StyledNavbar = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 30px;
	min-width: 100%;
	height: 70px;
	background-color: ${({ theme }) => theme.color.gray[10]};
	color: ${({ theme }) => theme.color.gray[1]};
	border-bottom: 1px solid ${({ theme }) => theme.color.gray[8]};
`;

export const StyledNavbarLeftSideContainer = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	position: relative;
	& > img {
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
`;

export const StyledNavbarRightSideContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
`;
export const StyledUnderlineContainer = styled.div`
	position: relative;
	width: 150px;
`;

export const StyledUnderline = styled(motion.div)<{
	selected: boolean;
}>`
	z-index: 10;
	position: absolute;
	height: 4px;
	bottom: -2.5px;
	background-color: ${({ theme }) => theme.color.red[2]};
	border-radius: 0rem;
	width: 150px;
`;
