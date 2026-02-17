import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import LandingPage from './pages/Landing/LandingPage';
import NotFound from './pages/NotFound/NotFound';
import Archive from './pages/Archive/Archive';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
        </Route>
        <Route index element={<LandingPage />} />
        <Route path="home" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
