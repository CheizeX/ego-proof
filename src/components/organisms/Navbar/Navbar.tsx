import * as S from './NavbarStyled';
import Logo from '/logo.svg';
import { SelectedTabEnum } from '../../../interfaces/interfaces';
import Burger from '../../molecules/MenuButton/MenuButton';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/hook/hooks';
import { setBurgerOpen, setSelectedTab } from '@/redux/slices/ui/uiSlice';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const currentPage =
		location.pathname === '/home'
			? SelectedTabEnum.MODELOS
			: SelectedTabEnum.FICHA_DE_MODELO;

	const dispatch = useDispatch();
	const selected = useAppSelector(state => state.uiState.selectedTab);
	const burgerOpen = useAppSelector(state => state.uiState.burgerOpen);

	const handleButtonNavigate = (route: SelectedTabEnum) => {
		navigate(route === SelectedTabEnum.MODELOS ? '/home' : '/ficha');
		dispatch(setSelectedTab(route));
	};

	// for manage the underline animation
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
								onClick={() => handleButtonNavigate(item)}
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
