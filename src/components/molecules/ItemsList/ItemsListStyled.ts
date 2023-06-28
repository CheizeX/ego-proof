import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components/macro';

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
	height: 180px;
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
	width: 100%;
	height: 100%;
	flex-shrink: 0;
	object-fit: contain;
	transform: translateY(-40px);
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
	position: relative;
`;

export const StyledLink = styled(Link)`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	color: inherit;
	position: absolute;
	cursor: pointer;
`;

// SKELETONS PARA LOS AUTOS
const skeletonShimmerAnimation = keyframes`
	0% {
		background-position: -1000px 0;
	}

	100% {
		background-position: 1000px 0;
	}
`;

export const StyledSkeletonContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const StyledItemBoxSkeleton = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	width: 268px;
	height: 200px;
	background-color: ${({ theme }) => theme.color.gray[9]};
	border-radius: 8px;
	padding: 20px;
	position: relative;
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0) 0,
			rgba(255, 255, 255, 0.8) 50%,
			rgba(255, 255, 255, 0) 100%
		);
		z-index: 1;
		animation: ${skeletonShimmerAnimation} 4s infinite;
	}
`;

export const StyledSkeletonText = styled.div`
	width: 80%;
	height: 20px;
	background-color: ${({ theme }) => theme.color.gray[8]};
	margin-bottom: 10px;
	border-radius: 4px;
`;

export const StyledSkeletonImage = styled.div`
	width: 100%;
	height: 118px;
	background-color: ${({ theme }) => theme.color.gray[8]};
	margin-bottom: 10px;
	border-radius: 4px;
`;

export const StyledItemBoxButtonSkeleton = styled.div`
	width: 152px;
	height: 34px;
	background-color: ${({ theme }) => theme.color.gray[8]};
	border-radius: 27px;
`;
