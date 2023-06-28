import { useAppDispatch, useAppSelector } from '@/redux/hook/hooks';
import * as S from './ItemsListStyled';
import { Model } from '@/interfaces/interfaces';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setSelectedCar } from '@/redux/slices/cars/carsSlice';

const ItemsList = () => {
	const dispatch = useAppDispatch();
	const allCars = useAppSelector(state => state.cars.allModels);

	const [showItems, setShowItems] = useState(false);

	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const selectedBy = queryParams.get('filterBy') || 'Todos';
	const orderBy = queryParams.get('sortBy') || 'Nada';

	// Acomodo los tipos de autos porque la API no los devuelve de la misma manera
	const renamedSegments =
		selectedBy === 'Autos'
			? ['Hatchback', 'Sedan']
			: selectedBy === 'SUVs y Crossovers'
			? ['SUVs', 'Crossovers']
			: [selectedBy];

	// Filter By
	let filteredCars = allCars;
	if (selectedBy !== 'Todos') {
		filteredCars = filteredCars.filter((car: Model) =>
			renamedSegments.includes(car.segment)
		);
	}

	// Order By
	let sortedCars = [...filteredCars];
	if (orderBy === 'De menor a mayor precio') {
		sortedCars.sort((a: Model, b: Model) => a.price - b.price);
	} else if (orderBy === 'De mayor a menor precio') {
		sortedCars.sort((a: Model, b: Model) => b.price - a.price);
	} else if (orderBy === 'Más nuevos primero') {
		sortedCars.sort((a: Model, b: Model) => b.year - a.year);
	} else if (orderBy === 'Más viejos primero') {
		sortedCars.sort((a: Model, b: Model) => a.year - b.year);
	}

	const handleModelClick = (id: number) => {
		dispatch(setSelectedCar(id));
	};

	useEffect(() => {
		setShowItems(false);
		const delay = setTimeout(() => {
			setShowItems(true);
		}, 2000);

		return () => clearTimeout(delay);
	}, []);

	const renderSkeletons = () => {
		return Array(8)
			.fill(null)
			.map((_, index) => (
				<S.StyledSkeletonContainer key={index}>
					<S.StyledItemBoxSkeleton>
						<S.StyledSkeletonText />
						<S.StyledSkeletonText />
						<S.StyledSkeletonImage />
					</S.StyledItemBoxSkeleton>
				</S.StyledSkeletonContainer>
			));
	};

	return (
		<S.StyledItemsListContainer>
			{!showItems
				? renderSkeletons()
				: showItems &&
				  sortedCars.length > 0 &&
				  sortedCars.map((item: Model, i) => (
						<S.StyledItemAndButtonContainer key={i}>
							<S.StyledItemBox>
								<h1>{item.name}</h1>
								<h2>
									{item.year} | ${item.price}
								</h2>
								<S.StyledItemBoxImage src={item.photo} alt={item.name} />
							</S.StyledItemBox>
							<S.StyledItemBoxButton>
								<S.StyledLink
									to={`/ficha/${item.id}`}
									onClick={() => handleModelClick(item.id)}
								>
									Ver Modelo
								</S.StyledLink>
							</S.StyledItemBoxButton>
						</S.StyledItemAndButtonContainer>
				  ))}
		</S.StyledItemsListContainer>
	);
};

export default ItemsList;
