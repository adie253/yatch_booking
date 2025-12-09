import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    const location = useLocation();
    const isAdmin = location.pathname.startsWith('/admin');

    return (
        <div className="min-h-screen flex flex-col bg-sand-100">
            {!isAdmin && <Navbar />}
            <main className="flex-grow">
                {children}
            </main>
            {!isAdmin && <Footer />}
        </div>
    );
};

export default Layout;
