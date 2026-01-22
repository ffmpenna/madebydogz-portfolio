import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota pai que contém o Layout */}
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
        </Route>
        <Route path="home" element={<Home />} />
        <Route index element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
