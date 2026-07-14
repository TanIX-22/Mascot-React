import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from './assets/Logo.png';
import Home from './Home';
import Footer from './components/Footer';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import EmployeePortal from './EmployeePortal';
import Payroll from './pages/payroll';
import Accounting from './pages/accounting';
import EsiPf from './pages/EsiPf';
import Recruitment from './pages/recruitment';
import HrAdvisory from './pages/HrAdvisory';
import Compliance from './pages/Compliance';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const location = useLocation();
  const showFooter = location.pathname !== '/contact';

  const isPortalPage = location.pathname === '/portal';

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={`min-h-screen ${isPortalPage ? 'bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50' : 'bg-slate-50'}`}>
      <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img src={logo} alt="Logo" className="h-8 sm:h-10" />
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-slate-900">Mascot Management</h1>
              <p className="text-xs text-slate-500">Workforce Solutions</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link to="/" className="text-slate-700 hover:text-orange-600 font-medium transition text-sm lg:text-base">Home</Link>
            <Link to="/services" className="text-slate-700 hover:text-orange-600 font-medium transition text-sm lg:text-base">Services</Link>
            <Link to="/about" className="text-slate-700 hover:text-orange-600 font-medium transition text-sm lg:text-base">About</Link>
            <Link to="/contact" className="text-slate-700 hover:text-orange-600 font-medium transition text-sm lg:text-base">Contact</Link>
            <Link to="/portal" className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-semibold hover:from-orange-700 hover:to-orange-800 transition shadow-lg shadow-orange-500/30 text-sm">Employee Portal</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white animate-in slide-in-from-top duration-200">
            <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
              <Link to="/" onClick={closeMenu} className="block py-3 px-4 rounded-xl hover:bg-slate-100 transition font-medium text-slate-700">Home</Link>
              <Link to="/services" onClick={closeMenu} className="block py-3 px-4 rounded-xl hover:bg-slate-100 transition font-medium text-slate-700">Services</Link>
              <Link to="/about" onClick={closeMenu} className="block py-3 px-4 rounded-xl hover:bg-slate-100 transition font-medium text-slate-700">About</Link>
              <Link to="/contact" onClick={closeMenu} className="block py-3 px-4 rounded-xl hover:bg-slate-100 transition font-medium text-slate-700">Contact</Link>
              <div className="pt-2">
                <Link to="/portal" onClick={closeMenu} className="block py-3 px-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl font-semibold hover:from-orange-700 hover:to-orange-800 transition text-center">Employee Portal</Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portal" element={<EmployeePortal />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/accounting" element={<Accounting />} />
        <Route path="/esi-pf" element={<EsiPf />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/hr-advisory" element={<HrAdvisory />} />
        <Route path="/compliance" element={<Compliance />} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;