import * as S from './NavbarStyled';
import Logo from '/logo.svg';
import { Model, SelectedTabEnum } from '../../../interfaces/interfaces';
import Burger from '../../molecules/MenuButton/MenuButton';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/hook/hooks';
import { setBurgerOpen, setSelectedTab } from '@/redux/slices/ui/uiSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { setAllCars } from '@/redux/slices/cars/carsSlice';

async function fetchModels(): Promise<Model[]> {
	try {
		const response = await fetch('https://challenge.egodesign.dev/api/models/');
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		return [];
	}
}

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
	const allCars = useAppSelector(state => state.cars.allModels);
	const selectedCar = useAppSelector(state => state.cars.selectedCar);

	const handleButtonNavigate = (route: SelectedTabEnum) => {
		navigate(
			route === SelectedTabEnum.MODELOS ? '/home' : `/ficha/${selectedCar}`
		);
		dispatch(setSelectedTab(route));
		dispatch(setBurgerOpen(false));
	};

	// for manage the underline animation
	const getTabIndex = (tab: SelectedTabEnum): number => {
		return tab === SelectedTabEnum.MODELOS ? 0 : 150;
	};

	useEffect(() => {
		async function fetchData() {
			if (allCars.length === 0) {
				const data = await fetchModels();
				dispatch(setAllCars(data));
			}
		}
		fetchData();
	}, []);

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
