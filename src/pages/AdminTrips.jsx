import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Anchor, LogOut, Check, X, Clock, MapPin, User, Phone, Mail, ArrowLeft, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminTrips = () => {
    const navigate = useNavigate();
    const [bookings, setBookings] = useState([]);
    const [activeTab, setActiveTab] = useState('pending');

    useEffect(() => {
        const isAdmin = sessionStorage.getItem('isAdmin');
        if (!isAdmin) {
            navigate('/admin');
            return;
        }

        const storedBookings = JSON.parse(localStorage.getItem('trip_bookings') || '[]');
        const sortedBookings = storedBookings.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        setBookings(sortedBookings);
    }, [navigate]);

    const handleLogout = () => {
        sessionStorage.removeItem('isAdmin');
        navigate('/admin');
    };

    const updateStatus = (id, newStatus) => {
        const updatedBookings = bookings.map(booking =>
            booking.id === id ? { ...booking, status: newStatus } : booking
        );
        setBookings(updatedBookings);
        localStorage.setItem('trip_bookings', JSON.stringify(updatedBookings));
    };

    const filteredBookings = activeTab === 'pending'
        ? bookings.filter(b => b.status === 'pending')
        : bookings.filter(b => b.status !== 'pending');

    return (
        <div className="min-h-screen bg-sand-100">
            {/* Top Bar */}
            <header className="bg-navy-900 text-white p-4 shadow-lg sticky top-0 z-40">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Link to="/admin/dashboard" className="text-gray-400 hover:text-white transition-colors">
                            <ArrowLeft size={24} />
                        </Link>
                        <div className="flex items-center gap-2 font-serif text-xl font-bold tracking-wider text-gold-400">
                            <MapPin className="w-6 h-6" />
                            <span>TRIP BOOKINGS</span>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-gold-400 transition-colors"
                    >
                        <LogOut size={16} /> Logout
                    </button>
                </div>
            </header>

            <main className="max-w-7xl mx-auto p-6">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-2">Total Trips</h3>
                        <p className="text-3xl font-serif text-navy-900">{bookings.length}</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-gold-500 text-xs uppercase tracking-widest font-bold mb-2">Pending</h3>
                        <p className="text-3xl font-serif text-navy-900">{bookings.filter(b => b.status === 'pending').length}</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-green-500 text-xs uppercase tracking-widest font-bold mb-2">Confirmed</h3>
                        <p className="text-3xl font-serif text-navy-900">{bookings.filter(b => b.status === 'accepted').length}</p>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-6 border-b border-gray-200">
                    <button
                        onClick={() => setActiveTab('pending')}
                        className={`pb-4 px-2 text-sm uppercase tracking-widest font-bold transition-all ${activeTab === 'pending'
                            ? 'border-b-2 border-navy-900 text-navy-900'
                            : 'text-gray-400 hover:text-navy-900'
                            }`}
                    >
                        Pending Requests
                    </button>
                    <button
                        onClick={() => setActiveTab('history')}
                        className={`pb-4 px-2 text-sm uppercase tracking-widest font-bold transition-all ${activeTab === 'history'
                            ? 'border-b-2 border-navy-900 text-navy-900'
                            : 'text-gray-400 hover:text-navy-900'
                            }`}
                    >
                        History
                    </button>
                </div>

                {/* List */}
                <div className="space-y-4">
                    {filteredBookings.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                            <p className="text-gray-400">No trip bookings found in this section.</p>
                        </div>
                    ) : (
                        filteredBookings.map((booking) => (
                            <motion.div
                                key={booking.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`bg-white rounded-xl shadow-sm border overflow-hidden ${booking.status === 'pending' ? 'border-gold-400/50' : 'border-gray-100'
                                    }`}
                            >
                                <div className="p-6">
                                    <div className="flex flex-col lg:flex-row gap-8">
                                        {/* Trip Info */}
                                        <div className="lg:w-1/4 min-w-[200px]">
                                            <h4 className="font-serif text-xl text-navy-900 leading-none mb-2">{booking.itemDetails.name}</h4>
                                            <div className="flex items-center gap-1 text-gray-400 text-xs mt-2">
                                                <Clock size={12} /> {booking.bookingDetails.duration} • <User size={12} /> {booking.bookingDetails.guests || '-'} Guests
                                            </div>
                                            <div className="flex items-center gap-1 text-gray-400 text-xs mt-1">
                                                <Calendar size={12} /> {booking.bookingDetails.date}
                                            </div>
                                        </div>

                                        {/* User Info */}
                                        <div className="lg:w-1/3 border-t lg:border-t-0 lg:border-l border-gray-100 pt-4 lg:pt-0 lg:pl-8">
                                            <h5 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-3">Client Details</h5>
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-3">
                                                    <User size={16} className="text-gray-300" />
                                                    <span className="text-navy-900 font-medium">{booking.userDetails.name}</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <Mail size={16} className="text-gray-300" />
                                                    <span className="text-gray-600 text-sm">{booking.userDetails.email}</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <Phone size={16} className="text-gray-300" />
                                                    <span className="text-gray-600 text-sm">{booking.userDetails.phone}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Status & Actions */}
                                        <div className="lg:w-1/3 flex flex-col justify-between items-end border-t lg:border-t-0 lg:border-l border-gray-100 pt-4 lg:pt-0 lg:pl-8">
                                            <div className="text-right mb-4">
                                                {/* <h5 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-1">Est. Price</h5> */}
                                                {/* <p className="text-xl font-serif text-navy-900">{booking.bookingDetails.price}</p> */}
                                            </div>

                                            {booking.status === 'pending' ? (
                                                <div className="flex gap-2 w-full lg:w-auto">
                                                    <button
                                                        onClick={() => updateStatus(booking.id, 'rejected')}
                                                        className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 text-sm font-bold transition-colors"
                                                    >
                                                        <X size={16} /> Reject
                                                    </button>
                                                    <button
                                                        onClick={() => updateStatus(booking.id, 'accepted')}
                                                        className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-6 py-2 bg-navy-900 text-white rounded-lg hover:bg-gold-400 hover:text-navy-900 text-sm font-bold transition-colors"
                                                    >
                                                        <Check size={16} /> Accept
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider flex items-center gap-2 ${booking.status === 'accepted'
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-red-100 text-red-700'
                                                    }`}>
                                                    {booking.status === 'accepted' ? <Check size={16} /> : <X size={16} />}
                                                    {booking.status}
                                                </div>
                                            )}

                                            <p className="text-xs text-gray-300 mt-2">
                                                Submitted: {new Date(booking.timestamp).toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </main>
        </div>
    );
};

export default AdminTrips;
