import { useAppSelector } from '@/redux/hook/hooks';
import * as S from './LastSectionStyled';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

const LastSection = () => {
	const carData = useAppSelector(state => state.cars.carData);

	return (
		<S.StyledLastSectionContainer>
			{carData?.model_highlights?.map((item, i) => (
				<S.StyledLastSectionItem key={i}>
					<S.StyledLastSectionItemText>
						<div>
							<h1>{item.title}</h1>
							<span>{parse(DOMPurify.sanitize(item.content))}</span>
						</div>
					</S.StyledLastSectionItemText>
					<S.StyledLastSectionItemImg>
						<img src={item.image} alt={item.title} />
					</S.StyledLastSectionItemImg>
				</S.StyledLastSectionItem>
			))}
		</S.StyledLastSectionContainer>
	);
};

export default LastSection;
