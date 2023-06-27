import * as S from './NavbarStyled';
import Logo from '/logo.svg';
import { IGeneralProps, SelectedTabEnum } from '../../interfaces/interfaces';
import { FC } from 'react';
import Burger from './MenuButton/MenuButton';

const Navbar: FC<IGeneralProps> = ({
	selected,
	setSelected,
	burgerOpen,
	setBurgerOpen,
}) => {
	const getTabIndex = (tab: SelectedTabEnum): number => {
		return tab === SelectedTabEnum.MODELOS ? 0 : 150;
	};

	return (
		<S.StyledNavbar>
			<S.StyledNavbarLeftSideContainer>
				<img src={Logo} alt='logo' />
				<div>
					{[SelectedTabEnum.MODELOS, SelectedTabEnum.FICHA_DE_MODELO].map(
						item => (
							<S.StyledNavbarLeftSideButton
								key={item}
								selected={selected === item}
								onClick={() => setSelected(item)}
							>
								{item}
							</S.StyledNavbarLeftSideButton>
						)
					)}
					<S.StyledUnderline
						selected={selected === SelectedTabEnum.MODELOS}
						initial={{ x: 0 }}
						animate={{ x: getTabIndex(selected) }}
						transition={{ duration: 0.2 }}
					/>
				</div>
			</S.StyledNavbarLeftSideContainer>
			<Burger open={burgerOpen} setOpen={setBurgerOpen} />
		</S.StyledNavbar>
	);
};

export default Navbar;
