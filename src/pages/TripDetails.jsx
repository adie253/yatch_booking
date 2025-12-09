import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Clock, CheckCircle, MapPin, Calendar, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { trips } from '../data/trips';
import BookingModal from '../components/BookingModal';

const TripDetails = () => {
    const { id } = useParams();
    const trip = trips.find(t => t.id === parseInt(id));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [bookingDate, setBookingDate] = useState('');
    const [guests, setGuests] = useState('2');

    if (!trip) {
        return (
            <div className="min-h-screen bg-sand-100 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="font-serif text-3xl text-navy-900 mb-4">Trip Not Found</h2>
                    <Link to="/" className="text-gold-400 hover:text-navy-900 transition-colors">Return to Home</Link>
                </div>
            </div>
        );
    }

    // Add storageKey to the trip object for the modal
    const tripForModal = { ...trip, storageKey: 'trip_bookings' };

    return (
        <div className="bg-sand-50 min-h-screen pt-20">
            {/* Split Header */}
            <div className="flex flex-col lg:flex-row h-[70vh] relative">
                <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center relative z-10 bg-navy-900 text-white">
                    <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-gold-400 transition-colors mb-8">
                        <ChevronLeft size={20} /> Back to Trips
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="font-serif text-4xl lg:text-6xl mb-4">{trip.title}</h1>
                        <p className="text-lg text-white/80 mb-8 max-w-md">{trip.description}</p>
                        <div className="flex gap-6 text-gold-400">
                            <div className="flex items-center gap-2">
                                <Clock />
                                <span className="text-lg">{trip.duration}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="lg:w-1/2 h-full absolute lg:relative inset-0 w-full">
                    <img
                        src={trip.image}
                        alt={trip.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-navy-900/40 lg:hidden"></div>
                </div>
            </div>

            <div className="bg-sand-100 py-16 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Itinerary */}
                    <div>
                        <h2 className="font-serif text-3xl text-navy-900 mb-8">Your Itinerary</h2>
                        <div className="space-y-6 relative ml-4 pl-8 border-l border-gray-200">
                            {trip.stops.map((stop, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <div className="absolute -left-[39px] top-1 w-5 h-5 bg-gold-400 rounded-full border-4 border-sand-100"></div>
                                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <MapPin className="text-gold-400 shrink-0 mt-1" />
                                        <p className="text-navy-900 font-medium">{stop}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Booking Section */}
                    <div>
                        <div className="bg-white p-8 rounded-2xl shadow-xl sticky top-24">
                            <h2 className="font-serif text-2xl text-navy-900 mb-6">Book This Experience</h2>

                            <div className="space-y-5 mb-8">
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">Date</label>
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
                                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">Guests</label>
                                    <div className="relative">
                                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-400 w-5 h-5" />
                                        <select
                                            value={guests}
                                            onChange={(e) => setGuests(e.target.value)}
                                            className="w-full bg-sand-100 border-none rounded-lg py-4 pl-12 pr-4 focus:ring-2 focus:ring-gold-400 text-navy-900 font-medium appearance-none"
                                        >
                                            {[...Array(20)].map((_, i) => (
                                                <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Person' : 'People'}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8 pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-3 text-gray-600">
                                    <CheckCircle size={20} className="text-green-500" />
                                    <span>Instant Confirmation</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <CheckCircle size={20} className="text-green-500" />
                                    <span>Flexible cancellation</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <CheckCircle size={20} className="text-green-500" />
                                    <span>Professional Captain & Crew</span>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full bg-navy-900 text-white py-4 rounded-lg uppercase tracking-widest font-bold hover:bg-gold-400 hover:text-navy-900 transition-all duration-300 shadow-lg"
                            >
                                Request Booking
                            </button>
                            <p className="text-xs text-center text-gray-400 mt-4">No payment required today</p>
                        </div>
                    </div>
                </div>
            </div>

            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                yacht={tripForModal}
                date={bookingDate}
                duration={trip.duration}
                guests={guests}
                price="Contact for Price"
            />
        </div>
    );
};

export default TripDetails;
