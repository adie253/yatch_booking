import React from 'react';
import { Users, Ruler, Fuel, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

const YachtCard = ({ yacht }) => {
    return (
        <Link to={`/yacht/${yacht.id}`} className="block">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group bg-white hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer h-full flex flex-col "
            >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden shrink-0">
                    <img
                        src={yacht.image}
                        alt={yacht.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-navy-900 text-gold-400 px-3 py-1 text-sm font-semibold tracking-wide uppercase">
                        {yacht.category}
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-2xl font-serif text-navy-900 mb-1">{yacht.name}</h3>
                            <p className="text-gray-500 text-sm tracking-widest uppercase">{yacht.location}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-gold-500 font-bold text-xl">{yacht.price}</p>
                            <p className="text-gray-400 text-xs uppercase">per hour</p>
                        </div>
                    </div>

                    {/* Specs */}
                    <div className="flex gap-6 border-y border-gray-100 py-4 mb-6">
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <Ruler size={16} className="text-gold-400" />
                            <span>{yacht.length}ft</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <Users size={16} className="text-gold-400" />
                            <span>{yacht.capacity} Guests</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <Fuel size={16} className="text-gold-400" />
                            <span>{yacht.speed} kts</span>
                        </div>
                    </div>

                    <button className="w-full bg-navy-900 text-white py-4 uppercase tracking-widest text-sm hover:bg-gold-400 hover:text-navy-900 transition-colors flex items-center justify-center gap-2 group-hover:gap-4 transition-all mt-auto">
                        View Details <ArrowRight size={16} />
                    </button>
                </div>
            </motion.div>
        </Link>
    );
};

export default YachtCard;
