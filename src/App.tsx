import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router';

import Index from './components/Index';
import Login from './components/Login';
import Register from './components/Register';

import './App.css';

function App() {
    return (
        <>
            <nav className="flex justify-center px-4 space-x-4">
                <NavLink to="/">Index</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
            </nav>
            <Routes>
                <Route index element={<Index />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Routes>
        </>
    );
}

export default App;
