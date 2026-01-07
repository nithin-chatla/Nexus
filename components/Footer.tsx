
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">N</div>
              <span className="text-xl font-extrabold tracking-tight">Nexus<span className="text-blue-600">Tech</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Engineering the future by empowering talent and enabling innovation.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><a href="#about" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Programs</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><a href="#internships" className="hover:text-blue-600 transition-colors">Internships</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Workshops</a></li>
              <li><a href="#tech" className="hover:text-blue-600 transition-colors">Tech Stack</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Certifications</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Newsletter</h4>
            <p className="text-sm text-slate-600 mb-4">Stay updated with the latest tech news.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none w-full focus:border-blue-500" />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© {currentYear} NexusTech Engineering. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
