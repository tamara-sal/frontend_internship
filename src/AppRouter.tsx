import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PersistentDrawerLeft from './components/AppAppBar';
import Drivers from './pages/Drivers';
import Reviews from './pages/Reviews';
import Pricing from './pages/Pricing';
import Shipments from './pages/Shipments';
import CargoMap from './pages/CargoMap';
import MarketingPage from './MarketingPage';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PersistentDrawerLeft />}>
        <Route index element={<MarketingPage />} />
        <Route path="drivers" element={<Drivers />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="shipments" element={<Shipments />} />
        <Route path="map" element={<CargoMap />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;


