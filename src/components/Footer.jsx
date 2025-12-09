import React from 'react';
import { Anchor, Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-navy-900 text-white pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 font-serif text-2xl font-bold tracking-wider text-gold-400">
                            <Anchor className="w-8 h-8" />
                            <span>LUXE YACHTS</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed font-light">
                            Premier yacht charter services in Dubai. Experience the epitome of luxury and exclusivity on the Arabian Gulf.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 border border-white/20 hover:border-gold-400 hover:text-gold-400 transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="p-2 border border-white/20 hover:border-gold-400 hover:text-gold-400 transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="p-2 border border-white/20 hover:border-gold-400 hover:text-gold-400 transition-colors">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="p-2 border border-white/20 hover:border-gold-400 hover:text-gold-400 transition-colors">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-serif text-xl mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-gold-400 transition-colors">About Us</a></li>
                            <li><a href="#fleet" className="hover:text-gold-400 transition-colors">Our Fleet</a></li>
                            <li><a href="#services" className="hover:text-gold-400 transition-colors">Services</a></li>
                            <li><a href="#" className="hover:text-gold-400 transition-colors">Booking Terms</a></li>
                        </ul>
                    </div>

                    {/* Contact 1 */}
                    <div>
                        <h4 className="font-serif text-xl mb-6">Contact Us</h4>
                        <div className="space-y-4 text-gray-400">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-gold-400 shrink-0 mt-1" size={20} />
                                <span>Marina Plaza, Level 28<br />Dubai Marina, Dubai, UAE</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="text-gold-400 shrink-0" size={20} />
                                <span>+971 50 123 4567</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="text-gold-400 shrink-0" size={20} />
                                <span>bookings@luxeyachts.ae</span>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-serif text-xl mb-6">Newsletter</h4>
                        <p className="text-gray-400 mb-6 font-light">Subscribe to receive exclusive offers and news.</p>
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="YOUR EMAIL"
                                className="w-full bg-navy-800 border border-white/10 px-4 py-3 focus:outline-none focus:border-gold-400 text-sm tracking-widest placeholder-gray-500"
                            />
                            <button className="w-full bg-gold-400 text-navy-900 py-3 uppercase tracking-widest font-bold text-sm hover:bg-white transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
                    <p>© 2024 Luxe Yachts. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
