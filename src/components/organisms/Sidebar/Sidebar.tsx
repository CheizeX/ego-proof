import { useAppDispatch, useAppSelector } from '@/redux/hook/hooks';
import * as S from './SidebarStyled';
import {
	sidebarFirstSectionItems,
	sidebarFooterSectionItems,
} from './SidebarShared';
import { useEffect, useState } from 'react';
import { setBurgerOpen, setSelectedTab } from '@/redux/slices/ui/uiSlice';
import { Model, SelectedTabEnum } from '@/interfaces/interfaces';
import { setAllCars } from '@/redux/slices/cars/carsSlice';
import { useLocation, useNavigate } from 'react-router-dom';

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

const Sidebar = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const dispatch = useAppDispatch();
	const open = useAppSelector(state => state.uiState.burgerOpen);
	const allCars = useAppSelector(state => state.cars.allModels);
	const selectedTab = useAppSelector(state => state.uiState.selectedTab);

	const [selected, setSelected] = useState<string>(
		location.pathname === '/home' ? 'Modelos' : selectedTab
	);

	const handleItemClick = (name: string) => {
		setTimeout(() => {
			dispatch(setBurgerOpen(false));
		}, 500);
		navigate(`/home`);
		setTimeout(() => {
			setSelected(name);
		}, 2000);
		dispatch(setSelectedTab(SelectedTabEnum.MODELOS));
		console.log({ selected }, { name });
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
		<S.StyledSidebar open={open}>
			<S.StyledSidebarMainContainer>
				<S.StyledSidebarTopContent>
					{sidebarFirstSectionItems.map((item, i) => (
						<S.StyledSidebarTopContentItemsContainer key={i}>
							{item.map(item => (
								<S.StyledSidebarTopContentItem
									key={item}
									onClick={() => handleItemClick(item)}
									selected={selected === item}
								>
									{item}
								</S.StyledSidebarTopContentItem>
							))}
						</S.StyledSidebarTopContentItemsContainer>
					))}
				</S.StyledSidebarTopContent>
				<S.StyledSidebarFooterContent>
					{sidebarFooterSectionItems.map(item => (
						<S.StyledSidebarFooterItem
							key={item}
							selected={selected === item}
							onClick={() => handleItemClick(item)}
						>
							{item}
						</S.StyledSidebarFooterItem>
					))}
				</S.StyledSidebarFooterContent>
			</S.StyledSidebarMainContainer>
		</S.StyledSidebar>
	);
};

export default Sidebar;
