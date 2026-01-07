
import React from 'react';
import { BookOpen, Laptop, Rocket } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Technical Workshops",
      desc: "Deep-dive sessions on emerging technologies like AI, Blockchain, and Cloud computing led by industry experts.",
      bg: "bg-blue-50"
    },
    {
      icon: <Laptop className="w-8 h-8 text-indigo-600" />,
      title: "Internship Programs",
      desc: "Comprehensive 3-6 month internships (Free & Paid) focusing on real project experience and corporate readiness.",
      bg: "bg-indigo-50"
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-600" />,
      title: "Startup Development",
      desc: "Cost-effective software solutions for early-stage companies, from MVP design to full-scale production apps.",
      bg: "bg-purple-50"
    }
  ];

  return (
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Our Expertise</h2>
      <h3 className="text-4xl font-bold text-slate-900 mb-16">Customized solutions for students & startups.</h3>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div 
            key={i} 
            className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 text-left"
          >
            <div className={`w-16 h-16 ${s.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              {s.icon}
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">{s.title}</h4>
            <p className="text-slate-600 leading-relaxed mb-6">
              {s.desc}
            </p>
            <a href="#contact" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Learn More <Rocket className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
