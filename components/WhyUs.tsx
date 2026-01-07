
import React from 'react';
import { ShieldCheck, Zap, DollarSign, Globe } from 'lucide-react';

const WhyUs: React.FC = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      title: "Industry Mentors",
      desc: "Learn directly from seniors working at top Silicon Valley tech giants."
    },
    {
      icon: <Zap className="w-10 h-10 text-amber-500" />,
      title: "Real-world Projects",
      desc: "No more dummy apps. Work on actual products for real startups."
    },
    {
      icon: <DollarSign className="w-10 h-10 text-green-600" />,
      title: "Affordable Pricing",
      desc: "World-class engineering and training that doesn't break the bank."
    },
    {
      icon: <Globe className="w-10 h-10 text-purple-600" />,
      title: "Fast Delivery",
      desc: "Agile methodologies ensuring your product hits the market at lightning speed."
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Why NexusTech</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">The competitive edge your career and startup needs.</h3>
          
          <div className="grid sm:grid-cols-2 gap-8">
            {benefits.map((b, i) => (
              <div key={i}>
                <div className="mb-4">{b.icon}</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{b.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="bg-blue-600 rounded-3xl overflow-hidden shadow-2xl rotate-2">
            <img 
              src="https://picsum.photos/seed/office/600/800" 
              alt="NexusTech Hub" 
              className="opacity-90 -rotate-2 scale-110 hover:rotate-0 hover:scale-100 transition-all duration-700"
            />
          </div>
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-100 rounded-full -z-10 animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-indigo-100 rounded-full -z-10 animate-pulse delay-700"></div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
