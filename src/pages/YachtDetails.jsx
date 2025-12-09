import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Ruler, Fuel, Star, CheckCircle, Calendar, Clock, MapPin } from 'lucide-react';
import { yachts } from '../data/yachts';
import BookingModal from '../components/BookingModal';

const YachtDetails = () => {
    const { id } = useParams();
    const yacht = yachts.find(y => y.id === parseInt(id));
    const [bookingDate, setBookingDate] = useState('');
    const [duration, setDuration] = useState('4');
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!yacht) return <div className="pt-32 text-center">Yacht not found</div>;

    return (
        <div className="pt-20 bg-sand-100 min-h-screen">
            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                yacht={yacht}
                date={bookingDate}
                duration={duration}
                price={`$${(parseInt(yacht.price.replace(/[^0-9]/g, '')) * parseInt(duration)).toLocaleString()}`}
            />

            {/* Scroll to top */}
            <div className="max-w-7xl mx-auto px-6 py-6">
                <Link to="/" className="inline-flex items-center gap-2 text-navy-900 hover:text-gold-400 transition-colors uppercase tracking-widest text-xs font-bold mb-8">
                    <ArrowLeft size={16} /> Back to Fleet
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content - Left Col */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[500px]"
                        >
                            <img src={yacht.image} alt={yacht.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        </motion.div>

                        {/* Title & Info */}
                        <div>
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                                <div>
                                    <span className="text-gold-400 tracking-widest uppercase text-sm font-semibold">{yacht.category}</span>
                                    <h1 className="text-4xl md:text-5xl font-serif text-navy-900 mt-2">{yacht.name}</h1>
                                </div>
                                <div className="flex items-center gap-2 text-navy-800">
                                    <MapPin className="text-gold-400" />
                                    <span className="font-medium">{yacht.location}</span>
                                </div>
                            </div>

                            {/* Quick Specs */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="text-center p-2">
                                    <Ruler className="w-6 h-6 text-gold-400 mx-auto mb-2" />
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Length</p>
                                    <p className="font-bold text-navy-900">{yacht.length} ft</p>
                                </div>
                                <div className="text-center p-2 border-l border-gray-100">
                                    <Users className="w-6 h-6 text-gold-400 mx-auto mb-2" />
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Guests</p>
                                    <p className="font-bold text-navy-900">{yacht.capacity}</p>
                                </div>
                                <div className="text-center p-2 border-l border-gray-100">
                                    <Fuel className="w-6 h-6 text-gold-400 mx-auto mb-2" />
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Speed</p>
                                    <p className="font-bold text-navy-900">{yacht.speed} kts</p>
                                </div>
                                <div className="text-center p-2 border-l border-gray-100">
                                    <Star className="w-6 h-6 text-gold-400 mx-auto mb-2" />
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">Crew</p>
                                    <p className="font-bold text-navy-900">{yacht.specs.crew}</p>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-2xl font-serif text-navy-900 mb-4">About this Yacht</h3>
                            <p className="text-gray-600 leading-relaxed text-lg font-light">{yacht.description}</p>
                        </div>

                        {/* Features */}
                        <div>
                            <h3 className="text-2xl font-serif text-navy-900 mb-6">Key Features</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {yacht.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100">
                                        <CheckCircle className="text-gold-400 w-5 h-5 flex-shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - Booking Form */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                            <div className="text-center mb-8 pb-8 border-b border-gray-100">
                                <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Starting from</p>
                                <p className="text-4xl font-serif text-navy-900">{yacht.price} <span className="text-lg text-gray-400 font-sans">/ hr</span></p>
                            </div>

                            <form className="space-y-6">
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">Select Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-400 w-5 h-5" />
                                        <input
                                            type="date"
                                            value={bookingDate}
                                            onChange={(e) => setBookingDate(e.target.value)}
                                            className="w-full bg-sand-100 border-none rounded-lg py-4 pl-12 pr-4 focus:ring-2 focus:ring-gold-400 text-navy-900 font-medium"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">Duration (Hours)</label>
                                    <div className="relative">
                                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-400 w-5 h-5" />
                                        <select
                                            value={duration}
                                            onChange={(e) => setDuration(e.target.value)}
                                            className="w-full bg-sand-100 border-none rounded-lg py-4 pl-12 pr-4 focus:ring-2 focus:ring-gold-400 text-navy-900 font-medium appearance-none"
                                        >
                                            <option value="2">2 Hours</option>
                                            <option value="3">3 Hours</option>
                                            <option value="4">4 Hours (Standard)</option>
                                            <option value="6">6 Hours</option>
                                            <option value="8">8 Hours (Full Day)</option>
                                        </select>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full bg-navy-900 text-white py-4 rounded-lg uppercase tracking-widest font-bold hover:bg-gold-400 hover:text-navy-900 transition-all duration-300 shadow-lg mt-4"
                                >
                                    Request Verification
                                </button>

                                <p className="text-xs text-center text-gray-400 mt-4 leading-relaxed">
                                    *Prices may vary based on season and selected extras. A concierge will contact you to confirm details.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YachtDetails;
