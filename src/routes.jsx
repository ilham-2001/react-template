/* 
  All route should be place in this file
*/

import Home from './pages/Home/Home';

import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
  <Routes>
    <Route path='/' element={<Home />} />
  </Routes>
  )
}

export default AppRoutes;