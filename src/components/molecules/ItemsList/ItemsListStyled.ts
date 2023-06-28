import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components/macro';

export const StyledItemsListContainer = styled.div`
	width: 100%;
	position: sticky;
	top: 16.875rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(16.75rem, 1fr));
	grid-column-gap: 0.625rem;
	grid-row-gap: 2.5rem;
	justify-content: center;
	align-content: center;
	padding: 3.125rem 0;
`;

export const StyledItemAndButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	& > button {
		z-index: -0.625rem;
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
	gap: 0.625rem;
	flex-direction: column;
	justify-content: start;
	width: 16.75rem;
	height: 11.25rem;
	& > h1 {
		text-align: center;
		font-size: 1.75rem;
		font-weight: 600;
		line-height: 1.875rem;
		letter-spacing: -0.0408rem;
	}
	& > h2 {
		text-align: center;
		font-size: 0.875rem;
		letter-spacing: -0.0175rem;
		font-weight: 400;
	}
`;

export const StyledItemBoxImage = styled.img`
	width: 100%;
	height: 100%;
	flex-shrink: 0;
	object-fit: contain;
	transform: translateY(-2.5rem);
`;

export const StyledItemBoxButton = styled.button`
	display: flex;
	width: 9.5rem;
	height: 2.125rem;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	background-color: ${({ theme }) => theme.color.gray[1]};
	color: ${({ theme }) => theme.color.gray[10]};
	border-radius: 1.6875rem;
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
		background-position: -62.5rem 0;
	}

	100% {
		background-position: 62.5rem 0;
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
	width: 16.75rem;
	height: 12.5rem;
	background-color: ${({ theme }) => theme.color.gray[9]};
	border-radius: 0.5rem;
	padding: 1.25rem;
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
	height: 1.25rem;
	background-color: ${({ theme }) => theme.color.gray[8]};
	margin-bottom: 0.625rem;
	border-radius: 0.25rem;
`;

export const StyledSkeletonImage = styled.div`
	width: 100%;
	height: 7.375rem;
	background-color: ${({ theme }) => theme.color.gray[8]};
	margin-bottom: 0.625rem;
	border-radius: 0.25rem;
`;

export const StyledItemBoxButtonSkeleton = styled.div`
	width: 9.5rem;
	height: 2.125rem;
	background-color: ${({ theme }) => theme.color.gray[8]};
	border-radius: 1.6875rem;
`;
