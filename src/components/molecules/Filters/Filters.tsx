import { useEffect, useRef, useState } from 'react';
import { filterBy as filter, sortBy as sort } from './FiltersShared';
import * as S from './FiltersStyled';
import { BiChevronDown } from 'react-icons/bi';
import { useLocation, useNavigate } from 'react-router-dom';
import useOutsideClick from '@/hooks/useOnClickOutside';

const Filters = () => {
	const location = useLocation();
	const navigate = useNavigate();

	// obtengo los filtros de la URL
	const queryParams = new URLSearchParams(location.search);
	const filterBy = queryParams.get('filterBy') || 'Todos';
	const sortBy = queryParams.get('sortBy') || 'Nada';

	// ? MANEJO DE DROPDOWNS
	const [filterByMenuOpen, setFilterByMenuOpen] = useState<boolean>(false);
	const [sortByMenuOpen, setSortMenuOpen] = useState<boolean>(false);
	// click fuera de dropdowns
	const [clickOutside, setClickOutside] = useState(false);
	const filterByMenuRef = useRef(null);
	const sortByMenuRef = useRef(null);
	const handleClickOutside = () => {
		setFilterByMenuOpen(false);
		setSortMenuOpen(false);
	};
	useOutsideClick([filterByMenuRef, sortByMenuRef], handleClickOutside);

	// manejo de filtros
	const handleFilterChange = (filter: string, sort: string) => {
		const queryParams = new URLSearchParams();

		queryParams.set('filterBy', filter);
		queryParams.set('sortBy', sort);

		navigate({ search: queryParams.toString() });

		setFilterByMenuOpen(false);
		setSortMenuOpen(false);

		scrollToTop();
	};

	// scroll cuando se filtra
	const scrollToTop = () => {
		window.scrollTo({
			top: 110,
			behavior: 'smooth',
		});
	};

	return (
		<S.StyledFiltersComponent>
			{/* filtro izquierda DESKTOP */}
			<S.StyledLeftFiltersContainer>
				<span>Filtrar por</span>
				{filter.map(item => (
					<S.StyledFilterButton
						key={item}
						selected={filterBy === item}
						onClick={() => handleFilterChange(item, filterBy)}
					>
						{item}
					</S.StyledFilterButton>
				))}
			</S.StyledLeftFiltersContainer>

			{/* filtro izquierda MOBILE */}
			<S.StyledLeftFiltersMobileContainer>
				<S.StyledLeftFilterDropdownMobileButton
					onClick={() => setFilterByMenuOpen(!filterByMenuOpen)}
					open={filterByMenuOpen}
				>
					Filtrar por <BiChevronDown size={18} />
				</S.StyledLeftFilterDropdownMobileButton>

				<S.StyledLeftFilterDropdownMobile
					open={filterByMenuOpen}
					ref={filterByMenuRef}
				>
					{filter.map(item => (
						<S.StyledLeftFilterDropdownItemMobile
							key={item}
							selected={filterBy === item}
							onClick={() => handleFilterChange(item, filterBy)}
						>
							{item}
						</S.StyledLeftFilterDropdownItemMobile>
					))}
				</S.StyledLeftFilterDropdownMobile>
			</S.StyledLeftFiltersMobileContainer>

			{/* filtro derecha */}
			<S.StyledRightFiltersContainer>
				{/* button dropdown */}
				<S.StyledFilterDropdownButton
					onClick={() => setSortMenuOpen(!sortByMenuOpen)}
					open={sortByMenuOpen}
				>
					Ordenar por <BiChevronDown size={18} />
				</S.StyledFilterDropdownButton>
				{/* dropdown */}
				<S.StyledFilterDropdown open={sortByMenuOpen} ref={sortByMenuRef}>
					{sort.map(item => {
						const words = item.split(' ');
						const formattedValue = words.map((word, i) => (
							<span
								style={{ fontWeight: i % 2 === 1 ? '600' : 'normal' }}
								key={word + i}
							>
								{word}
							</span>
						));

						return (
							<S.StyledFilterDropdownItem
								key={item}
								selected={sortBy === item}
								onClick={() => {
									handleFilterChange(filterBy, item);
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
