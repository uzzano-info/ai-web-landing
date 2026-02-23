import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';

const GNB = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: '진짜 내 소유란?', href: '#ownership' },
        { name: '서비스 비교', href: '#comparison' },
        { name: '맞춤형 포트폴리오', href: '#audience' },
        { name: '제작 비용', href: '#pricing' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/50 py-3 shadow-sm'
                        : 'bg-transparent py-5'
                    }`}
            >
                <div className="container mx-auto px-4 md:px-6 max-w-7xl flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black text-xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                            <Rocket className="w-6 h-6" />
                        </div>
                        <span className={`text-xl font-black tracking-tight ${isScrolled ? 'text-gray-900' : 'text-gray-900 md:text-white'}`}>
                            Antigravity
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex flex-1 justify-center">
                        <ul className="flex items-center gap-8 bg-white/10 backdrop-blur-sm px-6 py-2.5 rounded-full border border-gray-200/20">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className={`text-sm font-semibold transition-colors hover:text-blue-500 ${isScrolled ? 'text-gray-600' : 'text-gray-200'
                                            }`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <a href="#contact" className="bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95">
                            무료 상담 예약
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-4 pb-6 flex flex-col md:hidden"
                    >
                        <nav className="flex-1 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-2xl font-bold text-gray-900"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                        <div className="mt-8">
                            <a
                                href="#contact"
                                className="w-full flex justify-center py-4 bg-blue-600 text-white font-bold rounded-2xl text-lg shadow-lg shadow-blue-500/30 active:scale-95 transition-transform"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                무료 상담 예약하기
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default GNB;
