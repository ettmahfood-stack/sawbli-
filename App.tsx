
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { 
  Home, Search, User, Settings, LayoutDashboard, ShieldCheck, 
  Menu, X, Phone, MapPin, Wrench, CreditCard, ChevronLeft, MessageCircle,
  Lock, Sparkles
} from 'lucide-react';
import { Artisan, ServiceType, City, Region, SubscriptionStatus, PaymentRecord } from './types';
import { REGIONS, CITIES, INITIAL_SERVICES } from './constants';

// Pages
import HomePage from './pages/HomePage';
import ArtisanListPage from './pages/ArtisanListPage';
import ArtisanProfilePage from './pages/ArtisanProfilePage';
import ArtisanDashboard from './pages/ArtisanDashboard';
import AdminDashboard from './pages/AdminDashboard';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

const SUPPORT_WHATSAPP = "212772112925";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAdmin = localStorage.getItem('admin_auth') === 'true';

  return (
    <nav className="glass border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-[#047857] to-[#065f46] p-3 rounded-[1.25rem] text-white shadow-xl shadow-emerald-200 rotate-3">
                <Wrench size={26} />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#064e3b] tracking-tighter leading-none uppercase">صاوب لي</span>
                <span className="text-[10px] text-emerald-600 font-black tracking-[0.2em] leading-none text-right">MAROC</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            <Link to="/" className="text-gray-700 font-black hover:text-[#047857] transition text-sm">الرئيسية</Link>
            <Link to="/services" className="text-gray-700 font-black hover:text-[#047857] transition text-sm">الخدمات</Link>
            {isAdmin && <Link to="/admin" className="text-emerald-600 font-black flex items-center gap-2 text-sm"><Lock size={14}/> لوحة التحكم</Link>}
            <div className="w-[1px] h-8 bg-gray-100 mx-2"></div>
            <Link to="/login" className="px-6 py-3 text-[#064e3b] font-black hover:bg-emerald-50 rounded-2xl border-2 border-emerald-100 transition text-sm">دخول الحرفيين</Link>
            <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-[#047857] to-[#059669] text-white font-black rounded-2xl hover:shadow-2xl hover:shadow-emerald-200 transition-all transform hover:-translate-y-0.5 text-sm">سجل كحرفي</Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-emerald-900 p-2">
              {isOpen ? <X size={36} strokeWidth={2.5} /> : <Menu size={36} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-b p-8 space-y-6 shadow-2xl animate-in slide-in-from-top duration-300 text-right">
          <Link to="/" onClick={() => setIsOpen(false)} className="block px-6 py-4 text-xl font-black text-gray-800 hover:bg-emerald-50 rounded-2xl">الرئيسية</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block px-6 py-4 text-xl font-black text-gray-800 hover:bg-emerald-50 rounded-2xl">تصفح الخدمات</Link>
          {isAdmin && <Link to="/admin" onClick={() => setIsOpen(false)} className="block px-6 py-4 text-xl font-black text-emerald-600">لوحة الإدارة</Link>}
          <hr className="border-gray-100" />
          <Link to="/login" onClick={() => setIsOpen(false)} className="block px-6 py-5 text-[#047857] font-black text-center text-xl border-2 border-emerald-50 rounded-2xl">دخول الحرفيين</Link>
          <Link to="/register" onClick={() => setIsOpen(false)} className="block px-6 py-5 bg-[#047857] text-white font-black text-center text-xl rounded-2xl">سجل كحرفي</Link>
        </div>
      )}
    </nav>
  );
};

const ProtectedAdminRoute = ({ children }: { children: React.ReactNode }) => {
  const isAdmin = localStorage.getItem('admin_auth') === 'true';
  if (!isAdmin) return <Navigate to="/login" />;
  return <>{children}</>;
};

const App: React.FC = () => {
  const [artisans, setArtisans] = useState<Artisan[]>([
    {
      id: 'art-1',
      name: 'المعلم أمين',
      phone: '0661234567',
      serviceTypeId: 's1', // نجار
      cityId: 'c50', // الدار البيضاء
      regionId: '6',
      description: 'نجار مغربي أصيل متخصص في الصالونات المغربية، غرف النوم، والمطابخ العصرية. خبرة 20 سنة.',
      photoUrl: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=400',
      status: SubscriptionStatus.ACTIVE,
      expiryDate: '2025-12-01',
      createdAt: '2024-01-01',
      rating: 4.9,
      reviewsCount: 84,
      notificationPreferences: { email: true, sms: true }
    },
    {
      id: 'art-2',
      name: 'كريم تريسيان',
      phone: '0662223344',
      serviceTypeId: 's2', // كهربائي
      cityId: 'c60', // مراكش
      regionId: '7',
      description: 'إصلاح جميع أعطال الكهرباء المنزلية والتركيبات الجديدة. خدمة سريعة ومضمونة في مراكش والنواحي.',
      photoUrl: 'https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=400',
      status: SubscriptionStatus.ACTIVE,
      expiryDate: '2025-11-20',
      createdAt: '2024-02-15',
      rating: 4.8,
      reviewsCount: 112,
      notificationPreferences: { email: true, sms: false }
    },
    {
      id: 'art-3',
      name: 'ياسين بلومبي',
      phone: '0665556677',
      serviceTypeId: 's3', // سباك
      cityId: 'c30', // الرباط
      regionId: '4',
      description: 'معلم سباك متمكن. تركيب الحمامات، المطابخ، وإصلاح تسربات المياه بأحدث التقنيات.',
      photoUrl: 'https://images.unsplash.com/photo-1540103395138-56a012f306c9?auto=format&fit=crop&q=80&w=400',
      status: SubscriptionStatus.ACTIVE,
      expiryDate: '2025-10-15',
      createdAt: '2024-03-20',
      rating: 4.6,
      reviewsCount: 56,
      notificationPreferences: { email: true, sms: true }
    }
  ]);

  const [services, setServices] = useState<ServiceType[]>(INITIAL_SERVICES);
  const [regions, setRegions] = useState<Region[]>(REGIONS);
  const [cities, setCities] = useState<City[]>(CITIES);
  const [payments, setPayments] = useState<PaymentRecord[]>([]);

  const handleAddReview = (artisanId: string, rating: number) => {
    setArtisans(prev => prev.map(a => {
      if (a.id === artisanId) {
        const totalRating = (a.rating * a.reviewsCount) + rating;
        const newCount = a.reviewsCount + 1;
        return { ...a, reviewsCount: newCount, rating: parseFloat((totalRating / newCount).toFixed(1)) };
      }
      return a;
    }));
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-cairo">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage services={services} cities={cities} />} />
            <Route path="/services" element={<ArtisanListPage artisans={artisans} services={services} cities={cities} regions={regions} />} />
            <Route path="/artisan/:id" element={<ArtisanProfilePage artisans={artisans} services={services} cities={cities} regions={regions} onAddReview={handleAddReview} />} />
            <Route path="/dashboard" element={<ArtisanDashboard />} />
            <Route path="/admin/*" element={
              <ProtectedAdminRoute>
                <AdminDashboard services={services} setServices={setServices} regions={regions} setRegions={setRegions} cities={cities} setCities={setCities} artisans={artisans} setArtisans={setArtisans} payments={payments} setPayments={setPayments} />
              </ProtectedAdminRoute>
            } />
            <Route path="/register" element={<RegisterPage services={services} cities={cities} regions={regions} />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>

        <footer className="bg-[#022c22] text-white pt-24 pb-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-right">
              <div>
                <h3 className="text-3xl font-black mb-6">صاوب لي 🇲🇦</h3>
                <p className="text-emerald-100/60 leading-relaxed font-bold">المنصة المغربية الموثوقة لربط الزبناء بأفضل الحرفيين في جميع المدن والجهات.</p>
              </div>
              <div>
                <h3 className="text-xl font-black mb-6 text-orange-400">روابط سريعة</h3>
                <ul className="space-y-4 font-bold">
                  <li><Link to="/services" className="hover:text-orange-400">ابحث عن حرفي</Link></li>
                  <li><Link to="/register" className="hover:text-orange-400">سجل كحرفي</Link></li>
                  <li><Link to="/login" className="hover:text-orange-400">دخول الحرفيين</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-black mb-6 text-orange-400">تواصل معنا</h3>
                <p className="text-emerald-100/60 font-bold mb-4">فريق الدعم في خدمتك 24/7</p>
                <a href={`https://wa.me/${SUPPORT_WHATSAPP}`} className="flex items-center justify-end gap-3 text-emerald-400 text-2xl font-black">
                   <span dir="ltr">+{SUPPORT_WHATSAPP}</span>
                   <MessageCircle size={28} />
                </a>
              </div>
            </div>
            <div className="border-t border-white/10 mt-20 pt-10 text-center text-emerald-100/30 font-bold">
              © 2024 SAWBLI.MA - صنع بكل فخر في المغرب 🇲🇦
            </div>
          </div>
        </footer>
        
        {/* Floating WhatsApp */}
        <a href={`https://wa.me/${SUPPORT_WHATSAPP}`} className="fixed bottom-8 left-8 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition z-50">
          <MessageCircle size={32} />
        </a>
      </div>
    </Router>
  );
};

export default App;
