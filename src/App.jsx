import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Fabrics from './pages/Fabrics';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';

const basename = window.location.hostname === 'localhost' ? '/' : '/Poshak_Tailors_And_Ethnic_Wear';

function App() {
  return (
    <PageLoader>
      <Router basename={basename}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="fabrics" element={<Fabrics />} />
          </Route>
        </Routes>
      </Router>
    </PageLoader>
  );
}

export default App;
