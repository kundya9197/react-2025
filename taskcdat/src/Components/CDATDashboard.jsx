import React, { useState } from 'react';
import {
    Users,
    UserCheck,
    UserX,
    TrendingUp,
    Bell,
    Settings,
    LogOut,
    Menu,
    X,
} from 'lucide-react';
import AttendanceChart from './AttendanceChart';

export default function CDATDashboard() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsLoggedIn(true);
        }, 1500);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setFormData({ username: '', password: '' });
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleLogin();
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-8 text-center">
                            <div className="w-26 h-26 bg-white rounded-full p-0 mx-auto mb-4 flex items-center padding-0  justify-center shadow-lg">
                                <span className=" font-bold text-blue-600"><img src="/Images/cdatLogo.png" alt="" /></span>
                            </div>
                            <h1 className="text-2xl font-bold text-white mb-2">Admin Login</h1>
                        </div>
                        <div className="px-8 py-8 space-y-6">
                            <div>
                                <label htmlFor="username" className="block text-sm text-left font-semibold text-gray-700 mb-2">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    onKeyPress={handleKeyPress}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-gray-700"
                                    placeholder="Enter your username"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm text-left font-semibold text-gray-700 mb-2">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    onKeyPress={handleKeyPress}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-gray-700"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                            <button
                                onClick={handleLogin}
                                disabled={isLoading}
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg disabled:opacity-50"
                            >
                                {isLoading ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                        Logging in...
                                    </div>
                                ) : (
                                    'Login'
                                )}
                            </button>
                            <div>
                                <span><a href="google.com" className='text-blue-700'>Forgot password?</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-600">© 2025 CDAT Application. All rights reserved.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50">
            {/* Sidebar */}
            <aside className={`fixed lg:relative inset-y-0 left-0 z-50 w-64 bg-gray-100 shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0`}>
                <div className="flex items-center justify-between h-16 px-6 bg-gradient-to-r from-blue-600 to-indigo-600">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <span className="text-lg font-bold text-blue-600">C</span>
                        </div>
                        <span className="ml-2 text-white font-semibold text-lg">CDAT App</span>
                    </div>
                    <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white">
                        <X size={20} />
                    </button>
                </div>
                <nav className="mt-8 space-y-1">
                    <a href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-800 transition-all duration-200">
                        <TrendingUp className="mr-3" size={20} /> Overview
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-800 transition-all duration-200">
                        <Users className="mr-3" size={20} /> Users
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-800 transition-all duration-200">
                        <Bell className="mr-3" size={20} /> Notifications
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-800 transition-all duration-200">
                        <Settings className="mr-3" size={20} /> Settings
                    </a>
                </nav>
            </aside>

            {/* Main */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-white shadow-sm border-b border-gray-200">
                    <div className="flex items-center justify-between px-6 py-4">
                        <div className="flex items-center">
                            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-500 mr-4">
                                <Menu size={24} />
                            </button>
                            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="hidden md:block text-sm text-gray-600">Welcome back, {formData.username || 'User'}!</span>
                            <button onClick={handleLogout} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-200 rounded-lg">
                                <LogOut className="mr-2" size={16} /> Logout
                            </button>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="p-6 space-y-6">
                    {/* Summary Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <StatBox title="Total" value="100" bgColor="bg-blue-500" />
                        <StatBox title="Present" value="97" bgColor="bg-green-500" />
                        <StatBox title="Absent" value="3" bgColor="bg-red-500" />
                    </div>

                    {/* Table */}
                    <table className="w-full table-auto text-left border border-collapse shadow-sm mt-10">
                        <thead>
                            <tr className="bg-gradient-to-r from-indigo-200 to-blue-200 text-gray-800">
                                <th className="border px-4 py-2">S. No.</th>
                                <th className="border px-4 py-2">Total</th>
                                <th className="border px-4 py-2">Present</th>
                                <th className="border px-4 py-2">Absent</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-100 transition-colors duration-300">
                                <td className="border px-4 py-2">1</td>
                                <td className="border px-4 py-2">100</td>
                                <td className="border px-4 py-2">97</td>
                                <td className="border px-4 py-2">3</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Bar Chart */}
                    <div className="bg-gray-300 p-6 rounded shadow">
                        <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-5"> Attendance Chart</h3>
                        <AttendanceChart  />
                    </div>
                </main>
            </div>
        </div>
    );
}

function StatBox({ title, value, bgColor }) {
    return (
        <div className={`text-white p-6 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-center ${bgColor}`}>
            <h3 className="text-md font-semibold mb-1">{title}</h3>
            <p className="text-3xl font-bold">{value}</p>
        </div>
    );
}
