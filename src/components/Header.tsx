import React, { useState } from 'react';
import { useRouter } from '../router';
import { RoutePath } from '../types';
import { Menu, X, ChevronDown, User, Shield, Compass, BookOpen, Key, DollarSign, Eye, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Header: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleNav = (path: RoutePath | string) => {
    navigate(path);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const menuItems = [
    {
      label: 'Buyers Guide',
      id: 'buyers',
      items: [
        { label: 'Homebuyer Guidebook', path: '/homebuyer-guidebook', icon: BookOpen },
        { label: 'Fiduciary Duties', path: '/fiduciary-duties-buyers', icon: Shield },
        { label: 'Home Buying Process', path: '/homebuyingprocess', icon: Compass },
        { label: 'Consumer Guide to Agency', path: '/cg2a-buyer', icon: HelpCircle },
        { label: 'Buyer Agency Agreements', path: '/buyeragencyagreement', icon: Key },
        { label: 'Escrow and Title', path: '/escrow-title-buyers', icon: Eye },
        { label: 'Earnest Money', path: '/earnest-money', icon: DollarSign },
        { label: 'Property Disclosures', path: '/rpd-buyers', icon: BookOpen },
        { label: 'Inspections', path: '/inspections', icon: HelpCircle },
        { label: 'POS Inspections', path: '/pos-inspections', icon: Shield }
      ]
    },
    {
      label: 'Sellers Guide',
      id: 'sellers',
      items: [
        { label: 'Listing Guide', path: '/listing-guide', icon: BookOpen },
        { label: 'Fiduciary Duty', path: '/fiduciary-duties-sellers', icon: Shield },
        { label: 'Consumer Guide to Agency', path: '/cg2a-seller', icon: HelpCircle },
        { label: 'Residential Property Disclosure', path: '/rpd-sellers', icon: BookOpen },
        { label: 'Listing Inspections', path: '/listing-inspections', icon: HelpCircle },
        { label: 'Title and Escrow', path: '/title-escrow-sellers', icon: Eye },
        { label: 'POS Inspections', path: '/pos-inspections-sellers', icon: Shield }
      ]
    },
    {
      label: 'Local Guide',
      id: 'local',
      items: [
        { label: 'Cleveland Heights Snapshots', path: '/cleveland-heights', icon: Compass },
        { label: 'Cleveland Heights POS', path: '/cleveland-heights-pos', icon: Shield }
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#191919] text-white border-b border-neutral-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNav('/')}>
          <img
            src="https://cdn.lofty.com/image/fs/user-info/20251120/12/h200_original_35901efe-ca7d-4c0a-8ceb-18abff82766d-png.webp"
            alt="Keller Williams Greater Metropolitan Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="sr-only">Properly Properties - Kathryn Schenk</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <button
            onClick={() => handleNav('/')}
            className={`px-3 py-2 rounded-md text-sm font-semibold tracking-wide uppercase transition-colors hover:text-[#a2533e] ${
              currentPath === '/' ? 'text-[#a2533e] font-bold' : 'text-neutral-200'
            }`}
          >
            Home
          </button>

          {menuItems.map((menu) => (
            <div
              key={menu.id}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(menu.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-semibold tracking-wide uppercase transition-colors hover:text-[#a2533e] text-neutral-200 ${
                  menu.items.some((item) => item.path === currentPath) ? 'text-[#a2533e]' : ''
                }`}
              >
                {menu.label}
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-185" />
              </button>

              <AnimatePresence>
                {activeDropdown === menu.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-1 w-64 rounded-lg bg-neutral-900 border border-neutral-800 shadow-xl overflow-hidden py-2"
                  >
                    {menu.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.path}
                          onClick={() => handleNav(item.path)}
                          className={`flex items-center gap-3 w-full px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-neutral-800 hover:text-[#a2533e] ${
                            currentPath === item.path ? 'text-[#a2533e] bg-neutral-800' : 'text-neutral-300'
                          }`}
                        >
                          <Icon className="h-4 w-4 flex-shrink-0 opacity-80" />
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <button
            onClick={() => handleNav('/blog')}
            className={`px-3 py-2 rounded-md text-sm font-semibold tracking-wide uppercase transition-colors hover:text-[#a2533e] ${
              currentPath === '/blog' || currentPath.startsWith('/blog/') ? 'text-[#a2533e] font-bold' : 'text-neutral-200'
            }`}
          >
            Blogs
          </button>

          <button
            onClick={() => handleNav('/contact')}
            className={`px-3 py-2 rounded-md text-sm font-semibold tracking-wide uppercase transition-colors hover:text-[#a2533e] ${
              currentPath === '/contact' ? 'text-[#a2533e] font-bold' : 'text-neutral-200'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Action buttons (Sign In / Register) */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => navigate('/contact')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wide border border-neutral-700 bg-transparent hover:bg-neutral-800 hover:border-neutral-600 transition-all text-neutral-200 cursor-pointer"
          >
            <User className="h-4 w-4" />
            <span>Client Sign In</span>
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide bg-[#a2533e] hover:bg-[#b86149] transition-all text-white shadow-lg cursor-pointer"
          >
            Register
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-neutral-900 border-t border-neutral-800 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-1">
              <button
                onClick={() => handleNav('/')}
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-semibold uppercase tracking-wide transition-all ${
                  currentPath === '/' ? 'text-[#a2533e] bg-neutral-850' : 'text-neutral-200'
                }`}
              >
                Home
              </button>

              {menuItems.map((menu) => (
                <div key={menu.id} className="space-y-1 py-1">
                  <p className="px-4 py-2 text-xs font-bold tracking-widest text-neutral-500 uppercase">
                    {menu.label}
                  </p>
                  <div className="grid grid-cols-1 gap-1 pl-4">
                    {menu.items.map((subItem) => (
                      <button
                        key={subItem.path}
                        onClick={() => handleNav(subItem.path)}
                        className={`block w-full text-left px-4 py-2 text-sm rounded-md transition-colors ${
                          currentPath === subItem.path ? 'text-[#a2533e] bg-neutral-800 font-bold' : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                        }`}
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <button
                onClick={() => handleNav('/blog')}
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-semibold uppercase tracking-wide transition-all ${
                  currentPath === '/blog' ? 'text-[#a2533e] bg-neutral-850' : 'text-neutral-200'
                }`}
              >
                Blogs
              </button>

              <button
                onClick={() => handleNav('/contact')}
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-semibold uppercase tracking-wide transition-all ${
                  currentPath === '/contact' ? 'text-[#a2533e] bg-neutral-850' : 'text-neutral-200'
                }`}
              >
                Contact
              </button>

              <div className="pt-4 grid grid-cols-2 gap-4">
                <button
                  onClick={() => handleNav('/contact')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold border border-neutral-700 bg-transparent text-neutral-200 hover:bg-neutral-800 transition-all cursor-pointer"
                >
                  <User className="h-4 w-4" />
                  <span>Sign In</span>
                </button>
                <button
                  onClick={() => handleNav('/contact')}
                  className="w-full text-center px-4 py-3 rounded-lg text-sm font-semibold bg-[#a2533e] hover:bg-[#b86149] transition-all text-white shadow-lg cursor-pointer"
                >
                  Register
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
