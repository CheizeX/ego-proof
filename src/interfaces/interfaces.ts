//ENUMS
export enum SelectedTabEnum {
	MODELOS = 'Modelos',
	FICHA_DE_MODELO = 'Ficha de modelo',
}

// INTERFACES
export interface BurgerProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Model {
	id: number;
	name: string;
	segment: string;
	year: number;
	price: number;
	thumbnail: string;
	photo: string;
}
