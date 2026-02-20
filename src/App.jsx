import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import LandingPage from './pages/Landing/LandingPage';
import NotFound from './pages/NotFound/NotFound';
import Archive from './pages/Archive/Archive';
import ScrollToTop from './components/ScrollToTop';
import Album from './pages/Album/Album';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="home" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/album/:id" element={<Album />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
