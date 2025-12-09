import React from 'react';
import { Clock, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TripCard = ({ trip }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col h-full"
        >
            <div className="bg-navy-900 text-white h-48 relative overflow-hidden group">
                <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-400/20 rounded-bl-full -mr-4 -mt-4 z-10"></div>
                <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent w-full">
                    <h3 className="font-serif text-xl relative z-10">{trip.title}</h3>
                    <div className="flex items-center gap-2 text-gold-400 mt-1 font-medium relative z-10 text-sm">
                        <Clock size={14} />
                        <span>{trip.duration}</span>
                    </div>
                </div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-600 mb-6 text-sm line-clamp-2">{trip.description}</p>

                <div className="flex-grow space-y-2 mb-6">
                    {trip.stops.slice(0, 3).map((stop, index) => (
                        <div key={index} className="flex items-start gap-2 text-xs text-navy-900/80">
                            <div className="mt-1 min-w-[14px]">
                                <MapPin size={12} className="text-gold-400" />
                            </div>
                            <span className="truncate">{stop}</span>
                        </div>
                    ))}
                    {trip.stops.length > 3 && (
                        <p className="text-xs text-gray-400 pl-6">+ {trip.stops.length - 3} more stops</p>
                    )}
                </div>

                <div className="mt-auto">
                    <Link
                        to={`/trip/${trip.id}`}
                        className="w-full group flex items-center justify-center gap-2 bg-sand-100 text-navy-900 py-3 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-navy-900 hover:text-white transition-all duration-300"
                    >
                        View Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default TripCard;
