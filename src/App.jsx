import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';

const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Fabrics = lazy(() => import('./pages/Fabrics'));

const getBasename = () => {
  const path = window.location.pathname;
  if (path.startsWith('/Poshak_Tailors_And_Ethnic_Wear')) {
    return '/Poshak_Tailors_And_Ethnic_Wear';
  }
  return '/';
};

const basename = getBasename();

function App() {
  return (
    <PageLoader>
      <Router basename={basename}>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="product/:id" element={<ProductDetail />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="fabrics" element={<Fabrics />} />
              <Route path="stitch" element={<Navigate to="/products" replace />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </PageLoader>
  );
}

export default App;
