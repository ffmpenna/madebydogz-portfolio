import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, NotFound, Archive, Album } from './pages';
import { ScrollToTop } from './components';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/album/:slug" element={<Album />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
