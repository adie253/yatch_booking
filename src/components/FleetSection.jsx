import React, { useState } from 'react';
import YachtCard from './YachtCard';
import { yachts } from '../data/yachts';

const FleetSection = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Super Yacht', 'Luxury', 'Catamaran', 'Sport'];

    const filteredYachts = filter === 'All'
        ? yachts
        : yachts.filter(y => y.category === filter);

    return (
        <section id="fleet" className="py-24 bg-sand-100 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-gold-400 tracking-[0.2em] uppercase font-medium mb-3 block text-sm">
                        Our Collection
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-navy-900 mb-6">
                        The Elite Fleet
                    </h2>
                    <div className="h-[2px] w-24 bg-gold-400 mx-auto" />
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-14">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-8 py-3 uppercase tracking-widest text-xs transition-all duration-300 ${filter === cat
                                    ? 'bg-navy-900 text-white'
                                    : 'bg-white text-navy-900 hover:bg-gold-400/20'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredYachts.map((yacht) => (
                        <YachtCard key={yacht.id} yacht={yacht} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FleetSection;
