import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// User Pages
import Home from '../pages/user/Home';
import GemstoneFamilies from '../pages/admin/Data/GemstoneFamilies';

// Auth Pages (placeholder)
const Login = () => <div>Login Page</div>;
const Register = () => <div>Register Page</div>;

// Valuation Pages (placeholder)
const ValuationWizard = () => <div>Valuation Wizard</div>;

// Profile Pages (placeholder)
const MyCollection = () => <div>My Collection</div>;

// Admin Pages (placeholder)
const AdminDashboard = () => <div>Admin Dashboard</div>;

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* User routes */}
      <Route path="/valuation" element={<ValuationWizard />} />
      <Route path="/profile/collection" element={<MyCollection />} />

      {/* Admin routes */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/data/gemstone-families" element={<GemstoneFamilies />} />

      {/* 404 redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;