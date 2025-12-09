import React from 'react';
import { Utensils, Music, Waves, Car, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Utensils className="w-8 h-8" />,
        title: 'Fine Dining',
        description: 'World-class chefs preparing gourmet cuisine tailored to your preferences, from sunset canapés to multi-course sit-down dinners.',
    },
    {
        icon: <Music className="w-8 h-8" />,
        title: 'Private Events',
        description: 'Curated experiences for weddings, corporate gatherings, and birthday celebrations with professional event planning support.',
    },
    {
        icon: <Waves className="w-8 h-8" />,
        title: 'Water Sports',
        description: 'Adrenaline-pumping activities including jet skis, seabobs, and e-foils, available upon request for your charter.',
    },
    {
        icon: <Car className="w-8 h-8" />,
        title: 'Luxury Transfer',
        description: 'Seamless door-to-dock chauffeur service in premium vehicles like Rolls Royce or Mercedes-Maybach.',
    },
];

const ServicesSection = () => {
    return (
        <section id="services" className="py-24 bg-navy-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-gold-400 tracking-[0.2em] uppercase font-medium mb-3 block text-sm">
                            Beyond Sailing
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                            Premium Concierge Services
                        </h2>
                    </div>
                    {/* <button className="hidden md:flex items-center gap-2 border-b border-gold-400 text-gold-400 pb-1 hover:text-white hover:border-white transition-all uppercase tracking-widest text-xs font-bold">
                        View All Services <ArrowRight size={16} />
                    </button> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 border border-white/10 hover:border-gold-400/50 hover:bg-white/5 transition-all duration-500 rounded-2xl"
                        >
                            <div className="mb-6 text-gold-400 group-hover:scale-110 transition-transform duration-500 bg-white/5 w-16 h-16 rounded-full flex items-center justify-center">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-serif mb-4 group-hover:text-gold-400 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed font-light">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button className="inline-flex items-center gap-2 border-b border-gold-400 text-gold-400 pb-1 hover:text-white hover:border-white transition-all uppercase tracking-widest text-xs font-bold">
                        View All Services <ArrowRight size={16} />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;
