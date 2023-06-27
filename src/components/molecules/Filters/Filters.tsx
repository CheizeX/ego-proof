import { useState } from 'react';
import { filterBy, sortBy } from './FiltersShared';
import * as S from './FiltersStyled';
import { BiChevronDown } from 'react-icons/bi';

const Filters = () => {
	const [selectedBy, setSelectedBy] = useState<string>('Todos');
	const [orderBy, setOrderBy] = useState<string>('Nada');
	const [orderMenuOpen, setOrderMenuOpen] = useState<boolean>(false);

	return (
		<S.StyledFiltersComponent>
			<S.StyledLeftFiltersContainer>
				<span>Filtrar por</span>
				{filterBy.map(item => (
					<S.StyledFilterButton
						key={item}
						selected={selectedBy === item}
						onClick={() => setSelectedBy(item)}
					>
						{item}
					</S.StyledFilterButton>
				))}
			</S.StyledLeftFiltersContainer>

			<S.StyledRightFiltersContainer>
				{/* button dropdown */}
				<S.StyledFilterDropdownButton
					onClick={() => setOrderMenuOpen(!orderMenuOpen)}
					open={orderMenuOpen}
				>
					Ordenar por <BiChevronDown size={18} />
				</S.StyledFilterDropdownButton>
				{/* dropdown */}
				<S.StyledFilterDropdown open={orderMenuOpen}>
					{sortBy.map(item => {
						const words = item.split(' ');
						const formattedValue = words.map((word, i) => (
							<span style={{ fontWeight: i % 2 === 1 ? '600' : 'normal' }}>
								{word}
							</span>
						));

						return (
							<S.StyledFilterDropdownItem
								key={item}
								selected={orderBy === item}
								onClick={() => {
									setOrderBy(item);
									setOrderMenuOpen(false);
								}}
							>
								{formattedValue}
							</S.StyledFilterDropdownItem>
						);
					})}
				</S.StyledFilterDropdown>
			</S.StyledRightFiltersContainer>
		</S.StyledFiltersComponent>
	);
};

export default Filters;
