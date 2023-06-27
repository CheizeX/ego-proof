//ENUMS
export enum SelectedTabEnum {
	MODELOS = 'Modelos',
	FICHA_DE_MODELO = 'Ficha de modelo',
}

// INTERFACES
export interface IGeneralProps {
	selected: SelectedTabEnum;
	setSelected: React.Dispatch<React.SetStateAction<SelectedTabEnum>>;
	burgerOpen: boolean;
	setBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
