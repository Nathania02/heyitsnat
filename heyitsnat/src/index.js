import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './pages/About';
import GovTechInternshipDetails from './details_pages/govtech-details';
import MarketingDetails from './details_pages/marketing-details';
import OpsDetails from './details_pages/ops-details';
import HTXInternshipDetails from './details_pages/htx-details';
import BalletDetails from './details_pages/ballet-details';
const router = createBrowserRouter([
    {
      path: "/heyitsnat",
      element: <App/>
    },
    {
        path: "heyitsnat/about",
        element: <About/>
      },
      {
        path: "heyitsnat/govtech-details",
        element: <GovTechInternshipDetails/>
      },
      {
        path: "heyitsnat/marketing-details",
        element: <MarketingDetails/>
      },
      {
        path: "heyitsnat/ops-details",
        element: <OpsDetails/>
      },
      {
        path: "heyitsnat/htx-details",
        element: <HTXInternshipDetails/>
      },
      {
        path: "heyitsnat/ballet-details",
        element: <BalletDetails/>
      },
  ]);
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

