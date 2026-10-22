import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Businesses from './pages/Businesses';
import Machinery from './pages/Machinery';
import MachineDetail from './pages/MachineDetail';
import OdishaCart from './pages/OdishaCart';
import Restaurant from './pages/Restaurant';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="businesses" element={<Businesses />} />
          <Route path="machinery" element={<Machinery />} />
          <Route path="machinery/:modelId" element={<MachineDetail />} />
          <Route path="odisha-cart" element={<OdishaCart />} />
          <Route path="restaurant" element={<Restaurant />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
