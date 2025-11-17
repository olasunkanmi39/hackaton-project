import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Sidebar() {
  const location = useLocation();
  const { user } = useAuth();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: '🏠', roles: ['all'] },
    { name: 'Patient Management', href: '/patients', icon: '👥', roles: ['admin', 'nurse', 'doctor'] },
    { name: 'Patient Wallet', href: '/wallet', icon: '💰', roles: ['admin', 'finance', 'patient', 'paypoint'] },
    { name: 'Doctor Dashboard', href: '/doctor', icon: '👨‍⚕️', roles: ['doctor', 'admin'] },
    { name: 'Laboratory & Radiology', href: '/lab', icon: '🔬', roles: ['doctor', 'lab_technician', 'admin'] },
    { name: 'Pharmacy', href: '/pharmacy', icon: '💊', roles: ['pharmacist', 'admin'] },
    { name: 'Admin Panel', href: '/admin', icon: '⚙️', roles: ['admin'] },
    { name: 'Discharge Module', href: '/discharge', icon: '📋', roles: ['admin', 'nurse'] },
  ];

  const filteredNavigation = navigation.filter(item => 
    item.roles.includes('all') || item.roles.includes(user?.role)
  );

  return (
    <div className="bg-gray-800 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        {filteredNavigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 rounded-lg ${
              location.pathname === item.href ? 'bg-gray-900' : ''
            }`}
          >
            <span className="mr-3 text-xl">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
export default Sidebar;