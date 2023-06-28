import { Model, ModelDetails } from '@/interfaces/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
	allModels: [],
	selectedCar: 1,
	carData: {} as ModelDetails,
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
		setCarData: (state: any, action: PayloadAction<ModelDetails>) => {
			state.carData = action.payload;
		},
	},
});

export const { setAllCars, setSelectedCar, setCarData } = cars.actions;

export default cars.reducer;
