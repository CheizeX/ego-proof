import { Model } from '@/interfaces/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
	allModels: [],
};

const cars = createSlice({
	name: 'cars',
	initialState,
	reducers: {
		setAllCars: (state: any, action: PayloadAction<Model[]>) => {
			state.allModels = action.payload;
		},
	},
});

export const { setAllCars } = cars.actions;

export default cars.reducer;
