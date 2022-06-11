import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { RequireAuth } from './components';
import { DashboardScreen, HomeScreen, LoginScreen, RegisterScreen, ProfileScreen } from './pages';

import { GlobalStyle } from './utils';

export const App = () => {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route element={<RequireAuth />}>
          <Route path='/' element={<DashboardScreen />} />
          <Route path='/profile' element={<ProfileScreen />} />
        </Route>
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
      </Routes>
    </>
  );
};
