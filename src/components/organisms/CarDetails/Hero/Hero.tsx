import { useAppSelector } from '@/redux/hook/hooks';
import * as S from './HeroStyled';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

const Hero = () => {
	const carData = useAppSelector(state => state.cars.carData);

	return (
		<S.StyledHeroContainer>
			<S.StyledHeroImageContainer>
				<img src={carData?.photo} alt={carData?.name} />
			</S.StyledHeroImageContainer>
			<S.StyledHeroDescription>
				<h1>{carData?.name}</h1>
				<h2>{carData?.title}</h2>
				<h3>{parse(DOMPurify.sanitize(carData?.description))}</h3>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero autem
					quibusdam tempore illo amet quod.
				</p>
			</S.StyledHeroDescription>
		</S.StyledHeroContainer>
	);
};

export default Hero;
