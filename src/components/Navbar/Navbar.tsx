import * as S from './NavbarStyled';
import Logo from '/logo.svg';
import { IGeneralProps, SelectedTabEnum } from '../../interfaces/interfaces';
import { FC } from 'react';
import Burger from './MenuButton/MenuButton';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/hook/hooks';
import { setBurgerOpen, setSelectedTab } from '@/redux/slices/ui/uiSlice';

const Navbar = () => {
	const dispatch = useDispatch();
	const selected = useAppSelector(state => state.uiState.selectedTab);
	const burgerOpen = useAppSelector(state => state.uiState.burgerOpen);

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
								onClick={() => dispatch(setSelectedTab(item))}
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
			<S.StyledNavbarRightSideContainer>
				{burgerOpen ? 'Cerrar' : 'Menú'}
				<Burger
					open={burgerOpen}
					setOpen={() => dispatch(setBurgerOpen(!burgerOpen))}
				/>
			</S.StyledNavbarRightSideContainer>
		</S.StyledNavbar>
	);
};

export default Navbar;
