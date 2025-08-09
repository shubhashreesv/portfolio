import React from 'react';
import {
  VscAccount,
  VscArchive,
  VscSettingsGear,
  VscProject,
  VscMail,
  VscVerified,
  VscBriefcase,
} from 'react-icons/vsc';

const navItems = [
  { icon: <VscAccount size={18} />, label: 'About', href: '#about' },
  { icon: <VscProject size={18} />, label: 'Skills', href: '#skills' },
    { icon: <VscBriefcase size={18} />, label: 'Experience', href: '#experience' },

  { icon: <VscArchive size={18} />, label: 'Projects', href: '#projects' },
    { icon: <VscVerified size={18} />, label: 'Achievements', href: '#achievements' },

  { icon: <VscMail size={18} />, label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  return (
    <div
      className="fixed top-1/2 left-4 -translate-y-1/2 z-50 bg-white/90 backdrop-blur-md px-4 py-6 rounded-2xl shadow-xl flex flex-col items-center gap-y-6"
    >
      {navItems.map((item, idx) => (
        <button
          key={idx}
          title={item.label}
          onClick={() => (window.location.href = item.href)}
          className="flex items-center justify-center p-3 hover:bg-gray-200 transition rounded-full group"
        >
          <span className="text-gray-700 group-hover:text-blue-600">{item.icon}</span>
        </button>
      ))}
    </div>
  );
};

export default Navbar;
