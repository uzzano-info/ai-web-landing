import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
        { name: '맞춤 개발 혜택', href: '#benefits' },
        { name: '비용 안내', href: '#pricing' },
        { name: '자주 묻는 질문', href: '#faq' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center max-w-6xl">
                {/* Logo */}
                <a href="#" className={`text-2xl font-black tracking-tight ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                    AI 맞춤 웹제작.
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex gap-6">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className={`text-sm font-semibold transition-colors hover:text-blue-500 ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href="#contact" className="bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95">
                        무료 견적/상담 예약
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-900 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className={isScrolled ? 'text-gray-900' : 'text-white'} /> : <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-800 font-semibold py-3 px-2 border-b border-gray-50 flex items-center justify-between"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="bg-blue-600 text-center text-white px-5 py-4 rounded-xl font-bold mt-4 shadow-lg shadow-blue-500/30"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        무료 견적/상담 시작
                    </a>
                </div>
            )}
        </header>
    );
};

export default GNB;
