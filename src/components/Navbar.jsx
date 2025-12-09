import React, { useState, useEffect } from 'react';
import { Menu, X, Anchor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'The Fleet', href: '#fleet' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
        // { name: 'Book Now', href: '#fleet' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">
                {/* Logo */}
                <div className="flex items-center gap-2 font-serif text-2xl font-bold tracking-wider text-gold-400">
                    <Anchor className="w-8 h-8" />
                    <span>LUXE YACHTS</span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm uppercase tracking-widest text-gold-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={() => document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' })}
                        className="border border-gold-400 text-gold-400 px-6 py-2 uppercase text-xs tracking-widest hover:bg-gold-400 hover:text-navy-900 transition-all duration-300"
                    >
                        Book Now
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gold-400"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-navy-900 border-t border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-xl"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-white text-lg font-serif hover:text-gold-400"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="w-full bg-gold-400 text-navy-900 py-3 uppercase tracking-widest font-bold mt-2"
                        >
                            Book Now
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
