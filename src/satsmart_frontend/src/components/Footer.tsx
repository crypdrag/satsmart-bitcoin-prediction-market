import { MessageCircle, Hash, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900/50 border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div>
            <h1 className="text-orange-500 font-bold text-xl" style={{ fontFamily: 'Lemonade Display, Impact, Arial Black, sans-serif' }}>
              SATSMART
            </h1>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-4 text-gray-300">
              <a href="/docs" className="hover:text-white transition-colors duration-200 font-medium">DOCS</a>
              <span className="text-gray-500">|</span>
              <a href="/support" className="hover:text-white transition-colors duration-200 font-medium">Support</a>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center space-x-4 text-gray-300">
              <a href="/privacy" className="hover:text-white transition-colors duration-200 font-medium">Privacy Policy</a>
              <span className="text-gray-500">|</span>
              <a href="/terms" className="hover:text-white transition-colors duration-200 font-medium">Terms</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg">
              <MessageCircle size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg">
              <Hash size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg">
              <Twitter size={20} />
            </a>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">© 2025 SatSmart. All rights reserved. Built on Bitcoin.</p>
        </div>
      </div>
    </footer>
  );
}