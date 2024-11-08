import React from 'react';
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';

import MainWindow from './components/MainWindow/MainWindow';
import FullResume from './components/CreateResume/FullResume';
import MainNavigation from './modules/MainWindow/MainNavigation';
import RegistrationWindow from './components/RegistrationWindow/RegistrationWindow';

const App: React.FC = () => {
  const location = useLocation();

  // Определяем, нужно ли отображать MainNavigation
  const showMainNavigation = location.pathname !== '/registration'; // Замените '/registration' на ваш путь

  return (
    <>
      {showMainNavigation && <MainNavigation />}
      <Routes>
        <Route path='/' element={<MainWindow />} />
        <Route path='/createResume' element={<FullResume />} />
        <Route path='/registration' element={<RegistrationWindow />} />
      </Routes>
    </>
  );
}

const WrappedApp: React.FC = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default WrappedApp;