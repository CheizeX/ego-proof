import { StyledBurger } from './MenuButtonStyled';
import { BurgerProps } from '@/interfaces/interfaces';

const Burger = ({ open, setOpen }: BurgerProps) => {
	return (
		<StyledBurger
			open={open}
			onClick={() => {
				setOpen(!open);
			}}
		>
			<div />
			<div />
			<div />
		</StyledBurger>
	);
};

export default Burger;
