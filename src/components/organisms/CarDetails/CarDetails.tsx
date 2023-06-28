import { useDispatch } from 'react-redux';
import * as S from './CarDetailsStyled';
import { useEffect } from 'react';
import { SelectedTabEnum } from '@/interfaces/interfaces';
import { setSelectedTab } from '@/redux/slices/ui/uiSlice';

const CarDetails = ({ id }: { id: string | undefined }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setSelectedTab(SelectedTabEnum.FICHA_DE_MODELO));
	}, []);
	return (
		<S.StyledCardDetailsMainContainer>
			CarDetails
		</S.StyledCardDetailsMainContainer>
	);
};

export default CarDetails;
