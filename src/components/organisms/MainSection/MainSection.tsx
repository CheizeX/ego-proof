import * as S from './MainSectionStyled';
import Filters from '../../molecules/Filters/Filters';
import ItemsList from '@/components/molecules/ItemsList/ItemsList';

const MainSection = () => {
	return (
		<S.StyledMainSection>
			<h1>Descubrí todos los modelos </h1>
			<Filters />
			<ItemsList />
		</S.StyledMainSection>
	);
};

export default MainSection;
