// routes.js

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import GenreSearch from "./components/Genres";
import RestaurantPage from "./components/Restaurant";

const RoutesList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genre/:genre" element={<GenreSearch />} />
        <Route path="/restaurant/:restaurant" element={<RestaurantPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesList;
