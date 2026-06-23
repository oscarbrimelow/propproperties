import React from 'react';
import { RouterProvider, useRouter } from './router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { Guidebook } from './pages/Guidebook';
import { BuyerGuides } from './pages/BuyerGuides';
import { SellerGuides } from './pages/SellerGuides';
import { LocalGuides } from './pages/LocalGuides';
import { Contact } from './pages/Contact';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  const renderActivePage = () => {
    // 1. Home Page
    if (currentPath === '/') {
      return <Home />;
    }

    // 2. Blog list or detail post
    if (currentPath === '/blog' || currentPath.startsWith('/blog/')) {
      return <Blog />;
    }

    // 3. Guidebooks (Homebuyer / Listing)
    if (currentPath === '/homebuyer-guidebook' || currentPath === '/listing-guide') {
      return <Guidebook />;
    }

    // 4. Buyer statutory/informative guides
    const buyerRoutes = [
      '/fiduciary-duties-buyers',
      '/homebuyingprocess',
      '/cg2a-buyer',
      '/buyeragencyagreement',
      '/escrow-title-buyers',
      '/earnest-money',
      '/rpd-buyers',
      '/inspections',
      '/pos-inspections'
    ];
    if (buyerRoutes.includes(currentPath)) {
      return <BuyerGuides />;
    }

    // 5. Seller statutory/informative guides
    const sellerRoutes = [
      '/fiduciary-duties-sellers',
      '/cg2a-seller',
      '/rpd-sellers',
      '/listing-inspections',
      '/title-escrow-sellers',
      '/pos-inspections-sellers'
    ];
    if (sellerRoutes.includes(currentPath)) {
      return <SellerGuides />;
    }

    // 6. Cleveland Heights Local snapshots / POS guides
    if (currentPath === '/cleveland-heights' || currentPath === '/cleveland-heights-pos') {
      return <LocalGuides />;
    }

    // 7. Contact Page
    if (currentPath === '/contact') {
      return <Contact />;
    }

    // Default fallback to Home
    return <Home />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-neutral-200 selection:bg-[#a2533e]/35 selection:text-white">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        {renderActivePage()}
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
