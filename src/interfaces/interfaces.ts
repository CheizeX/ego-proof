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

// detalle de modelo

interface ModelFeature {
	name: string;
	description: string;
	image: string;
}

interface ModelHighlight {
	title: string;
	content: string;
	image: string;
}

export interface ModelDetails {
	id: number;
	name: string;
	segment: string;
	year: number;
	price: number;
	thumbnail: string;
	photo: string;
	title: string;
	description: string;
	model_features: ModelFeature[];
	model_highlights: ModelHighlight[];
}
