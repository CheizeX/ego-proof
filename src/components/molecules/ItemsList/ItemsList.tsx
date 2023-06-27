import { useAppSelector } from '@/redux/hook/hooks';
import * as S from './ItemsListStyled';
import { Model } from '@/interfaces/interfaces';

const ItemsList = () => {
	const allCars = useAppSelector(state => state.cars.allModels);
	console.log({ allCars });
	return (
		<S.StyledItemsListContainer>
			{allCars.length > 0 &&
				[...allCars].map((item: Model, i) => (
					<S.StyledItemAndButtonContainer>
						<S.StyledItemBox key={i}>
							<h1>{item.name}</h1>
							<h2>
								{item.year} | ${item.price}
							</h2>
							<S.StyledItemBoxImage src={item.photo} alt={item.name} />
						</S.StyledItemBox>
						<S.StyledItemBoxButton>Ver Modelo</S.StyledItemBoxButton>
					</S.StyledItemAndButtonContainer>
				))}
		</S.StyledItemsListContainer>
	);
};

export default ItemsList;
