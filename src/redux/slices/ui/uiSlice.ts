import { SelectedTabEnum } from '@/interfaces/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
	selectedTab: SelectedTabEnum.MODELOS,
	burgerOpen: false,
};

const uiState = createSlice({
	name: 'uiState',
	initialState,
	reducers: {
		setSelectedTab: (state: any, action: PayloadAction<SelectedTabEnum>) => {
			state.selectedTab = action.payload;
		},
		setBurgerOpen: (state: any, action: PayloadAction<boolean>) => {
			state.burgerOpen = action.payload;
		},
	},
});

export const { setSelectedTab, setBurgerOpen } = uiState.actions;

export default uiState.reducer;
