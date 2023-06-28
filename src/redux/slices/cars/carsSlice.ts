import { Model } from '@/interfaces/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
	allModels: [],
	selectedCar: 1,
};

const cars = createSlice({
	name: 'cars',
	initialState,
	reducers: {
		setAllCars: (state: any, action: PayloadAction<Model[]>) => {
			state.allModels = action.payload;
		},
		setSelectedCar: (state: any, action: PayloadAction<number>) => {
			state.selectedCar = action.payload;
		},
	},
});

export const { setAllCars, setSelectedCar } = cars.actions;

export default cars.reducer;
