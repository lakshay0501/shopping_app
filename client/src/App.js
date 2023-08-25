import './App.css';
import './app.scss'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home/Home'
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import { Children } from 'react';

const Layout = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
   path: "/",
   element: <Layout/>,
   children:[
    {
        path:"/",
        element:<Home></Home>
    },
    {
        path:"/products/:id",
        element:<Products/>
    },
    {
        path:"/product/:id",
        element:<Product></Product>
    },
  ],
},
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
