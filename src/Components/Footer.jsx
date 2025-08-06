import React from 'react';

const Footer = () => {
  return (
    <footer className="w-screen bg-gray-900 text-white py-6 px-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left: App Name */}
        <h2 className="text-xl font-semibold text-white">
          Civic Tracker
        </h2>

        {/* Middle: Social Links */}
        <div className="flex gap-4 text-sm">
          <a
            href="https://www.linkedin.com/in/md-muddassir-akhtar/"


            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/MuddassirAkhtar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            GitHub
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-xs text-gray-400">
          © {new Date().getFullYear()} Civic App. Built by Muddassir Akhtar.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
