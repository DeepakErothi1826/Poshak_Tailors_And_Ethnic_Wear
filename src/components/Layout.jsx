import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import PageLoader from './PageLoader';

export default function Layout() {
  return (
    <PageLoader>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <CartDrawer />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </PageLoader>
  );
}
