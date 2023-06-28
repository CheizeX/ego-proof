import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import * as S from './SliderStyled';
import { useAppSelector } from '@/redux/hook/hooks';

const SliderStyled = () => {
	const sliderOptions = {
		rewind: true,
		type: 'loop',
		drag: true,
		autoplay: true,
		autoScroll: {
			speed: 3,
		},
		pagination: true,
		arrows: true,
		perPage: 5,
		perMove: 1,
		gap: '1rem',
		padding: '5rem',
		breakpoints: {
			'480': {
				padding: '0rem',
			},
			'640': {
				perPage: 1,
				perMove: 1,
			},
			'840': {
				perPage: 2,
				perMove: 1,
			},
			'1024': {
				perPage: 3,
				perMove: 1,
			},
			'1280': {
				perPage: 4,
				perMove: 1,
			},
		},
	};

	const carData = useAppSelector(state => state.cars.carData);

	return (
		<S.StyledSlider>
			<span />
			{/* REPITO LAS IMAGENES PORQUE LLEGAN DE NADA MAS DESDE LA API */}
			<Splide options={sliderOptions}>
				{carData?.model_features?.map((item, i) => {
					const slides = [];

					for (let j = 0; j < 5; j++) {
						slides.push(
							<SplideSlide key={`${i}-${j}`}>
								<S.StyledSliderImageContainer>
									<img src={item.image} alt={item.name} />
									<h1>{item.name}</h1>
									<p>
										{item.description} Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Fuga, mollitia.
									</p>
								</S.StyledSliderImageContainer>
							</SplideSlide>
						);
					}

					return slides;
				})}
			</Splide>
			<span />
		</S.StyledSlider>
	);
};

export default SliderStyled;
