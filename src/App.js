import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, RequireAuth } from './components';
import {
  DashboardScreen,
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ProfileScreen,
  CartScreen,
  ItemDetails,
  AddItemScreen,
  MenuListScreen,
} from './pages';

import { GlobalStyle } from './utils';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route element={<RequireAuth />}>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/cart' element={<CartScreen />} />
            {/* single item */}
            <Route path='/item/:id' element={<ItemDetails />} />
            <Route path='/menu' element={<MenuListScreen />} />
            <Route path='/add-item' element={<AddItemScreen />} />
          </Route>
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
        </Routes>
      </Layout>
    </>
  );
};
