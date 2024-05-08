import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'; // Import your main page component
import Forecast from './pages/Forecast.jsx'; // Import your forecast page component

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forecast" element={<Forecast />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
