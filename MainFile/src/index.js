import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Appointment from './Components/Appointment/Appointment'
import BloodServices from './Components/BloodServices/BloodServices'
import UserInfo from './Components/UserInfo/UserInfo'
import OurProducts from './Components/OurProducts/OurProducts'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromChildren, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
const routes = createBrowserRouter(createRoutesFromChildren(
  <Route path='/' element={<App />}>
    <Route index element={<Home />} />
    <Route path='appointment' element={<Appointment />} />
    <Route path='bloodservices' element={<BloodServices />} />
    <Route path='userinfo' element={<UserInfo />} />
    <Route path='ourproducts' element={<OurProducts />} />
    <Route path='about' element={<About />} />
  </Route>
))
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
);

