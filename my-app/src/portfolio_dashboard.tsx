import React, { useState, useEffect } from 'react';
import { 
  Home, Briefcase, Mail, User, Phone, Instagram, ExternalLink, 
  Layers, Award, TrendingUp, Sparkles, X, Send, CheckCircle, Code, Palette, Share2, Globe
} from 'lucide-react';

export default function PortfolioApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const projects = [
    {
      id: 2,
      title: "Plus Fest",
      category: "Event Branding & Web",
      image: "https://placehold.co/600x400/0f172a/00b4d8?text=Plus+Fest",
      description: "Vibrant festival branding, interactive event schedule web application, social media marketing campaigns, ticket reservation flow, and promotional social media creative direction.",
      tags: ["Social Media", "Event UI", "Branding", "React"]
    },
    {
      id: 3,
      title: "Queens Fashion",
      category: "Apparel & E-Commerce",
      image: "https://placehold.co/600x400/0f172a/00b4d8?text=Queens+Fashion",
      description: "High-end fashion house digital showcase with dynamic catalog grids, lookbook immersive viewer, Instagram content curation, and seamless checkout experience.",
      tags: ["Graphic Design", "Social Media", "UI/UX", "Tailwind"]
    },
    {
      id: 4,
      title: "Window Housing",
      category: "Real Estate Web App",
      image: "https://placehold.co/600x400/0f172a/00b4d8?text=Window+Housing",
      description: "Modern architectural real estate platform featuring interactive property listing exploration, virtual tours integration, and social media ad creatives.",
      tags: ["Fullstack", "React", "Dashboard", "UI/UX"]
    },
    {
      id: 5,
      title: "Novacore",
      category: "Tech & SaaS Agency",
      image: "https://placehold.co/600x400/0f172a/00b4d8?text=Novacore",
      description: "Cutting-edge software solutions agency brand identity, SaaS landing page design, dark-mode developer dashboard interface, and social content management.",
      tags: ["Branding", "Social Media Manager", "React", "SaaS"]
    },
    {
      id: 6,
      title: "USSD Menu Simulator",
      category: "Telecom FinTech Tool",
      image: "https://placehold.co/600x400/0f172a/00b4d8?text=USSD+Simulator",
      description: "Interactive telecom USSD prototyping tool enabling designers and developers to test interactive feature phone menus instantly.",
      tags: ["JavaScript", "Simulator", "FinTech", "Tool"]
    }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setContactForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#070d1e] text-white font-sans antialiased selection:bg-[#00b4d8] selection:text-white pb-20">
      
      {/* HEADER & NAVIGATION */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#070d1e]/90 border-b border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo / Name */}
          <div 
            onClick={() => setActiveTab('home')}
            className="cursor-pointer flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00b4d8] via-[#0077b6] to-[#03045e] flex items-center justify-center shadow-lg shadow-[#00b4d8]/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white">
                Yonas Girma
              </span>
              <span className="block text-xs font-semibold text-[#00b4d8] tracking-wider uppercase">
                Graphics Designer & Social Media Manager
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 bg-[#0f172a]/80 p-1.5 rounded-2xl border border-[#1e293b]">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'home' 
                  ? 'bg-[#00b4d8] text-white shadow-md shadow-[#00b4d8]/30' 
                  : 'text-slate-300 hover:text-white hover:bg-[#1e293b]'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'projects' 
                  ? 'bg-[#00b4d8] text-white shadow-md shadow-[#00b4d8]/30' 
                  : 'text-slate-300 hover:text-white hover:bg-[#1e293b]'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>My Projects</span>
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'about' 
                  ? 'bg-[#00b4d8] text-white shadow-md shadow-[#00b4d8]/30' 
                  : 'text-slate-300 hover:text-white hover:bg-[#1e293b]'
              }`}
            >
              <User className="w-4 h-4" />
              <span>About Me</span>
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'contact' 
                  ? 'bg-[#00b4d8] text-white shadow-md shadow-[#00b4d8]/30' 
                  : 'text-slate-300 hover:text-white hover:bg-[#1e293b]'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </button>
          </nav>

          {/* Quick Connect CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+251953454037"
              className="flex items-center space-x-2 text-xs font-semibold text-white bg-[#0f172a] border border-[#00b4d8]/40 px-3.5 py-2 rounded-xl hover:border-[#00b4d8] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#00b4d8]" />
              <span>+251 953 45 40 37</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-[#0f172a] border border-[#1e293b] text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Layers className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0f172a] border-b border-[#1e293b] px-4 py-4 space-y-2">
            <button
              onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold ${
                activeTab === 'home' ? 'bg-[#00b4d8] text-white' : 'text-slate-300 hover:bg-[#1e293b]'
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Home Dashboard</span>
            </button>
            <button
              onClick={() => { setActiveTab('projects'); setMobileMenuOpen(false); }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold ${
                activeTab === 'projects' ? 'bg-[#00b4d8] text-white' : 'text-slate-300 hover:bg-[#1e293b]'
              }`}
            >
              <Briefcase className="w-5 h-5" />
              <span>My Projects</span>
            </button>
            <button
              onClick={() => { setActiveTab('about'); setMobileMenuOpen(false); }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold ${
                activeTab === 'about' ? 'bg-[#00b4d8] text-white' : 'text-slate-300 hover:bg-[#1e293b]'
              }`}
            >
              <User className="w-5 h-5" />
              <span>About Me</span>
            </button>
            <button
              onClick={() => { setActiveTab('contact'); setMobileMenuOpen(false); }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold ${
                activeTab === 'contact' ? 'bg-[#00b4d8] text-white' : 'text-slate-300 hover:bg-[#1e293b]'
              }`}
            >
              <Mail className="w-5 h-5" />
              <span>Contact</span>
            </button>
          </div>
        )}
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">

        {/* ================= HOME / PANEL DASHBOARD ================= */}
        {activeTab === 'home' && (
          <div className="space-y-10 animate-fadeIn">
            
            {/* Hero Welcome / Brief to Clients */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a192f] via-[#0f172a] to-[#03045e] border border-[#00b4d8]/30 p-8 sm:p-12">
              <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-[#00b4d8]/15 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="max-w-3xl relative z-10 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#00b4d8]/15 border border-[#00b4d8]/30 text-[#00b4d8] text-xs font-bold tracking-wide uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Brief to Clients & Customers</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  I am a <span className="text-[#00b4d8]">Website Developer</span>, <span className="text-white">Graphics Designer</span> & <span className="text-[#90e0ef]">Social Media Manager</span>
                </h1>
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                  Welcome to my portfolio website! I am <strong className="text-white">Yonas Girma</strong>. I specialize in website development, visual graphic design, brand identities, and social media growth strategies.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={() => setActiveTab('projects')}
                    className="px-6 py-3 rounded-xl bg-[#00b4d8] hover:bg-[#0077b6] text-white font-bold text-sm shadow-lg shadow-[#00b4d8]/30 transition-all flex items-center space-x-2"
                  >
                    <span>Show My Projects</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveTab('contact')}
                    className="px-6 py-3 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold text-sm border border-[#00b4d8]/40 transition-all"
                  >
                    Contact Me
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-[#0f172a]/90 border border-[#1e293b] rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#00b4d8]/15 text-[#00b4d8]">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-cyan-300 bg-[#00b4d8]/15 px-2.5 py-1 rounded-full">+20% this month</span>
                </div>
                <h3 className="text-2xl font-bold text-white">20+</h3>
                <p className="text-sm text-slate-300">Completed Projects</p>
              </div>

              <div className="bg-[#0f172a]/90 border border-[#1e293b] rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-cyan-500/15 text-cyan-300">
                    <Palette className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-cyan-300 bg-cyan-500/15 px-2.5 py-1 rounded-full">Top Quality</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Graphic Design</h3>
                <p className="text-sm text-slate-300">Brand & Social Media</p>
              </div>

              <div className="bg-[#0f172a]/90 border border-[#1e293b] rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#0077b6]/20 text-[#00b4d8]">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-[#00b4d8] bg-[#0077b6]/20 px-2.5 py-1 rounded-full">Active Stage</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Social Media</h3>
                <p className="text-sm text-slate-300">Growth & Campaigns</p>
              </div>

              <div className="bg-[#0f172a]/90 border border-[#1e293b] rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/15 text-blue-300">
                    <Globe className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-blue-300 bg-blue-500/15 px-2.5 py-1 rounded-full">Active</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Behance & IG</h3>
                <p className="text-sm text-slate-300">Portfolios Online</p>
              </div>
            </div>

            {/* Featured Projects Highlights */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Featured Works Highlights</h2>
                  <p className="text-sm text-slate-300">Handpicked graphic design, social media strategy, and web applications</p>
                </div>
                <button
                  onClick={() => setActiveTab('projects')}
                  className="text-sm font-semibold text-[#00b4d8] hover:text-[#90e0ef] flex items-center space-x-1"
                >
                  <span>View All Projects</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.slice(0, 3).map((project) => (
                  <div 
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="group cursor-pointer bg-[#0f172a] border border-[#1e293b] hover:border-[#00b4d8] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#00b4d8]/15 flex flex-col"
                  >
                    <div className="h-48 bg-[#0a192f] relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                        onError={(e) => { e.target.src = 'https://placehold.co/600x400/0f172a/00b4d8?text=Project+Preview'; }}
                      />
                      <div className="absolute top-3 right-3 bg-[#070d1e]/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-semibold text-[#00b4d8] border border-[#00b4d8]/30">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-[#00b4d8] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-slate-300 mt-2 line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#1e293b]">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs px-2 py-0.5 rounded-md bg-[#1e293b] text-slate-200">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ================= MY PROJECTS PAGE ================= */}
        {activeTab === 'projects' && (
          <div className="space-y-8 animate-fadeIn">
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#00b4d8]/15 border border-[#00b4d8]/30 text-[#00b4d8] text-xs font-bold tracking-wide uppercase mb-4">
                <Briefcase className="w-3.5 h-3.5" />
                <span>My Projects Showcase</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Graphics, Social Media & Web Projects
              </h1>
              <p className="text-slate-300 text-base mt-2">
                Click any project card below to view popup details, media breakdown, and social media strategies.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer bg-[#0f172a] border border-[#1e293b] hover:border-[#00b4d8] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#00b4d8]/15 flex flex-col"
                >
                  <div className="h-52 bg-[#0a192f] relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      onError={(e) => { e.target.src = 'https://placehold.co/600x400/0f172a/00b4d8?text=Project+Preview'; }}
                    />
                    <div className="absolute top-3 right-3 bg-[#070d1e]/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-semibold text-[#00b4d8] border border-[#00b4d8]/30">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#00b4d8] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-300 mt-2 line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-[#1e293b]">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 2).map((tag, idx) => (
                          <span key={idx} className="text-xs px-2 py-0.5 rounded-md bg-[#1e293b] text-slate-200">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs font-bold text-[#00b4d8] group-hover:translate-x-1 transition-transform flex items-center space-x-1">
                        <span>Details</span>
                        <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= ABOUT ME PAGE ================= */}
        {activeTab === 'about' && (
          <div className="space-y-12 animate-fadeIn max-w-5xl mx-auto">
            
            {/* Intro Header */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-[#0f172a] border border-[#1e293b] rounded-3xl p-8 sm:p-10">
              <div className="md:col-span-1 flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-tr from-[#00b4d8] via-[#0077b6] to-[#03045e] p-1 shadow-xl shadow-[#00b4d8]/20 mb-4">
                  <div className="w-full h-full bg-[#070d1e] rounded-xl flex items-center justify-center overflow-hidden">
                    <User className="w-16 h-16 text-[#00b4d8]" />
                  </div>
                </div>
                <h2 className="text-xl font-bold text-white">Yonas Girma</h2>
                <p className="text-xs text-[#00b4d8] mt-1 uppercase tracking-wider font-semibold">Graphics Designer & Social Media Manager</p>
              </div>

              <div className="md:col-span-2 space-y-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00b4d8]/15 border border-[#00b4d8]/30 text-[#00b4d8] text-xs font-bold uppercase">
                  <span>About Profile</span>
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">
                  Graphic Design, Social Media & React Web Development
                </h1>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  I combine creative graphic design with active social media management and dynamic React app development. My goal is to maximize client visibility, brand recognition, and audience engagement across all modern digital channels.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="px-3 py-1.5 rounded-lg bg-[#1e293b] text-xs font-semibold text-white border border-[#00b4d8]/30">Graphics Designer</span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#1e293b] text-xs font-semibold text-white border border-[#00b4d8]/30">Social Media Manager</span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#1e293b] text-xs font-semibold text-white border border-[#00b4d8]/30">UI/UX & React App</span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#1e293b] text-xs font-semibold text-white border border-[#00b4d8]/30">Brand Growth</span>
                </div>
              </div>
            </div>

            {/* Performance & Growth Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Skill Distribution */}
              <div className="bg-[#0f172a] border border-[#1e293b] rounded-3xl p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                    <Palette className="w-5 h-5 text-[#00b4d8]" />
                    <span>Skills & Expertise Breakdown</span>
                  </h3>
                  <span className="text-xs text-slate-300">Core Capabilities</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-white font-semibold">Graphic Design & Branding</span>
                      <span className="text-[#00b4d8] font-bold">96%</span>
                    </div>
                    <div className="w-full bg-[#1e293b] h-2.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-[#00b4d8] to-[#0077b6] h-full rounded-full w-[96%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-white font-semibold">Social Media Management</span>
                      <span className="text-[#00b4d8] font-bold">92%</span>
                    </div>
                    <div className="w-full bg-[#1e293b] h-2.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-[#00b4d8] to-[#0077b6] h-full rounded-full w-[92%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-white font-semibold">UI/UX & Web Development</span>
                      <span className="text-[#00b4d8] font-bold">90%</span>
                    </div>
                    <div className="w-full bg-[#1e293b] h-2.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-[#00b4d8] to-[#0077b6] h-full rounded-full w-[90%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-white font-semibold">Content Strategy & Growth</span>
                      <span className="text-[#00b4d8] font-bold">94%</span>
                    </div>
                    <div className="w-full bg-[#1e293b] h-2.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-[#00b4d8] to-[#0077b6] h-full rounded-full w-[94%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Growth Metrics Simulated Chart */}
              <div className="bg-[#0f172a] border border-[#1e293b] rounded-3xl p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                    <span>Track Growth Rate</span>
                  </h3>
                  <span className="text-xs text-cyan-300 bg-cyan-500/15 px-2.5 py-1 rounded-full font-bold">Growing Stage</span>
                </div>

                <p className="text-sm text-slate-300">
                  Performance tracking demonstrating client reach growth, social media engagement rates, and successful web project deployments.
                </p>

                {/* Simulated Bar Chart */}
                <div className="pt-4 flex items-end justify-between h-44 gap-4 px-2 border-b border-[#1e293b]">
                  <div className="w-full flex flex-col items-center gap-2">
                    <span className="text-xs text-slate-300 font-semibold">Q1</span>
                    <div className="w-full bg-[#0077b6]/40 hover:bg-[#00b4d8] transition-colors rounded-t-lg h-24"></div>
                  </div>
                  <div className="w-full flex flex-col items-center gap-2">
                    <span className="text-xs text-slate-300 font-semibold">Q2</span>
                    <div className="w-full bg-[#0077b6]/60 hover:bg-[#00b4d8] transition-colors rounded-t-lg h-32"></div>
                  </div>
                  <div className="w-full flex flex-col items-center gap-2">
                    <span className="text-xs text-slate-300 font-semibold">Q3</span>
                    <div className="w-full bg-[#0077b6]/80 hover:bg-[#00b4d8] transition-colors rounded-t-lg h-36"></div>
                  </div>
                  <div className="w-full flex flex-col items-center gap-2">
                    <span className="text-xs text-slate-300 font-semibold">Q4</span>
                    <div className="w-full bg-gradient-to-t from-[#0077b6] to-[#00b4d8] rounded-t-lg h-44 shadow-lg shadow-[#00b4d8]/20"></div>
                  </div>
                </div>

                <div className="flex justify-between text-xs text-slate-300 pt-1 font-semibold">
                  <span>Growth Index: +145%</span>
                  <span className="text-[#00b4d8]">My Growing Stage</span>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ================= CONTACT PAGE ================= */}
        {activeTab === 'contact' && (
          <div className="space-y-10 animate-fadeIn max-w-4xl mx-auto">
            
            <div className="text-center space-y-4">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#00b4d8]/15 border border-[#00b4d8]/30 text-[#00b4d8] text-xs font-bold tracking-wide uppercase">
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Details</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Get In Touch With Me
              </h1>
              <p className="text-slate-300 text-base max-w-xl mx-auto">
                Reach out for graphic design work, social media management, or web application development inquiries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Contact Information Cards */}
              <div className="space-y-4 md:col-span-1">
                <a 
                  href="tel:+251953454037"
                  className="flex items-start space-x-4 p-5 rounded-2xl bg-[#0f172a] border border-[#1e293b] hover:border-[#00b4d8] transition-all group"
                >
                  <div className="p-3 rounded-xl bg-[#00b4d8]/15 text-[#00b4d8] group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300 font-medium">Phone Number</p>
                    <p className="text-sm font-bold text-white mt-0.5">+251 953 45 40 37</p>
                  </div>
                </a>

                <a 
                  href="mailto:yoniusc8537@gmail.com"
                  className="flex items-start space-x-4 p-5 rounded-2xl bg-[#0f172a] border border-[#1e293b] hover:border-[#00b4d8] transition-all group"
                >
                  <div className="p-3 rounded-xl bg-[#0077b6]/20 text-[#00b4d8] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300 font-medium">Email Address</p>
                    <p className="text-sm font-bold text-white mt-0.5 break-all">yoniusc8537@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://instagram.com/dyonasiyos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-5 rounded-2xl bg-[#0f172a] border border-[#1e293b] hover:border-[#00b4d8] transition-all group"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/15 text-cyan-300 group-hover:scale-110 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300 font-medium">Instagram Profile</p>
                    <p className="text-sm font-bold text-white mt-0.5">@dyonasiyos</p>
                  </div>
                </a>

                <a 
                  href="https://behance.net/Yonasgirma8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-5 rounded-2xl bg-[#0f172a] border border-[#1e293b] hover:border-[#00b4d8] transition-all group"
                >
                  <div className="p-3 rounded-xl bg-blue-500/15 text-blue-300 group-hover:scale-110 transition-transform">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300 font-medium">Behance Portfolio</p>
                    <p className="text-sm font-bold text-white mt-0.5">behance.net/Yonasgirma8</p>
                  </div>
                </a>
              </div>

              {/* Direct Message Form */}
              <div className="md:col-span-2 bg-[#0f172a] border border-[#1e293b] rounded-3xl p-8 shadow-xl">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                    <div className="w-16 h-16 rounded-full bg-[#00b4d8]/20 text-[#00b4d8] flex items-center justify-center animate-bounce">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                    <p className="text-slate-300 text-sm max-w-md">
                      Thank you for contacting me. I will reply to {contactForm.email} shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <h3 className="text-xl font-bold text-white">Send a Message</h3>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Your Name</label>
                      <input 
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-xl bg-[#070d1e] border border-[#1e293b] text-white focus:outline-none focus:border-[#00b4d8] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Your Email</label>
                      <input 
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#070d1e] border border-[#1e293b] text-white focus:outline-none focus:border-[#00b4d8] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Message or Work Requirements</label>
                      <textarea 
                        rows="4"
                        required
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="Discuss graphic design, social media strategy, or website project..."
                        className="w-full px-4 py-3 rounded-xl bg-[#070d1e] border border-[#1e293b] text-white focus:outline-none focus:border-[#00b4d8] transition-colors resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#00b4d8] hover:bg-[#0077b6] text-white font-bold text-sm shadow-lg shadow-[#00b4d8]/30 transition-all flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>

            </div>

          </div>
        )}

      </main>

      {/* POPUP PROJECT MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070d1e]/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative animate-scaleUp">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#070d1e]/80 text-white border border-[#1e293b] hover:border-[#00b4d8] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-64 bg-[#0a192f] relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://placehold.co/600x400/0f172a/00b4d8?text=Project+Preview'; }}
              />
              <div className="absolute bottom-4 left-4 bg-[#070d1e]/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-semibold text-[#00b4d8] border border-[#00b4d8]/30">
                {selectedProject.category}
              </div>
            </div>

            <div className="p-8 space-y-6">
              <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Tags & Services</span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-[#1e293b] text-xs font-semibold text-[#00b4d8] border border-[#00b4d8]/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#1e293b] flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#1e293b] hover:bg-slate-700 text-white text-sm font-semibold transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => { setSelectedProject(null); setActiveTab('contact'); }}
                  className="px-6 py-2.5 rounded-xl bg-[#00b4d8] hover:bg-[#0077b6] text-white text-sm font-bold shadow-lg shadow-[#00b4d8]/30 transition-all flex items-center space-x-2"
                >
                  <span>Inquire About Work</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-10 border-t border-[#1e293b]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10">
          
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-[#00b4d8] flex items-center justify-center text-white font-bold">
                Y
              </div>
              <span className="text-lg font-bold text-white">Yonas Girma</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Graphic Designer, Social Media Manager, and React Web App Developer creating dynamic and flexible digital experiences.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><button onClick={() => setActiveTab('home')} className="hover:text-[#00b4d8] transition-colors">Home Dashboard</button></li>
              <li><button onClick={() => setActiveTab('projects')} className="hover:text-[#00b4d8] transition-colors">My Projects</button></li>
              <li><button onClick={() => setActiveTab('about')} className="hover:text-[#00b4d8] transition-colors">About Me</button></li>
              <li><button onClick={() => setActiveTab('contact')} className="hover:text-[#00b4d8] transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Socials & Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="https://behance.net/Yonasgirma8" target="_blank" rel="noopener noreferrer" className="hover:text-[#00b4d8] transition-colors">Behance (behance.net/Yonasgirma8)</a></li>
              <li><a href="https://instagram.com/dyonasiyos" target="_blank" rel="noopener noreferrer" className="hover:text-[#00b4d8] transition-colors">Instagram (@dyonasiyos)</a></li>
              <li><a href="mailto:yoniusc8537@gmail.com" className="hover:text-[#00b4d8] transition-colors">Email (yoniusc8537@gmail.com)</a></li>
              <li><a href="tel:+251953454037" className="hover:text-[#00b4d8] transition-colors">Phone (+251953454037)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">My Growing Stage</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Continuously growing through high-impact graphic design, social media strategy, and modern web application development.
            </p>
            <div className="mt-4 inline-block px-3 py-1 rounded-full bg-[#00b4d8]/15 border border-[#00b4d8]/30 text-[#00b4d8] text-xs font-bold">
              My Growing Stage
            </div>
          </div>

        </div>

        <div className="py-6 border-t border-[#0f172a] text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; 2026 Yonas Girma. All rights reserved. My growing stage.</p>
          <div className="flex space-x-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </footer>

    </div>
  );
}