
import React from 'react';
import { ArrowRight, Sparkles, Code, GraduationCap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-blue-50 rounded-full blur-3xl opacity-60 translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-indigo-50 rounded-full blur-3xl opacity-60 -translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6 animate-bounce">
            <Sparkles className="w-4 h-4" />
            Empowering the Next Generation of Engineers
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
            Building Skills. <span className="gradient-text">Building Startups.</span> Building Careers.
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            From world-class technical workshops to industry-leading internships, we bridge the gap between education and career-ready expertise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#internships" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 group"
            >
              Apply for Internship
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              Hire Our Team
            </a>
          </div>

          {/* Trust badges / Stats */}
          <div className="mt-16 pt-16 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">500+</div>
              <div className="text-sm text-slate-500 font-medium">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">40+</div>
              <div className="text-sm text-slate-500 font-medium">Startups Powered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">15+</div>
              <div className="text-sm text-slate-500 font-medium">Tech Workshops</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">95%</div>
              <div className="text-sm text-slate-500 font-medium">Hiring Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
