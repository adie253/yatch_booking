import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Anchor, Lock, User } from 'lucide-react';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Hardcoded credentials for demo purpose
        if (username === 'admin' && password === 'admin123') {
            sessionStorage.setItem('isAdmin', 'true');
            navigate('/admin/dashboard');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="min-h-screen bg-navy-900 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-8 md:p-12 w-full max-w-md shadow-2xl">
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-sand-100 rounded-full flex items-center justify-center text-gold-400">
                            <Anchor size={32} />
                        </div>
                    </div>
                    <h2 className="font-serif text-3xl text-navy-900 mb-2">Admin Portal</h2>
                    <p className="text-gray-500 text-sm">Sign in to manage bookings</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center border border-red-100">
                            {error}
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Username</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-sand-100 border-none rounded-lg focus:ring-2 focus:ring-gold-400 text-navy-900 font-medium"
                                placeholder="Enter username"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-sand-100 border-none rounded-lg focus:ring-2 focus:ring-gold-400 text-navy-900 font-medium"
                                placeholder="Enter password"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-navy-900 text-white py-4 rounded-lg uppercase tracking-widest font-bold hover:bg-gold-400 hover:text-navy-900 transition-all duration-300 shadow-lg"
                    >
                        Login
                    </button>

                    <div className="text-center mt-4">
                        <a href="/" className="text-gray-400 text-xs hover:text-navy-900 transition-colors">
                            Back to Home
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
