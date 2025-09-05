import logo from './logo.svg';
import './App.css';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Categories from './Components/Categories/Categories';
import Products from './Components/Products/Products';
import Search from './Components/Search/Search';
import Wishlist from './Components/Wishlist/Wishlist';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import CategoryDetails from './Components/CategoryDetails/CategoryDetails';
import Preventlogin from './Components/Preventlogin/Preventlogin';





function App() {



  let routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
        { path: 'cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
        { path: 'categories', element: <ProtectedRoute><Categories /></ProtectedRoute> },
        { path: 'products', element: <ProtectedRoute><Products /></ProtectedRoute> },
        { path: 'productdetails/:id', element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },
        { path: 'categorydetails/:category', element: <ProtectedRoute><CategoryDetails /></ProtectedRoute> },
        { path: 'search', element: <ProtectedRoute><Search /></ProtectedRoute> },
        { path: 'wishlist', element: <ProtectedRoute><Wishlist /></ProtectedRoute> },
        { path: 'login', element:<Preventlogin><Login /> </Preventlogin> },
        { path: 'register', element: <Preventlogin><Register /></Preventlogin>},
        { path: '*', element: <ProtectedRoute><NotFound /></ProtectedRoute> }
      ]
    }
  ])
  return <>
    <RouterProvider router={routers} >

    </RouterProvider>



  </>


}

export default App;
