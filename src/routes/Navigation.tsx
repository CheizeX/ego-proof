import Footer from '@/components/organisms/Footer/Footer';
import MainSection from '@/components/organisms/MainSection/MainSection';
import Navbar from '@/components/organisms/Navbar/Navbar';
import NotFound from '@/components/organisms/NotFound/NotFound';
import Sidebar from '@/components/organisms/Sidebar/Sidebar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const Navigation = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<RouteToHome />} />
				<Route path='/home' element={<RouteToHome />} />
				<Route path='/ficha' element={<RouteToFicha />} />
				<Route path='/*' element={<RouteToNotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

const RouteToHome = () => {
	return (
		<>
			<Navbar />
			<Sidebar />
			<MainSection />
			<Footer />
		</>
	);
};

const RouteToFicha = () => {
	return (
		<>
			<Navbar />
			<Sidebar />
		</>
	);
};

const RouteToNotFound = () => {
	return <NotFound />;
};

export default Navigation;
