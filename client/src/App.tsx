import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home, Products } from './pages';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Header from './components/header/Header';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import ShoppingBag from './pages/ShoppingBag/ShoppingBag';
import { UserContextProvider } from './pages/SingleProduct/context/OptionsContext';
import { PUBLIC_ROUTES } from './models/routes';
import AuthGuard from './guards/Auth.guard';
import Wishlist from './pages/Wishlist/Wishlist';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Provider store={store}>
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
            <Route path="/basket" element={<ShoppingBag />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Route>

          <Route path="/product/:id" element={<SingleProduct />} />

          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
