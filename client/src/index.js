import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomePage from './components/home_page/HomePage';
import CitiesPage from './components/cities_page/Cities';
import MyCitiesPage from './components/my_cities_page/MyCities';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
        <>
          <Route path="/" element={<HomePage/>} />
          <Route path="/cities" element={<CitiesPage/>} />
          <Route path="/mycities" element={<MyCitiesPage/>} />
        </>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
      <RouterProvider router={router} />
  // </React.StrictMode>
);

