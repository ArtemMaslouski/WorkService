import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import MainWindow from './components/MainWindow/MainWindow';
import FullResume from '../src/components/CreateResume/FullResume'
import MainNavigation from './modules/MainWindow/MainNavigation';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MainNavigation/>
      <Routes>
        <Route path='/' element={<MainWindow />}/>
          <Route path='/createResume' element={<FullResume />}/>
        <Route/>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
