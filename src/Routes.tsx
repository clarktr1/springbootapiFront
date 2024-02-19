// routes.js

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import GenreSearch from "./components/Genres";

const RoutesList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genre/:genre" element={<GenreSearch />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesList;
