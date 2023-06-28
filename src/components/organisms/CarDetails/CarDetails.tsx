import { useDispatch } from 'react-redux';
import * as S from './CarDetailsStyled';
import { useEffect } from 'react';
import { ModelDetails, SelectedTabEnum } from '@/interfaces/interfaces';
import { setSelectedTab } from '@/redux/slices/ui/uiSlice';
import { setCarData } from '@/redux/slices/cars/carsSlice';
import Hero from './Hero/Hero';

import LastSection from './LastSection/LastSection';
import SliderStyled from './Slider/Slider';

const CarDetails = ({ id }: { id: string | undefined }) => {
	const dispatch = useDispatch();

	async function fetchModels(id: string): Promise<ModelDetails> {
		try {
			const response = await fetch(
				`https://challenge.egodesign.dev/api/models/${id}`
			);
			const data = await response.json();
			dispatch(setCarData(data));
			return data as ModelDetails;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	useEffect(() => {
		dispatch(setSelectedTab(SelectedTabEnum.FICHA_DE_MODELO));
		fetchModels(id as string);
	}, []);
	return (
		<S.StyledCardDetailsMainContainer>
			<Hero />
			<SliderStyled />
			<LastSection />
		</S.StyledCardDetailsMainContainer>
	);
};

export default CarDetails;
