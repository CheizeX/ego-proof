import { motion } from 'framer-motion';
import styled from 'styled-components/macro';

export const StyledBurger = styled(motion.button)<{ open: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 2rem;
	height: 2rem;
	background: transparent;
	border: none;
	padding: 0;
	z-index: 10;

	&:focus {
		outline: none;
	}
	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}

	div {
		width: 2rem;
		height: 0.25rem;
		background: ${({ theme }) => theme.color.gray[1]};
		border-radius: 0.625rem;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 0.0625rem;
	}
	:first-child {
		transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0deg)')};
	}

	:nth-child(2) {
		opacity: ${({ open }) => (open ? '0' : '1')};
		transform: ${({ open }) =>
			open ? 'translateX(-1.25rem)' : 'translateX(0)'};
	}

	:nth-child(3) {
		transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
	}
`;
