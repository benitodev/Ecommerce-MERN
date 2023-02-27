import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Header from './components/header/Header';
import { OptionsContextProvider } from './context/OptionsContext';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './models/routes';
import AuthGuard from './guards/Auth.guard';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('./pages/Home/Home'));
const Products = lazy(() => import('./pages/Products/Products'));
const Register = lazy(() => import('./pages/Register/Register'));
const Login = lazy(() => import('./pages/Login/Login'));
const ShoppingBag = lazy(() => import('./pages/ShoppingBag/ShoppingBag'));
const Wishlist = lazy(() => import('./pages/Wishlist/Wishlist'));
const SingleProduct = lazy(() => import('./pages/SingleProduct/SingleProduct'));
const NotFound404 = lazy(() => import('./pages/NotFound/NotFound'));

function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <BrowserRouter>
        <Provider store={store}>
          <OptionsContextProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path={PUBLIC_ROUTES.SHOP}>
                <Route path="" element={<Products />} />
                <Route path=":category" element={<Products />} />
              </Route>
              <Route path={PUBLIC_ROUTES.REGISTER} element={<Register />} />
              <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />

              <Route element={<AuthGuard />}>
                <Route path={PRIVATE_ROUTES.BASKET} element={<ShoppingBag />} />
                <Route path={PRIVATE_ROUTES.WISHLIST} element={<Wishlist />} />
              </Route>

              <Route
                path={PUBLIC_ROUTES.SINGLE_PRODUCT}
                element={<SingleProduct />}
              />

              <Route path="*" element={<NotFound404 />} />
            </Routes>
          </OptionsContextProvider>
        </Provider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
