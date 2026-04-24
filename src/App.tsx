/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Code, 
  Database, 
  Layout, 
  Zap, 
  ShieldCheck, 
  Clock, 
  ChevronRight, 
  Star, 
  MessageCircle,
  Instagram,
  Menu,
  X,
  Tv,
  Music,
  Youtube,
  Monitor,
  Smartphone,
  LogIn,
  LogOut,
  Plus,
  Trash2,
  Edit2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Service {
  id: string;
  name: string;
  price: string;
  image: string;
  icon?: React.ReactNode;
  popular?: boolean;
}

interface Testimonial {
  id: string;
  imageUrl: string;
}

// --- Data ---
const JOKI_SERVICES: Service[] = [
  { 
    id: 'makalah', 
    name: 'Tugas Makalah', 
    price: 'Mulai Rp 3k/lembar', 
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400',
    icon: <FileText className="w-5 h-5" />,
    popular: true 
  },
  { 
    id: 'coding', 
    name: 'Tugas Coding', 
    price: 'Mulai Rp 50k', 
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400',
    icon: <Code className="w-5 h-5" />,
    popular: true 
  },
  { 
    id: 'skripsi', 
    name: 'Bimbingan Skripsi', 
    price: 'Mulai Rp 100k', 
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400',
    icon: <Database className="w-5 h-5" /> 
  },
  { 
    id: 'ppt', 
    name: 'Desain PPT', 
    price: 'Mulai Rp 1.5k/slide', 
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400',
    icon: <Layout className="w-5 h-5" /> 
  },
];

const APP_SERVICES: Service[] = [
  { 
    id: 'netflix', 
    name: 'Netflix Premium', 
    price: 'Rp 25k/Bln', 
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=400',
    icon: <Tv className="w-5 h-5" />,
    popular: true 
  },
  { 
    id: 'spotify', 
    name: 'Spotify Premium', 
    price: 'Rp 15k/Bln', 
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=400',
    icon: <Music className="w-5 h-5" /> 
  },
  { 
    id: 'youtube', 
    name: 'YouTube Premium', 
    price: 'Rp 10k/Bln', 
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400',
    icon: <Youtube className="w-5 h-5" />,
    popular: true 
  },
  { 
    id: 'canva', 
    name: 'Canva Pro', 
    price: 'Rp 5k/Bln', 
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=400',
    icon: <Monitor className="w-5 h-5" /> 
  },
];

const TESTIMONIALS: Testimonial[] = [
  { id: '1', imageUrl: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=400' },
  { id: '2', imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=400' },
  { id: '3', imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400' },
];

const WA_NUMBER = '087778077484';

// --- Components ---

const PriceCalculator = () => {
  const [taskType, setTaskType] = useState('makalah');
  const [pages, setPages] = useState(1);
  const [deadline, setDeadline] = useState('7'); // days
  const [hasMaterial, setHasMaterial] = useState(true);

  const calculateEstimate = () => {
    let pricePerPage = 3000; // Makalah default
    
    if (taskType === 'ppt') {
      pricePerPage = hasMaterial ? 1500 : 2000;
    } else if (taskType === 'coding') {
      pricePerPage = 10000;
    } else if (taskType === 'skripsi') {
      pricePerPage = 15000;
    }

    let total = pricePerPage * pages;
    
    // Fixed additions for deadline
    if (deadline === '1') total += 5000;
    else if (deadline === '3') total += 3000;

    return total;
  };

  const currentTotal = calculateEstimate();
  const whatsappUrl = `https://wa.me/${WA_NUMBER}?text=Halo%20Joki.in,%20saya%20ingin%20tugas%20${taskType}%20${pages}%20${taskType === 'ppt' ? 'slide' : 'halaman'}.%20Materi:%20${hasMaterial ? 'Sudah Ada' : 'Cari Sendiri'}.%20Deadline:%20${deadline === '1' ? 'Express' : deadline === '3' ? 'Cepat' : 'Santai'}.`;

  return (
    <div className="bg-white p-5 md:p-6 rounded-[2rem] border border-slate-200 shadow-xl shadow-indigo-100/20 max-w-4xl mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
          <Zap className="w-4 h-4" />
        </div>
        <h3 className="text-sm font-bold text-slate-900 tracking-tight">Kalkulator Estimasi</h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div>
          <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1.5 block">Jenis</label>
          <select 
            value={taskType}
            onChange={(e) => setTaskType(e.target.value)}
            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-[11px] font-bold text-slate-900 appearance-none focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <option value="makalah">Makalah</option>
            <option value="ppt">PowerPoint</option>
            <option value="coding">Coding</option>
            <option value="skripsi">Skripsi</option>
          </select>
        </div>
        <div>
          <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1.5 block">
            {taskType === 'ppt' ? 'Slide' : 'Halaman'}
          </label>
          <input 
            type="number" 
            min="1"
            value={pages}
            onChange={(e) => setPages(parseInt(e.target.value) || 1)}
            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-[11px] font-bold text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1.5 block">Waktu</label>
          <select 
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-[11px] font-bold text-slate-900 appearance-none focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <option value="7">Santai</option>
            <option value="3">Cepat (+3k)</option>
            <option value="1">Express (+5k)</option>
          </select>
        </div>
        <div>
          <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1.5 block">Materi</label>
          <select 
            value={hasMaterial ? 'yes' : 'no'}
            onChange={(e) => setHasMaterial(e.target.value === 'yes')}
            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-[11px] font-bold text-slate-900 appearance-none focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <option value="yes">Sudah Ada</option>
            <option value="no">Cari Kan</option>
          </select>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between p-4 bg-indigo-600 rounded-xl text-white gap-4">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-widest opacity-80">Estimasi</p>
          <p className="text-xl font-black">Rp {currentTotal.toLocaleString('id-ID')}</p>
        </div>
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-indigo-600 px-5 py-2.5 rounded-lg font-bold uppercase text-[9px] tracking-widest hover:scale-105 transition-all shadow-md"
        >
          Pesan via WA
        </a>
      </div>
      
      <div className="mt-3 flex items-center gap-2 px-1 text-center sm:text-left justify-center sm:justify-start">
        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
        <p className="text-[9px] font-medium text-slate-500 italic">
          *Kemahalan? <span className="font-bold text-indigo-600 text-[10px]">Bisa Nego!</span> • Judul, Kata Pengantar & Pendahuluan <span className="font-bold text-green-600">FREE</span>
        </p>
      </div>
    </div>
  );
};

const Navbar = ({ onAdminClick }: { onAdminClick: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md py-4 border-b border-slate-200 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-indigo-200">
            <Layout className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">Joki.in<span className="text-indigo-600">tugas</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Beranda', 'Katalog', 'Testimoni'].map((item) => (
            <a key={item} href={`#${item === 'Katalog' ? 'services' : item === 'Testimoni' ? 'testimonials' : 'home'}`} className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
              {item}
            </a>
          ))}
          <button onClick={onAdminClick} className="flex items-center gap-1.5 text-slate-400 hover:text-indigo-600 transition-colors">
            <LogIn className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest hidden lg:inline">Admin</span>
          </button>
          <a href={`https://wa.me/${WA_NUMBER}`} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md shadow-indigo-100 hover:scale-105 active:scale-95">
            Order Sekarang
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {['Beranda', 'Katalog', 'Testimoni'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-lg font-bold text-slate-600 hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsOpen(false);
                onAdminClick();
              }} 
              className="text-left text-lg font-bold text-slate-400 hover:text-indigo-600 border-t border-slate-50 pt-4"
            >
              Admin Dashboard
            </button>
            <a href={`https://wa.me/${WA_NUMBER}`} className="bg-indigo-600 text-white py-3 rounded-xl font-bold text-center mt-2">
              Order Sekarang
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ServiceCard = ({ service, category }: { service: Service; category: string; key?: any }) => {
  const whatsappUrl = `https://wa.me/${WA_NUMBER}?text=Halo%20Joki.in,%20saya%20ingin%20order%20${category}%20${service.name}`;

  const renderIcon = () => {
    const name = service.name.toLowerCase();
    if (name.includes('makalah')) return <FileText className="w-4 h-4" />;
    if (name.includes('coding')) return <Code className="w-4 h-4" />;
    if (name.includes('skripsi')) return <Database className="w-4 h-4" />;
    if (name.includes('ppt')) return <Layout className="w-4 h-4" />;
    if (category === 'Joki') return <FileText className="w-4 h-4" />;
    return <Smartphone className="w-4 h-4" />;
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-indigo-100/30 transition-all duration-300 flex flex-col h-full"
    >
      <div className="aspect-[4/3] relative overflow-hidden group">
        <img 
          src={service.image} 
          alt={service.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500" />
        
        {service.popular && (
          <div className="absolute top-2 left-2 bg-indigo-600 text-white text-[7px] uppercase font-black px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
            <Star className="w-2 h-2 fill-white" /> Popular
          </div>
        )}
        
        <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm text-slate-800 text-[7px] uppercase font-black px-2 py-0.5 rounded-full border border-slate-50 shadow-sm">
          {category}
        </div>
      </div>

      <div className="p-3 md:p-4 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 mb-2 text-indigo-600">
          <div className="p-1.5 bg-indigo-50 rounded-lg">
            {renderIcon()}
          </div>
          <span className="text-[8px] uppercase font-black tracking-widest leading-none">{category === 'Joki' ? 'Assignment' : 'Sub'}</span>
        </div>
        <h3 className="text-xs font-bold text-slate-900 mb-0.5 tracking-tight line-clamp-1">{service.name}</h3>
        <p className="text-indigo-600 font-bold text-[10px] mb-4 leading-none">{service.price}</p>
        
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-full flex items-center justify-center gap-2 bg-slate-900 text-white px-3 py-2.5 rounded-lg font-bold uppercase text-[9px] tracking-widest transition-all hover:bg-indigo-600"
        >
          <span>Pesan</span>
          <MessageCircle className="w-3 h-3" />
        </a>
      </div>
    </motion.div>
  );
};

const Benefit = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white/50 rounded-2xl border border-slate-100 hover:bg-white transition-all group hover:shadow-lg hover:shadow-slate-100/40">
    <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-3 transition-transform">
      <Icon className="w-5 h-5" />
    </div>
    <h4 className="text-sm font-bold text-slate-900 mb-1.5 tracking-tight">{title}</h4>
    <p className="text-slate-500 text-[10px] font-medium leading-relaxed">{desc}</p>
  </div>
);

export default function App() {
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);
  const [activeTab, setActiveTab] = useState<'joki' | 'apps'>('joki');
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  
  // Admin search state
  const [searchTerm, setSearchTerm] = useState('');
  
  // Use localStorage for persistence
  const [jokiServices, setJokiServices] = useState<Service[]>(() => {
    const saved = localStorage.getItem('jokiServices');
    return saved ? JSON.parse(saved) : JOKI_SERVICES;
  });
  const [appServices, setAppServices] = useState<Service[]>(() => {
    const saved = localStorage.getItem('appServices');
    return saved ? JSON.parse(saved) : APP_SERVICES;
  });
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem('testimonials');
    return saved ? JSON.parse(saved) : TESTIMONIALS;
  });

  const [editingService, setEditingService] = useState<{service: Service, category: 'joki' | 'apps'} | null>(null);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);

  useEffect(() => {
    localStorage.setItem('jokiServices', JSON.stringify(jokiServices));
  }, [jokiServices]);

  useEffect(() => {
    localStorage.setItem('appServices', JSON.stringify(appServices));
  }, [appServices]);

  useEffect(() => {
    localStorage.setItem('testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === 'admin123') {
      setIsAdmin(true);
      setShowAdminLogin(false);
      setLoginError(false);
    } else {
      setLoginError(true);
      setTimeout(() => setLoginError(false), 3000);
    }
  };

  // Filtered lists for admin dashboard
  const filteredJoki = jokiServices.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const filteredApps = appServices.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const deleteService = (id: string, category: 'joki' | 'apps') => {
    if (category === 'joki') setJokiServices(jokiServices.filter(s => s.id !== id));
    else setAppServices(appServices.filter(s => s.id !== id));
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials(testimonials.filter(t => t.id !== id));
  };

  const saveService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingService) return;
    
    const { service, category } = editingService;
    if (category === 'joki') {
      if (jokiServices.find(s => s.id === service.id)) {
        setJokiServices(jokiServices.map(s => s.id === service.id ? service : s));
      } else {
        setJokiServices([...jokiServices, service]);
      }
    } else {
      if (appServices.find(s => s.id === service.id)) {
        setAppServices(appServices.map(s => s.id === service.id ? service : s));
      } else {
        setAppServices([...appServices, service]);
      }
    }
    setEditingService(null);
  };

  const saveTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTestimonial) return;
    
    if (testimonials.find(t => t.id === editingTestimonial.id)) {
      setTestimonials(testimonials.map(t => t.id === editingTestimonial.id ? editingTestimonial : t));
    } else {
      setTestimonials([...testimonials, editingTestimonial]);
    }
    setEditingTestimonial(null);
  };

  if (isAdmin) {
    return (
      <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Layout className="text-white w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Administrator</span>
              </div>
              <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight leading-none">Dashboard Joki.in</h1>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => setIsAdmin(false)}
                className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:bg-slate-800 shadow-xl shadow-slate-200"
              >
                <LogOut className="w-4 h-4" />
                Keluar Panel
              </button>
            </div>
          </div>

          {/* Admin Dashboard Search */}
          <div className="mb-8">
            <div className="relative max-w-xl">
              <input 
                type="text" 
                placeholder="Cari layanan atau testimoni..." 
                className="w-full p-4 pl-12 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Plus className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 rotate-45" />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Joki Tugas List */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50">
              <div className="flex justify-between items-center mb-8">
                <div className="flex flex-col">
                  <h2 className="text-2xl font-bold text-slate-900">Joki Tugas</h2>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">{filteredJoki.length} Services</span>
                </div>
                <button 
                  onClick={() => setEditingService({ category: 'joki', service: { id: Date.now().toString(), name: '', price: 'Mulai Rp ', image: '', popular: false } })}
                  className="bg-indigo-50 text-indigo-600 p-3 rounded-xl hover:bg-indigo-100 transition-colors"
                >
                  <Plus className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {filteredJoki.map(s => (
                  <div key={s.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 group transition-all hover:bg-white hover:shadow-md">
                    <div className="flex items-center gap-4">
                      <img src={s.image} className="w-14 h-14 rounded-xl object-cover shadow-sm" onError={(e) => (e.currentTarget.src = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=100")} />
                      <div>
                        <p className="font-bold text-slate-900 tracking-tight">{s.name}</p>
                        <p className="text-xs font-bold text-indigo-600">{s.price}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => setEditingService({ service: s, category: 'joki' })} className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"><Edit2 className="w-4 h-4" /></button>
                      <button onClick={() => deleteService(s.id, 'joki')} className="p-2 text-slate-400 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* App Premium List */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50">
              <div className="flex justify-between items-center mb-8">
                <div className="flex flex-col">
                  <h2 className="text-2xl font-bold text-slate-900">App Premium</h2>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">{filteredApps.length} Apps</span>
                </div>
                <button 
                  onClick={() => setEditingService({ category: 'apps', service: { id: Date.now().toString(), name: '', price: 'Rp ', image: '', popular: false } })}
                  className="bg-indigo-50 text-indigo-600 p-3 rounded-xl hover:bg-indigo-100 transition-colors"
                >
                  <Plus className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {filteredApps.map(s => (
                  <div key={s.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 group transition-all hover:bg-white hover:shadow-md">
                    <div className="flex items-center gap-4">
                      <img src={s.image} className="w-14 h-14 rounded-xl object-cover shadow-sm" onError={(e) => (e.currentTarget.src = "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=100")} />
                      <div>
                        <p className="font-bold text-slate-900 tracking-tight">{s.name}</p>
                        <p className="text-xs font-bold text-indigo-600">{s.price}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => setEditingService({ service: s, category: 'apps' })} className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"><Edit2 className="w-4 h-4" /></button>
                      <button onClick={() => deleteService(s.id, 'apps')} className="p-2 text-slate-400 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials List */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50">
              <div className="flex justify-between items-center mb-8">
                <div className="flex flex-col">
                  <h2 className="text-2xl font-bold text-slate-900">Testimonials</h2>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">{testimonials.length} Images</span>
                </div>
                <button 
                  onClick={() => setEditingTestimonial({ id: Date.now().toString(), imageUrl: '' })}
                  className="bg-indigo-50 text-indigo-600 p-3 rounded-xl hover:bg-indigo-100 transition-colors"
                >
                  <Plus className="w-6 h-6" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {testimonials.map(t => (
                  <div key={t.id} className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-slate-200 group">
                    <img src={t.imageUrl} className="w-full h-full object-cover" onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/150x266?text=Invalid+Image")} />
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                       <button onClick={() => setEditingTestimonial(t)} className="bg-white text-indigo-600 p-2 rounded-lg shadow-lg"><Edit2 className="w-4 h-4" /></button>
                       <button onClick={() => deleteTestimonial(t.id)} className="bg-white text-red-500 p-2 rounded-lg shadow-lg"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Edit Modal (Service) */}
        <AnimatePresence>
          {editingService && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-6">
              <motion.form 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onSubmit={saveService}
                className="bg-white p-10 rounded-[3rem] w-full max-w-xl shadow-2xl relative"
              >
                <button type="button" onClick={() => setEditingService(null)} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors"><X/></button>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600"><Edit2 className="w-6 h-6"/></div>
                  <div>
                    <h3 className="text-3xl font-black text-slate-900 tracking-tight">Edit {editingService.category === 'joki' ? 'Joki' : 'App'}</h3>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">ID: {editingService.service.id}</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Nama Layanan</label>
                    <input 
                      required
                      className="w-full p-5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium" 
                      value={editingService.service.name} 
                      onChange={e => setEditingService({...editingService, service: {...editingService.service, name: e.target.value}})}
                      placeholder="e.g. Tugas coding Python"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Harga</label>
                      <input 
                        required
                        className="w-full p-5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium" 
                        value={editingService.service.price} 
                        onChange={e => setEditingService({...editingService, service: {...editingService.service, price: e.target.value}})}
                        placeholder="Mulai Rp 20k"
                      />
                    </div>
                    <div className="flex items-end">
                       <label className="flex items-center gap-3 cursor-pointer p-4 bg-slate-50 border border-slate-200 rounded-2xl w-full">
                          <input 
                            type="checkbox" 
                            className="w-5 h-5 rounded-md accent-indigo-600"
                            checked={!!editingService.service.popular} 
                            onChange={e => setEditingService({...editingService, service: {...editingService.service, popular: e.target.checked}})}
                          />
                          <span className="text-sm font-bold text-slate-700">Popular?</span>
                       </label>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Image URL</label>
                    <input 
                      required
                      className="w-full p-5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium" 
                      value={editingService.service.image} 
                      onChange={e => setEditingService({...editingService, service: {...editingService.service, image: e.target.value}})}
                      placeholder="https://..."
                    />
                  </div>
                </div>
                <div className="flex gap-4 mt-12">
                  <button type="submit" className="flex-1 p-6 rounded-2xl bg-indigo-600 text-white font-bold uppercase tracking-widest text-sm shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all">Simpan Perubahan</button>
                </div>
              </motion.form>
            </div>
          )}
        </AnimatePresence>

        {/* Edit Modal (Testimonial) */}
        <AnimatePresence>
          {editingTestimonial && (
             <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-6">
              <motion.form 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onSubmit={saveTestimonial}
                className="bg-white p-10 rounded-[3rem] w-full max-w-xl shadow-2xl relative"
              >
                <button type="button" onClick={() => setEditingTestimonial(null)} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors"><X/></button>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-8">Add Testimonial</h3>
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Image URL (9:16 recommended)</label>
                    <input 
                      required
                      className="w-full p-5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium" 
                      value={editingTestimonial.imageUrl} 
                      onChange={e => setEditingTestimonial({...editingTestimonial, imageUrl: e.target.value})}
                      placeholder="https://..."
                    />
                  </div>
                </div>
                <div className="flex gap-4 mt-12">
                  <button type="submit" className="flex-1 p-6 rounded-2xl bg-indigo-600 text-white font-bold uppercase tracking-widest text-sm shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all">Simpan Testimoni</button>
                </div>
              </motion.form>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-600 font-sans selection:bg-indigo-500/10 overflow-x-hidden">
      <Navbar onAdminClick={() => setShowAdminLogin(true)} />
      
      {/* Admin Login Modal */}
      {showAdminLogin && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="bg-white p-12 rounded-[4rem] w-full max-w-md text-center shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-600 to-blue-500"></div>
            <div className="w-24 h-24 bg-indigo-50 text-indigo-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-inner">
              <ShieldCheck className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-3 tracking-tight">Admin Portal</h2>
            <p className="text-slate-500 mb-10 font-medium">Restricted access only.</p>
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <input 
                type="password" 
                placeholder="PASSWORD" 
                className={`w-full p-6 bg-slate-50 border ${loginError ? 'border-red-500 ring-2 ring-red-100' : 'border-slate-200'} rounded-3xl text-center font-bold tracking-[0.3em] focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:tracking-normal transition-all`}
                value={adminPassword}
                onChange={e => {
                  setAdminPassword(e.target.value);
                  if (loginError) setLoginError(false);
                }}
              />
              {loginError && (
                <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest animate-shake">Password Salah!</p>
              )}
              <button type="submit" className="w-full bg-slate-900 text-white p-6 rounded-3xl font-bold uppercase tracking-widest text-sm shadow-2xl hover:bg-slate-800 transition-all">Authenticate</button>
              <button type="button" onClick={() => setShowAdminLogin(false)} className="w-full p-4 text-slate-400 font-bold uppercase tracking-widest text-[10px] hover:text-slate-600 transition-colors">Abort Mission</button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative pt-40 pb-24 overflow-hidden">
        {/* Background blobs for professional depth */}
        <div className="absolute top-0 right-0 -mr-40 -mt-20 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 -ml-40 -mb-20 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-1.5 rounded-full mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-700">Digital Service Excellence</span>
              </div>
              
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight leading-tight">
                Joki Tugas Profesional <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Hasil Maksimal</span>
              </h1>
              
              <p className="text-xs md:text-sm text-slate-500 mb-6 max-w-md mx-auto font-medium leading-normal">
                Butuh bantuan tugas sekolah, kuliah, atau desain? Joki.in siap membantu dengan standar kualitas tinggi dan kerahasiaan terjamin.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-10">
                <a href="#services" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-bold text-[10px] transition-all shadow-md shadow-indigo-100 hover:scale-105 active:scale-95 text-center">
                  Daftar Layanan
                </a>
                <a href={`https://wa.me/${WA_NUMBER}`} className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-5 py-2.5 rounded-lg font-bold text-[10px] transition-all flex items-center justify-center gap-2 shadow-sm">
                  <MessageCircle className="w-3.5 h-3.5 text-green-500" />
                  Chat Admin
                </a>
              </div>

              {/* Price Calculator Integration */}
              <PriceCalculator />
            </motion.div>
          </div>
        </div>
      </section>


      {/* Stats Area */}
      <section className="py-8 bg-white border-y border-slate-100 relative z-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-10 md:gap-20">
            {[
              { val: '15k+', label: 'Pesanan Selesai' },
              { val: '4.9/5', label: 'Rating Kepuasan' },
              { val: '100%', label: 'Akun Legal' },
              { val: '24/7', label: 'Admin Support' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-2xl font-black text-slate-800 tracking-tight">{stat.val}</span>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Joki */}
      <section id="services" className="py-12 bg-[#F8FAFC]">
        <div className="container mx-auto px-5">
          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">Katalog Joki Tugas</h2>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Bantuan tugas profesional</p>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5"
          >
            {jokiServices.map(service => (
              <ServiceCard key={service.id} service={service} category="Joki" />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section - Apps */}
      <section id="apps" className="py-12 bg-white">
        <div className="container mx-auto px-5">
          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">App Premium</h2>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Aplikasi premium legal</p>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5"
          >
            {appServices.map(service => (
              <ServiceCard key={service.id} service={service} category="Premium" />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-5">
            <Benefit 
              icon={Zap} 
              title="Proses Instan" 
              desc="Pesanan diproses langsung oleh tim pro setelah pembayaran dikonfirmasi." 
            />
            <Benefit 
              icon={ShieldCheck} 
              title="100% Aman & Legal" 
              desc="Keamanan data akun terjamin dengan metode legal yang anti-hold dan anti-ban." 
            />
            <Benefit 
              icon={Star} 
              title="Harga Reseller" 
              desc="Nikmati harga kompetitif yang cocok untuk pemakaian pribadi maupun dijual kembali." 
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-indigo-600 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10 text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">Konsultasi Gratis Sekarang</h2>
          <p className="text-[11px] md:text-xs font-medium mb-6 opacity-90 max-w-lg mx-auto">Butuh bantuan memilih paket yang tepat? Admin kami siap membantu 24/7.</p>
          <a 
            href={`https://wa.me/${WA_NUMBER}`} 
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-2 rounded-lg font-bold text-[10px] hover:scale-105 active:scale-95 transition-all shadow-xl"
          >
            <MessageCircle className="w-4 h-4" />
            Order via WhatsApp
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-10 bg-[#F8FAFC]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-6">
            <h2 className="text-sm md:text-base font-bold text-slate-900 mb-0.5 tracking-tight">Testimoni Joki.in</h2>
            <p className="text-slate-500 text-[8px] font-bold uppercase tracking-widest leading-none">Hasil nyata untuk kamu</p>
          </div>
          
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 max-w-6xl mx-auto">
            {testimonials.slice(0, showAllTestimonials ? undefined : 4).map((t) => (
              <motion.div 
                key={t.id}
                whileHover={{ scale: 1.02 }}
                className="aspect-[4/3] relative rounded-lg overflow-hidden border border-slate-200 shadow-sm"
              >
                <img 
                  src={t.imageUrl} 
                  alt="Testimonial" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button 
              onClick={() => setShowAllTestimonials(!showAllTestimonials)}
              className="text-[9px] font-bold text-indigo-600 hover:text-indigo-800 transition-colors uppercase tracking-widest border-b border-indigo-100 pb-0.5"
            >
              {showAllTestimonials ? 'Tampilkan Sedikit' : 'Lihat Lebih Banyak'}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="py-8 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
                <Zap className="w-3 h-3 text-white" />
              </div>
              <span className="text-xs font-black tracking-tighter text-slate-900 uppercase">Joki.in</span>
            </div>
            
            <div className="flex flex-col items-center md:items-start gap-1">
              <p className="text-[9px] text-slate-400 font-medium tracking-tight">
                &copy; {new Date().getFullYear()} Joki.in - Solusi Joki Tugas & App Premium.
              </p>
              <div className="flex items-center gap-4 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                <a href={`https://wa.me/${WA_NUMBER}`} className="flex items-center gap-1 hover:text-indigo-600">
                  <MessageCircle className="w-3 h-3" /> {WA_NUMBER}
                </a>
                <a href="#" className="flex items-center gap-1 hover:text-indigo-600">
                  <Instagram className="w-3 h-3" /> @joki.in_tugas
                </a>
              </div>
            </div>

            <div className="flex gap-2">
              <a href="#" className="p-1.5 bg-slate-50 rounded text-slate-400 hover:text-indigo-600 transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href={`https://wa.me/${WA_NUMBER}`} className="p-1.5 bg-slate-50 rounded text-slate-400 hover:text-indigo-600 transition-colors">
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
