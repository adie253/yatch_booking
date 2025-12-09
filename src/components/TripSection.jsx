import React from 'react';
import { trips } from '../data/trips';
import TripCard from './TripCard';
import { CreditCard, Banknote } from 'lucide-react';

const TripSection = () => {
    return (
        <section id="trips" className="py-24 bg-sand-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-gold-400 uppercase tracking-widest font-bold mb-4">Discover Dubai</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-navy-900 mb-6">Curated Itineraries</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Choose from our carefully designed trip options to experience the best of Dubai's coastline and landmarks.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {trips.map((trip) => (
                        <TripCard key={trip.id} trip={trip} />
                    ))}
                </div>

                {/* Payment Info */}
                <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm max-w-3xl mx-auto text-center">
                    <h3 className="font-serif text-2xl text-navy-900 mb-6">Payment Options</h3>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                <Banknote size={24} />
                            </div>
                            <div className="text-left">
                                <span className="block font-bold text-navy-900">Cash Payment</span>
                                <span className="text-sm text-gray-500">Accepted on arrival</span>
                            </div>
                        </div>
                        <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                <CreditCard size={24} />
                            </div>
                            <div className="text-left">
                                <span className="block font-bold text-navy-900">Card Payment</span>
                                <span className="text-sm text-gray-500">Service charge/tax applicable</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TripSection;
