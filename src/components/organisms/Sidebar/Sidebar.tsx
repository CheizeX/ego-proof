import { useAppDispatch, useAppSelector } from '@/redux/hook/hooks';
import * as S from './SidebarStyled';
import {
	sidebarFirstSectionItems,
	sidebarFooterSectionItems,
} from './SidebarShared';
import { useState } from 'react';
import { setBurgerOpen } from '@/redux/slices/ui/uiSlice';

const Sidebar = () => {
	const dispatch = useAppDispatch();
	const open = useAppSelector(state => state.uiState.burgerOpen);

	const [selected, setSelected] = useState<string>('');

	const handleItemClick = (name: string) => {
		setSelected(name);
		setTimeout(() => {
			dispatch(setBurgerOpen(false));
		}, 500);
	};

	return (
		<S.StyledSidebar open={open}>
			<S.StyledSidebarMainContainer>
				<span />
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
