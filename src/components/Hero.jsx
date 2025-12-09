import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image Placeholder - In production use a high-quality video or image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[20s] hover:scale-100"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2070&auto=format&fit=crop")',
                }}
            >
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/40 to-navy-900/90" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="text-gold-400 tracking-[0.2em] uppercase font-medium mb-4 block text-sm md:text-base">
                        The Ultimate Luxury Experience
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
                        Dubai from the <span className="italic text-gold-400">Sea</span>
                    </h1>
                    <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                        Experience the coastline of Dubai in unmatched elegance.
                        Charter our premium fleet for private events, sunset cruises, and exclusive parties.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                        <button
                            onClick={() => document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-gold-400 text-navy-900 px-8 py-4 uppercase tracking-widest font-bold hover:bg-white hover:text-navy-900 transition-all duration-300 min-w-[200px]"
                        >
                            View Our Fleet
                        </button>
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="border border-white text-white px-8 py-4 uppercase tracking-widest font-bold hover:bg-white hover:text-navy-900 transition-all duration-300 min-w-[200px]"
                        >
                            Contact Concierge
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </div>
    );
};

export default Hero;
