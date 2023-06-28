import * as S from './NotFoundStyled';

const NotFound = () => {
	return (
		<S.NotFoundContainer>
			<S.NotFoundTitle>404 - Página no encontrada</S.NotFoundTitle>
			<S.NotFoundDescription>
				Lo sentimos, la página que estás buscando no existe.
			</S.NotFoundDescription>
			<S.HomeButton to='/home'>Volver a Inicio</S.HomeButton>
		</S.NotFoundContainer>
	);
};

export default NotFound;
