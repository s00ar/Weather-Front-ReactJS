import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx'; // Import your main page component

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
