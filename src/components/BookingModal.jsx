import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Mail, Phone, CheckCircle } from 'lucide-react';

const BookingModal = ({ isOpen, onClose, yacht, date, duration, price }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = `Yacht Charter Request: ${yacht.name}`;
        const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

--- Booking Details ---
Date: ${date}
Duration: ${duration} Hours
Estimated Price: ${price ? price : 'To be confirmed'}

--- Yacht Details ---
Yacht: ${yacht.name}
Category: ${yacht.category}
Location: ${yacht.location}
Guests: ${yacht.capacity}
Length: ${yacht.length} ft
`.trim();

        const mailtoLink = `mailto:bookings@luxeyachts.ae?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Save to localStorage
        const newBooking = {
            id: Date.now(),
            status: 'pending',
            yachtDetails: {
                name: yacht.name,
                category: yacht.category,
                location: yacht.location,
                image: yacht.image
            },
            userDetails: {
                name: formData.name,
                email: formData.email,
                phone: formData.phone
            },
            bookingDetails: {
                date: date,
                duration: duration,
                price: price
            },
            timestamp: new Date().toISOString()
        };

        const existingBookings = JSON.parse(localStorage.getItem('boat_bookings') || '[]');
        localStorage.setItem('boat_bookings', JSON.stringify([...existingBookings, newBooking]));

        window.location.href = mailtoLink;
        setIsSubmitted(true);
        // Optional: Auto-close after a few seconds
        setTimeout(() => {
            handleClose();
        }, 5000);
    };

    const handleClose = () => {
        setIsSubmitted(false);
        onClose();
        setFormData({ name: '', email: '', phone: '' });
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-navy-900/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none p-4"
                    >
                        <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[90vh]">
                            {/* Header */}
                            <div className="bg-navy-900 p-6 flex justify-between items-center text-white shrink-0">
                                <div>
                                    <h3 className="font-serif text-2xl">{isSubmitted ? 'Request Sent' : 'Confirm Request'}</h3>
                                    <p className="text-gold-400 text-sm tracking-wide">{yacht.name}</p>
                                </div>
                                <button onClick={handleClose} className="text-white/50 hover:text-white transition-colors">
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-6 overflow-y-auto">
                                {isSubmitted ? (
                                    <div className="text-center py-8">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                            className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                                        >
                                            <CheckCircle size={40} />
                                        </motion.div>
                                        <h4 className="font-serif text-2xl text-navy-900 mb-2">Thank You!</h4>
                                        <p className="text-gray-500 mb-8 leading-relaxed">
                                            Thanks for submitting your request.<br />
                                            We'll reach out to you shortly to finalize your booking.
                                        </p>
                                        <button
                                            onClick={handleClose}
                                            className="bg-navy-900 text-white px-8 py-3 rounded-lg uppercase tracking-widest font-bold hover:bg-gold-400 hover:text-navy-900 transition-all w-full"
                                        >
                                            Close
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        {/* Summary */}
                                        <div className="bg-sand-100 rounded-xl p-4 mb-6 grid grid-cols-2 gap-4">
                                            <div className="flex items-center gap-3">
                                                <Calendar className="text-gold-400 w-5 h-5" />
                                                <div>
                                                    <p className="text-xs uppercase text-gray-500 font-bold">Date</p>
                                                    <p className="text-navy-900 font-medium">{date || 'Not Selected'}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Clock className="text-gold-400 w-5 h-5" />
                                                <div>
                                                    <p className="text-xs uppercase text-gray-500 font-bold">Duration</p>
                                                    <p className="text-navy-900 font-medium">{duration} Hours</p>
                                                </div>
                                            </div>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                                <div className="relative">
                                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        required
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all"
                                                        placeholder="John Doe"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                                <div className="relative">
                                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all"
                                                        placeholder="john@example.com"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                                                <div className="relative">
                                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        required
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all"
                                                        placeholder="+971 50 000 0000"
                                                    />
                                                </div>
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full bg-navy-900 text-white py-4 rounded-lg uppercase tracking-widest font-bold hover:bg-gold-400 hover:text-navy-900 transition-all duration-300 shadow-lg mt-6"
                                            >
                                                Send Application
                                            </button>
                                        </form>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
