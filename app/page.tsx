'use client'

import React, { useState } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out" id="navbar">
  <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 shadow-lg transition-all duration-500" id="nav-container">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between transition-all duration-500 py-6" id="nav-content">
        {/* Logo */}
        <div className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-white tracking-tight transition-all duration-500" id="brand-text">
            Shinobi <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Canvas</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <a href="#home" className="px-4 py-2 text-white hover:text-pink-400 transition-colors duration-300 font-medium relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#services" className="px-4 py-2 text-white hover:text-pink-400 transition-colors duration-300 font-medium relative group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#about" className="px-4 py-2 text-white hover:text-pink-400 transition-colors duration-300 font-medium relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#pricing" className="px-4 py-2 text-white hover:text-pink-400 transition-colors duration-300 font-medium relative group">
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#contact" className="ml-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none group" id="mobile-menu-button">
          <div className="space-y-1.5">
            <span className="block w-7 h-0.5 bg-white group-hover:bg-pink-400 transition-colors duration-300"></span>
            <span className="block w-7 h-0.5 bg-white group-hover:bg-pink-400 transition-colors duration-300"></span>
            <span className="block w-7 h-0.5 bg-white group-hover:bg-pink-400 transition-colors duration-300"></span>
          </div>
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  <div className="md:hidden hidden bg-gradient-to-b from-purple-900 to-indigo-900 shadow-2xl" id="mobile-menu">
    <div className="px-4 pt-2 pb-6 space-y-2">
      <a href="#home" className="block px-4 py-3 text-white hover:bg-purple-800 rounded-lg transition-all duration-300 font-medium hover:translate-x-2 transform">
        Home
      </a>
      <a href="#services" className="block px-4 py-3 text-white hover:bg-purple-800 rounded-lg transition-all duration-300 font-medium hover:translate-x-2 transform">
        Services
      </a>
      <a href="#about" className="block px-4 py-3 text-white hover:bg-purple-800 rounded-lg transition-all duration-300 font-medium hover:translate-x-2 transform">
        About
      </a>
      <a href="#pricing" className="block px-4 py-3 text-white hover:bg-purple-800 rounded-lg transition-all duration-300 font-medium hover:translate-x-2 transform">
        Pricing
      </a>
      <a href="#contact" className="block mx-4 mt-4 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold text-center hover:shadow-lg hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300">
        Contact
      </a>
    </div>
  </div>

  <script dangerouslySetInnerHTML={{__html: `
    (function() {
      const navbar = document.getElementById('navbar');
      const navContainer = document.getElementById('nav-container');
      const navContent = document.getElementById('nav-content');
      const brandText = document.getElementById('brand-text');
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      
      let lastScroll = 0;
      
      window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
          navContent.classList.remove('py-6');
          navContent.classList.add('py-3');
          brandText.classList.remove('text-2xl');
          brandText.classList.add('text-xl');
          navContainer.classList.add('backdrop-blur-lg', 'bg-opacity-95');
        } else {
          navContent.classList.remove('py-3');
          navContent.classList.add('py-6');
          brandText.classList.remove('text-xl');
          brandText.classList.add('text-2xl');
          navContainer.classList.remove('backdrop-blur-lg', 'bg-opacity-95');
        }
        
        lastScroll = currentScroll;
      });
      
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    })();
  `}} />
</nav>
      
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-violet-800 to-pink-700 animate-gradient-x">
  <style jsx>{`
    @keyframes gradient-x {
      0%, 100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }
    @keyframes float {
      0%, 100% {
        transform: translateY(0px) rotate(0deg);
      }
      50% {
        transform: translateY(-20px) rotate(3deg);
      }
    }
    @keyframes float-delayed {
      0%, 100% {
        transform: translateY(0px) rotate(0deg);
      }
      50% {
        transform: translateY(-30px) rotate(-3deg);
      }
    }
    @keyframes pulse-glow {
      0%, 100% {
        opacity: 0.6;
        transform: scale(1);
      }
      50% {
        opacity: 0.8;
        transform: scale(1.05);
      }
    }
    .animate-gradient-x {
      background-size: 200% 200%;
      animation: gradient-x 15s ease infinite;
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    .animate-float-delayed {
      animation: float-delayed 8s ease-in-out infinite;
    }
    .animate-pulse-glow {
      animation: pulse-glow 4s ease-in-out infinite;
    }
  `}</style>
  
  {/* Floating Marketing Keywords */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-20 left-10 text-white/20 text-6xl font-bold font-heading animate-float">
      ROI
    </div>
    <div className="absolute top-40 right-20 text-white/15 text-5xl font-bold font-heading animate-float-delayed">
      BRAND
    </div>
    <div className="absolute bottom-32 left-20 text-white/20 text-7xl font-bold font-heading animate-float">
      ENGAGE
    </div>
    <div className="absolute top-1/3 right-1/4 text-white/10 text-8xl font-bold font-heading animate-float-delayed">
      CONVERT
    </div>
    <div className="absolute bottom-20 right-32 text-white/15 text-6xl font-bold font-heading animate-float">
      GROWTH
    </div>
  </div>

  {/* Gradient Orbs */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse-glow"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '2s'}}></div>
  
  {/* Main Content */}
  <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto text-center">
      {/* Logo/Brand */}
      <div className="mb-8 inline-block">
        <h1 className="text-white font-heading font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-2">
          Shinobi Canvas
        </h1>
        <div className="h-1 w-32 mx-auto bg-gradient-to-r from-pink-400 to-purple-300 rounded-full"></div>
      </div>

      {/* Headline */}
      <h2 className="text-white font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 drop-shadow-lg">
        Stealth Marketing That
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-200 to-violet-300">
          Strikes With Precision
        </span>
      </h2>

      {/* Description */}
      <p className="text-purple-100 font-body text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-md">
        Master the art of invisible influence. We craft data-driven campaigns that move silently through the market, capturing attention and converting audiences before competitors even know you're there.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <button className="group relative px-8 py-4 bg-white text-purple-900 font-heading font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
          <span className="relative z-10">Launch Your Campaign</span>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white absolute inset-0 flex items-center justify-center font-bold">
            Launch Your Campaign
          </span>
        </button>
        
        <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-heading font-semibold text-lg rounded-lg hover:bg-white hover:text-purple-900 transform hover:scale-105 transition-all duration-300 shadow-lg">
          View Case Studies
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-8 border-t border-white/20">
        <div className="text-center">
          <div className="text-white font-heading font-bold text-3xl sm:text-4xl mb-2">347%</div>
          <div className="text-purple-200 font-body text-sm sm:text-base">Avg ROI Increase</div>
        </div>
        <div className="text-center">
          <div className="text-white font-heading font-bold text-3xl sm:text-4xl mb-2">2.4M+</div>
          <div className="text-purple-200 font-body text-sm sm:text-base">Leads Generated</div>
        </div>
        <div className="text-center">
          <div className="text-white font-heading font-bold text-3xl sm:text-4xl mb-2">500+</div>
          <div className="text-purple-200 font-body text-sm sm:text-base">Brands Elevated</div>
        </div>
      </div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
      <div className="w-1 h-3 bg-white/50 rounded-full"></div>
    </div>
  </div>
</div>
      
      {/* Services Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 px-4 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-700"></div>
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Section Header */}
    <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
        Shinobi Canvas <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">Services</span>
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Unleash your brand's potential with our ninja-level marketing strategies
      </p>
    </div>

    {/* Hover Reveal Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      
      {/* Card 1 - Content Marketing */}
      <div className="group relative h-96 perspective-1000">
        <div className="relative h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
          {/* Front Face */}
          <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 p-8 flex flex-col items-center justify-center shadow-2xl border-2 border-orange-400">
            <div className="w-24 h-24 mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white text-center">Curated Art Gallery</h3>
            <div className="mt-4 text-white/80 text-sm">Hover to reveal</div>
          </div>
          
          {/* Back Face */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-slate-800 p-8 flex flex-col justify-between shadow-2xl border-2 border-orange-400">
            <div>
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Curated Art Gallery</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Extensive collection of high-quality Naruto fan art that drives engagement and builds community loyalty through visual storytelling.
              </p>
              <ul className="space-y-2 text-gray-400 text-xs">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">✦</span>
                  Premium content curation
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">✦</span>
                  Brand storytelling assets
                </li>
              </ul>
            </div>
            <button className="mt-4 w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Card 2 - Community Building */}
      <div className="group relative h-96 perspective-1000">
        <div className="relative h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
          {/* Front Face */}
          <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 p-8 flex flex-col items-center justify-center shadow-2xl border-2 border-purple-400">
            <div className="w-24 h-24 mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white text-center">Community Engagement</h3>
            <div className="mt-4 text-white/80 text-sm">Hover to reveal</div>
          </div>
          
          {/* Back Face */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-slate-800 p-8 flex flex-col justify-between shadow-2xl border-2 border-purple-400">
            <div>
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Community Engagement</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Active community of talented artists and passionate fans creating authentic brand ambassadors and user-generated content.
              </p>
              <ul className="space-y-2 text-gray-400 text-xs">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✦</span>
                  Social media amplification
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✦</span>
                  Influencer partnerships
                </li>
              </ul>
            </div>
            <button className="mt-4 w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Card 3 - Campaign Management */}
      <div className="group relative h-96 perspective-1000">
        <div className="relative h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
          {/* Front Face */}
          <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 p-8 flex flex-col items-center justify-center shadow-2xl border-2 border-blue-400">
            <div className="w-24 h-24 mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white text-center">Contest Campaigns</h3>
            <div className="mt-4 text-white/80 text-sm">Hover to reveal</div>
          </div>
          
          {/* Back Face */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-slate-800 p-8 flex flex-col justify-between shadow-2xl border-2 border-blue-400">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Contest Campaigns</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Regular art challenges and contests with prizes that boost engagement, increase reach, and generate viral marketing opportunities.
              </p>
              <ul className="space-y-2 text-gray-400 text-xs">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✦</span>
                  Viral campaign strategy
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✦</span>
                  Performance analytics
                </li>
              </ul>
            </div>
            <button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Card 4 - E-commerce Integration */}
      <div className="group relative h-96 perspective-1000">
        <div className="relative h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
          {/* Front Face */}
          <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-8 flex flex-col items-center justify-center shadow-2xl border-2 border-emerald-400">
            <div className="w-24 h-24 mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white text-center">Print Commerce</h3>
            <div className="mt-4 text-white/80 text-sm">Hover to reveal</div>
          </div>
          
          {/* Back Face */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-slate-800 p-8 flex flex-col justify-between shadow-2xl border-2 border-emerald-400">
            <div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">Print Commerce</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Print shop and commission platform creating revenue streams while providing mobile-optimized experiences for maximum conversion.
              </p>
              <ul className="space-y-2 text-gray-400 text-xs">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✦</span>
                  E-commerce optimization
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✦</span>
                  Mobile-first design
                </li>
              </ul>
            </div>
            <button className="mt-4 w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow">
              Learn More
            </button>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="mt-20 text-center">
      <p className="text-gray-300 mb-6 text-lg">
        Safe, moderated platform with free resources and tutorials for aspiring artists
      </p>
      <button className="bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
        Start Your Shinobi Canvas Journey
      </button>
    </div>
  </div>

  <style jsx>{`
    .perspective-1000 {
      perspective: 1000px;
    }
    .transform-style-3d {
      transform-style: preserve-3d;
    }
    .backface-hidden {
      backface-visibility: hidden;
    }
    .rotate-y-180 {
      transform: rotateY(180deg);
    }
    .group:hover .group-hover\\:rotate-y-180 {
      transform: rotateY(180deg);
    }
  `}</style>
</section>
      
      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
        What Marketing Leaders Say
      </h2>
      <p className="text-xl text-slate-600">
        Trusted by innovative marketers worldwide
      </p>
    </div>

    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      {/* Testimonial 1 */}
      <div className="break-inside-avoid bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 border border-slate-200">
        <div className="flex items-center mb-6">
          <img
            src="https://i.pravatar.cc/150?img=47"
            alt="Sarah Mitchell"
            className="w-16 h-16 rounded-full object-cover border-4 border-indigo-100"
          />
          <div className="ml-4">
            <h3 className="font-bold text-lg text-slate-900">Sarah Mitchell</h3>
            <p className="text-sm text-slate-600">CMO at BrandForge</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-700 leading-relaxed italic">
          &quot;Shinobi Canvas transformed our entire campaign workflow. The analytics dashboard alone saved us 15 hours per week. Our conversion rates jumped 47% in just two months!&quot;
        </p>
      </div>

      {/* Testimonial 2 */}
      <div className="break-inside-avoid bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 border border-slate-200">
        <div className="flex items-center mb-6">
          <img
            src="https://i.pravatar.cc/150?img=33"
            alt="Marcus Chen"
            className="w-16 h-16 rounded-full object-cover border-4 border-purple-100"
          />
          <div className="ml-4">
            <h3 className="font-bold text-lg text-slate-900">Marcus Chen</h3>
            <p className="text-sm text-slate-600">Digital Marketing Director at Velocity Media</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-700 leading-relaxed italic">
          &quot;We&apos;ve tried every marketing platform out there, but Shinobi Canvas is in a league of its own. The A/B testing features are incredibly intuitive, and the ROI tracking is phenomenal. Our clients are seeing results they never thought possible.&quot;
        </p>
        <div className="mt-6 pt-6 border-t border-slate-200">
          <p className="text-sm text-slate-600 font-semibold">
            📈 Result: 3.2x increase in client retention
          </p>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="break-inside-avoid bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 border border-slate-200">
        <div className="flex items-center mb-6">
          <img
            src="https://i.pravatar.cc/150?img=20"
            alt="Elena Rodriguez"
            className="w-16 h-16 rounded-full object-cover border-4 border-pink-100"
          />
          <div className="ml-4">
            <h3 className="font-bold text-lg text-slate-900">Elena Rodriguez</h3>
            <p className="text-sm text-slate-600">Head of Growth at TechStart Solutions</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-700 leading-relaxed italic">
          &quot;Shinobi Canvas is a game-changer for growth marketing. The automation features let us scale campaigns without scaling our team. Best investment we&apos;ve made this year!&quot;
        </p>
      </div>

      {/* Testimonial 4 */}
      <div className="break-inside-avoid bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 border border-slate-200">
        <div className="flex items-center mb-6">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="David Park"
            className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
          />
          <div className="ml-4">
            <h3 className="font-bold text-lg text-slate-900">David Park</h3>
            <p className="text-sm text-slate-600">VP Marketing at CloudNine Inc</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-700 leading-relaxed italic">
          &quot;The customer segmentation tools in Shinobi Canvas are absolutely brilliant. We&apos;re now able to personalize campaigns at scale and our engagement metrics have skyrocketed. The support team is also incredibly responsive.&quot;
        </p>
        <div className="mt-6 pt-6 border-t border-slate-200">
          <p className="text-sm text-slate-600 font-semibold">
            ⚡ Result: 89% improvement in email open rates
          </p>
        </div>
      </div>

      {/* Testimonial 5 */}
      <div className="break-inside-avoid bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 border border-slate-200">
        <div className="flex items-center mb-6">
          <img
            src="https://i.pravatar.cc/150?img=45"
            alt="Jennifer Walsh"
            className="w-16 h-16 rounded-full object-cover border-4 border-green-100"
          />
          <div className="ml-4">
            <h3 className="font-bold text-lg text-slate-900">Jennifer Walsh</h3>
            <p className="text-sm text-slate-600">Marketing Manager at Innovate Labs</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-700 leading-relaxed italic">
          &quot;I was skeptical at first, but Shinobi Canvas exceeded all expectations. The multi-channel campaign management is seamless, and the real-time reporting gives us the agility we need in today&apos;s fast-paced market.&quot;
        </p>
      </div>

      {/* Testimonial 6 */}
      <div className="break-inside-avoid bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 border border-slate-200">
        <div className="flex items-center mb-6">
          <img
            src="https://i.pravatar.cc/150?img=68"
            alt="Alex Thompson"
            className="w-16 h-16 rounded-full object-cover border-4 border-orange-100"
          />
          <div className="ml-4">
            <h3 className="font-bold text-lg text-slate-900">Alex Thompson</h3>
            <p className="text-sm text-slate-600">Founder & CEO at GrowthHackers Co</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-700 leading-relaxed italic">
          &quot;Shinobi Canvas has become the backbone of our marketing operations. The integration capabilities are outstanding, and it plays perfectly with our existing tech stack. Couldn&apos;t imagine running campaigns without it now.&quot;
        </p>
        <div className="mt-6 pt-6 border-t border-slate-200">
          <p className="text-sm text-slate-600 font-semibold">
            💰 Result: $2.4M in additional revenue attributed
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
      
      {/* Pricing Section - Stripe Integration */}
      <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
  {/* Animated Background Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
  </div>

  <div className="relative max-w-7xl mx-auto">
    {/* Header Section */}
    <div className="text-center mb-16">
      <div className="inline-block mb-4">
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text text-sm font-bold uppercase tracking-wider">
          Marketing Excellence
        </span>
      </div>
      <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
        Shinobi Canvas <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">Pro</span>
      </h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Transform your marketing campaigns with ninja-level precision and creativity
      </p>
    </div>

    {/* Tiered Gradient Pricing Card */}
    <div className="relative max-w-4xl mx-auto">
      {/* Gradient Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl blur-2xl opacity-75 animate-pulse"></div>
      
      {/* Main Pricing Container */}
      <div className="relative bg-gradient-to-br from-slate-800/90 via-purple-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-purple-500/20">
        
        {/* Top Tier - Price Section */}
        <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 px-8 py-12 text-center">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative">
            <div className="inline-flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-2xl text-white/80 font-semibold line-through">$149</span>
              <span className="text-7xl font-black text-white">$79</span>
              <span className="text-2xl text-white/90 font-medium">/month</span>
            </div>
            <p className="text-white/90 text-lg font-medium">Limited Time Offer - Save 47%</p>
          </div>
        </div>

        {/* Middle Tier - Features Section */}
        <div className="px-8 py-10 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Feature 1 */}
            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Advanced Analytics Dashboard</h4>
                <p className="text-gray-400 text-sm">Real-time campaign performance tracking with AI-powered insights</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Unlimited Design Templates</h4>
                <p className="text-gray-400 text-sm">1000+ professionally crafted marketing templates ready to deploy</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Multi-Channel Distribution</h4>
                <p className="text-gray-400 text-sm">Deploy across social media, email, and web simultaneously</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">AI Content Generator</h4>
                <p className="text-gray-400 text-sm">Generate compelling copy and visuals with advanced AI technology</p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Automated Scheduling</h4>
                <p className="text-gray-400 text-sm">Set it and forget it with intelligent campaign automation</p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Priority Support & Training</h4>
                <p className="text-gray-400 text-sm">24/7 expert support with dedicated onboarding sessions</p>
              </div>
            </div>
          </div>

          {/* Bonus Section */}
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-6 border border-purple-500/30 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase">
                Bonus Included
              </span>
            </div>
            <p className="text-white font-semibold text-lg">
              🎁 Free access to Shinobi Canvas Marketing Masterclass ($499 value)
            </p>
          </div>
        </div>

        {/* Bottom Tier - CTA Section */}
        <div className="px-8 py-10 bg-gradient-to-b from-slate-900/50 to-black/50">
          <button
            onClick={() => window.location.href = 'https://buy.stripe.com/test_5kQ7sN0IX2Pqalc8WP0VO00'}
            className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-500 hover:via-pink-500 hover:to-purple-500 text-white text-xl font-bold py-6 px-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 mb-6 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-3