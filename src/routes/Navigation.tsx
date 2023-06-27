import MainSection from '@/components/organisms/MainSection/MainSection';
import Navbar from '@/components/organisms/Navbar/Navbar';
import Sidebar from '@/components/organisms/Sidebar/Sidebar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const Navigation = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Sidebar />
			<MainSection />
			<Routes>
				<Route path='/' element={<Navigate to='/home' replace />} />
				<Route path='/home' element={<Navigate to='/home' replace />} />
				<Route path='/ficha' element={<Navigate to='/ficha' replace />} />
				<Route path='*' element={<Navigate to='/home' replace />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Navigation;
