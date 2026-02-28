import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, LandingPage, NotFound, Archive, Album, About } from './pages';
import { ScrollToTop } from './components';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="home" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/album/:id" element={<Album />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
