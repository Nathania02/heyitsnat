import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './pages/About';
import GovTechInternshipDetails from './details_pages/govtech-details';
import MarketingDetails from './details_pages/marketing-details';
import OpsDetails from './details_pages/ops-details';
import HTXInternshipDetails from './details_pages/htx-details';
import BalletDetails from './details_pages/ballet-details';
import ScrollToTop from './pages/ScrollToTop';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <ScrollToTop />
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/govtech-details" element={<GovTechInternshipDetails />} />
      <Route path="/marketing-details" element={<MarketingDetails />} />
      <Route path="/ops-details" element={<OpsDetails />} />
      <Route path="/htx-details" element={<HTXInternshipDetails />} />
      <Route path="/ballet-details" element={<BalletDetails />} />
    </Routes>
    </HashRouter>
);
